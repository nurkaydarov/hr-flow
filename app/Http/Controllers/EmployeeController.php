<?php

namespace App\Http\Controllers;

use App\Http\Requests\Employee\StoreRequest;
use App\Http\Requests\Employee\UpdateRequest;
use App\Models\Position;
use Inertia\Inertia;
use Intervention\Image\Image;
use App\Models\Department;
use App\Models\Employee;
use Illuminate\Http\Request;
use function Termwind\render;


class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = Employee::with('department')->get()->map(function ($employee){
            return array_merge($employee->toArray(), ['avatar_url' => $employee->getImage()]);
        });

        return Inertia::render('Employee/Index', ['employees' => $employees]);
            //view('hr.employees.index', compact('employees'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $departments = Department::all();
        $positions = Position::query()->pluck('id', 'name');
        return Inertia::render('Employee/Add', compact('departments', 'positions'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {

        $data = $request->validated();
        $data['avatar'] = Employee::uploadImage($request);

        $employee = Employee::query()->firstOrCreate($data);
        $employee->positions()->sync($request->positions);
       /* if($request->hasFile('avatar'))
        {
            $employee->addMediaFromRequest('avatar')->toMediaCollection('avatars');

        }
        /*



        /*if($request->hasFile('avatar')){
            $avatar = $request->file('avatar');
            $folder = date('Y-m-d');
            $fileName = time() . "." . $avatar->getClientOriginalExtension();

            $image = $avatar->store("avatars/${folder}/${fileName}");
            dd($image);
        }
        dd($data);*/


        return redirect()->route('employees.index')->with('success', 'Сотрудник создан');
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        $employee->load('department', 'positions');
        $employee->avatar_url = $employee->getImage();
        return Inertia::render('Employee/Profile', ['employee' => $employee,]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $employee = Employee::with('department', 'positions')->findOrFail($id);
        $positions = Position::query()->pluck('id', 'name');
        $departments = Department::all();
        return Inertia::render('Employee/Edit', compact('employee', 'positions', 'departments'));
        //return view('hr.employees.edit', compact('employee', 'departments', 'positions'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Employee $employee)
    {
        $data = $request->validated();

        if($file = Employee::uploadImage($request, $employee->avatar))
        {
            $data['avatar'] = $file;
        }


        /*
         * $image = '';
        if($request->hasFile('avatar')){
            $avatar = $request->file('avatar');
            $folder = date('Y-m-d');
            $fileName = time() . "." . $avatar->getClientOriginalExtension();

            $image = $avatar->store("avatars/${folder}");
            //dd($image);
        }
        //dd($data);
        $data['avatar'] = $image;
        */
        //$employee = Employee::query()->findOrFail($id);
       /* if($request->hasFile('avatar')){
            if($employee->getFirstMedia('avatars'))
            {
                $employee->clearMediaCollection('avatars');
            }
            $avatar = $request->avatar;
            $employee->addMediaFromRequest('avatar')->toMediaCollection('avatars');
        }
       */

        $employee->update($data);
        $employee->positions()->sync($request->positions);
        session()->flash('success', 'Employee has been updated');

        return redirect()->route('employees.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $employee = Employee::query()->findOrFail($id);
        $employee->delete();
        session()->flash('success','The employee ' . $employee->firstname . ' was successfully deleted');
        return redirect()->route('employees.index');
    }
}
