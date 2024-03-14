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
        Schema::create('table_siswa', function (Blueprint $table) {
            $table->integer('nis');
            $table->string('nama_siswa');
            $table->string('jenis_kelamin');
            $table->string('alamat');
            $table->string('nohp_ortu');
            $table->string('tempat_lahir');
            $table->date('tanggal_lahir');
            $table->string('kelas');
            $table->string('foto');
            $table->string('password');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_siswa');
    }
};
