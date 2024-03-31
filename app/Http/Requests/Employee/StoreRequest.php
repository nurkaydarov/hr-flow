<?php

namespace App\Http\Requests\Employee;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "surname" => "required|string|max:100",
            "firstname" => "required|string|max:100",
            "patronymic" =>"required|string|max:100",
            "email" => "nullable|email",
            "iin" => "required|digits:12|unique:employees,iin",
            "avatar" => 'nullable|image|mimes:jpeg,png,jpg,|max:2048',
            "phone_number" => ['nullable', 'string'],
            "gender" => "required|in:male,female",
            "payment" => "required|in:paid,pending",
            "birthday" => "required|date",
            "department_id" => "required|integer|exists:departments,id",
            "description" => "nullable|string",
        ];
    }
}
