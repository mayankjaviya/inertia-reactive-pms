<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{

    public function index(){


        $tasks = Task::select(['id', 'title', 'description', 'order', 'completed', 'section']);
        $allTasks = $tasks->get();
        $currentTasks = $allTasks->where('completed',false)->groupBy('section')->toArray();
        $completedTasks = $tasks->where('completed',1)->get()->toArray();

        return Inertia::render('Todo/Todo', [
            'tasks' => $currentTasks,
            'completedTasks' => $completedTasks
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
}
