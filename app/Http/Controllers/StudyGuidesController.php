<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class StudyGuidesController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $chapters = Chapter::where('step', 2)
            ->with('topics')
            ->get();

        foreach ($chapters as $chapter) {
            foreach ($chapter->topics as $topic) {
                $userTopic = $topic->users()->where('user_id', $user->id)->first();
                $topic->is_completed_by_user = $userTopic ? $userTopic->pivot->status === 'completed' : false;
            }
        }

        return Inertia::render('StudyGuide/Index', [
            'chapters' => $chapters
        ]);
    }
}
