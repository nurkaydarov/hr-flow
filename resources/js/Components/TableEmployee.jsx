import {Link} from "@inertiajs/react";

const TableEmployee = ({employees, toggleModal, deleteEmployee}) => {
    return (

            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                    <th scope="col" className="p-4">
                        <div className="flex items-center">
                            <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox"
                                   className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                        Name
                    </th>
                    <th scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                        Birthday
                    </th>
                    <th scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                        Position
                    </th>
                    <th scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                        IIN
                    </th>
                    <th scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                        Status
                    </th>
                    <th scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">


                {
                    employees.map((employee) => {
                        return (
                            <tr className="hover:bg-gray-100 dark:hover:bg-gray-700" key={employee.id}>
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-" aria-describedby="checkbox-1"
                                               type="checkbox"
                                               className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="checkbox-" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                                    <img className="w-10 h-10 rounded-full" src={`${employee.avatar_url}`}
                                         alt="avatar"/>
                                    <div
                                        className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                        <div
                                            className="text-base font-semibold text-gray-900 dark:text-white">
                                            <Link href={route('employees.show', employee.id)}>{`${employee.surname} ${employee.firstname} ${employee.patronymic}`}</Link>
                                        </div>
                                        <div
                                            className="text-sm font-normal text-gray-500 dark:text-gray-400"></div>
                                    </div>
                                </td>
                                <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                    {employee.birthday}
                                </td>
                                <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{employee.department.name}</td>
                                <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{employee.iin}</td>
                                <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className="flex items-center">
                                        Active <div
                                        className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                                        <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                                    </div>
                                </td>
                                <td className="p-4 space-x-2 whitespace-nowrap">
                                    <Link href={route('employees.edit', {'employee': employee.id})} data-modal-target="edit-user-modal"
                                       data-modal-toggle="edit-user-modal"
                                       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor"
                                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                                            <path fillRule="evenodd"
                                                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        Edit user
                                    </Link>
                                    <form action=""  className="inline-block">

                                        <span onClick={() => {
                                            toggleModal();
                                            deleteEmployee(employee.id)
                                        }} href="" id="deleteProductButton"
                                                data-drawer-target="drawer-delete-product-default"
                                                data-drawer-show="drawer-delete-product-default"
                                                aria-controls="drawer-delete-product-default"
                                                data-drawer-placement="right"
                                                className="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor"
                                                 viewBox="0 0 20 20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                      clipRule="evenodd"></path>
                                            </svg>
                                            Delete item
                                        </span>
                                    </form>
                                </td>
                            </tr>
                        )
                    })
                }


                </tbody>
            </table>

    )
}
export default TableEmployee;
