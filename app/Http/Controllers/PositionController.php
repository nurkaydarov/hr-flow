<?php

namespace App\Http\Controllers;

use App\Http\Requests\Employee\UpdateRequest;
use App\Http\Requests\Position\StoreRequest;
use App\Models\Employee;
use App\Models\Position;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PositionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->search;
        $positions = Position::query()->when($search, function ($query) use ($search) {
            $query->where('name', 'like', "%{$search}%");
        })->get();
        return Inertia::render('Positions/Index', ['positions' => $positions]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('hr.positions.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        Position::query()->firstOrCreate($data);
        $request->session()->flash('success', 'The position was successfully added');
        return redirect()->route('positions.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return view('hr.positions.show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return view('hr.positions.edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(\App\Http\Requests\Position\UpdateRequest $request, string $id)
    {
        $data = $request->validated();
        $position = Position::query()->findOrFail($id);

        $position->update($data);
        return redirect()->route('positions.index')->with('success', 'Должность обновлена');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $position = Position::query()->findOrFail($id);
        $position->delete();
        session()->flash('success','The position ' . $position->name . ' was successfully deleted');
        return redirect()->route('positions.index');
    }
}
