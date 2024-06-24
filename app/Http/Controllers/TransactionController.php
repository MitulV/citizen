<?php

namespace App\Http\Controllers;

use App\Models\Package;
use App\Models\Subscription;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TransactionController extends Controller
{
  public function handle(Request $request, StripeService $stripeService)
  {
    $user = Auth::user();
    $packageId = $request->input('packageId');
    $package = Package::findOrFail($packageId);
    $startDate = Carbon::today();
    $endDate = $startDate->copy()->addDays($package->validity);

    $subscription = Subscription::create([
      'user_id' => $user->id,
      'package_id' => $packageId,
      'start_date' => $startDate,
      'end_date' => $endDate,
    ]);

    $transaction = Transaction::create([
      'stripe_checkout_id' => $data['stripe_checkout_id'] ?? null,
      'user_id' => $user->id,
      'package_id' => $packageId,
      'subscription_id' => $subscription->id,
      'total_amount' => $package->price,
      'payment_status' => 'unpaid'
    ]);

    $srtipeData = [
      'total_amount' => $transaction->total_amount,
      'package_name' => $package->name,
      'user_id' => $user->id,
      'subscription_id' => $subscription->id,
      'transaction_id' => $transaction->id
    ];


    $checkoutSession =  $stripeService->createCheckoutSession($srtipeData);
    $transaction->update([
      'stripe_checkout_id' => $checkoutSession->id,
      'amount_total' => ($checkoutSession->amount_total) / 100,
      'status' => $checkoutSession->status
    ]);
  }
}
