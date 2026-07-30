import { Outlet } from "react-router-dom"
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