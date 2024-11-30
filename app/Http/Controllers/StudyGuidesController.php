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

  public function topicList(Request $request, $chapterId, $topicId = null)
  {
    $user = Auth::user();
    $accorditionIndex = $request->has('accorditionIndex') ? $request->accorditionIndex : 0;

    // Check if a topic should be marked as complete
    if ($request->has('complete') && $topicId) {
      $currentTopic = Topic::findOrFail($topicId);
      $currentTopic->users()->syncWithoutDetaching([
        $user->id => [
          'status' => 'completed'
        ]
      ]);

      // Find the next topic
      $nextTopic = Topic::where('chapter_id', $chapterId)
        ->where('id', '>', $topicId)
        ->first();

      if (!$nextTopic) {

        // Check for the next chapter
        $nextChapter = Chapter::where('id', '>', $chapterId)
          ->whereNotIn('id', [12, 13]) // Exclude chapters with IDs 12 and 13
          ->orderBy('id', 'asc') // Ensures we get the next chapter in ascending order
          ->first();

        $accorditionIndex++;

        // If next chapter exists, fetch its first topic
        if ($nextChapter) {
          $nextTopic = Topic::where('chapter_id', $nextChapter->id)
            ->orderBy('id', 'asc') // Ensures we get the first topic in the chapter
            ->first();

          $chapterId  = $chapterId + 1;
        }
      }


      $previousTopic = $currentTopic;

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

      return Inertia::render('StudyGuide/TopicDetail', [
        'chapters' => $chapters,
        'topic' => $nextTopic,
        'chapterId' => $chapterId,
        'previousTopicId' => $previousTopic ? $previousTopic->id : null,
        'nextTopicId' =>   $nextTopic ? $nextTopic->id : null,
        'accorditionIndex' => $accorditionIndex
      ]);
    }



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

    $topicId = $topicId ?? 1;
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
      'accorditionIndex' => $accorditionIndex
    ]);
  }
}
