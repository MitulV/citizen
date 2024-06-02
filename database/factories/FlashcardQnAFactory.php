<?php

namespace Database\Factories;

use App\Models\FlashcardQnA;
use App\Models\Flashcard;
use Illuminate\Database\Eloquent\Factories\Factory;

class FlashcardQnAFactory extends Factory
{
    protected $model = FlashcardQnA::class;

    public function definition()
    {
        return [
            'flashcard_id' => Flashcard::factory(),
            'question' => $this->faker->sentence,
            'answer' => $this->faker->sentence,
            'explanation' => $this->faker->paragraph,
        ];
    }
}
