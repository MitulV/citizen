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

      // Get the first flashcard id for the chapter
      $firstFlashcardId = $chapter->flashcards->first()->id ?? null;
      $chapter->first_flashcard_id = $firstFlashcardId;

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

  public function flashcardList(Request $request, $chapterId, $flashcardId = null)
  {
    $user = Auth::user();
    $nextFlashcard = null;

    $accorditionIndex = $request->has('accorditionIndex') ? $request->accorditionIndex : 0;

    // Check if a flashcard should be marked as complete
    if ($request->has('complete') && $flashcardId) {
      $currentFlashcard = Flashcard::findOrFail($flashcardId);
      $currentFlashcard->users()->syncWithoutDetaching([
        $user->id => [
          'status' => 'completed'
        ]
      ]);

      // Find the next flashcard in the same chapter
      $nextFlashcard = Flashcard::where('chapter_id', $chapterId)
        ->where('id', '>', $flashcardId)
        ->first();

      // If there is no next flashcard in the same chapter, find the first flashcard of the next chapter
      if (!$nextFlashcard) {
        $nextChapter = Chapter::where('id', '>', $chapterId)->orderBy('id')->first();
        if ($nextChapter) {
          $nextFlashcard = Flashcard::where('chapter_id', $nextChapter->id)->orderBy('id')->first();
        }
      }
    }

    $chapters = Chapter::where('step', 2)
      ->with('flashcards.users')
      ->get();

    foreach ($chapters as $chapter) {
      $allCompleted = true;

      // Get the first flashcard id for the chapter
      $firstFlashcardId = $chapter->flashcards->first()->id ?? null;
      $chapter->first_flashcard_id = $firstFlashcardId;

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

    // If next flashcard is found after marking as complete, use it as the current flashcard
    if ($nextFlashcard) {
      $flashcard = $nextFlashcard;
      $flashcardId = $nextFlashcard->id;
    } else {
      $flashcardId = $flashcardId ?? 1;
      $flashcard = Flashcard::findOrFail($flashcardId);
    }

    $previousFlashcard = Flashcard::where('chapter_id', $chapterId)
      ->where('id', '<', $flashcardId)
      ->orderBy('id', 'desc')
      ->first();

    $nextFlashcard = Flashcard::where('chapter_id', $chapterId)
      ->where('id', '>', $flashcardId)
      ->first();

    // If no next flashcard in the current chapter, find the first flashcard of the next chapter
    if (!$nextFlashcard) {
      $nextChapter = Chapter::where('id', '>', $chapterId)->orderBy('id')->first();
      if ($nextChapter) {
        $nextFlashcard = Flashcard::where('chapter_id', $nextChapter->id)->orderBy('id')->first();
      }
    }

    return Inertia::render('Flashcard/FlashcardDetail', [
      'chapters' => $chapters,
      'flashcard' => $flashcard,
      'chapterId' => $chapterId,
      'previousFlashcardId' => $previousFlashcard ? $previousFlashcard->id : null,
      'nextFlashcardId' => $nextFlashcard ? $nextFlashcard->id : null,
      'accorditionIndex' => $accorditionIndex
    ]);
  }
}
