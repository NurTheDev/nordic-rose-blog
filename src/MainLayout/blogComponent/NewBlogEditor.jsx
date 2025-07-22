import React, {useState} from "react";
import {useEditor, EditorContent} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import useToolbar from "../../hooks/UseToolbar.jsx";
import {FaImage, FaLink} from "react-icons/fa";


export default function NewLinkedInStyleBlogEditor({onSave}) {
    const [title, setTitle] = useState("");
    const [thumbnail, setThumbnail] = useState(null);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            Link,
            Highlight,
            Underline,
            Strike,
        ],
        content: "<p>Write your blog content here...</p>",
    });
    const toolbar = useToolbar(editor);
    // Link & Image handlers
    const addLink = () => {
        const url = prompt("Enter URL");
        if (url) editor.chain().focus().setLink({href: url}).run();
    };
    const addImage = (file) => {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            editor.chain().focus().setImage({src: reader.result}).run();
        };
        reader.readAsDataURL(file);
    };
    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file) setThumbnail(file);
    };
    const handleSave = () => {
        const htmlContent = editor?.getHTML() || "";
        if (onSave) {
            onSave({title, content: htmlContent, thumbnail});
        }
    };

    // Button configs


    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
            {/* Blog Title */}
            <input
                type="text"
                className="w-full text-2xl font-bold p-2 mb-4 border-b border-gray-200 focus:outline-none focus:border-indigo-500"
                placeholder="Blog Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            {/* Blog Thumbnail */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Blog Thumbnail
                </label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
                {thumbnail && (
                    <img
                        src={URL.createObjectURL(thumbnail)}
                        alt="Thumbnail preview"
                        className="mt-2 w-32 h-32 object-cover rounded border"
                    />
                )}
            </div>

            {/* Editor Toolbar */}
            <div className="flex flex-wrap gap-1 mb-2 p-2 bg-gray-50 border rounded-lg">
                {toolbar.map((btn, i) => (
                    <button
                        key={i}
                        type="button"
                        title={btn.title}
                        onClick={btn.action}
                        className={`p-2 rounded transition border ${
                            btn.active
                                ? "bg-indigo-600 text-white border-indigo-600"
                                : "bg-white text-gray-700 border-gray-200 hover:bg-indigo-50 hover:border-indigo-400"
                        }`}
                    >
                        {btn.label}
                    </button>
                ))}
                {/* Link Button */}
                <button
                    type="button"
                    title="Insert Link"
                    onClick={addLink}
                    className="p-2 rounded transition border bg-white text-gray-700 border-gray-200 hover:bg-indigo-50 hover:border-indigo-400"
                >
                    <FaLink/>
                </button>
                {/* Image Upload Button */}
                <label
                    title="Insert Image"
                    className="p-2 rounded transition border bg-white text-gray-700 border-gray-200 hover:bg-indigo-50 hover:border-indigo-400 cursor-pointer"
                >
                    <FaImage/>
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => addImage(e.target.files[0])}
                    />
                </label>
            </div>

            {/* Editor Content */}
            <div className="min-h-[200px] w-full p-4 border rounded bg-gray-50 mb-4">
                <EditorContent editor={editor}/>
            </div>

            {/* Save Button */}
            <button
                onClick={handleSave}
                className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 transition"
            >
                Save Blog
            </button>
        </div>
    );
}
