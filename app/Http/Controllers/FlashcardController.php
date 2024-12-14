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
  public function index(Request $request)
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
      'chapters' => $chapters,
      'collapsedFromBackend' => $request->has('collapsed') ? $request->collapsed : false
    ]);
  }

  public function flashcardList(Request $request, $chapterId, $flashcardId = null)
  {
    $user = Auth::user();
    $accorditionIndex = $request->has('accorditionIndex') ? $request->accorditionIndex : 0;

    if ($request->has('action') && $request->action == 'prev') {
      if ($flashcardId) {
        // Find the current flashcard
        $currentFlashcard = Flashcard::findOrFail($flashcardId);

        // Find the previous flashcard
        $previousFlashcard = Flashcard::where('chapter_id', $chapterId)
          ->where('id', '<', $flashcardId)
          ->orderBy('id', 'desc') // Get the most recent previous topic
          ->first();

        // If no previous flashcard exists in the current chapter, check the previous chapter
        if (!$previousFlashcard) {
          $previousChapter = Chapter::where('id', '<', $chapterId)
            ->orderBy('id', 'desc') // Go to the most recent previous chapter
            ->first();

          // If previous chapter exists, fetch its last flashcard
          if ($previousChapter) {
            $previousFlashcard = Flashcard::where('chapter_id', $previousChapter->id)
              ->orderBy('id', 'desc') // Get the last flashcard in the previous chapter
              ->first();
            $chapterId = $previousChapter->id;
          }
        }

        $previousFlashcardId = $previousFlashcard ? $previousFlashcard->id : null;
        // Fetch chapters with their topics and users for rendering
        $chapters = Chapter::where('step', 2)
          ->with('topics.users')
          ->get();

        // Process chapter topics for status
        foreach ($chapters as $chapter) {
          $allCompleted = true;
          foreach ($chapter->topics as $topic) {
            $userTopic = $topic->users->where('id', $user->id)->first();
            if ($userTopic) {
              $topic->status = $userTopic->pivot->status;
            } else {
              $topic->status = 'not_attempted';
              $allCompleted = false;
            }

            if ($topic->status !== 'completed') {
              $allCompleted = false;
            }

            unset($topic->users); // Optional cleanup
          }
          $chapter->allTopicsCompleted = $allCompleted;
        }

        return Inertia::render('Flashcard/FlashcardDetail', [
          'chapters' => $chapters,
          'flashcard' => $currentFlashcard,
          'chapterId' => $chapterId,
          'previousFlashcardId' => $previousFlashcardId,
          'nextFlashcardId' => $currentFlashcard ? $currentFlashcard->id : null,
          'accorditionIndex' => $chapterId - 1
        ]);
      }
    }

    // Check if a flashcard should be marked as complete
    if ($request->has('complete') && $flashcardId) {
      $currentFlashcard = Flashcard::findOrFail($flashcardId);
      $currentFlashcard->users()->syncWithoutDetaching([
        $user->id => [
          'status' => 'completed'
        ]
      ]);

      //dd($flashcardId);
      // Find the next topic
      $nextFlashcard = Flashcard::where('chapter_id', $chapterId)
        ->where('id', '>', $flashcardId)
        ->first();
      //dd($nextFlashcard);

      if (!$nextFlashcard) {

        // Check for the next chapter
        $nextChapter = Chapter::where('id', '>', $chapterId)
          ->whereNotIn('id', [12, 13]) // Exclude chapters with IDs 12 and 13
          ->orderBy('id', 'asc') // Ensures we get the next chapter in ascending order
          ->first();

        $accorditionIndex++;

        // If next chapter exists, fetch its first topic
        if ($nextChapter) {
          $nextFlashcard = Flashcard::where('chapter_id', $nextChapter->id)
            ->orderBy('id', 'asc') // Ensures we get the first topic in the chapter
            ->first();

          $chapterId  = $chapterId + 1;
        }
      }

      $previousFlashcard = $currentFlashcard;

      $chapters = Chapter::where('step', 2)
        ->with('topics.users')
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

      return Inertia::render('Flashcard/FlashcardDetail', [
        'chapters' => $chapters,
        'flashcard' => $nextFlashcard,
        'chapterId' => $chapterId,
        'previousFlashcardId' => $previousFlashcard ? $previousFlashcard->id : null,
        'nextFlashcardId' => $nextFlashcard ? $nextFlashcard->id : null,
        'accorditionIndex' => $accorditionIndex
      ]);
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

    $flashcardId = $flashcardId ?? 1;
    $flashcard = Flashcard::findOrFail($flashcardId);

    $previousFlashcard = Flashcard::where('chapter_id', $chapterId)
      ->where('id', '<', $flashcardId)
      ->orderBy('id', 'desc')
      ->first();



    if (!$previousFlashcard && $flashcardId > 1) {
      // Fetch the previous chapter
      $previousChapter = Chapter::where('id', '<', $chapterId)
        ->orderBy('id', 'desc')
        ->first();

      if ($previousChapter) {
        // Fetch the last topic of the previous chapter
        $previousFlashcard = Flashcard::where('chapter_id', $previousChapter->id)
          ->orderBy('id', 'desc')
          ->first();
      }
    }

    $nextFlashcard = Flashcard::where('chapter_id', $chapterId)
      ->where('id', '>', $flashcardId)
      ->first();

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
