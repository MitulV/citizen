<?php

namespace App\Http\Controllers;

use App\Models\Package;
use App\Models\Subscription;
use App\Models\Transaction;
use App\Services\StripeService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class TransactionController extends Controller
{
  public function checkout(Request $request, StripeService $stripeService, $packageId)
  {
    if (!Auth::check()) {
      Session::put('url.intended', $request->fullUrl());
      return redirect()->route('checkout.register');
    }

    $user = Auth::user();
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
      'user_id' => $user->id,
      'package_id' => $packageId,
      'subscription_id' => $subscription->id,
      'total_amount' => $package->price,
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
      'stripe_checkout_id' => $checkoutSession->id
    ]);

    return redirect($checkoutSession->url);
  }

  public function paymentSuccess()
  {
    return Inertia::render('Payment/Success', []);
  }

  public function paymentCancel()
  {
    return Inertia::render('Payment/Fail', []);
  }
}
