import React from 'react';
import ProfileCard from "./ProfileCard.jsx";
import Facebook from "../../../public/icons/Facebook.jsx";
import Twitter from "../../../public/icons/Twitter.jsx";
import Subscribe from "../../component/Subscribe.jsx";

const BlogDetails = () => {
    return (
        <div>
            <div className={"border-t border-gray-200 mt-20"}>
                <ProfileCard/>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.

                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.
            </p>
            <div className={"flex justify-center mt-10"}>
                <button type="button"
                        className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                    <Facebook/>
                    Share on Facebook
                </button>
                <button type="button"
                        className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
                    <Twitter/>
                    Share on Twitter
                </button>
            </div>
            <Subscribe/>
        </div>
    );
};

export default BlogDetails;
