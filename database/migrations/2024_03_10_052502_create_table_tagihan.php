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
        Schema::create('table_tagihan', function (Blueprint $table) {
            $table->id('id_tagihan');
            $table->string('id_kategori');
            $table->integer('nis');
            $table->integer('jumlah_tagihan');
            $table->date('tanggal_jatuh_tempo');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_tagihan');
    }
};