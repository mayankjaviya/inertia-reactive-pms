<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\Type;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{

    public function index(){


        $tasks = Task::with('type:id,name,color')->select(['id', 'title', 'description', 'order', 'completed', 'section','type_id']);
        $allTasks = $tasks->get();
        $types = Type::all();
        $currentTasks = $allTasks->where('completed',false)->groupBy('section')->toArray();
        $completedTasks = $tasks->where('completed',1)->get()->toArray();

        return Inertia::render('Todo/Main', [
            'tasks' => $currentTasks,
            'completedTasks' => $completedTasks,
            'types' => $types
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
        ]);

        Task::create($request->all());

        return to_route('todo.index');
    }

    public function update(Request $request, $id)
    {

        Task::find($id)->update($request->all());

        return to_route('todo.index');
    }

    public function destroy($id)
    {
        Task::find($id)->delete();

        return to_route('todo.index');
    }

    public function assetsIndex(){

        $types = Type::withCount('tasks')->get();
        return Inertia::render('Assets/Assets', [
            'types' => $types
        ]);
    }
}
