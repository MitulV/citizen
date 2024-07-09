<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
  use HasFactory;

  protected $fillable = ['chapter_id', 'name', 'content'];
  public $timestamps = false;

  public function chapter()
  {
    return $this->belongsTo(Chapter::class);
  }

  public function users()
  {
    return $this->belongsToMany(User::class)->withPivot('status')->withTimestamps();
  }
}
