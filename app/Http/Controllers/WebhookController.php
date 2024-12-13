<?php

namespace App\Http\Controllers;

use App\Mail\PremiumMembershipMail;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Stripe\Exception\SignatureVerificationException;
use Stripe\Webhook;

class WebhookController extends Controller
{
  public function handle(Request $request)
  {

    Log::info('inside handle method');

    $payload = $request->getContent();
    $sig_header = $request->header('Stripe-Signature');
    $endpoint_secret = config('services.stripe.webhook_secret_key');

    try {
      $event = Webhook::constructEvent(
        $payload,
        $sig_header,
        $endpoint_secret
      );
    } catch (SignatureVerificationException $e) {
      Log::error('Invalid signature');
      return response()->json(['error' => 'Invalid signature'], 400);
    }

    switch ($event->type) {
      case 'checkout.session.async_payment_failed':
        $this->handleCheckoutSession($event->data->object, $request);
        break;
      case 'checkout.session.async_payment_succeeded':
        $this->handleCheckoutSession($event->data->object, $request);
        break;
      case 'checkout.session.completed':
        $this->handleCheckoutSession($event->data->object, $request);
        break;
      case 'checkout.session.expired':
        $this->handleCheckoutSession($event->data->object, $request);
        break;
      default:
        return response()->json(['error' => 'Received unknown event type'], 400);
    }

    return response()->json(['success' => true], 200);
  }


  public function handleCheckoutSession($session, $request)
  {
    Log::info('inside handleCheckoutSession');
    Log::info('session : ', $session);
    try {
      $transactionId = $session->metadata->transaction_id;
      $userId = $session->metadata->user_id;

      $transaction = Transaction::where('stripe_checkout_id', $session->id)->first();


      // Check if transaction exists and validate the transaction ID
      if (!$transaction || $transaction->id != $transactionId) {
        return response('Invalid Request', 400);
      }

      // Get the subscription from the transaction
      $subscription = $transaction->subscription;


      if ($transaction->stripe_payment_status == 'unpaid') {

        if ($session->payment_status == 'paid') {

          $subscription->update(
            ['is_active' => true]
          );

          $user = User::find($userId);
          $mailData = [
            'USER_NAME' => $user->name,
            'PACKAGE_NAME' => $subscription->package->name,
            'START_DATE' => $subscription->start_date,
            'END_DATE' => $subscription->end_date,
            'AMOUNT' => $transaction->total_amount
          ];
          Log::info('Mail data for subscription:', $mailData);
          Log::info('User Email:', $user->email);
          Mail::to($user->email)->send(new PremiumMembershipMail($mailData));
        }

        $transaction->update([
          'stripe_payment_status' =>  $session->payment_status
        ]);
      }
    } catch (\Throwable $th) {
      throw $th;
    }
  }
}
