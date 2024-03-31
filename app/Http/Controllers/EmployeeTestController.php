<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class EmployeeTestController extends Controller
{
    public function index()
    {
        return Inertia::render('Employee/Index');
    }
}
