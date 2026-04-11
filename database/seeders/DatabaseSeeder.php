<?php

namespace Database\Seeders;

use App\Models\Student;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Support\Facades\DB;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        //1. Creamos Usuarios
        $users = User::factory(100)->create();
        $i = 0;
        //2. Creamos correo corporativo 
        foreach ($users as $user) {
            $newName = strtolower($user->name . '.' . $user->last_name . $user->id);

            $user->update([
                'email' => $newName . '@lumina.cat',
            ]);

            if (($i  + 1) % 10 == 0) {
                Teacher::factory()->create([
                    'user_id' => $user->id,
                   
                ]);
            } else {
                Student::factory()->create([
                    'user_id' => $user->id,
                ]);
            }

            $i++;
        }

        $this->call([
            SubjetSeeders::class,
            StudentSubjectSeeder::class,
            IncidenteSeeder::class
        ]);


        $studentUsers = DB::table('users')
            ->join('students', 'users.id', '=', 'students.user_id')
            ->get();

        foreach ($studentUsers as $studentUser)
        {
            
        }

        $this->command->info('Informacion creada con exito!');



    }
}
