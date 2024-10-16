<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flashcard extends Model
{
  use HasFactory;

  protected $fillable = ['chapter_id', 'flashcard_id', 'question', 'answer', 'explanation'];

  public function chapter()
  {
    return $this->belongsTo(Chapter::class);
  }

  public function users()
  {
    return $this->belongsToMany(User::class)->withPivot('status')->withTimestamps();
  }
}
