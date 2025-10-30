import React from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left: Text */}
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Sifan Fita Hika. All rights reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/sifanfita"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/sifan-fita-hika-75138a227

"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://t.me/CoeurBeni"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaTelegram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
