<?php

namespace Database\Factories;

use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;

use function Illuminate\Support\years;

/**
 * @extends Factory<Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
             'grade' => $this->faker->randomElement(['Year 1', 'Year 2', 'Year 3', 'Year 4']),
             'enrollment' => $this->faker->date('Y-m-d', now()),
        ];
    }
}
