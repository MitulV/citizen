<?php

namespace App\Services;

use Illuminate\Http\Request;
use Stripe\StripeClient;

class StripeService
{
  private $stripe;
  public function __construct()
  {
    $this->stripe = new StripeClient(config('services.stripe.secret_key'));
  }


  public function createCheckoutSession($stripeData)
  {
    try {
      $checkoutSession = $this->stripe->checkout->sessions->create([
        'mode' => 'payment',
        'line_items' => [
          [
            'price_data' => [
              'currency' => 'CAD',
              'unit_amount' => (int)($stripeData['total_amount'] * 100), // Amount in cents
              'product_data' => [
                'name' => $stripeData['package_name'],
              ],
            ],
            'quantity' => 1,
          ],
        ],
        'metadata' => [
          'user_id' => $stripeData['user_id'],
          'transaction_id' => $stripeData['transaction_id']
        ],
        'success_url' => route('payment.success'),
        'cancel_url' => route('payment.cancel'),
        'customer_email' => $stripeData['email']
      ]);

      return $checkoutSession;
    } catch (\Exception $e) {
      // Handle the exception (e.g., log the error, return an error response, etc.)
      return response()->json(['error' => $e->getMessage()], 500);
    }
  }
}
