<?php

namespace Database\Factories;

use App\Models\Flashcard;
use App\Models\Chapter;
use Illuminate\Database\Eloquent\Factories\Factory;

class FlashcardFactory extends Factory
{
    protected $model = Flashcard::class;

    public function definition()
    {
        return [
            'chapter_id' => Chapter::factory(),
        ];
    }
}
