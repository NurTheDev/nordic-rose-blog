import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router"; // Use react-router-dom for web routing
import NORDIC_LOGO from "../../public/NORDIC_ROSE.png";
import {AuthContext} from "../context/authContext.js";

const navItems = [
    {name: "BLOG", link: "/"},
    {name: "PROFILE", link: "/about"},
    {name: "LINKS", link: "/links"},
    {name: "UPLOAD", link: "/projects"}
];

const Navbar = () => {
    const navigate = useNavigate()
    const [user, setUser] = useContext(AuthContext)
    const handleLogout = () => {
        localStorage.removeItem("userInfo")
        setUser({isAuthenticated: false})
        navigate("/login")
    }
    return (
        <header className="w-full bg-white border-b border-gray-200 ">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-7">
                {/* Logo (text, not image, for style matching) */}
                <NavLink to="/" className="select-none">
                    <span className="font-serif text-3xl md:text-5xl tracking-[0.18em] text-black">
                        NORDIC ROSE
                    </span>
                </NavLink>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-10">
                        {navItems.map((item) => (
                            <li key={item.link} className="relative flex items-center">
                                <NavLink
                                    to={item.link}
                                    end={item.link === "/"}
                                    className={({isActive}) =>
                                        "text-lg md:text-xl font-serif font-medium tracking-widest px-1 py-0.5 transition-colors duration-300" +
                                        (isActive
                                            ? " text-black"
                                            : " text-black/80 hover:text-black transition-colors duration-300")
                                    }
                                >
                                    {({isActive}) => (
                                        <>
                                            {item.name}
                                            {/* Underline with transition */}
                                            <span
                                                className={
                                                    "block mx-auto transition-all duration-300 ease-in-out mt-1 rounded " +
                                                    (isActive
                                                        ? "w-8 h-[2.5px] bg-black opacity-100"
                                                        : "w-0 h-[2.5px] bg-black opacity-0")
                                                }
                                            />
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    {/* Auth Button */}
                    <button onClick={user ? handleLogout : () => navigate("/login")}
                            className="ml-8 px-6 py-2 border border-black rounded-full bg-white text-black font-serif text-lg font-medium hover:bg-black hover:text-white transition-all duration-200">
                        {user ? "Logout" : "Login"}
                    </button>

                </div>

                {/* Hamburger for Mobile */}
                <div className="md:hidden flex items-center">
                    <MobileMenu navItems={navItems} user={user}/>
                </div>
            </nav>
        </header>
    );
};

const MobileMenu = ({navItems, user}) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <button
                className="p-2"
                aria-label="Toggle navigation menu"
                onClick={() => setOpen(!open)}
            >
                {/* Hamburger Icon */}
                <svg width={30} height={30} viewBox="0 0 30 30" className="text-black">
                    <rect y="7" width="24" height="2" rx="1" fill="currentColor"/>
                    <rect y="14" width="24" height="2" rx="1" fill="currentColor"/>
                    <rect y="21" width="24" height="2" rx="1" fill="currentColor"/>
                </svg>
            </button>
            {/* Mobile Dropdown */}
            <div
                className={`absolute left-0 top-full w-full bg-white border-b border-gray-200 shadow transition-all duration-300 overflow-hidden z-20 ${open ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
                <ul className="flex flex-col gap-2 p-6 font-serif">
                    {navItems.map((item) => (
                        <li key={item.link}>
                            <NavLink
                                to={item.link}
                                end={item.link === "/"}
                                onClick={() => setOpen(false)}
                                className={({isActive}) =>
                                    "block w-full py-2 px-2 text-lg font-medium tracking-widest transition-colors duration-200 rounded " +
                                    (isActive
                                        ? "text-black"
                                        : "text-black/80 hover:text-black")
                                }
                            >
                                {({isActive}) => (
                                    <>
                                        {item.name}
                                        <span
                                            className={
                                                "block mx-auto transition-all duration-300 ease-in-out mt-1 rounded " +
                                                (isActive
                                                    ? "w-8 h-[2.5px] bg-black opacity-100"
                                                    : "w-0 h-[2.5px] bg-black opacity-0")
                                            }
                                        />
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}
                    <li className="pt-2">
                        <button
                            className="w-full px-6 py-2 border border-black rounded-full bg-white text-black font-serif text-lg font-medium hover:bg-black hover:text-white transition-all duration-200">
                            {user ? "Logout" : "Login"}
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
