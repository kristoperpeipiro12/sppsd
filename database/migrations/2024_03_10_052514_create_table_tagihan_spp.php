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
        Schema::create('table_tagihan_spp', function (Blueprint $table) {
            $table->id('id_spp');
            $table->integer('nis');
            $table->integer('tagihan_januari');
            $table->integer('tagihan_februari');
            $table->integer('tagihan_maret');
            $table->integer('tagihan_april');
            $table->integer('tagihan_mei');
            $table->integer('tagihan_juni');
            $table->integer('tagihan_juli');
            $table->integer('tagihan_agustus');
            $table->integer('tagihan_september');
            $table->integer('tagihan_oktober');
            $table->integer('tagihan_november');
            $table->integer('tagihan_desember');
            $table->integer('total_tagihan');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_tagihan_spp');
    }
};