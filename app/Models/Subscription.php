<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
  use HasFactory;

  protected $fillable = [
    'user_id',
    'package_id',
    'start_date',
    'end_date',
    'is_active',
  ];

  /**
   * Get the user that owns the subscription.
   */
  public function user()
  {
    return $this->belongsTo(User::class);
  }

  /**
   * Get the package that owns the subscription.
   */
  public function package()
  {
    return $this->belongsTo(Package::class);
  }

  /**
   * Get the transactions for the subscription.
   */
  public function transactions()
  {
    return $this->hasMany(Transaction::class);
  }

  /**
   * Determine if the subscription is currently active.
   *
   * @return bool
   */
  public function getIsCurrentlyActiveAttribute()
  {
    $now = Carbon::now();
    $isActive = $this->is_active && $this->start_date <= $now && $this->end_date >= $now;

    // Update is_active status if it has changed
    if ($this->is_active !== $isActive) {
      $this->is_active = $isActive;
      $this->save();
    }

    return $isActive;
  }
}
