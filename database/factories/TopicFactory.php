<?php

namespace Database\Factories;

use App\Models\Topic;
use App\Models\Chapter;
use Illuminate\Database\Eloquent\Factories\Factory;

class TopicFactory extends Factory
{
    protected $model = Topic::class;

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
