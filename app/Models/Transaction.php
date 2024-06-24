<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
  use HasFactory;

  protected $fillable = [
    'stripe_checkout_id',
    'user_id',
    'total_amount',
    'package_id',
    'subscription_id',
    'stripe_payment_status',
  ];

  /**
   * Get the user that owns the transaction.
   */
  public function user()
  {
    return $this->belongsTo(User::class);
  }

  /**
   * Get the package that owns the transaction.
   */
  public function package()
  {
    return $this->belongsTo(Package::class);
  }

  /**
   * Get the subscription that owns the transaction.
   */
  public function subscription()
  {
    return $this->belongsTo(Subscription::class);
  }
}
