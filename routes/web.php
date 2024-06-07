<?php

use App\Http\Controllers\HomePageController;
use App\Http\Controllers\PremiumPageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',[HomePageController::class,'index'])->name('homePage');
Route::get('/premium',[PremiumPageController::class,'index'])->name('premiumPage');
Route::get('/test-info/{chapter_id}',[TestController::class,'index'])->name('testInfoPage');
Route::get('/test/{chapterId}',[TestController::class,'testPage'])->name('testPage');
Route::post('/test/{chapterId}',[TestController::class,'testPage'])->name('testPage');
Route::post('/test-results',[TestController::class,'testResult'])->name('testResultPage');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
