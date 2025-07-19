import React from 'react';

const BlogCard = ({
                      image = "https://flowbite.com/docs/images/blog/image-1.jpg",
                      category = "Technology",
                      title = "The Impact of Technology on the Workplace: How Technology is Changing",
                      description = "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                      author = "Jason Francisco",
                      date = "August 20, 2022",
                      authorAvatar = "https://randomuser.me/api/portraits/men/32.jpg",
                      readMoreUrl = "#"
                  }) => (
    <div className="max-w-md bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
        <img
            className="w-full h-56 object-cover"
            src={image}
            alt="Blog banner"
        />
        <div className="p-6">
      <span className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
        {category}
      </span>
            <h3 className="mb-2 text-2xl font-bold text-gray-900 leading-tight">{title}</h3>
            <p className="mb-4 text-gray-700">{description}</p>
           <div className="flex justify-between items-center mb-4">
               <div className="flex items-center ">
                   <img
                       className="w-9 h-9 rounded-full border object-cover"
                       src={authorAvatar}
                       alt="Author"
                   />
                   <div className="ml-3">
                       <p className="font-semibold text-gray-900 text-sm">{author}</p>
                       <p className="text-xs text-gray-500">{date}</p>
                   </div>
               </div>
               <a
                   href={readMoreUrl}
                   className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition"
               >
                   Read more
                   <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                             d="M1 5h12m0 0L9 1m4 4L9 9"/>
                   </svg>
               </a>
           </div>

        </div>
    </div>
);


export default BlogCard;
