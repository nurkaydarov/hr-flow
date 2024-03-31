import {router, useForm} from "@inertiajs/react";
import {useEffect} from "react";
import ErrorAlert from "@/Components/ErrorAlert.jsx";

const FormModalEdit = ({toggleModal, open, source=null,routePath='positions.update'}  ) => {

    const {data,setData, processsing,errors, post, progress} = useForm({
        name: source && source.name ? source.name : '',
        description: source && source.description ? source.description : '',
        salary: source && source.salary ? source.salary : '',
    })
    useEffect(() => {
        if(source)
        {
            setData({
                name: source.name || '',
                description: source.description || '',
                salary: source.salary || ''
            })
        }


    }, [source])
    console.log('errors',errors.name, errors.salary, errors.description)
    console.log(data)
    function submit(event){
        event.preventDefault()
        router.post(route(`${routePath}`, source.id), {
            ...data, forceFormData: true,_method: 'put'
        })
        toggleModal();
    }
    function clearField (){
        setData({
            name:  '',
            description: '',
            salary: 0
        })
    }
    return (
        open && (
            <div id="authentication-modal" tabIndex="-1" aria-hidden="true"
                 className="  overflow-x-hidden fixed  z-50 flex justify-center items-center inset-0 md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-1/2 p-4 max-w-md h-screen inset-0">

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <div
                            className="flex items-center justify-between gap-4 p-4 md:p-5 border-b rounded-t dark:border-gray-600">

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Update Department
                            </h3>
                            <button type="button" onClick={toggleModal}
                                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div className="p-4 md:p-5">
                            <form className="flex flex-col gap-2 justify-between " onSubmit={submit}>
                                <div className="mb-4">
                                    <label htmlFor="name"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department
                                        Name {data.name ?? ''}</label>
                                    <input type="text" name="name" id="name"
                                           onChange={(e) => setData('name', e.target.value)}
                                           value={data.name}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                           placeholder="..." required/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="description"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <textarea name="description" id="description" placeholder="••••••••"
                                              onChange={e => setData('description', e.target.value)}
                                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                              required>
                                        {data.description}
                                    </textarea>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor='salary'
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary {data.salary ?? ''}</label>
                                    <input type="number" name='salary' id='salary'
                                           onChange={(e) => setData('salary', e.target.value)}
                                           value={data.salary}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                           placeholder="..." required/>
                                </div>

                                <button type="submit" disabled={processsing}
                                        className="mx-auto w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Create
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )


    )
}
export default FormModalEdit;
