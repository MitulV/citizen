<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Models\Chapter;

class HomePageController extends Controller
{
    public function index()
    {
        $chapters = Chapter::all();
        
        
        return Inertia::render('Premium', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'chapters' => $chapters
        ]);
    }
}
