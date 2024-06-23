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
      ->with('topics.users')
      ->get();

    foreach ($chapters as $chapter) {
      $allCompleted = true;
      foreach ($chapter->topics as $topic) {
        $userTopic = $topic->users->where('id', $user->id)->first();
        if ($userTopic) {
          $topic->status = $userTopic->pivot->status;
        } else {
          $topic->status = 'not_attempted';
          $allCompleted = false; // If any topic is not attempted, the chapter is not fully completed
        }

        if ($topic->status !== 'completed') {
          $allCompleted = false; // If any topic is not completed, the chapter is not fully completed
        }

        unset($topic->users); // Optional: Remove users relationship data to keep the response clean
      }
      $chapter->allTopicsCompleted = $allCompleted;
    }


    return Inertia::render('StudyGuide/Index', [
      'chapters' => $chapters
    ]);
  }

  public function topicList($chapterId, $topicId = null)
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

    $topicId == $topicId ?? 1;

    $topic = Topic::findOrFail($topicId);

    $previousTopic = Topic::where('chapter_id', $chapterId)
      ->where('id', '<', $topicId)
      ->orderBy('id', 'desc')
      ->first();

    $nextTopic = Topic::where('chapter_id', $chapterId)
      ->where('id', '>', $topicId)
      ->first();

    return Inertia::render('StudyGuide/TopicDetail', [
      'chapters' => $chapters,
      'topic' => $topic,
      'chapterId' => $chapterId,
      'previousTopicId' => $previousTopic ? $previousTopic->id : null,
      'nextTopicId' => $nextTopic ? $nextTopic->id : null,
    ]);
  }

  public function completeTopic(Request $request, $chapterId, $topicId)
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

    // Mark the topic as completed for the user
    $currentTopic = Topic::findOrFail($topicId);
    $currentTopic->users()->updateExistingPivot($user->id, ['status' => 'completed']);

    $nextTopic = Topic::where('chapter_id', $chapterId)
      ->where('id', '>', $topicId)
      ->first();

    $topicAfterNext = $nextTopic ? Topic::where('chapter_id', $chapterId)
      ->where('id', '>', $nextTopic->id)
      ->first()
      : null;


    return Inertia::render('StudyGuide/TopicDetail', [
      'chapters' => $chapters,
      'topic' => $nextTopic,
      'chapterId' => $chapterId,
      'previousTopicId' => $currentTopic->id,
      'nextTopicId' => $topicAfterNext ? $topicAfterNext->id : null,
    ]);
  }
}
