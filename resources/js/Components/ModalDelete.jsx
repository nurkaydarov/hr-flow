import {router, useForm} from "@inertiajs/react";

const ModalDelete = ({open, toggleModal, data,routePath}) => {
    console.log(open)

    const submit = (event) => {
        event.preventDefault();
        router.post(route(`${routePath}`, data), {_method: 'delete'})
        toggleModal()
    }
    return (
        <>

        {open && (
            <div id="popup-modal" tabIndex="-1"  className="overflow-y-auto overflow-x-hidden  fixed inset-0 flex justify-center items-center z-50 ">


                <div className="relative p-4 w-1/2 max-w-md max-h-full bg-white rounded-lg shadow border-4 border-blue-400  dark:bg-gray-700 ">

                        <button type="button"
                                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="popup-modal">

                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-4 md:p-5 text-center">

                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you
                                want to delete this product?</h3>
                            <div className='flex justify-center gap-4'>
                                <form onSubmit={submit}>
                                    <button data-modal-hide="popup-modal" type="submit"
                                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                        Yes, I'm sure
                                    </button>
                                </form>

                                <button data-modal-hide="popup-modal" type="button"  onClick={toggleModal}
                                        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No,
                                    cancel
                                </button>
                            </div>

                        </div>

                </div>
            </div>)}
        </>
    );
}

export default ModalDelete;
