<?php

use App\Http\Controllers\Auth\CheckoutRegisteredUserController;
use App\Http\Controllers\CheatSheetController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FlashcardController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\ImageUploadController;
use App\Http\Controllers\PracticeTestsController;
use App\Http\Controllers\PremiumPageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SimulationTestController;
use App\Http\Controllers\SimulationTestsController;
use App\Http\Controllers\StudyGuidesController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\ToolsController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\WebhookController;
use App\Http\Middleware\RedirectIfNotRegistered;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/about', function () {
  return Inertia::render('About');
})->name('about');


Route::get('/privacy-policy', function () {
  return Inertia::render('privacypolicy');
})->name('privacyPolicy');

Route::get('/terms', function () {
  return Inertia::render('TnC');
})->name('terms');

Route::get('/refund', function () {
  return Inertia::render('Refundpolicy');
})->name('refund');

Route::get('/faqs', function () {
  return Inertia::render('faqs');
})->name('faqs');

Route::get('/', [HomePageController::class, 'index'])->name('homePage');
Route::get('/premium', [PremiumPageController::class, 'index'])->name('premiumPage');
Route::get('/test-info/{chapter_id}', [TestController::class, 'index'])->name('testInfoPage');
Route::get('/test/{chapterId}', [TestController::class, 'testPage'])->name('testPage');
Route::post('/test/{chapterId}', [TestController::class, 'testPage'])->name('testPage');
Route::post('/test-results', [TestController::class, 'testResult'])->name('testResultPage');

Route::get('/create-topics', [TopicController::class, 'create'])->name('createTopic.create');
Route::post('/create-topics', [TopicController::class, 'store'])->name('createTopic.store');

Route::get('/edit-topics', [TopicController::class, 'edit'])->name('createTopic.edit');
Route::post('/edit-topics', [TopicController::class, 'update'])->name('createTopic.update');

Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'sendMail'])->name('contact.sendMail');

Route::middleware([
  'auth',
  //\App\Http\Middleware\CheckActiveSubscription::class
])->group(function () {

  Route::get('/guide', [StudyGuidesController::class, 'index'])->name('dashboard');
  Route::get('/guide/{chapterId}/{topicId?}', [StudyGuidesController::class, 'topicList'])->name('topicList');

  Route::get('/simulation-tests', [SimulationTestsController::class, 'index'])->name('simulation.test');

  Route::get('/practice-tests', [PracticeTestsController::class, 'index'])->name('practice.test');
  Route::get('/practice-tests/{chapterId}/{testId?}', [PracticeTestsController::class, 'testList'])->name('testList');
  Route::post('/practice-tests/start/{chapterId}/{testId?}', [PracticeTestsController::class, 'testStart'])->name('practice.testStart');
  Route::post('/practice-tests/result', [PracticeTestsController::class, 'testResult'])->name('practice.testResult');

  Route::get('/flashcards', [FlashcardController::class, 'index'])->name('flashcard');
  Route::get('/flashcards/{chapterId}/{flashcardId?}', [FlashcardController::class, 'flashcardList'])->name('flashcardList');

  Route::get('/cheat-sheets', [CheatSheetController::class, 'index'])->name('cheatSheets');
  Route::get('/cheat-sheets/important-people', [CheatSheetController::class, 'importantPeople'])->name('importantPeople');
  Route::get('/cheat-sheets/important-dates', [CheatSheetController::class, 'importantDates'])->name('importantDates');
  Route::get('/cheat-sheets/government-questions', [CheatSheetController::class, 'govQuestions'])->name('govQuestions');
  Route::get('/cheat-sheets/map', [CheatSheetController::class, 'map'])->name('map');
  Route::get('/cheat-sheets/glossary', [CheatSheetController::class, 'glossary'])->name('glossary');
  Route::get('/cheat-sheets/faq', [CheatSheetController::class, 'faq'])->name('faq');

  Route::get('simulation/info', [SimulationTestController::class, 'index'])->name('simulation.info');
  Route::post('simulation/test/{testId}', [SimulationTestController::class, 'testPage'])->name('simulation.test');
  Route::post('simulation/result', [SimulationTestController::class, 'testResult'])->name('simulation.testResult');

  Route::get('/practice-tests/{chapterId}/{testId?}', [PracticeTestsController::class, 'testList'])->name('testList');
  Route::post('/practice-tests/start/{chapterId}/{testId?}', [PracticeTestsController::class, 'testStart'])->name('practice.testStart');
  Route::post('/practice-tests/result', [PracticeTestsController::class, 'testResult'])->name('practice.testResult');

  //Route::get('/dashboard', [DashboardController::class,'index'])->name('dashboard');
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('checkout-register', [CheckoutRegisteredUserController::class, 'checkoutCreate'])
  ->name('checkout.register');

Route::post('checkout-register', [CheckoutRegisteredUserController::class, 'checkoutStore']);

Route::get('/checkout/{packageId}', [TransactionController::class, 'checkout'])->name('checkout');
Route::get('/payment/success', [TransactionController::class, 'paymentSuccess'])->name('payment.success');
Route::get('/payment/cancel', [TransactionController::class, 'paymentCancel'])->name('payment.cancel');

Route::post('/webhook', [WebhookController::class, 'handle'])->name('webhook');

require __DIR__ . '/auth.php';
