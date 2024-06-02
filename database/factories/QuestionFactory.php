<?php

namespace Database\Factories;

use App\Models\Question;
use App\Models\Test;
use App\Models\Answer;
use Illuminate\Database\Eloquent\Factories\Factory;

class QuestionFactory extends Factory
{
    protected $model = Question::class;

    public function definition()
    {
        return [
            'test_id' => Test::factory(),
            'text' => $this->faker->sentence,
            'correct_answer_id' => null,
            'explanation' => $this->faker->paragraph,
        ];
    }
}
