import React from 'react';
import {useNavigate} from "react-router";
import {FaTrashAlt} from "react-icons/fa";
import axios from "axios";
const BlogCard = ({title, thumbnail, id, onDelete, authorAvatar = "https://randomuser.me/api/portraits/men/32.jpg",}) => {
    const navigate = useNavigate()
    const handleReadMore = () => {
        navigate(`links/${id}`)
    }

    return (
        <div
            className="max-w-md bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer relative group">
            <span onClick={()=> onDelete(id)} className={"absolute top-5 right-5 text-2xl opacity-0" +
                " group-hover:opacity-100" +
                " transition-all" +
                " duration-200 hover:text-red-600 scale-0 group-hover:scale-100 text-gray-500"}><FaTrashAlt/></span>
            <img
                className="w-full h-56 object-cover"
                src={thumbnail}
                alt="Blog banner"
            />
            <div className="p-6">
      <span className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
        Technology
      </span>
                <h3 className="mb-2 text-2xl font-bold text-gray-900 leading-tight">{title}</h3>
                <div className="mb-4 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
                    neque.
                </div>
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center ">
                        <img
                            className="w-9 h-9 rounded-full border object-cover"
                            src={authorAvatar}
                            alt="Author"
                        />
                        <div className="ml-3">
                            <p className="font-semibold text-gray-900 text-sm">Nur Islam</p>
                            <p className="text-xs text-gray-500">August 20, 2022</p>
                        </div>
                    </div>
                    <div
                        onClick={handleReadMore}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition"
                    >
                        Read more
                        <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogCard;
