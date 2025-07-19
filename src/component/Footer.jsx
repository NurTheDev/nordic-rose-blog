import React from "react";

const Footer = () => (
    <footer className="bg-black text-white pt-16 pb-8 px-4 mt-16">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif tracking-widest mb-5">NORDIC ROSE</h2>
            <p className="mb-8 text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.
            </p>
            <div className="mb-8 flex justify-center gap-8 text-white font-medium text-base">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400 transition">Twitter</a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400 transition">LinkedIn</a>
                <a href="/rss.xml" className="underline hover:text-gray-400 transition">RSS</a>
            </div>
            <p className="text-xs text-gray-500">
                © 2012-2020 Nordic Rose Co.<br />
                All rights reserved.
            </p>
        </div>
    </footer>
);

export default Footer;
