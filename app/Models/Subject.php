<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{   
    //Modelo Subject
    protected $fillable = [
        'name_subject',
        'elective_Subject'
    ];
}
