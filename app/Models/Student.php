<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Student extends Model
{

    use HasFactory;

    //Modelo Student
    protected $fillable = [
        'grade',
        'enrollment',
        'user_id'
    ];

    //FUNCION
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function subjects()
    {
        // El segundo parámetro es el nombre de tu tabla intermedia
        return $this->belongsToMany(Subject::class, 'students_subjects');
    }

    public function grades()
    {

        return $this->belongsToMany(Subject::class, 'students_subjects')
            ->withPivot('subject_grade');
    }

    public function incidences()
    {
        // Un estudiante TIENE MUCHAS incidencias
        return $this->hasMany(Incidence::class);
    }
}
