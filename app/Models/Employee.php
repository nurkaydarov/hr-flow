<?php

namespace App\Models;

use App\Http\Requests\Employee\StoreRequest;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Http\Request;
use Illuminate\Log\LogManager;
use Illuminate\Support\Facades\Storage;


class Employee extends Model
{

    use HasFactory;

    protected $guarded = ['id'];

    public function department():BelongsTo{
        return $this->belongsTo(Department::class);
    }
    public function positions(): BelongsToMany
    {
        return $this->belongsToMany(Position::class);
    }

    protected function birthday():Attribute
    {
        return Attribute::make(
            get: fn (string $value) => Carbon::createFromFormat('Y-m-d', $value)->format('d.m.Y')
        );
    }
    public static function uploadImage(Request $request, $image = null, $folder = 'avatars/')
    {

            if($request->hasFile('avatar'))
            {
                if($image){
                    Storage::delete($image);
                }
                $uploadedFile = $request->file('avatar');
                $filename = uniqid() . '-' .$uploadedFile->getClientOriginalName();
                $date = date('Y-m-d');

                $path = $request->file('avatar')->storeAs($folder . $date, $filename);

                return $path;
            }
            return null;



    }
    public  function getImage():string
    {
        if(!$this->avatar){
            return asset('assets/images/no-avatar.jpg');
        }
        return asset('storage/' . $this->avatar);
    }
    public function getBirthdayDate():string
    {
        return Carbon::createFromFormat('Y-m-d', $this->birthday)->format('d.m.Y');
    }
}
