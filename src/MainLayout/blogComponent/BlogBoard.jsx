import React from 'react';
import BlogCard from "../../component/BlogCard.jsx";

const BlogBoard = () => {
    return (
        <div className={"flex flex-col items-center"}>
            <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10"}>
                {[...Array(6)].map((_, i) => (
                    <BlogCard key={i}/>
                ))}
            </div>
            <button className={"btn mt-10 max-w-xs w-full py-5 text-md font-semibold btn-circle"}>View All</button>
        </div>
    );
};

export default BlogBoard;
