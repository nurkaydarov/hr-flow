<?php

namespace App\Http\Controllers;

use App\Http\Requests\Department\StoreRequest;
use App\Http\Requests\Department\UpdateRequest;
use App\Models\Department;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Department::all();
        return Inertia::render('Department/Index', ['departments' => $data]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('hr.departments.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $data = $request->validated();

        Department::query()->firstOrCreate($data);
        session()->flash('success', 'Отделение добавлено');
        return redirect()->route('departments.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $department = Department::query()->find($id);
        return view('hr.departments.show', compact('department'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $department = Department::query()->find($id);
        return view('hr.departments.edit', compact('department'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Department $department)
    {
        //$department = Department::query()->findOrFail($id);
        $data = $request->validated();
        $department->update($data);
        $request->session()->flash('success', 'Department has been updated');
        return redirect()->route('departments.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( string $id)
    {
        $department = Department::query()->findOrFail($id);
        $department->delete();
        session()->flash('success', 'Department has been deleted');
        return redirect()->route('departments.index');
    }
}
