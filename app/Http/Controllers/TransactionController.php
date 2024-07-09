<?php

namespace App\Http\Controllers;


use Inertia\Inertia;

class TransactionController extends Controller
{

  public function paymentSuccess()
  {
    return Inertia::render('Payment/Success', []);
  }

  public function paymentCancel()
  {
    return Inertia::render('Payment/Fail', []);
  }
}
