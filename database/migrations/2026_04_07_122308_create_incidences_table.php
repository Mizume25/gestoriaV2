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
        Schema::create('incidences', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('student_id');

             $table->foreign('student_id')
            ->references('id')
            ->on('students')
            ->onDelete('restrict')
            ->onUpdate('cascade');
            $table->date('data');
            $table->enum('type', ['Light', 'Warning', 'Serious']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('incidences');
    }
};
