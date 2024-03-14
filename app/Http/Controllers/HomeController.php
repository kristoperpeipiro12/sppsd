<?php

namespace App\Http\Controllers;

use App\Models\User;

class HomeController extends Controller
{
    public function dashboard()
    {
        $data = []; // Data yang ingin Anda teruskan ke view

        return view('dashboard', compact('data'));
    }
    public function index()
    {
        $data = User::get();

        return view('index', compact('data'));
    }
}
