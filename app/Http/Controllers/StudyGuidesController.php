<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use App\Models\Topic;
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

  public function topicList($chapterId, $topicId = null)
  {
    $user = Auth::user();

    $chapters = Chapter::with('topics')->get();

    foreach ($chapters as $chapter) {
      foreach ($chapter->topics as $topic) {
        $userTopic = $topic->users()->where('user_id', $user->id)->first();
        $topic->is_completed_by_user = $userTopic ? $userTopic->pivot->status === 'completed' : false;
      }
    }

    // Logic for handling a specific topic if $topicId is provided
    if ($topicId !== null) {
      $topic = Topic::findOrFail($topicId);

      // Additional logic can be added here if needed

      return Inertia::render('StudyGuide/TopicDetail', [
        'topic' => $topic,
        'chapterId' => $chapterId,
      ]);
    }

    // Default rendering of the topic list
    return Inertia::render('StudyGuide/TopicList', [
      'chapters' => $chapters,
    ]);
  }
}
