<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
  public function index()
  {
    return Inertia::render('Contactus');
  }

  public function sendMail(Request $request)
  {
    $request->validate([
      'name' => 'required',
      'email' => 'required|email',
      'message' => 'required',
    ]);

    $mailData = [
      'name' => $request->input('name'),
      'email' => $request->input('email'),
      'message' => $request->input('message'),
    ];

    Mail::to('contact@yourwebsite.com')->send(new ContactMail($mailData));

    return back()->with('success', 'Thank you for your message. We will get back to you shortly.');
  }
}
