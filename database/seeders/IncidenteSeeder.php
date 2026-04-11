<?php

namespace Database\Seeders;

use App\Models\Incidence;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IncidenteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $ids = DB::table('students_subjects')
            ->select('student_id') // Seleccionamos al ALUMNO
            ->groupBy('student_id') // Agrupamos por ALUMNO
            ->havingRaw('AVG(subject_grade) BETWEEN ? AND ?', [5, 7])
            ->pluck('student_id');

        //Crear Lights
        foreach ($ids as $id)
        {
            Incidence::create([
                'student_id' => $id,
                'data' => fake()->dateTimeBetween('-2 years', 'now')->format('Y-m-d'),
                'type' => 'Light',
            ]);
        }

        $ids = 0;

        $ids = DB::table('students_subjects')
            ->select('student_id') // Seleccionamos al ALUMNO
            ->groupBy('student_id') // Agrupamos por ALUMNO
            ->havingRaw('AVG(subject_grade) BETWEEN ? AND ?', [3, 4])
            ->pluck('student_id');

        //Crear Warnings
        foreach ($ids as $id)
        {
            Incidence::create([
                'student_id' => $id,
                'data' => fake()->dateTimeBetween('-2 years', 'now')->format('Y-m-d'),
                'type' => 'Warning',
            ]);
        }

        $ids = 0;

        $ids = DB::table('students_subjects')
            ->select('student_id') // Seleccionamos al ALUMNO
            ->groupBy('student_id') // Agrupamos por ALUMNO
            ->havingRaw('AVG(subject_grade) BETWEEN ? AND ?', [0, 2])
            ->pluck('student_id');

        //Crear Warnings
        foreach ($ids as $id)
        {
            Incidence::create([
                'student_id' => $id,
                'data' => fake()->dateTimeBetween('-2 years', 'now')->format('Y-m-d'),
                'type' => 'Serious',
            ]);
        }



    }
}
