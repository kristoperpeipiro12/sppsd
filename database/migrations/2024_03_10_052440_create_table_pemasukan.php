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
        Schema::create('table_pemasukan', function (Blueprint $table) {
            $table->id('id_pemasukan');
            $table->string('id_kategori');
            $table->integer('nis');
            $table->dateTime('tanggal');
            $table->integer('pemasukan');
            $table->string('jenis_pemasukan');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_pemasukan');
    }
};