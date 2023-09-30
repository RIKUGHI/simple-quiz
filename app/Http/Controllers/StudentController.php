<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller
{
    function index() {
        return Inertia::render('Student/Page', [
            'students' => User::query()->where('is_admin', 0)->get()
        ]);
    }

    function create() {
        return Inertia::render('Student/Create');
    }

    function store(Request $request): RedirectResponse {
        $request->validate([
            'name' => 'required|string|max:255',
            'nim' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', Rules\Password::defaults()],
        ]);

        User::create([
            'name' => $request->name,
            'nim' => $request->nim,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return redirect('/students');
    }
}
