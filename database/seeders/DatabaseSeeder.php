<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Chapter;
use App\Models\Test;
use App\Models\Topic;
use App\Models\Answer;
use App\Models\Flashcard;
use App\Models\FlashcardQnA;
use App\Models\Package;
use App\Models\Question;

class DatabaseSeeder extends Seeder
{
    public function run() : void
    {
        DB::transaction(function () {
            // Create 11 chapters
            $chapters = Chapter::factory()->count(11)->create();

            $chapters->each(function ($chapter,  $index) {

                $chapterNumber = $index + 2; // Start from chapter 2
                $imagePath = "chap {$chapterNumber}.png";
                $chapter->update(['image' => $imagePath]);

                $tests = Test::factory()->count(2)->create(['chapter_id' => $chapter->id]);
                $topics = Topic::factory()->count(3)->create(['chapter_id' => $chapter->id]);
                $flashcards = Flashcard::factory()->count(2)->create(['chapter_id' => $chapter->id]);

                $flashcards->each(function ($flashcard) {
                    FlashcardQnA::factory()->count(5)->create(['flashcard_id' => $flashcard->id]);
                });

                $tests->each(function ($test) {
                    $questions = Question::factory()->count(5)->create(['test_id' => $test->id]);

                    $questions->each(function ($question) {
                        $answers = Answer::factory()->count(4)->create(['question_id' => $question->id]);

                        // Set one of the answers as the correct answer
                        $correctAnswer = $answers->random();
                        $question->correct_answer_id = $correctAnswer->id;
                        $question->save();
                    });
                });
            });

            User::factory()->count(10)->create();
            Package::factory()->count(3)->create();
        });
    }
}
