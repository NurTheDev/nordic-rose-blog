import React, {useEffect, useState} from 'react';
import BlogBanner from "./blogComponent/BlogBanner.jsx";
import BlogDetails from "./blogComponent/BlogDetails.jsx";
import {useParams} from "react-router";
import axios from "axios";
const SingleBlog = () => {
    const {id} = useParams();
    const [blog, setBlog]= useState({})
    useEffect(() => {
        const fetchBlog = async () => {
            await axios.get(`http://localhost:3000/blog/getBlog/${id}`).then((value) => {
                console.log("success", value)
                setBlog(value.data.blog)
            }).catch((error) => {
                console.log("error", error)
            })
        }
        fetchBlog()
    }, [id])
    return (
        <div>
            <BlogBanner/>
            <BlogDetails blog={blog}/>
        </div>
    );
};

export default SingleBlog;
