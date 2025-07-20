import React from 'react';
import BlogBanner from "./blogComponent/BlogBanner.jsx";
import BlogDetails from "./blogComponent/BlogDetails.jsx";

const SingleBlog = () => {
    return (
        <div>
            <BlogBanner/>
            <BlogDetails/>
        </div>
    );
};

export default SingleBlog;
