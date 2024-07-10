<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Stripe\Exception\SignatureVerificationException;
use Stripe\Webhook;

class WebhookController extends Controller
{
  public function handle(Request $request)
  {
    Log::info('inside WebhookController::Handle method');

    $payload = $request->getContent();
    $sig_header = $request->header('Stripe-Signature');
    $endpoint_secret = env('STRIPE_WEBHOOK_SECRET_KEY');

    try {
      $event = Webhook::constructEvent(
        $payload,
        $sig_header,
        $endpoint_secret
      );
    } catch (SignatureVerificationException $e) {
      return response()->json(['error' => 'Invalid signature'], 400);
    }

    Log::info(['$event->type is' => $event->type]);
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

    Log::info('exit from handle Method');
    return response()->json(['success' => true], 200);
  }


  public function handleCheckoutSession($session, $request)
  {
    Log::info('inside handleAction Method');


    $transactionId = $session->metadata->transaction_id;
    $userId = $session->metadata->user_id;

    Log::info(['$transactionId' => $transactionId]);
    Log::info(['$userId' => $userId]);

    $transaction = Transaction::where('stripe_checkout_id', $session->id)->first();


    // Check if transaction exists and validate the transaction ID
    if (!$transaction || $transaction->id != $transactionId) {
      return response('Invalid Request', 400);
    }

    // Get the subscription from the transaction
    $subscription = $transaction->subscription;

    Log::info(['$transaction' => $transaction]);
    Log::info(['$subscription' => $subscription]);

    if ($transaction->stripe_payment_status == 'unpaid') {
      Log::info('at 81');
      if ($session->payment_status == 'paid') {
        Log::info('at 83');
        $subscription->update(
          ['isActive' => true]
        );
      }

      $transaction->update([
        'payment_status' =>  $session->payment_status
      ]);
      Log::info('at 92');
    }

    Log::info('exit from handleAction Method');
  }
}
