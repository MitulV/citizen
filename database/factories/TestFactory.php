<?php

namespace Database\Factories;

use App\Models\Test;
use App\Models\Chapter;
use Illuminate\Database\Eloquent\Factories\Factory;

class TestFactory extends Factory
{
    protected $model = Test::class;

    public function definition()
    {
        return [
            'chapter_id' => Chapter::factory(),
            'name' => $this->faker->word,
            'image' => $this->faker->imageUrl(),
            'info' => $this->faker->paragraph,
        ];
    }
}
