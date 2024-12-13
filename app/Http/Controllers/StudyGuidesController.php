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

    if ($request->has('action') && $request->action == 'prev') {
      if ($topicId) {
        // Find the current topic
        $currentTopic = Topic::findOrFail($topicId);

        // Find the previous topic
        $previousTopic = Topic::where('chapter_id', $chapterId)
          ->where('id', '<', $topicId)
          ->orderBy('id', 'desc') // Get the most recent previous topic
          ->first();

        // If no previous topic exists in the current chapter, check the previous chapter
        if (!$previousTopic) {
          $previousChapter = Chapter::where('id', '<', $chapterId)
            ->orderBy('id', 'desc') // Go to the most recent previous chapter
            ->first();

          // If previous chapter exists, fetch its last topic
          if ($previousChapter) {
            $previousTopic = Topic::where('chapter_id', $previousChapter->id)
              ->orderBy('id', 'desc') // Get the last topic in the previous chapter
              ->first();
            $chapterId = $previousChapter->id;
          }
        }

        $previousTopicId = $previousTopic ? $previousTopic->id : null;

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

        return Inertia::render('StudyGuide/TopicDetail', [
          'chapters' => $chapters,
          'topic' => $currentTopic,
          'chapterId' => $chapterId,
          'previousTopicId' =>  $previousTopicId,
          'nextTopicId' => $currentTopic ? $currentTopic->id : null,
          'accorditionIndex' => $chapterId - 1,
        ]);
      }
    }


    // Check if a topic should be marked as complete
    if ($request->has('complete') && $topicId) {
      $currentTopic = Topic::findOrFail($topicId);
      $currentTopic->users()->syncWithoutDetaching([
        $user->id => [
          'status' => 'completed'
        ]
      ]);

      if ($topicId == 22) {

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
          'topic' => $currentTopic,
          'chapterId' => $chapterId,
          'previousTopicId' => $topicId - 1,
          'nextTopicId' =>   null,
          'accorditionIndex' => $accorditionIndex
        ]);
      }

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



    if (!$previousTopic && $topicId > 1) {
      // Fetch the previous chapter
      $previousChapter = Chapter::where('id', '<', $chapterId)
        ->orderBy('id', 'desc')
        ->first();

      if ($previousChapter) {
        // Fetch the last topic of the previous chapter
        $previousTopic = Topic::where('chapter_id', $previousChapter->id)
          ->orderBy('id', 'desc')
          ->first();
      }
    }

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
