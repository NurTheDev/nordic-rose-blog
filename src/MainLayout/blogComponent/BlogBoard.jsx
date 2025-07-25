import React, {useEffect, useState} from 'react';
import BlogCard from "../../component/BlogCard.jsx";
import axios from "axios";

const BlogBoard = () => {
    const [blogs, setBlogs] = useState([])
    console.log(blogs)
    useEffect(() => {
        try {
            const fetchBlogs = async () => {
                await axios.get("http://localhost:3000/blog/getAllBlogs").then((value) => {
                    console.log("success", value)
                    setBlogs(value.data.blogs)
                }).catch((error) => {
                    console.log("error", error)
                })
            }
            fetchBlogs()
        } catch (e) {
            console.log(e)
        }
    }, [])
    const handleDelete = (id) => {
        try {
            axios.delete(`http://localhost:3000/blog/deleteBlog/${id}`).then((value) => {
                console.log("success", value)
                setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
            }).catch((error) => {
                console.log("error", error)
            })
        } catch (error){
            console.log(error)
        }
    }
    return (
        <div className={"flex flex-col items-center"}>
            <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10"}>
                {blogs?.map((blog) => {
                    return (
                        <BlogCard
                            key={blog._id}
                            id={blog._id}
                            title={blog.title}
                            content={blog.content}
                            thumbnail={blog.thumbnail}
                            onDelete={handleDelete}
                        />
                    );
                })}
            </div>
            <button className={"btn mt-10 max-w-xs w-full py-5 text-md font-semibold btn-circle"}>View All</button>
        </div>
    );
};

export default BlogBoard;
