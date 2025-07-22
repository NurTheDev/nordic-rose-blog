import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";
import useToolbar from "../../hooks/UseToolbar.jsx";
import { FaImage, FaLink } from "react-icons/fa";

export default function NewBlogEditor({ onSave }) {
    const [title, setTitle] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const editor = useEditor({
        extensions: [StarterKit, Image, Highlight],
        content: "<p>Write your blog content here...</p>",
    });
    const toolbar = useToolbar(editor);

    const addLink = () => {
        const url = prompt("Enter URL");
        if (url) editor.chain().focus().setLink({ href: url }).run();
    };
    const addImage = (file) => {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            editor.chain().focus().setImage({ src: reader.result }).run();
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
            onSave({ title, content: htmlContent, thumbnail });
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100
            flex flex-col gap-4
            ">
            {/* Blog Title */}
            <input
                type="text"
                className="w-full text-2xl font-bold p-3 mb-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 transition-all"
                placeholder="Blog Title"
                aria-label="Blog Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            {/* Blog Thumbnail */}
            <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="thumbnail">
                    Blog Thumbnail
                </label>
                <input
                    id="thumbnail"
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                    className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
                {thumbnail && (
                    <img
                        src={URL.createObjectURL(thumbnail)}
                        alt="Thumbnail preview"
                        className="mt-2 w-32 h-32 object-cover rounded border shadow"
                    />
                )}
            </div>

            {/* Editor Toolbar */}
            <div className="flex flex-wrap gap-2 mb-2 p-3 bg-gray-50 border rounded-lg">
                {toolbar.map((btn, i) => (
                    <button
                        key={i}
                        type="button"
                        title={btn.title}
                        onClick={btn.action}
                        className={`p-2 rounded transition border outline-none focus:ring-2 focus:ring-indigo-400
                            ${btn.active
                            ? "bg-indigo-600 text-white border-indigo-600"
                            : "bg-white text-gray-700 border-gray-200 hover:bg-indigo-50 hover:border-indigo-400"
                        }`}
                    >
                        {btn.label}
                    </button>
                ))}
                <button
                    type="button"
                    title="Insert Link"
                    onClick={addLink}
                    className="p-2 rounded transition border bg-white text-gray-700 border-gray-200 hover:bg-indigo-50 hover:border-indigo-400"
                >
                    <FaLink />
                </button>
                <label
                    title="Insert Image"
                    className="p-2 rounded transition border bg-white text-gray-700 border-gray-200 hover:bg-indigo-50 hover:border-indigo-400 cursor-pointer"
                >
                    <FaImage />
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => addImage(e.target.files[0])}
                    />
                </label>
            </div>

            {/* Editor Content */}
            <div className="min-h-[220px] max-h-[400px] overflow-y-auto w-full p-4 border rounded mb-4 bg-gray-50">
                <EditorContent editor={editor} />
            </div>

            {/* Save Button */}
            <button
                onClick={handleSave}
                className="bg-indigo-600 text-white py-2 px-8 rounded-lg hover:bg-indigo-700 transition font-semibold text-lg w-full"
            >
                Show Preview
            </button>
        </div>
    );
}
