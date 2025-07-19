import React from 'react';
import BlogBanner from "./blogComponent/BlogBanner.jsx";
import BlogBoard from "./blogComponent/BlogBoard.jsx";

const Blogs = () => {
    console.log("Blogs")
    return (
        <div className={"mt-20 lg:mt-32"}>
            <BlogBanner/>
            <h1 className={"heroHeading mt-10 text-center md:w-2/3 mx-auto"}>A few words about this blog platform, Ghost, and how this site was made</h1>
            <p className={"font-secondary mt-10 text-center md:w-1/3 mx-auto text-lg border-b border-gray-500 pb-4"}>
                Why Ghost (& Figma) instead of Medium, WordPress or other options?
            </p>
            <BlogBoard/>
        </div>
    );
};

export default Blogs;
