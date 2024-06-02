<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Test;
use Illuminate\Http\Request;

class TestController extends Controller
{

    public function getQuestionsForChapter(Request $request)
    {
        // Validate request
        $request->validate([
            'chapter_id' => 'required|exists:chapters,id',
        ]);

        // Retrieve test for the given chapter
        $test = Test::where('chapter_id', $request->chapter_id)->first();

        // Retrieve questions for the test
        $questions = $test->questions()->with('answers')->get();

        // Generate a temporary guest user token
        $guest_token = uniqid('guest_', true);

         // Store test data and guest token in session
         $request->session()->put('guest_test_' . $guest_token, [
            'test_id' => $test->id,
            'questions' => $questions,
            'current_question_index' => 0,
            'answers' => [],
        ]);

        // Return questions data along with guest token
        return response()->json([
            'guest_token' => $guest_token,
            'questions' => $questions,
        ]);
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
