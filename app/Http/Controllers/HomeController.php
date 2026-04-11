<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{   
    //Renderiza Pagina de Inicio
    public function __invoke()
    {
          return Inertia::render('welcome');
    }
}
