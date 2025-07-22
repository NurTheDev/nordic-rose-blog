import React from "react";
import {
    FaBold,
    FaHighlighter,
    FaItalic,
    FaQuoteLeft,
    FaRedo,
    FaUnderline,
    FaUndo
} from "react-icons/fa";
import {MdFormatListBulleted, MdFormatStrikethrough} from "react-icons/md";
import {LuCodeXml, LuHeading1, LuHeading2, LuHeading3} from "react-icons/lu";
import {RiListOrdered2} from "react-icons/ri";

const UseToolbar = (editor) => [
    {
        label: <FaBold/>,
        action: () => editor.chain().focus().toggleBold().run(),
        active: editor?.isActive("bold"),
        title: "Bold"
    },
    {
        label: <FaItalic/>,
        action: () => editor.chain().focus().toggleItalic().run(),
        active: editor?.isActive("italic"),
        title: "Italic"
    },
    {
        label: <FaUnderline/>,
        action: () => editor.chain().focus().toggleUnderline().run(),
        active: editor?.isActive("underline"),
        title: "Underline"
    },
    {
        label: <MdFormatStrikethrough/>,
        action: () => editor.chain().focus().toggleStrike().run(),
        active: editor?.isActive("strike"),
        title: "Strikethrough"
    },
    {
        label: <FaHighlighter/>,
        action: () => editor.chain().focus().toggleHighlight().run(),
        active: editor?.isActive("highlight"),
        title: "Highlight"
    },
    {
        label: <LuHeading1 level={1}/>,
        action: () => editor.chain().focus().toggleHeading({level: 1}).run(),
        active: editor?.isActive("heading", {level: 1}),
        title: "Heading 1"
    },
    {
        label: <LuHeading2 level={2}/>,
        action: () => editor.chain().focus().toggleHeading({level: 2}).run(),
        active: editor?.isActive("heading", {level: 2}),
        title: "Heading 2"
    },
    {
        label: <LuHeading3 level={3}/>,
        action: () => editor.chain().focus().toggleHeading({level: 3}).run(),
        active: editor?.isActive("heading", {level: 3}),
        title: "Heading 3"
    },
    {
        label: <MdFormatListBulleted/>,
        action: () => editor.chain().focus().toggleBulletList().run(),
        active: editor?.isActive("bulletList"),
        title: "Bullet List"
    },
    {
        label: <RiListOrdered2/>,
        action: () => editor.chain().focus().toggleOrderedList().run(),
        active: editor?.isActive("orderedList"),
        title: "Numbered List"
    },
    {
        label: <FaQuoteLeft/>,
        action: () => editor.chain().focus().toggleBlockquote().run(),
        active: editor?.isActive("blockquote"),
        title: "Quote"
    },
    {
        label: <LuCodeXml/>,
        action: () => editor.chain().focus().toggleCodeBlock().run(),
        active: editor?.isActive("codeBlock"),
        title: "Code Block"
    },
    {label: <FaUndo/>, action: () => editor.chain().focus().undo().run(), active: false, title: "Undo"},
    {label: <FaRedo/>, action: () => editor.chain().focus().redo().run(), active: false, title: "Redo"},
];

export default UseToolbar;
