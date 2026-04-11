<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Incidence extends Model
{
    //Modelo Incidente

    protected $fillable = [
        'student_id',
        'data',
        'type'
    ];

    public function grades()
    {

        return $this->belongsToMany(Subject::class, 'students_subjects')
            ->withPivot('subject_grade');
    }

    public function student()
    {
        // Una incidencia PERTENECE A un estudiante
        return $this->belongsTo(Student::class);
    }
}
