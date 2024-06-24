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
    Schema::create('transactions', function (Blueprint $table) {
      $table->id();
      $table->string('stripe_checkout_id')->nullable();
      $table->unsignedBigInteger('user_id');
      $table->decimal('total_amount', 10, 2)->nullable();
      $table->unsignedBigInteger('package_id');
      $table->foreign('package_id')->references('id')->on('packages')->onDelete('cascade');
      $table->unsignedBigInteger('subscription_id')->after('package_id');
      $table->foreign('subscription_id')->references('id')->on('subscriptions')->onDelete('cascade');
      $table->enum('stripe_payment_status', ['paid', 'unpaid', 'no_payment_required'])->default('unpaid');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('transactions');
  }
};
