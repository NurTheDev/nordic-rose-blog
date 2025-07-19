import React from 'react';
import {Outlet} from "react-router";
import Navbar from "../component/Navbar.jsx";

const Index = () => {
    return (
        <div>
            <Navbar/>
            <div className={"container mx-auto px-4 md:px-0"}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Index;
