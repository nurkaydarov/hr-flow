import {useEffect, useState} from "react";
import {router, useForm, usePage} from "@inertiajs/react";
import ErrorAlert from "@/Components/ErrorAlert.jsx";

const Edit = ({employee, departments, positions}) => {

    const {data, setData, processing, errors, post, put, progress } = useForm({
        firstname: employee.firstname,
        surname: employee.surname,
        patronymic: employee.patronymic,
        iin: employee.iin,
        email: employee.email,
        phone_number: employee.phone_number,
        avatar: '',
        gender: employee.gender,
        payment: employee.payment,
        description: employee.description,
        birthday: employee.birthday,
        department_id: employee.department.id,
        positions: []
    });
    function submit(event){
        event.preventDefault();
        console.log('sending',data);
        router.post(route('employees.update', employee.id), {
            ...data,  forceFormData: true, _method: 'put'
        });
    };
    /*
    const [values, setValues] = useState({
        firstname: employee.firstname,
        surname: employee.surname,
        patronymic: employee.patronymic,
        email: employee.email,
        phone_number: employee.phone_number,
        avatar: employee.avatar,
        gender: employee.gender,
        payment: employee.payment,
        description: employee.description,
        birthday: employee.birthday,

    });
     */

    function handlePositions(event){
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value)
        setData('positions', selectedOptions);
    }
    function handleChange(event){
        const key = event.target.id;
        const value = event.target.value;
        setValues(values => ({
            ...values, [key]: value,
        }))
    }
    function handleGenderChange(event){
        setValues(values => ({
            ...values, gender: event.target.value
        }))
    }
    function handlePaymentChange(event){
        setValues(values => ({
            ...values, payment: event.target.value
        }))
    }

    /*function handleSubmit(event){
        event.preventDefault();
        router.post('employees.update', values);
    }*/
    console.log(data)
    console.log(errors);
    return (
        <main className="container">

            <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
                <div className="mb-4 col-span-full xl:mb-2">
                    <nav className="flex mb-5" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                            <li className="inline-flex items-center">
                                <a href="#" className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                                    <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                    Home
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    <a href="#" className="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">Users</a>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    <span className="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">Settings</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">User settings</h1>
                </div>

                <div className="col-span-full ">
                    <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                        {/*
                            errors.length > 0 && (<ErrorAlert errors={errors}/>)
                            */

                        }


                        <h3 className="mb-4 text-xl font-semibold dark:text-white">General information</h3>

                        <form  onSubmit={submit} encType="multipart/form-data">

                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                    <input type="text" id="firstname" name="firstname"  value={data.firstname} onChange={e => setData('firstname', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                                <div>
                                    <label htmlFor="surname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                    <input type="text" id="surname" name="surname"  value={data.surname} onChange={e => setData('surname', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                                </div>
                                <div>
                                    <label htmlFor="patronymic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patronymic</label>
                                    <input type="text" id="patronymic" name="patronymic" value={data.patronymic} onChange={e => setData('patronymic', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                                </div>
                                <div>
                                    <label htmlFor="iin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">iin</label>
                                    <input type="text" name="iin" id="iin" value={data.iin} onChange={e => setData('iin', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type iin" required />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                    <input type="email" name="email" id="email" value={data.email} onChange={e => setData('email', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="phone_number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                    <input type="text" id="phone_number" name="phone_number" value={data.phone_number} onChange={e => setData('phone_number', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+7(777) xxx xx xx" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="avatar">Avatar</label>
                                    <input name="avatar"  onChange={e => setData('avatar',  e.target.files[0])} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="avatar" type="file" />
                                    {progress && (
                                        <progress value={progress.percentage} max="100">
                                            {progress.percentage}%
                                        </progress>
                                    )}
                                    {errors.avatar && <span className='text-red-500'>{errors.avatar}</span>}
                                </div>
                                <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="birthday">Birth day</label>
                                    <input name="birthday"  value={data.birthday} onChange={e => setData('birthday', e.target.value)} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="birthday" type="date" />
                                </div>
                            </div>
                            <div className="grid gap-6 md:grid-cols-2 mb-6" >
                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                    <div className="flex items-center mb-4">
                                        <input checked={data.gender === 'male'} value='male' id="gender-male" type="radio" name="gender" onChange={e =>setData('gender', e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="gender-male"  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input  id="gender-female" type="radio" value='female'   name="gender" checked={data.gender === 'female'} onChange={e =>setData('gender', e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="gender-female" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Remuneration of labor</label>
                                    <div className="flex items-center mb-4">
                                        <input id="payment-paid" type="radio" checked={data.payment === 'paid'} onChange={e =>setData('payment', e.target.value)} value="paid" name="payment" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="payment-paid" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wage</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input checked id="payment-pending" type="radio" checked={data.payment === 'pending'} onChange={e =>setData('payment', e.target.value)} value="pending" name="payment" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="payment-pending" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hourly rate</label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="department_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                                <select id="department_id"  name="department_id" onChange={e => setData('department_id', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="">Choose department</option>
                        {/*@foreach($departments as $key => $value)*/}
                                    {
                                        departments.map(department => {
                                           return (
                                               <option value={department.id}
                                                       key={department.id}>{department.name}</option>
                                           )
                                        })
                                    }

                        {/*@endforeach*/ }


                                </select>
                            </div>
                            <div className="mb-6">

                                <label htmlFor="positions" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
                                <select id="positions"  multiple="multiple" name="positions[]"  onChange={handlePositions} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="">Select a position</option>
                        {/*@foreach($positions as $key => $value)*/}
                                    {
                                        Object.entries(positions).map(([key,value]) => {
                                            return (
                                                <option value={value} key={value}>{key}</option>
                                            )
                                            console.log(position.id)
                                        })
                                    }


                    {/*@endforeach*/}
                                </select>
                            </div>
                            <div className="mb-6">

                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="description" onChange={e => setData('description', e.target.value)} name="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here...">
                                    {data.description}
                                </textarea>

                            </div>


                            <button type="submit" disabled={processing} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                        </form>

                    </div>

                </div>

            </div>

        </main>
    );
}
export default Edit;
