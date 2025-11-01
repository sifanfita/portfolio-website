import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profileImg from "../assets/professionnal.jpg";

const Home = () => {
  return (
    <section className="bg-black text-yellow-100 min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center">
        
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-yellow-200"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sifan Fita Hika
          </motion.h1>

          <motion.p
            className="text-yellow-50 text-lg md:text-xl mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Software Engineer & AI Enthusiast. I build modern, responsive web
            applications and explore cutting-edge AI technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <Link
              to="/portfolio"
              className="bg-yellow-200 hover:bg-yellow-400 text-black px-6 py-3 rounded-md font-medium transition-colors shadow-md hover:shadow-yellow-300/40"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="border border-yellow-200 text-yellow-200 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-md font-medium transition-colors shadow-md hover:shadow-yellow-300/40"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Content / Profile Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-64 h-64 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden shadow-lg shadow-yellow-200/20"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={profileImg}
              alt="Sifan Fita Hika"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
