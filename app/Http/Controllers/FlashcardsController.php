<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FlashcardsController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $chaptersWithFlashcards = Chapter::where('step', 2)
            ->with('flashcards.users')
            ->get();

        foreach ($chaptersWithFlashcards as $chapter) {
            foreach ($chapter->flashcards as $flashcard) {
                $userFlashcard = $flashcard->users->where('id', $user->id)->first();
                $flashcard->is_completed_by_user = $userFlashcard ? $userFlashcard->pivot->status === 'completed' : false;
                unset($flashcard->users); // Optional: Remove users relationship data to keep the response clean
            }
        }

        return Inertia::render('Flashcard/Index', [
            'chapters' => $chaptersWithFlashcards
        ]);
    }
}
