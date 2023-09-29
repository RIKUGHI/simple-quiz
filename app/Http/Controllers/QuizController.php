<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class QuizController extends Controller
{
    function index() {
        return Inertia::render('Quiz/Page');
    }

    function create() {
        return Inertia::render('Quiz/Create');
    }

    function store(Request $request) {
        $request->validate([
            'title' => 'required',
            'questions.*.question' => 'required|string|max:255',
        ]);
        
        try {
            DB::transaction(function () use ($request) {
                $question = Question::create([
                    'title' => $request->title
                ]);
                
                            foreach ($request->questions as $value) {
                                $question->questionDetails()->create([
                                    'question' => $value['question'],
                                    'a' => $value['a'],
                                    'b' => $value['b'],
                                    'c' => $value['c'],
                                    'd' => $value['d'],
                                    'correct_answer' => $value['correct_answer'],
                                    'explain' => $value['explain']
                                ]);
                            }
            });

            return redirect('/quizzes');
        } catch (\Throwable $th) {
            return redirect('/quizzes')->with(['message' => $th->getMessage()]);
        }
    }

    function score($uuid) {
        return Inertia::render('Score');
    }
}
