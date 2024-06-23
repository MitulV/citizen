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
  public function index()
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
      'chapters' => $chapters
    ]);
  }

  public function testList($chapterId, $testId = null)
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

    $testId = $testId ?? 1;

    $test = Test::findOrFail($testId);
    $currentChapter = Chapter::findOrFail($chapterId);

    $previousTest = Test::where('chapter_id', $chapterId)
      ->where('id', '<', $testId)
      ->orderBy('id', 'desc')
      ->first();

    $nextTest = Test::where('chapter_id', $chapterId)
      ->where('id', '>', $testId)
      ->first();

    $latestTest = $user->tests()->orderBy('pivot_updated_at', 'desc')->first();
    $latestScore =  '-';
    if ($latestTest) {
      $totalCorrect = $latestTest->pivot->total_correct;
      $latestScore = round(($totalCorrect / 20) * 100) . '%';
    }

    return Inertia::render('PracticeTest/Info', [
      'chapters' => $chapters,
      'test' => $test,
      'currentChapter' => $currentChapter,
      'chapterId' => $chapterId,
      'previousTestId' => $previousTest ? $previousTest->id : null,
      'nextTestId' => $nextTest ? $nextTest->id : null,
      'latestScore' => $latestScore
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

      $test = Test::findOrFail($testId);

      $nextQuestion = Question::where('test_id', $testId)
        ->where('id', '>', $questionId)
        ->with('answers')
        ->select('id', 'text', 'test_id')
        ->first();

      return Inertia::render('PracticeTest/TestStart', [
        'index' => $index,
        'chapterId' => $chapterId,
        'nextQuestion' => $nextQuestion,
        'result' => $result,
        'selectedQuestionId' => $questionId,
        'selectedAnswerId' => $answerId,
        'explanation' => $question->explanation,
        'chapters' => $chapters,
        'test' => $test
      ]);
    } else {

      $test = Test::findOrFail($testId);


      $question = Question::where('test_id', $test->id)
        ->with('answers')
        ->select('id', 'text', 'test_id')
        ->first();

      return Inertia::render('PracticeTest/TestStart', [
        'chapterId' => $chapterId,
        'question' => $question,
        'chapters' => $chapters,
        'test' => $test
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

    $status = $totalCorrect >= 15 ? 'completed' : 'failed';

    $user->tests()->syncWithoutDetaching([
      $testId => [
        'status' => $status,
        'total_correct' => $totalCorrect,
        'total_wrong' => $totalWrong,
        'total_time_taken' => $totalTimeTaken,
        'test_data' => json_encode($questionResults)
      ]
    ]);

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
      'chapters' => $chapters
    ]);
  }
}
