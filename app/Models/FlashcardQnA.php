<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FlashcardQnA extends Model
{
    use HasFactory;

    protected $table = 'flashcard_qna';
    protected $fillable = ['flashcard_id', 'question', 'answer', 'explanation'];

    public function flashcard()
    {
        return $this->belongsTo(Flashcard::class);
    }
}
