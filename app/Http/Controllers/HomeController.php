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

        return view('admin.dashboard', compact('data'));
    }

    public function index()
    {
        $data = User::get();

        return view('admin.index', compact('data'));
    }

    public function create()
    {
        return view('admin.create');
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
    public function edit(Request $request, $id)
    {
        $data = User::find($id);
        return view('admin.edit', compact('data')); // Perbaiki penulisan fungsi compact
    }
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nama'     => 'required',
            'email'    => 'required|email',
            'password' => 'nullable',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withInput()->withErrors($validator);
        }

        $data['name']  = $request->nama;
        $data['email'] = $request->email;
        if ($request->password) {
            $data['password'] = Hash::make($request->password);
        }
        User::whereId($id)->update($data);
        return redirect()->route('user.index');
    }
    public function delete(Request $request, $id)
    {
        $data = User::find($id);

        if ($data) {
            $data->delete();
        }
        return redirect()->route('user.index');
    }
}
