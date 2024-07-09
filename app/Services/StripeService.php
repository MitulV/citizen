<?php

namespace App\Services;

use Illuminate\Http\Request;
use Stripe\StripeClient;

class StripeService
{
  private $stripe;
  public function __construct()
  {
    $this->stripe = new StripeClient(env('STRIPE_SECRET_KEY'));
  }
  public function createCheckoutSession($srtipeData)
  {

    $checkoutSession = $this->stripe->checkout->sessions->create([
      'mode' => 'payment',
      'line_items' =>  [
        'price_data' => [
          'currency' => 'CAD',
          'unit_amount' => (int)($srtipeData->total_amount * 100), // Amount in cents
          'product_data' => [
            'package_name' => $srtipeData->package_name,
          ],
        ],
        'quantity' => 1,
      ],
      'metadata' => [
        'user_id' => $srtipeData->user_id,
        'subscription_id' => $srtipeData->subscription_id,
        'transaction_id' => $srtipeData->transaction_id
      ],

      'success_url' => route('payment.success'),
      'cancel_url' => route('payment.cancel'),
    ]);

    return $checkoutSession;
  }
}
