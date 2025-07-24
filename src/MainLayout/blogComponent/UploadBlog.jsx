import React, {useContext} from 'react';
import NewBlogEditor from "./NewBlogEditor.jsx";
import axios from "axios";
import {useNavigate} from "react-router";
import {AuthContext} from "../../context/authContext.js";
const Preview = (props) => {
    if (!props.title && !props.content) {
        return (
            <div className="flex items-center justify-center h-3/4 text-gray-400">
                <span>Preview will appear here</span>
            </div>
        );
    }
    return (
        <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100 overflow-auto h-3/4">
            <h1 className="text-2xl font-bold mb-4">{props.title}</h1>
            <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: props.content }}
            />
        </div>
    );
};

const UploadBlog = () => {
    const [blog, setBlog] = React.useState({ title: "", content: "" });
    const [user] = useContext(AuthContext)
    const userId = user.userInfo.user._id
    const navigate = useNavigate()
    const handleUpload = async ()=>{
        const formData = new FormData();
        formData.append("user", userId);
        formData.append("title", blog.title);
        formData.append("content", blog.content);
        if(blog.thumbnail) formData.append("thumbnail", blog.thumbnail);
       await axios.post("http://localhost:3000/blog/createBlog", formData).then((value)=>{
            console.log("success", value)
            navigate("/")
        }).catch((error)=>{
            console.log("error", error)
        })

    }
    return (
       <div className={"flex flex-col items-center justify-center mt-10"}>
           <div className="grid lg:grid-cols-2 md:grid-cols-1 items-stretch gap-6">
               <div className="flex flex-col justify-center">
                   <NewBlogEditor
                       onPreview={(val) => setBlog(val)}
                   />
               </div>
               <div className="flex flex-col justify-center">
                   <Preview title={blog.title} content={blog.content} />
               </div>
           </div>
           <button onClick={handleUpload} className={"btn mt-5 max-w-xs w-full py-5 text-md font-semibold btn-circle bg-blue-500" +
               " text-white"}>Upload</button>
       </div>
    );
};

export default UploadBlog;
