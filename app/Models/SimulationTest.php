<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SimulationTest extends Model
{
  use HasFactory;

  protected $fillable = ['name', 'image', 'info'];

  public function questions()
  {
    return $this->hasMany(SimulationQuestion::class, 'test_id');
  }

  public function users()
  {
    return $this->belongsToMany(User::class, 'simulation_test_user')->withPivot('status', 'total_correct', 'total_wrong', 'total_time_taken', 'test_data')->withTimestamps();
  }
}
