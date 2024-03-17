<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class HomeController extends Controller
{
    public function dashboard()
    {
        $data = [];

        return view('dashboard', compact('data'));
    }

    public function index()
    {
        $data = User::get();

        return view('index', compact('data'));
    }

    public function create()
    {
        return view('create');
    }

    public function tambah(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama'     => 'required',
            'email'    => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withInput()->withErrors($validator);
        }

        $data = [
            'name'     => $request->nama,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ];

        User::create($data);

        return redirect()->route('user.index');
    }
}