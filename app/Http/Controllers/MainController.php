<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Employee;
use App\Models\Position;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MainController extends Controller
{
    public function index()
    {
        $data = [];
        $data['employees_count'] = Employee::all()->count();
        $data['departments_count'] = Department::all()->count();
        $data['positions_count'] = Position::all()->count();
        return Inertia::render('Main', ['data' => $data]);
    }
}
