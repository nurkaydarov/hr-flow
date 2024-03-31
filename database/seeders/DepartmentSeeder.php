<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Department::query()->insert([
            ['name' => "Терапевтическое"],
            ['name' => "Хирургическое"],
            ['name' => "Клинико-диагностическое"],
            ['name' => "Гинекологиеческое"],
            ['name' => "Дневной Стационар"],
            ['name' => "Неотложная помощь"],
        ]);
    }
}
