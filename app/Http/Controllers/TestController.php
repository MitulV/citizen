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

    public function testPage(Request $request, $chapterId)
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

            return Inertia::render('TestPage', [
                'chapterId' => $chapterId,
                'question' => $question
            ]);
        }
    }

    public function testResult(Request $request)
    {

        $questionResults = $request->input('questionResults');
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
        
        return Inertia::render('TestResult', [
            'result' => [
            'totalQuestions' => $totalQuestions,
            'totalCorrect' => $totalCorrect,
            'totalWrong' => $totalWrong,
            'percentage' => $percentage,
            ]
        ]);
    }
}
