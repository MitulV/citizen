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
    Schema::create('simulation_questions', function (Blueprint $table) {
      $table->id();
      $table->foreignId('test_id')->constrained('simulation_tests')->onDelete('cascade');
      $table->text('text');
      $table->foreignId('correct_answer_id')->nullable()->constrained('simulation_answers');
      $table->text('explanation')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('table_simulation_questions');
  }
};
