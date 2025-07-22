import React from 'react';
import NewBlogEditor from "./NewBlogEditor.jsx";

const Preview = (props) => {
    if (!props.title && !props.content) {
        return (
            <div className="flex items-center justify-center h-full text-gray-400">
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
    console.log(blog)
    const handleUpload = ()=>{
        const formData = new FormData();
        if(blog.thumbnail) formData.append("thumbnail", blog.thumbnail);
        formData.append("content", blog.content);
        formData.append("thumbnail", blog.thumbnail);
    }
    return (
       <div className={"flex flex-col items-center"}>
           <div className="grid lg:grid-cols-2 md:grid-cols-1 items-stretch min-h-screen gap-6">
               <div className="flex flex-col justify-center">
                   <NewBlogEditor
                       onSave={(val) => setBlog(val)}
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
