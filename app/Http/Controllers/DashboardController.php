<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $chaptersWithTopics = Chapter::where('step', 2)
            ->with('topics')
            ->get();

        foreach ($chaptersWithTopics as $chapter) {
            foreach ($chapter->topics as $topic) {
                $userTopic = $topic->users()->where('user_id', $user->id)->first();
                $topic->is_completed_by_user = $userTopic ? $userTopic->pivot->status === 'completed' : false;
            }
        }


        $chaptersWithTests = Chapter::where('step', 2)
            ->with(['tests', 'tests.users' => function ($query) use ($user) {
                $query->where('user_id', $user->id);
            }])
            ->get();

        foreach ($chaptersWithTests as $chapter) {
            foreach ($chapter->tests as $test) {
                $userTest = $test->users->first(); // Since we've already filtered by user_id, just get the first (and only) result
                $test->is_completed_by_user = $userTest ? $userTest->pivot->status === 'completed' : false;
                unset($test->users); // Optional: Remove users relationship data to keep the response clean
            }
        }

        return Inertia::render('Dashboard', [
            'chaptersWithTopics' => $chaptersWithTopics,
            'chaptersWithTests' => $chaptersWithTests
        ]);
    }
}
