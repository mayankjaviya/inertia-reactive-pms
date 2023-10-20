<?php

namespace App\Http\Controllers;

use App\Models\Type;
use Illuminate\Http\Request;

class TypeController extends Controller
{
    public function store(Request $request){
        $request->validate([
            'name' => 'required',
            'color' => 'required',
        ]);

        Type::create($request->all());

        return to_route('assets.index');
    }
}
