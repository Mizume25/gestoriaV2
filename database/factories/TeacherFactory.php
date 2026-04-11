<?php

namespace Database\Factories;

use App\Models\Teacher;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Teacher>
 */
class TeacherFactory extends Factory
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
            'hire_date' => $this->faker->date('Y-m-d', now()),
            'salary' => $this->faker->randomFloat(2, 1200, 4000),
        ];
    }
}
