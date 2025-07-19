import React from "react";
import banner from "../../assets/bannerImag.png";
const BlogBanner = () => (
    <div className="relative w-full rounded-xl overflow-hidden shadow-lg bg-white">
        {/* Background Image */}
        <img
            src={banner}
            alt="Server room reflection"
            className="w-full h-[340px] md:h-[400px] lg:h-[500px] object-cover"
            style={{ minHeight: 200, maxHeight: 400 }}
        />
        {/* Card Overlay */}
        <div className="absolute bottom-8 left-8 bg-white rounded-xl shadow-md px-7 py-6 max-w-xl">
            <div className="mb-2">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          Technology
        </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-snug">
                The Impact of Technology on the Workplace: How Technology is Changing
            </h2>
            <div className="flex items-center gap-3 text-gray-600 text-sm">
                <img
                    src="/author-avatar.jpg"
                    alt="Author"
                    className="w-8 h-8 rounded-full object-cover border"
                />
                <span className="font-medium">Jason Francisco</span>
                <span>·</span>
                <span>August 20, 2022</span>
            </div>
        </div>
    </div>
);

export default BlogBanner;
