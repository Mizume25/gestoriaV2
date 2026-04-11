<?php

namespace Database\Seeders;

use App\Models\Student;
use App\Models\Subject;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentSubjectSeeder extends Seeder
{

    public function run(): void
    {
        $students = Student::all();
        $required = Subject::where('elective_Subject', true)->get();


        foreach ($students as $student) {
            // 1. Datos
            $data = [];

            foreach ($required as $subject) {

                $rand = rand(0, 10);

                $data[] = [
                    'student_id' => $student->id,
                    'subject_id' => $subject->id,
                    'subject_grade' => $rand,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }

            DB::table('students_subjects')->insert($data);
        }


        // 2. Asignar SOLO UNA optativa a 20 estudiantes aleatorios
        $randomStudents = Student::inRandomOrder()->limit(20)->get();
        $electives = Subject::where('elective_Subject', false)->get();

        foreach ($randomStudents as $student) {
            // Seleccionamos una única materia aleatoria de la colección
            $subject = $electives->random();

            DB::table('students_subjects')->insert([
                'student_id'    => $student->id,
                'subject_id'    => $subject->id, // Solo este ID
                'subject_grade' => rand(0, 10),
                'created_at'    => now(),
                'updated_at'    => now(),
            ]);
        }
    }
}
