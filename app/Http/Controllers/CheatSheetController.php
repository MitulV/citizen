<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CheatSheetController extends Controller
{
  public function index()
  {
    return redirect()->route('importantPeople');
  }

  public function importantPeople()
  {
    return Inertia::render('CheatSheet/ImportantPeople', []);
  }

  public function importantDates()
  {
    return Inertia::render('CheatSheet/ImportantDates', []);
  }

  public function govQuestions()
  {
    return Inertia::render('CheatSheet/GovQuestions', []);
  }

  public function map()
  {
    return Inertia::render('CheatSheet/Map', []);
  }

  public function glossary()
  {
    return Inertia::render('CheatSheet/Glossary', []);
  }

  public function faq()
  {
    return Inertia::render('CheatSheet/Faq', []);
  }
}
