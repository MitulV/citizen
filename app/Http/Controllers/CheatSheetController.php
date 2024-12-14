<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CheatSheetController extends Controller
{
  public function index(Request $request)
  {
    return redirect()->route('importantPeople');
  }

  public function importantPeople(Request $request)
  {
    return Inertia::render('CheatSheet/ImportantPeople', ['collapsedFromBackend' => $request->has('collapsed') ? $request->collapsed : false]);
  }

  public function importantDates(Request $request)
  {
    return Inertia::render('CheatSheet/ImportantDates', ['collapsedFromBackend' => $request->has('collapsed') ? $request->collapsed : false]);
  }

  public function govQuestions(Request $request)
  {
    return Inertia::render('CheatSheet/GovQuestions', ['collapsedFromBackend' => $request->has('collapsed') ? $request->collapsed : false]);
  }

  public function map(Request $request)
  {
    return Inertia::render('CheatSheet/Map', ['collapsedFromBackend' => $request->has('collapsed') ? $request->collapsed : false]);
  }

  public function glossary(Request $request)
  {
    return Inertia::render('CheatSheet/Glossary', ['collapsedFromBackend' => $request->has('collapsed') ? $request->collapsed : false]);
  }

  public function faq(Request $request)
  {
    return Inertia::render('CheatSheet/Faq', ['collapsedFromBackend' => $request->has('collapsed') ? $request->collapsed : false]);
  }
}
