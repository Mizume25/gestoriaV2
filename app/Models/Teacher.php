<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory; 

class Teacher extends Model
{   
    use HasFactory;

    //Modelo Teacher
    protected $fillable = [
        'grade',
        'hire_date',
        'salary',
        'user_id'
    ];

    //FUNCION
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
