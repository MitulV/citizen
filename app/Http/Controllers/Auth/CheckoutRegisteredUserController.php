<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\TransactionController;
use App\Models\User;
use App\Services\StripeService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Session;
use App\Models\Package;
use App\Models\Subscription;
use App\Models\Transaction;
use Carbon\Carbon;


class CheckoutRegisteredUserController extends Controller
{

  /**
   * Display the registration view.
   */
  public function CheckoutCreate(Request $request)
  {
    return Inertia::render('Auth/CheckoutRegister', [
      'packageId' => $request->input('packageId'),
    ]);
  }

  /**
   * Handle an incoming registration request.
   *
   * @throws \Illuminate\Validation\ValidationException
   */
  public function CheckoutStore(Request $request, StripeService $stripeService)
  {
    $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
      'password' => ['required', 'confirmed', Rules\Password::defaults()],
    ]);

    $packageId = $request->packageId;

    $user = User::create([
      'name' => $request->name,
      'email' => $request->email,
      'password' => Hash::make($request->password),
    ]);

    Auth::login($user);

    $url = $this->checkout($stripeService, $packageId);

    return Inertia::location($url);
    //return redirect($url);
  }

  public function checkout($stripeService, $packageId)
  {

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

    return $checkoutSession->url;
  }
}
