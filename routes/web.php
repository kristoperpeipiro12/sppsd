<?php

// use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\MasterData\DataUser\HomeController;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
 */

// Route::get('/', function () {
//     return view('welcome');
// });
use Illuminate\Support\Facades\Route;

// Route::get('/admin/dashboard', [HomeController::class, 'index'])->name('admin.dashboard');
Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login-proses', [LoginController::class, 'login_proses'])->name('login-proses');
Route::get('/logout', [LoginController::class, 'logout'])->name('logout');

// Route::group(['prefix' => 'admin', 'middleware' => 'auth', 'as' => 'admin.'], function () {

Route::group(['prefix' => 'admin', 'middleware' => 'auth', 'as' => 'admin.'], function () {

    Route::get('/dashboard', [HomeController::class, 'dashboard'])->name('admin.dashboard');
    Route::get('/user', [HomeController::class, 'index'])->name('user.index');
    Route::get('/create', [HomeController::class, 'create'])->name('user.create');
    Route::post('/tambah', [HomeController::class, 'tambah'])->name('user.tambah');

    Route::get('/edit/{id}', [HomeController::class, 'edit'])->name('user.edit');
    Route::post('/update/{id}', [HomeController::class, 'update'])->name('user.update');
    Route::delete('/delete/{id}', [HomeController::class, 'delete'])->name('user.delete');
});
