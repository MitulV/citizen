<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use App\Models\Flashcard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FlashcardController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $user = Auth::user();

    $chapters = Chapter::where('step', 2)
      ->with('flashcards.users')
      ->get();

    foreach ($chapters as $chapter) {
      $allCompleted = true;
      foreach ($chapter->flashcards as $flashcard) {
        $userFlashcard = $flashcard->users->where('id', $user->id)->first();
        if ($userFlashcard) {
          $flashcard->status = $userFlashcard->pivot->status;
        } else {
          $flashcard->status = 'not_attempted';
          $allCompleted = false; // If any flashcard is not attempted, the chapter is not fully completed
        }

        if ($flashcard->status !== 'completed') {
          $allCompleted = false; // If any flashcard is not completed, the chapter is not fully completed
        }

        unset($flashcard->users); // Optional: Remove users relationship data to keep the response clean
      }
      $chapter->allFlashcardsCompleted = $allCompleted;
    }



    return Inertia::render('Flashcard/Index', [
      'chapters' => $chapters
    ]);
  }

  public function flashcardList($chapterId, $flashcardId = null)
  {
    $user = Auth::user();

    $chapters = Chapter::where('step', 2)
      ->with('flashcards.users')
      ->get();

    foreach ($chapters as $chapter) {
      foreach ($chapter->flashcards as $flashcard) {
        $userFlashcard = $flashcard->users->where('id', $user->id)->first();
        $flashcard->is_completed_by_user = $userFlashcard ? $userFlashcard->pivot->status === 'completed' : false;
        unset($flashcard->users); // Optional: Remove users relationship data to keep the response clean
      }
    }

    $flashcardId = $flashcardId ?? 1;

    $flashcard = Flashcard::findOrFail($flashcardId);

    $previousFlashcard = Flashcard::where('chapter_id', $chapterId)
      ->where('id', '<', $flashcardId)
      ->orderBy('id', 'desc')
      ->first();

    $nextFlashcard = Flashcard::where('chapter_id', $chapterId)
      ->where('id', '>', $flashcardId)
      ->first();

    return Inertia::render('Flashcard/FlashcardDetail', [
      'chapters' => $chapters,
      'flashcard' => $flashcard,
      'chapterId' => $chapterId,
      'previousFlashcardId' => $previousFlashcard ? $previousFlashcard->id : null,
      'nextFlashcardId' => $nextFlashcard ? $nextFlashcard->id : null,
    ]);
  }


  public function completeFlashcard(Request $request, $chapterId, $flashcardId)
  {
    $user = Auth::user();

    $chapters = Chapter::where('step', 2)
      ->with('flashcards.users')
      ->get();

    foreach ($chapters as $chapter) {
      foreach ($chapter->flashcards as $flashcard) {
        $userFlashcard = $flashcard->users->where('id', $user->id)->first();
        $flashcard->is_completed_by_user = $userFlashcard ? $userFlashcard->pivot->status === 'completed' : false;
        unset($flashcard->users); // Optional: Remove users relationship data to keep the response clean
      }
    }

    // Mark the flashcard as completed for the user
    $currentFlashcard = Flashcard::findOrFail($flashcardId);
    $currentFlashcard->users()->updateExistingPivot($user->id, ['status' => 'completed']);

    $nextFlashcard = Flashcard::where('chapter_id', $chapterId)
      ->where('id', '>', $flashcardId)
      ->first();

    $flashcardAfterNext = $nextFlashcard ? Flashcard::where('chapter_id', $chapterId)
      ->where('id', '>', $nextFlashcard->id)
      ->first()
      : null;

    return Inertia::render('StudyGuide/FlashcardDetail', [
      'chapters' => $chapters,
      'flashcard' => $nextFlashcard,
      'chapterId' => $chapterId,
      'previousFlashcardId' => $currentFlashcard->id,
      'nextFlashcardId' => $flashcardAfterNext ? $flashcardAfterNext->id : null,
    ]);
  }


  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(Flashcard $flashcard)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Flashcard $flashcard)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Flashcard $flashcard)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Flashcard $flashcard)
  {
    //
  }
}
