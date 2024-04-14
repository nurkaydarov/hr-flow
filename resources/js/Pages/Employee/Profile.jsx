const Profile = ({employee, avatar_url}) => {
    console.log('employee',employee)
    return (
        <main class="container">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 ">
                <div class="col-span-1 bg-white rounded-lg p-4 ml-4 border border-gray-200 shadow-sm md:p-6 ">
                    <img class="rounded-full w-1/2"  src={`${employee.avatar_url}`} alt="image description" />
                        <h1 class="text-lg font-bold ">{employee.surname} {employee.firstname} {employee.patronymic}</h1>
                        <div class="mt-2">
                            <p class="font-light text-gray-600 text-sm">Email address</p>
                            <p class="font-medium text-base">{employee.email}</p>
                        </div>
                        <div class="mt-2">
                            <p class="font-light text-gray-600 text-sm">Home address</p>
                            <p class="font-medium text-base">Село Иртышск, ул.Жалаулы 15/1</p>
                        </div>
                        <div class="mt-2">
                            <p class="font-light text-gray-600 text-sm">Phone number</p>
                            <p class="font-medium text-base">{employee.phone_number ?? "Номер не указан"}</p>
                        </div>
                </div>
                <div class="col-span-2 bg-white rounded-lg p-4 mr-4 border border-gray-200 shadow-sm md:p-6">
                    <h2 class="font-bold text-xl">General Information</h2>
                    <div class="grid grid-cols-2 mt-4 gap-y-4">
                        <div class="col-span-2">
                            <h3 class="font-medium text-lg">Description</h3>
                            <p class="text-gray-600">{employee.description}</p>
                        </div>
                        <div class="col-span-1">
                            <p class="font-medium text-gray-600">Employeed Date</p>
                            <p class="">2024</p>
                        </div>
                        <div class="col-span-1">
                            <p class="font-medium text-gray-600">Department</p>
                            <p class="font-medium">{employee.department.name}</p>
                        </div>
                        <div class="col-span-1">
                            <p class="font-medium text-gray-600">Positions</p>
                            <p class="font-medium">
                                {
                                    employee.positions && employee.positions.map(position => {
                                        return position.name + ';'
                                    })
                                    /*
                                @if(employee.positions.count())
                                @foreach(employee.positions as position)
                                {position.name},
                                @endforeach
                                @else Нет должностей
                                @endif

                                     */
                                }
                            </p>
                        </div>
                        <div class="col-span-1">
                            <p class="font-medium text-gray-600">Birthday</p>
                            <p class="font-medium">
                                {employee.birthday}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Profile;
