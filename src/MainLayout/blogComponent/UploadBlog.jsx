import React from 'react';
import NewBlogEditor from "./NewBlogEditor.jsx";

const UploadBlog = () => {

    return (
        <div>
            <NewBlogEditor onSave={data => console.log(data)} />
        </div>
    );
};

export default UploadBlog;
