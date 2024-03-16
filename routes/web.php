<?php

use App\Http\Controllers\HomeController;

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

Route::get('/', [HomeController::class, 'dashboard']);

Route::get('/user', [HomeController::class, 'index']);
Route::get('/create', [HomeController::class, 'create'])->name('user.create');
