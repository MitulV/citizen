<?php

namespace App\Models;

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
}
