import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"
import Footer from "./Footer"


export default function Root() {
    return (
        <div className="bg-black">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}