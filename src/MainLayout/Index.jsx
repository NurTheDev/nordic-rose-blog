import React from 'react';
import {Outlet} from "react-router";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";

const Index = () => {
    return (
        <div>
            <Navbar/>
            <div className={"container mx-auto px-4 md:px-0"}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Index;
