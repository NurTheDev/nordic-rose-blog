import React from 'react';
import {FaFacebook, FaTrashAlt} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";

const ProfileCard = ({
                         avatar,
                         name,
                         date,
                         readTime,
                         onShareFacebook,
                         onShareTwitter,
                     }) => {
    return (
        <div className="flex justify-between items-center mt-10 mb-6 max-w-3xl mx-auto relative">

            <div className="flex items-center">
                <img
                    src={avatar}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover mr-5"
                />
                <div>
                    <div className="font-bold text-lg tracking-wide">{name}</div>
                    <div className="text-gray-700 text-base">{date} &middot; {readTime}</div>
                </div>
            </div>
            <div className="flex bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <button
                    aria-label="Share on Facebook"
                    onClick={onShareFacebook}
                    className="flex items-center justify-center w-14 h-12 hover:bg-gray-100 transition"
                >
                    {/* Facebook icon (filled circle) */}
                   <span className={"text-2xl"}>
                       <FaFacebook />
                   </span>
                </button>
                <div className="w-px h-6 bg-gray-200 self-center"/>
                <button
                    aria-label="Share on Twitter"
                    onClick={onShareTwitter}
                    className="flex items-center justify-center w-14 h-12 hover:bg-gray-100 transition"
                >
                    {/* Twitter icon (filled circle) */}
                   <span className={"text-2xl"}><FaSquareXTwitter /></span>
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
