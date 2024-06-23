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
      foreach ($chapter->tests as $test) {
        $userTest = $test->users->where('id', $user->id)->first();
        $test->is_completed_by_user = $userTest ? $userTest->pivot->status === 'completed' : false;
        unset($test->users); // Optional: Remove users relationship data to keep the response clean
      }
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
      foreach ($chapter->tests as $test) {
        $userTest = $test->users->where('id', $user->id)->first();
        $test->is_completed_by_user = $userTest ? $userTest->pivot->status === 'completed' : false;
        unset($test->users); // Optional: Remove users relationship data to keep the response clean
      }
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

    return Inertia::render('PracticeTest/Info', [
      'chapters' => $chapters,
      'test' => $test,
      'currentChapter' => $currentChapter,
      'chapterId' => $chapterId,
      'previousTestId' => $previousTest ? $previousTest->id : null,
      'nextTestId' => $nextTest ? $nextTest->id : null,
    ]);
  }

  public function completeTest(Request $request, $chapterId, $testId)
  {
    $user = Auth::user();

    $chapters = Chapter::where('step', 2)
      ->with('tests.users')
      ->get();

    foreach ($chapters as $chapter) {
      foreach ($chapter->tests as $test) {
        $userTest = $test->users->where('id', $user->id)->first();
        $test->is_completed_by_user = $userTest ? $userTest->pivot->status === 'completed' : false;
        unset($test->users); // Optional: Remove users relationship data to keep the response clean
      }
    }

    // Mark the test as completed for the user
    $currentTest = Test::findOrFail($testId);
    $currentTest->users()->updateExistingPivot($user->id, ['status' => 'completed']);

    $nextTest = Test::where('chapter_id', $chapterId)
      ->where('id', '>', $testId)
      ->first();

    $testAfterNext = $nextTest ? Test::where('chapter_id', $chapterId)
      ->where('id', '>', $nextTest->id)
      ->first() : null;

    return Inertia::render('PracticeTest/Info', [
      'chapters' => $chapters,
      'test' => $nextTest,
      'chapterId' => $chapterId,
      'previousTestId' => $currentTest->id,
      'nextTestId' => $testAfterNext ? $testAfterNext->id : null,
    ]);
  }

  public function testStart(Request $request, $chapterId)
  {
    if ($request->filled('questionId') && $request->filled('answerId') && $request->filled('testId')) {
      // Answer validation logic
      $questionId = $request->input('questionId');
      $answerId = $request->input('answerId');
      $testId = $request->input('testId');
      $index = $request->input('index');

      $question = Question::where('id', $questionId)->first();
      $result = $question->correct_answer_id == $answerId ? 'pass' : 'fail';

      $nextQuestion = Question::where('test_id', $testId)
        ->where('id', '>', $questionId)
        ->with('answers')
        ->select('id', 'text', 'test_id')
        ->first();

      return Inertia::render('TestPage', [
        'index' => $index,
        'chapterId' => $chapterId,
        'nextQuestion' => $nextQuestion,
        'result' => $result,
        'selectedQuestionId' => $questionId,
        'selectedAnswerId' => $answerId,
        'explanation' => $question->explanation
      ]);
    } else {
      // Initial page logic
      $test = Test::where('chapter_id', $chapterId)
        ->select('id', 'chapter_id', 'name')
        ->first();

      $question = Question::where('test_id', $test->id)
        ->with('answers')
        ->select('id', 'text', 'test_id')
        ->first();

      return Inertia::render('PracticeTest/TestStart', [
        'chapterId' => $chapterId,
        'question' => $question
      ]);
    }
  }
}
