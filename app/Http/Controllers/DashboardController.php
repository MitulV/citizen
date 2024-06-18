<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $data = User::with(['topics.chapter'])
                    ->where('id', $user->id)
                    ->get();
        return Inertia::render('Dashboard',['data'=>$data]);
    }
}
