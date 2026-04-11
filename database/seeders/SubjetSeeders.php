<?php

namespace Database\Seeders;

use App\Models\Subject;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use function Pest\Laravel\seed;

class SubjetSeeders extends Seeder
{
    private function seedSubject ()
    {
        return $subject = [
            "Mates" => true,
            "Lengua" => true,
            "Historia" => true,
            "Ciencias" => true,
            "Robotica" => false,
            "Teatro" => false,
            "Coro" => false,
        ];
    }
    public function run(): void
    {
        //Cargo Objeto
        $subjects = $this->seedSubject();

        //Recorremos el array y creamos el objeto
        foreach ($subjects as $subject => $value)
        {
            $materia = new Subject();
            $materia->name_subject = $subject;
            $materia->elective_Subject = $value;
            $materia->save();
        }


    }
}
