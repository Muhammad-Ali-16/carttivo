import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "./Footer"


function Layout() {
    return (
        <div className="relative">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout