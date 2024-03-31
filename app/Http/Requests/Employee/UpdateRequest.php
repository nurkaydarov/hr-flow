<?php

namespace App\Http\Requests\Employee;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRequest extends FormRequest
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
        //$employeeId = $this->route('id'); // ? $this->route('employees.update')->id : null;
        return [
            "surname" => "required|string|max:100",
            "firstname" => "required|string|max:100",
            "patronymic" =>"required|string|max:100",
            "email" => "nullable|email",
            "iin" => ['required', 'digits:12', Rule::unique('employees')->ignore($this->employee)],//"required|digits:12|unique:employees,iin",
            "phone_number" => ['nullable', 'string'],
            "avatar" => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            "gender" => "required|in:male,female",
            "payment" => "required|in:paid,pending",
            "birthday" => "required|date",
            "department_id" => "required|integer|exists:departments,id",
            "description" => "nullable|string",
        ];
    }
}
