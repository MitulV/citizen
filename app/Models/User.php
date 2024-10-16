<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
  use HasFactory, Notifiable;

  protected $fillable = [
    'name',
    'email',
    'password',
  ];

  protected $hidden = [
    'password',
    'remember_token',
  ];

  protected function casts(): array
  {
    return [
      'email_verified_at' => 'datetime',
      'password' => 'hashed',
    ];
  }

  public function topics()
  {
    return $this->belongsToMany(Topic::class)->withPivot('status')->withTimestamps();
  }

  public function tests()
  {
    return $this->belongsToMany(Test::class)->withPivot([
      'status',
      'total_correct',
      'total_wrong',
      'total_time_taken',
      'test_data'
    ])->withTimestamps();
  }

  public function simulationTests()
  {
    return $this->belongsToMany(SimulationTest::class, 'simulation_test_user')->withPivot('status', 'total_correct', 'total_wrong', 'total_time_taken', 'test_data')->withTimestamps();
  }

  public function flashcards()
  {
    return $this->belongsToMany(Flashcard::class)->withPivot('status')->withTimestamps();
  }

  /**
   * Get the user's current subscription.
   */
  public function currentSubscription()
  {
    return $this->hasOne(Subscription::class)->latestOfMany();
  }


  /**
   * Get all subscriptions of the user in descending order.
   */
  public function subscriptions()
  {
    return $this->hasMany(Subscription::class)->orderBy('created_at', 'desc');
  }
}
