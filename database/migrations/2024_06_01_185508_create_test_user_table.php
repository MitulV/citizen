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
    Schema::create('test_user', function (Blueprint $table) {
      $table->id();
      $table->foreignId('user_id')->constrained()->onDelete('cascade');
      $table->foreignId('test_id')->constrained()->onDelete('cascade');
      $table->enum('status', ['not_attempted', 'completed', 'failed'])->default('not_attempted');
      $table->integer('total_correct')->nullable();
      $table->integer('total_wrong')->nullable();
      $table->integer('total_time_taken')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('test_user');
  }
};
