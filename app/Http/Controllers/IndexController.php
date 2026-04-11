<?php

namespace App\Http\Controllers;

use App\Models\Incidence;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Teacher;
use App\Models\Student;
use App\Models\Subject;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class IndexController extends Controller
{
    //1. Funcion que filtra usuario admin
    private function filterUser($id): bool
    {
        return DB::table('teachers')->where('id', $id)->exists();
    }

    //2. Dashboard

    public function index()
    {

        // Funciones Prueba
        $students = Student::all();
        $teachers = Teacher::all();
        $incidences  = Incidence::all();
        // Traemos todos los profesores de la base de datos
        $rows = DB::table('users')
            ->select('users.id', 'users.name', 'users.last_name', 'users.age', 'students.grade', 'students.enrollment')
            ->join('students', 'users.id', '=', 'students.user_id')
            ->get();

        $results = User::with('student.grades')->get()->mapWithKeys(function ($user) {
            // Si el usuario no tiene registro de estudiante, devolvemos un array vacío
            $grades = $user->student
                ? $user->student->grades->pluck('pivot.subject_grade', 'name_subject')->toArray()
                : [];

            return [
                $user->id => $grades
            ];
        })->toArray();



        return Inertia::render('dashboard', [
            'students' => $students,
            'teachers' => $teachers,
            'rows' => $rows,
            'results' => $results,
            'incidences' => $incidences 
        ]);
    }

    //Perfil Unico
    public function show($id)
    {
        //Declaramos una variable y hacemos un query
        $profile = Teacher::where('user_id', $id)->first();

        //Activamos un boolean
        $role = true;

        $results = null;

        //Declaramos Incidencias
        $incidences = null;


        //En caso de que no haya perfil de profesor
        if (!$profile) {

            //Hacemos un query Alternativo
            $profile = Student::where('user_id', $id)->firstOrFail();

            //Cargamos una funcion
            $profile->load('grades');

            $incidences = Incidence::where('student_id', $profile->id)->get();

            $results = $profile->grades->mapWithKeys(function ($subject) {
                return [
                    $subject->name_subject => $subject->pivot->subject_grade
                ];
            });

            $role = false;
        }

        return Inertia::render('home/show', [
            'profile'   => $profile,
            'role' => $role,
            'results' => $results,
            'incidences' => $incidences
        ]);
    }

    public function getGrades($id)
    {

        $results = Student::with('grades')->get()->mapWithKeys(function ($student) {
            return [
                $student->id => $student->grades->pluck('pivot.subject_grade', 'name_subject')->toArray()
            ];
        })->toArray();

        return Inertia::render('dashboard', compact('results'));
    }

    //Venta de Incidencias
    public function incidences()
    {
        return Inertia::render('incidences');
    }
}
