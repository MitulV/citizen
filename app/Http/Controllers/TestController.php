<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Test;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

class TestController extends Controller
{

    public function index($chapter_id)
    {
        return Inertia::render('TestInfo', [
            'chapterId' => $chapter_id
        ]);
    }

    public function testPage($chapter_id)
    {
        $test = Test::where('chapter_id', $chapter_id)
            ->select('id', 'chapter_id', 'name')
            ->first();

        $question = Question::where('test_id', $test->id)
            ->with('answers')
            ->select('id', 'text', 'test_id')
            ->first();

        return Inertia::render('TestPage', [
            'chapterId' => $chapter_id,
            'question' => $question
        ]);
    }

    public function validateAnswer(Request $request)
    {
        $questionId = $request->input('questionId');
        $answerId = $request->input('answerId');
        $testId = $request->input('testId');
        $chapter_id = $request->input('chapterId');
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
            'chapterId' => $chapter_id,
            'nextQuestion' => $nextQuestion,
            'result' => $result,
            'selectedQuestionId' => $questionId,
            'selectedAnswerId' => $answerId
        ]);
    }




}
