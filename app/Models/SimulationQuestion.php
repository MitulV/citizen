<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SimulationQuestion extends Model
{
  use HasFactory;

  protected $fillable = ['test_id', 'text', 'correct_answer_id', 'explanation'];

  public function test()
  {
    return $this->belongsTo(SimulationTest::class, 'test_id');
  }

  public function answers()
  {
    return $this->hasMany(SimulationAnswer::class, 'question_id');
  }

  public function correctAnswer()
  {
    return $this->belongsTo(SimulationAnswer::class, 'correct_answer_id');
  }
}
