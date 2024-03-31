export default function Footer (){
    return (
        <footer className="mt-auto py-12 bg-white xl:py-24 dark:bg-gray-800">
            <p className="text-sm text-center text-gray-500 mb-4 md:mb-0">
                &copy; 2019 <a href="/" className="hover:underline" target="_blank">Flowbite.com</a>. All rights
                reserved.
            </p>
            <ul className="flex flex-wrap items-center justify-center">
                <li><a href="#"
                       className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Terms</a>
                </li>
                <li><a href="#"
                       className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
                </li>
                <li><a href="#"
                       className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Cookie
                    Policy</a></li>
                <li><a href="#"
                       className="text-sm font-normal text-gray-500 hover:underline dark:text-gray-400">Contact</a></li>
            </ul>
        </footer>


    )
}
