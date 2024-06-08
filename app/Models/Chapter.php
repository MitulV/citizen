<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    use HasFactory;

    protected $fillable = ['image', 'name', 'title', 'description', 'questions', 'mistakes','step','is_free'];

    public function topics()
    {
        return $this->hasMany(Topic::class);
    }

    public function tests()
    {
        return $this->hasMany(Test::class);
    }

    public function flashcards()
    {
        return $this->hasMany(Flashcard::class);
    }
}
