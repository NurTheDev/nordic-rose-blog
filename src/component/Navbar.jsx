import React from 'react';
import NORDIC_LOGO from "../../public/NORDIC_ROSE.png";
import {NavLink} from "react-router";

const Navbar = () => {
    const navItems = [
        {
            name: "Blog",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Links",
            link: "/links"
        },
        {
            name: "Projects",
            link: "/projects"
        }
    ]
    return (
        <div className="">
            <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 z-10 border-b border-gray-200 py-2 lg:py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className={"w-full"}>
                        <img src={NORDIC_LOGO} alt=""/>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className={"flex gap-4 items-center text-lg font-primary mr-4"}>
                        {navItems.map((item, index) => (
                            <NavLink to={item.link} key={index}>
                                {
                                    ({isActive}) => {
                                        return isActive ? <span className={"activeLink text-info transition-all" +
                                                " duration-100"}>{item.name}</span> :
                                            <span className={"navLink"}>{item.name}</span>
                                    }
                                }
                            </NavLink>
                        ))}
                    </ul>
                    <div>
                        <button className="btn btn-outline btn-info mx-2 hover:text-white">
                            Login
                        </button>
                        <button className="btn btn-outline btn-info hover:text-white">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
