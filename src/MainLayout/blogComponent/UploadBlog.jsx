import React from 'react';
import NewBlogEditor from "./NewBlogEditor.jsx";
const Preview = (props) => {
    return (
        <div >
            <h1>{props.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
    );
};
const UploadBlog = () => {
    const [content, setContent] = React.useState("");
    console.log(content)
    return (
        <div className={"grid lg:grid-cols-2 md:grid-cols-1 items-center h-screen justify-center overflow-auto"}>
            <NewBlogEditor onSave={setContent} />
            <Preview title={content.title} content={content.content} />
       </div>
    );
};

export default UploadBlog;
