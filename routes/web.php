<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', HomeController::class)->name('home');

Route::middleware(['auth'])->group(function () {
    
    Route::get('dashboard', [IndexController::class, 'index'])->name('dashboard');
});



// Ruta del Dashboard

//Perfil
Route::get('/home/show/{id}', [IndexController::class , 'show'])->name('home.show');



//Incidencias
Route::get('/home/incidences', [IndexController::class, 'incidences'])->name('home.incidences');

Route::get('/student/{id}', [IndexController::class, 'getGrades']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
