<?php

namespace App\Http\Controllers;

use App\Models\SimulationQuestion;
use App\Models\SimulationTest;
use App\Models\SimulationTestUser;
use Illuminate\Http\Request;
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
    $user = auth()->user();
    if ($request->filled('questionId') && $request->filled('answerId') && $request->filled('testId')) {
      // Answer validation logic
      $questionId = $request->input('questionId');
      $answerId = $request->input('answerId');
      $testId = $request->input('testId');
      $index = $request->input('index');

      $question = SimulationQuestion::findOrFail($questionId);
      $result = $question->correct_answer_id == $answerId ? 'pass' : 'fail';

      $nextQuestion = SimulationQuestion::where('test_id', $testId)
        ->where('id', '>', $questionId)
        ->with('answers')
        ->select('id', 'text', 'test_id')
        ->first();

      // Update or create the simulation test user record
      $simulationTestUser = SimulationTestUser::updateOrCreate(
        ['user_id' => $user->id, 'test_id' => $testId],
        ['status' => 'in_progress']
      );

      return Inertia::render('Simulation/SimulationTestPage', [
        'index' => $index,
        'testId' => $testId,
        'nextQuestion' => $nextQuestion,
        'result' => $result,
        'selectedQuestionId' => $questionId,
        'selectedAnswerId' => $answerId,
        'explanation' => $question->explanation
      ]);
    } else {

      // Initial page logic
      $test = SimulationTest::findOrFail($testId);



      $question = SimulationQuestion::where('test_id', $test->id)
        ->with('answers')
        ->select('id', 'text', 'test_id')
        ->first();

      return Inertia::render('Simulation/SimulationTestPage', [
        'testId' => $testId,
        'question' => $question
      ]);
    }
  }

  public function testResult()
  {
  }
}
