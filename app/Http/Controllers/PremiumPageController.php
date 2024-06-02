<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

class PremiumPageController extends Controller
{
    public function index()
    {
        return Inertia::render('Premium', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),    
        ]);
    }
}
