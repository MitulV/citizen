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
use Spatie\Robots\Robots;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

Route::get('/sitemap.xml', function () {

  $sitemap = Sitemap::create()
    ->add(Url::create(route('homePage')))
    ->add(Url::create(route('about')))
    ->add(Url::create(route('contact')))
    ->add(Url::create(route('privacyPolicy')))
    ->add(Url::create(route('terms')))
    ->add(Url::create(route('refund')))
    ->add(Url::create(route('faqs')))
    ->add(Url::create(route('premiumPage')))
    ->add('/canadian-citizenship-test-practise')
    ->add('/login');

  // Add static routes
  $sitemap->add(Url::create(route('createTopic.create')))
    ->add(Url::create(route('createTopic.edit')))
    ->add(Url::create(route('flashcard')))
    ->add(Url::create(route('cheatSheets')))
    ->add(Url::create(route('importantPeople')))
    ->add(Url::create(route('importantDates')))
    ->add(Url::create(route('govQuestions')))
    ->add(Url::create(route('map')))
    ->add(Url::create(route('glossary')))
    ->add(Url::create(route('faq')));


  // $chapters = \App\Models\Chapter::all();
  // foreach ($chapters as $chapter) {
  //   $sitemap->add(Url::create(route('testInfoPage', ['chapter_id' => $chapter->id])));
  // }


  // $tests = \App\Models\Test::all();
  // foreach ($tests as $test) {
  //   $sitemap->add(Url::create(route('testPage', ['chapterId' => $test->chapter_id])))
  //     ->add(Url::create(route('practice.testStart', ['chapterId' => $test->chapter_id, 'testId' => $test->id])));
  // }

  return $sitemap->writeToFile(public_path('sitemap.xml'));
});

Route::get('/robots.txt', function () {
  // Base URL for the sitemap, dynamically generated
  $sitemapUrl = Illuminate\Support\Facades\URL::to('/sitemap.xml');

  // Create the robots.txt content manually
  $content = "User-agent: *\n";
  $content .= "Disallow: /admin/\n";
  $content .= "Disallow: /login/\n";
  $content .= "Disallow: /signup/\n";
  $content .= "Allow: /\n"; // Allow all other pages

  // Add the dynamic sitemap link
  $content .= "Sitemap: {$sitemapUrl}\n";

  return response($content, 200, ['Content-Type' => 'text/plain']);
});

Route::get('/about-us', function () {
  return Inertia::render('About');
})->name('about');

Route::get('/privacy-policy', function () {
  return Inertia::render('privacypolicy');
})->name('privacyPolicy');

Route::get('/term-conditions', function () {
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

Route::get('/canadian-citizenship-test-practise', [TestController::class, 'index'])->name('testInfoPage');
//Route::get('/test/{chapterId}', [TestController::class, 'testPage'])->name('testPage.Index');
Route::post('/canadian-citizenship-test-practise', [TestController::class, 'testPage'])->name('testPage');
Route::post('/canadian-citizenship-test-practise-results', [TestController::class, 'testResult'])->name('testResultPage');

Route::get('/create-topics', [TopicController::class, 'create'])->name('createTopic.create');
Route::post('/create-topics', [TopicController::class, 'store'])->name('createTopic.store');

Route::get('/edit-topics', [TopicController::class, 'edit'])->name('createTopic.edit');
Route::post('/edit-topics', [TopicController::class, 'update'])->name('createTopic.update');

Route::get('/contact-us', [ContactController::class, 'index'])->name('contact');
Route::post('/contact-us', [ContactController::class, 'sendMail'])->name('contact.sendMail');

Route::middleware([
  'auth',
  //App\Http\Middleware\CheckActiveSubscription::class
])->group(function () {

  Route::get('/guide', [StudyGuidesController::class, 'index'])->name('dashboard');
  Route::get('/guide/{chapterId}/{topicId?}', [StudyGuidesController::class, 'topicList'])->name('topicList');

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

  Route::get('simulation-tests', [SimulationTestController::class, 'index'])->name('simulation.info');
  Route::post('simulation/test/{testId}', [SimulationTestController::class, 'testPage'])->name('simulation.test');
  Route::post('simulation/result', [SimulationTestController::class, 'testResult'])->name('simulation.testResult');

  //Route::get('/dashboard', [DashboardController::class,'index'])->name('dashboard');
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


  Route::get('/profile/billing', [ProfileController::class, 'billing'])->name('profile.billing');
});


Route::get('checkout-register', [CheckoutRegisteredUserController::class, 'checkoutCreate'])
  ->name('checkout.register');

Route::post('checkout-register', [CheckoutRegisteredUserController::class, 'checkoutStore']);

Route::get('/checkout/{packageId}', [TransactionController::class, 'checkout'])->name('checkout');
Route::get('/payment/success', [TransactionController::class, 'paymentSuccess'])->name('payment.success');
Route::get('/payment/cancel', [TransactionController::class, 'paymentCancel'])->name('payment.cancel');

Route::post('/webhook', [WebhookController::class, 'handle'])->name('webhook');




require __DIR__ . '/auth.php';
