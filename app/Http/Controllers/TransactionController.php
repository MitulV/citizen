<?php

namespace App\Http\Controllers;


use Inertia\Inertia;

class TransactionController extends Controller
{

  public function paymentSuccess()
  {
    return redirect()->route('dashboard')->with('message', 'Payment Success! Your payment has been received.');
  }


  public function paymentCancel()
  {
    return Inertia::render('Payment/Fail', []);
  }
}
