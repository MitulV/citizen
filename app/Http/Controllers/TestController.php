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

        if ($test) {
            $questions = Question::where('test_id', $test->id)
                ->with(['answers' => function ($query) {
                    $query->select('id', 'text', 'question_id');
                }])
                ->get(['id', 'text', 'test_id']);
        }

        return Inertia::render('TestPage', [
            'chapterId' => $chapter_id,
            'questions' => $questions
        ]);
    }

    public function fetchNextQuestion($testId, $questionId)
    {
        $nextQuestion = Question::where('test_id', $testId)
            ->where('id', '>', $questionId)
            ->with(['answers' => function ($query) {
                $query->select('id', 'text', 'question_id');
            }])
            ->orderBy('id')
            ->first(['id', 'text', 'test_id']);

        return response()->json($nextQuestion);
    }



    public function submitAnswerAndGetNextQuestion(Request $request)
    {
        // Validate request
        $request->validate([
            'guest_token' => 'required|string',
            'selected_answer_id' => 'required|exists:answers,id',
        ]);

        // Retrieve test data from session using guest token
        $guest_test_data = $request->session()->get('guest_test_' . $request->guest_token);

        // Retrieve current question index and answers from test data
        $current_question_index = $guest_test_data['current_question_index'];
        $answers = $guest_test_data['answers'];

        // Retrieve current question
        $current_question = $guest_test_data['questions'][$current_question_index];

        // Check if the selected answer is correct
        $is_correct = $current_question->correct_answer_id == $request->selected_answer_id;

        // Store the selected answer
        $answers[$current_question->id] = $request->selected_answer_id;

        // Increment current question index
        $current_question_index++;

        // Retrieve next question
        $next_question = null;
        if ($current_question_index < count($guest_test_data['questions'])) {
            $next_question = $guest_test_data['questions'][$current_question_index];
        }

        // Update test data in session
        $guest_test_data['current_question_index'] = $current_question_index;
        $guest_test_data['answers'] = $answers;
        $request->session()->put('guest_test_' . $request->guest_token, $guest_test_data);

        // Return response
        return response()->json([
            'is_correct' => $is_correct,
            'correct_answer_id' => $current_question->correct_answer_id,
            'next_question' => $next_question,
        ]);
    }
}
