import React from 'react'

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-black text-yellow-100 min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Sifan Fita Hika
          </h1>
          <p className="text-yellow-50 text-lg md:text-xl mb-6">
            Software Engineer & AI Enthusiast. I build modern, responsive web applications and explore cutting-edge AI technologies.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/portfolio"
              className="bg-yellow-200 hover:bg-yellow-400 text-black px-6 py-3 rounded-md font-medium transition-colors"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="border border-yellow-200 text-yellow-200 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Content / Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-64 h-64 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
            {/* Replace with your image */}
            <img
              src="/profile-placeholder.jpg"
              alt="Sifan Fita Hika"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
