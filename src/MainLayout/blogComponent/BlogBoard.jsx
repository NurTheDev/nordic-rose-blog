import React from 'react';
import BlogCard from "../../component/BlogCard.jsx";

const BlogBoard = () => {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10"}>
            {[...Array(6)].map((_, i) => (
                <BlogCard key={i}/>
            ))}
        </div>
    );
};

export default BlogBoard;
