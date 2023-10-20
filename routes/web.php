<?php

use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

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

Route::inertia('/', 'Welcome');

Route::get('/todo', [TaskController::class,'index'])->name('todo.index');
Route::post('/todo', [TaskController::class,'store'])->name('todo.store');
Route::put('/todo/{id}', [TaskController::class,'update'])->name('todo.update');
Route::delete('/todo/{id}', [TaskController::class,'destroy'])->name('todo.destroy');
