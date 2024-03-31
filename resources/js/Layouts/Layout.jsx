import Sidebar from "@/Partials/Sidebar.jsx";
import Footer from "@/Partials/Footer.jsx";
import Navbar from "@/Partials/Navbar.jsx";
import ModalDelete from "@/Components/ModalDelete.jsx";


export default function Layout ({children}){
    return(
        <div className='relative'>
        <Navbar />

        <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">


            <Sidebar/>
            <div id="main-content" className="flex flex-col min-h-screen  w-full  overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
                <main>
                    {children}
                </main>

                <Footer />
            </div>

        </div>
        </div>
    )
}
