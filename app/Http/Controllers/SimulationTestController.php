<?php

namespace App\Http\Controllers;

use App\Models\SimulationQuestion;
use App\Models\SimulationTest;
use App\Models\SimulationTestUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SimulationTestController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('Simulation/SimulationTestInfo', []);
  }

  public function testPage(Request $request, $testId)
  {
    if ($request->filled('questionId') && $request->filled('answerId') && $request->filled('testId')) {
      // Answer validation logic
      $questionId = $request->input('questionId');
      $answerId = $request->input('answerId');
      $testId = $request->input('testId');
      $index = $request->input('index');

      $question = SimulationQuestion::where('id', $questionId)->first();
      $result = $question->correct_answer_id == $answerId ? 'pass' : 'fail';

      // Retrieve the shuffled questions from the session
      $shuffledQuestions = session()->get("simulation_shuffled_questions_$testId");

      // Increment the index for the next question
      $nextIndex = $index + 1;
      $nextQuestion = $nextIndex < count($shuffledQuestions) ? $shuffledQuestions[$nextIndex] : null;

      //$simulationTest = SimulationTest::findOrFail($testId);

      // $nextQuestion = SimulationQuestion::where('test_id', $testId)
      //   ->where('id', '>', $questionId)
      //   ->with('answers')
      //   ->select('id', 'text', 'test_id')
      //   ->first();

      return Inertia::render('Simulation/SimulationTestPage', [
        'index' => $index,
        'testId' => $testId,
        'nextQuestion' => $nextQuestion,
        'result' => $result,
        'selectedQuestionId' => $questionId,
        'selectedAnswerId' => $answerId,
        'correctAnswerId' => $question->correct_answer_id,
        'explanation' => $question->explanation
      ]);
    } else {

      // Initial page logic
      $test = SimulationTest::findOrFail($testId);

      // Get all questions, shuffle them, and store in session
      $questions = SimulationQuestion::where('test_id', $test->id)
        ->with('answers')
        ->select('id', 'text', 'test_id')
        ->inRandomOrder()
        ->get();

      session()->put("simulation_shuffled_questions_$test->id", $questions);

      // Start with the first question in the shuffled list
      $question = $questions->first();

      // $question = SimulationQuestion::where('test_id', $test->id)
      //   ->with('answers')
      //   ->select('id', 'text', 'test_id')
      //   ->first();

      return Inertia::render('Simulation/SimulationTestPage', [
        'testId' => $testId,
        'question' => $question,
        'index' => 0 // Initialize the index at 0 for the first question
      ]);
    }
  }

  public function testResult(Request $request)
  {
    // Authenticate the user
    $user = Auth::user();


    // Extract data from the request
    $questionResults = $request->input('questionResults');

    $timeTaken = $request->input('timeTaken');
    $totalTimeTaken = $timeTaken['minutes'] * 60 + $timeTaken['seconds'];
    $testId = $request->input('testId');
    $totalQuestions = count($questionResults);
    $totalCorrect = 0;
    $totalWrong = 0;


    // Process each question result
    foreach ($questionResults as $result) {
      if ($result['result'] === 'pass') {
        $totalCorrect++;
      } elseif ($result['result'] === 'fail') {
        $totalWrong++;
      }
    }

    // Calculate the percentage of correct answers
    $percentage = round(($totalCorrect / $totalQuestions) * 100);

    // Determine the test status based on correct answers
    $status = $totalCorrect >= 15 ? 'completed' : 'failed';

    // Update the user's test data in the database without detaching previous data
    $user->simulationTests()->syncWithoutDetaching([
      $testId => [
        'status' => $status,
        'total_correct' => $totalCorrect,
        'total_wrong' => $totalWrong,
        'total_time_taken' => $totalTimeTaken,
        'test_data' => json_encode($questionResults),
      ]
    ]);

    // Return the results view
    return Inertia::render('Simulation/SimulationResult', [
      'result' => [
        'totalQuestions' => $totalQuestions,
        'totalCorrect' => $totalCorrect,
        'totalWrong' => $totalWrong,
        'percentage' => $percentage,
      ],
      'totalTimeTaken' => $timeTaken,
      'testId' => $testId,
      'questionResults' => $questionResults,
    ]);
  }
}
