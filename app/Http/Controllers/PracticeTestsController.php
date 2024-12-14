<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use App\Models\Question;
use App\Models\Test;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PracticeTestsController extends Controller
{
  public function index(Request $request)
  {
    $user = Auth::user();

    $chapters = Chapter::where('step', 2)
      ->with('tests.users')
      ->get();

    foreach ($chapters as $chapter) {
      $allCompleted = true;
      foreach ($chapter->tests as $test) {
        $userTest = $test->users->where('id', $user->id)->first();
        if ($userTest) {
          $test->status = $userTest->pivot->status;
        } else {
          $test->status = 'not_attempted';
          $allCompleted = false; // If any test is not attempted, the chapter is not fully completed
        }

        if ($test->status !== 'completed') {
          $allCompleted = false; // If any test is not completed, the chapter is not fully completed
        }

        unset($test->users); // Optional: Remove users relationship data to keep the response clean
      }
      $chapter->allTestsCompleted = $allCompleted;
    }

    return Inertia::render('PracticeTest/Index', [
      'chapters' => $chapters,
      'collapsedFromBackend' => $request->has('collapsed') ? $request->collapsed : false
    ]);
  }

  public function testList(Request $request, $chapterId, $testId = null)
  {

    $user = Auth::user();
    $accorditionIndex = $request->has('accorditionIndex') ? $request->accorditionIndex : 0;

    $chapters = Chapter::where('step', 2)
      ->with('tests.users')
      ->get();

    foreach ($chapters as $MyChapter) {
      $allCompleted = true;
      foreach ($MyChapter->tests as $MyTest) {
        $userTest = $MyTest->users->where('id', $user->id)->first();
        if ($userTest) {
          $MyTest->status = $userTest->pivot->status;
        } else {
          $MyTest->status = 'not_attempted';
          $allCompleted = false; // If any test is not attempted, the chapter is not fully completed
        }

        if ($MyTest->status !== 'completed') {
          $allCompleted = false; // If any test is not completed, the chapter is not fully completed
        }

        unset($MyTest->users); // Optional: Remove users relationship data to keep the response clean
      }
      $MyChapter->allTestsCompleted = $allCompleted;
    }

    $currentChapter = Chapter::findOrFail($chapterId);

    $testId = $testId ?? 1;

    $test = Test::findOrFail($testId);


    $previousTest = Test::where('chapter_id', $chapterId)
      ->where('id', '<', $testId)
      ->orderBy('id', 'desc')
      ->first();

    $nextTest = Test::where('chapter_id', $chapterId)
      ->where('id', '>', $testId)
      ->first();

    $latestResult = $user->tests()
      ->where('test_id', $testId) // Filter by the specific test
      ->orderBy('pivot_updated_at', 'desc') // Order by the latest attempt
      ->first();

    $latestScore =  '-';
    if ($latestResult) {
      $totalCorrect = $latestResult->pivot->total_correct ?? 0; // Get total correct answers
      $latestScore = round(($totalCorrect / 15) * 100) . '%'; // Calculate the percentage score
    }
    return Inertia::render('PracticeTest/Info', [
      'chapters' => $chapters,
      'test' => $test,
      'currentChapter' => $currentChapter,
      'chapterId' => $chapterId,
      'previousTestId' => $previousTest ? $previousTest->id : null,
      'nextTestId' => $nextTest ? $nextTest->id : null,
      'latestScore' => $latestScore,
      'accorditionIndex' => $accorditionIndex,
    ]);
  }


  public function testStart(Request $request, $chapterId, $testId = null)
  {
    $user = Auth::user();

    $chapters = Chapter::where('step', 2)
      ->with('tests.users')
      ->get();

    foreach ($chapters as $chapter) {
      $allCompleted = true;
      foreach ($chapter->tests as $test) {
        $userTest = $test->users->where('id', $user->id)->first();
        if ($userTest) {
          $test->status = $userTest->pivot->status;
        } else {
          $test->status = 'not_attempted';
          $allCompleted = false; // If any test is not attempted, the chapter is not fully completed
        }

        if ($test->status !== 'completed') {
          $allCompleted = false; // If any test is not completed, the chapter is not fully completed
        }

        unset($test->users); // Optional: Remove users relationship data to keep the response clean
      }
      $chapter->allTestsCompleted = $allCompleted;
    }


    if ($request->filled('questionId') && $request->filled('answerId') && $request->filled('testId')) {
      // Answer validation logic
      $questionId = $request->input('questionId');
      $answerId = $request->input('answerId');
      $testId = $request->input('testId');
      $index = $request->input('index');



      $question = Question::where('id', $questionId)->first();
      $result = $question->correct_answer_id == $answerId ? 'pass' : 'fail';

      // Retrieve the shuffled questions from the session
      $shuffledQuestions = session()->get("practice_shuffled_questions_$testId");

      // Increment the index for the next question
      $nextIndex = $index + 1;
      $nextQuestion = $nextIndex < count($shuffledQuestions) ? $shuffledQuestions[$nextIndex] : null;

      $test = Test::findOrFail($testId);

      // $nextQuestion = Question::where('test_id', $testId)
      //   ->where('id', '>', $questionId)
      //   ->with('answers')
      //   ->select('id', 'text', 'test_id')
      //   ->first();

      return Inertia::render('PracticeTest/TestStart', [
        'index' => $index,
        'chapterId' => $chapterId,
        'nextQuestion' => $nextQuestion,
        'result' => $result,
        'selectedQuestionId' => $questionId,
        'selectedAnswerId' => $answerId,
        'correctAnswerId' => $question->correct_answer_id,
        'explanation' => $question->explanation,
        'chapters' => $chapters,
        'test' => $test,
        'collapsedFromBackend' => $request->has('collapsed') ? $request->collapsed : false
      ]);
    } else {

      $test = Test::findOrFail($testId);

      // Get all questions, shuffle them, and store in session
      $questions = Question::where('test_id', $test->id)
        ->with('answers')
        ->select('id', 'text', 'test_id')
        ->inRandomOrder()
        ->get();

      session()->put("practice_shuffled_questions_$test->id", $questions);

      // Start with the first question in the shuffled list
      $question = $questions->first();


      // $question = Question::where('test_id', $test->id)
      //   ->with('answers')
      //   ->select('id', 'text', 'test_id')
      //   ->first();

      return Inertia::render('PracticeTest/TestStart', [
        'chapterId' => $chapterId,
        'question' => $question,
        'index' => 0, // Initialize the index at 0 for the first question
        'chapters' => $chapters,
        'test' => $test,
        'collapsedFromBackend' => $request->has('collapsed') ? $request->collapsed : false
      ]);
    }
  }

  public function testResult(Request $request)
  {

    $user = Auth::user();
    $chapters = Chapter::where('step', 2)
      ->with('tests.users')
      ->get();

    foreach ($chapters as $chapter) {
      $allCompleted = true;
      foreach ($chapter->tests as $test) {
        $userTest = $test->users->where('id', $user->id)->first();
        if ($userTest) {
          $test->status = $userTest->pivot->status;
        } else {
          $test->status = 'not_attempted';
          $allCompleted = false; // If any test is not attempted, the chapter is not fully completed
        }

        if ($test->status !== 'completed') {
          $allCompleted = false; // If any test is not completed, the chapter is not fully completed
        }

        unset($test->users); // Optional: Remove users relationship data to keep the response clean
      }
      $chapter->allTestsCompleted = $allCompleted;
    }

    $questionResults = $request->input('questionResults');

    $timeTaken = $request->input('timeTaken');
    $totalTimeTaken = $timeTaken['minutes'] * 60 + $timeTaken['seconds'];
    $testId = $request->input('testId');
    $chapterId = $request->input('chapterId');
    $totalQuestions = count($questionResults);
    $totalCorrect = 0;
    $totalWrong = 0;

    // Iterate over each question result
    foreach ($questionResults as $result) {
      // Increment correct or wrong counters based on result
      if ($result['result'] === 'pass') {
        $totalCorrect++;
      } elseif ($result['result'] === 'fail') {
        $totalWrong++;
      }
    }

    // Calculate percentage
    $percentage = round(($totalCorrect / $totalQuestions) * 100);

    $status = $totalCorrect >= 12 ? 'completed' : 'failed';

    $user->tests()->syncWithoutDetaching([
      $testId => [
        'status' => $status,
        'total_correct' => $totalCorrect,
        'total_wrong' => $totalWrong,
        'total_time_taken' => $totalTimeTaken,
        'test_data' => json_encode($questionResults),
      ]
    ]);

    $currentTest = Test::find($testId);
    $currentChapter = Chapter::find($chapterId);

    $nextTest = Test::where('chapter_id', $currentChapter->id)
      ->where('id', '>', $currentTest->id)
      ->orderBy('id', 'asc')
      ->first();


    // Step 2: If no next test, find the next chapter and its first test
    if (!$nextTest) {
      $nextChapter = Chapter::where('id', '>', $currentChapter->id)
        ->orderBy('id', 'asc')
        ->first();

      if ($nextChapter) {
        $nextTest = Test::where('chapter_id', $nextChapter->id)
          ->orderBy('id', 'asc')
          ->first();
      } else {
        $nextChapter = null; // No more chapters
      }
    } else {
      $nextChapter = $currentChapter; // Stay in the same chapter
    }

    return Inertia::render('PracticeTest/Result', [
      'result' => [
        'totalQuestions' => $totalQuestions,
        'totalCorrect' => $totalCorrect,
        'totalWrong' => $totalWrong,
        'percentage' => $percentage,
      ],
      'totalTimeTaken' => $timeTaken,
      'testId' => $testId,
      'chapterId' => $chapterId,
      'chapters' => $chapters,
      'questionResults' => $questionResults,
      'nextChapter' => $nextChapter,
      'nextTest' => $nextTest,
      'collapsedFromBackend' => $request->has('collapsed') ? $request->collapsed : false
    ]);
  }
}
