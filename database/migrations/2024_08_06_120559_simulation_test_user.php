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
    Schema::create('simulation_test_user', function (Blueprint $table) {
      $table->id();
      $table->foreignId('user_id')->constrained()->onDelete('cascade');
      $table->foreignId('simulation_test_id')->constrained('simulation_tests')->onDelete('cascade');
      $table->enum('status', ['not_attempted', 'completed', 'failed'])->default('not_attempted');
      $table->integer('total_correct')->nullable();
      $table->integer('total_wrong')->nullable();
      $table->integer('total_time_taken')->nullable();
      $table->json('test_data')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('simulation_test_user');
  }
};
