<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PracticeTestsController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $chaptersWithTests = Chapter::where('step', 2)
            ->with('tests.users')
            ->get();

        foreach ($chaptersWithTests as $chapter) {
            foreach ($chapter->tests as $test) {
                $userTest = $test->users->where('id', $user->id)->first();
                $test->is_completed_by_user = $userTest ? $userTest->pivot->status === 'completed' : false;
                unset($test->users); // Optional: Remove users relationship data to keep the response clean
            }
        }

        return Inertia::render('PracticeTest/Index', [
            'chapters' => $chaptersWithTests
        ]);
    }
}
