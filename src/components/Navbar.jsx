/* eslint-disable no-unused-vars */
import React from "react";
import NavSearch from "./ui/NavSearch";
import { ReactComponent as ClipboardCheck } from "../assets/icons/ClipboardCheck.svg";
import { ReactComponent as Hamburger } from "../assets/icons/Hamburger.svg";
import { ReactComponent as X } from "../assets/icons/X.svg";
import { ReactComponent as UserCircle } from "../assets/icons/UserCircle.svg";
import { ReactComponent as Cog } from "../assets/icons/Cog.svg";
import { ReactComponent as Logout } from "../assets/icons/Logout.svg";
import
{
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";
// import { ReactComponent as Close } from "../assets/icons/Close.svg";
/* eslint-enable no-unused-vars */

function Navbar()
{
    const history = useHistory();

    const [isOpen, setOpen] = React.useState(false);


    function toggleMenu()
    {
        setOpen(!isOpen);
    }

    return (
        <header className="bg-gradient-to-r from-teal-600 to-teal-400 shadow-md sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
            <div className="flex leading-none px-4 py-3 justify-between sm:p-0">
                <Link to="/" className="flex items-center">
                    <div className="h-auto transform -translate-y-1">
                        <ClipboardCheck className="h-8 w-8 text-white"/>
                    </div>
                    <div className="px-1 h-full">
                        <span className="text-teal-200 font-light text-2xl">slim</span>
                        <span className="text-white font-sans text-2xl font-bold">tracker</span>
                    </div>

                </Link>
                <div className="sm:visible invisible px-3">
                    <NavSearch/>
                </div>
                <div className="sm:hidden">
                    <button onClick={toggleMenu} type="button" className="block text-teal-200 hover:text-white focus:text-white focus:outline-none" >
                        {!isOpen && <Hamburger className="h-8 w-8 stroke-2 fill-current"/>}
                        {isOpen && <X className="h-8 w-8 stroke-2 fill-current"/>}
                    </button>
                </div>
            </div>
            <nav className={`px-3 pt-2 pb-4 focus:outline-none sm:flex sm:p-0 ${ isOpen ? "block" : "hidden" }`}>
                <div className="sm:invisible px-2">
                    <NavSearch/>
                </div>
                <Link to="/profile" autoFocus className="flex-shrink-0 block px-2 py-1 text-white font-semibold rounded sm:bg-none bg-gradient-to-r hover:from-teal-500 hover:to-teal-400">
                Profile
                </Link>
                <Link to="/settings" className="flex-shrink-0 mt-1 block px-2 py-1 text-white font-semibold rounded  sm:bg-none bg-gradient-to-r hover:from-teal-500 hover:to-teal-400 sm:mt-0 sm:ml-2">
                Settings
                </Link>
                <Link to="/" className="flex-shrink-0 mt-1 block px-2 py-1 text-white font-semibold rounded  sm:bg-none bg-gradient-to-r hover:from-teal-500 hover:to-teal-400 sm:mt-0 sm:ml-2">
                    <div className="flex">
                        <Logout className="sm:hidden flex-shrink-0 h-5 w-5 mr-1 self-center text-teal-200"/>Log out
                    </div>
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;