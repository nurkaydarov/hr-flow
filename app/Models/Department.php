<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Department extends Model
{
    use HasFactory;
    use Sluggable;
    protected $guarded = ['id'];
    public function sluggable(): array
    {

        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
    public function employees(): HasMany
    {
        return $this->hasMany(Employee::class);
    }
}
