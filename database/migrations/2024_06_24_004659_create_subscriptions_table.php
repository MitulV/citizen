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
    Schema::create('subscriptions', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('user_id');
      $table->unsignedBigInteger('package_id');
      $table->date('start_date');
      $table->date('end_date');
      $table->boolean('is_active')->default(false);
      $table->timestamps();

      $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
      $table->foreign('package_id')->references('id')->on('packages')->onDelete('cascade');
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('subscriptions');
  }
};
