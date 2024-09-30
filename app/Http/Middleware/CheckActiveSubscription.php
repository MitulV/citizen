<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckActiveSubscription
{
  /**
   * Handle an incoming request.
   *
   * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
   */
  public function handle(Request $request, Closure $next): Response
  {
    $user = Auth::user();


    if ($user && $user->currentSubscription && $user->currentSubscription->is_currently_active) {
      return $next($request);
    }


    // Redirect or return a response if the user does not have an active subscription
    return redirect()->route('premiumPage');
  }
}
