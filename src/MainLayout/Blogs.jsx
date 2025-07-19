import React from 'react';
import BlogBanner from "./blogComponent/BlogBanner.jsx";

const Blogs = () => {
    console.log("Blogs")
    return (
        <div className={"mt-20 lg:mt-32"}>
            <BlogBanner/>
            <h1 className={"heroHeading mt-10 text-center md:w-2/3 mx-auto"}>A few words about this blog platform, Ghost, and how this site was made</h1>
        </div>
    );
};

export default Blogs;
