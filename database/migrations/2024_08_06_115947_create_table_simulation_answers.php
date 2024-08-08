<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('simulation_answers', function (Blueprint $table) {
      $table->id();
      $table->foreignId('question_id')->constrained('simulation_questions')->onDelete('cascade');
      $table->text('text');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('table_simulation_answers');
  }
};
