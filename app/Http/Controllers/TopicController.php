<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use App\Models\Topic;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TopicController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index() {}

  /**
   * Show the form for creating a new resource.
   */
  public function create(Request $request)
  {
    return Inertia::render('CreateTopic', ['topicId' => $request->topicId, 'chapterId' => $request->chapterId]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {

    $topic = Topic::find($request->topicId);
    $topic->update([
      'content' => $request->content
    ]);


    return Inertia::location(route('topicList', [
      'chapterId' => $request->chapterId,
      'topicId' => $request->topicId
    ]));
  }

  /**
   * Display the specified resource.
   */
  public function show(Topic $topic)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Request $request)
  {
    $topic = Topic::find($request->topicId);
    return Inertia::render('EditTopic', ['topicId' => $request->topicId, 'chapterId' => $request->chapterId, 'existingContent' => $topic->content]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request)
  {
    $topic = Topic::find($request->topicId);
    $topic->update([
      'content' => $request->content
    ]);


    return Inertia::location(route('topicList', [
      'chapterId' => $request->chapterId,
      'topicId' => $request->topicId
    ]));
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Topic $topic)
  {
    //
  }
}
