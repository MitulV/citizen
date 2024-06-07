<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    use HasFactory;

    protected $fillable = ['chapter_id', 'name', 'image', 'info','step'];

    public function chapter()
    {
        return $this->belongsTo(Chapter::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class)->withPivot('status')->withTimestamps();
    }

    public function questions()
    {
        return $this->hasMany(Question::class);
    }
}
