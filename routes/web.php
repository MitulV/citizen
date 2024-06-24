<?php

use App\Http\Controllers\FlashcardController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\PracticeTestsController;
use App\Http\Controllers\PremiumPageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SimulationTestsController;
use App\Http\Controllers\StudyGuidesController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\ToolsController;
use App\Http\Controllers\TransactionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/kajal', function () {
  return Inertia::render('StudyGuide/TopicDetail');
});

Route::get('/', [HomePageController::class, 'index'])->name('homePage');
Route::get('/premium', [PremiumPageController::class, 'index'])->name('premiumPage');
Route::get('/test-info/{chapter_id}', [TestController::class, 'index'])->name('testInfoPage');
Route::get('/test/{chapterId}', [TestController::class, 'testPage'])->name('testPage');
Route::post('/test/{chapterId}', [TestController::class, 'testPage'])->name('testPage');
Route::post('/test-results', [TestController::class, 'testResult'])->name('testResultPage');


// Route::middleware(['auth', 'verified'])->group(function () {
// });


Route::middleware('auth')->group(function () {

  Route::get('/guide', [StudyGuidesController::class, 'index'])->name('dashboard');
  Route::get('/guide/{chapterId}/{topicId?}', [StudyGuidesController::class, 'topicList'])->name('topicList');
  Route::post('/guide/{chapterId}/topic/{topicId}/complete', [StudyGuidesController::class, 'completeTopic'])->name('topic.complete');


  Route::get('/simulation-tests', [SimulationTestsController::class, 'index'])->name('simulation.test');

  Route::get('/practice-tests', [PracticeTestsController::class, 'index'])->name('practice.test');
  Route::get('/practice-tests/{chapterId}/{testId?}', [PracticeTestsController::class, 'testList'])->name('testList');
  Route::post('/practice-tests/start/{chapterId}/{testId?}', [PracticeTestsController::class, 'testStart'])->name('practice.testStart');
  Route::post('/practice-tests/result', [PracticeTestsController::class, 'testResult'])->name('practice.testResult');

  Route::get('/flashcards', [FlashcardController::class, 'index'])->name('flashcard');
  Route::get('/flashcards/{chapterId}/{flashcardId?}', [FlashcardController::class, 'flashcardList'])->name('flashcardList');
  Route::post('/flashcards/{chapterId}/flashcard/{flashcardId}/complete', [FlashcardController::class, 'completeFlashcard'])->name('flashcard.complete');


  Route::get('/tools', [ToolsController::class, 'index'])->name('tools');
  //Route::get('/dashboard', [DashboardController::class,'index'])->name('dashboard');
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/checkout', [TransactionController::class, 'checkout'])->name('checkout');
Route::get('/payment/success', [TransactionController::class, 'paymentSuccess'])->name('paymentSuccess');
Route::get('/payment/cancel', [TransactionController::class, 'paymentCancel'])->name('paymentCancel');

require __DIR__ . '/auth.php';
