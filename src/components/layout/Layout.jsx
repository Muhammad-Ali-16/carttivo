<<<<<<< HEAD
import { Outlet } from "react-router"
=======
import { Outlet } from "react-router-dom"
>>>>>>> 189396ada4c873217cc52936b7e313618505636c
import NavBar from "./NavBar"
import Footer from "./Footer"


function Layout() {
    return (
        <div className="relative">
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout