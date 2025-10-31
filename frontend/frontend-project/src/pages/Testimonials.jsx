import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaTelegram } from "react-icons/fa";
import { testimonials } from "../assets/assets.js";


const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-black text-yellow-100 py-20 px-6 md:px-12 lg:px-24"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-14 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What <span className="text-yellow-300">People Say</span>
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Profile */}
            <div className="flex items-center gap-4 mb-4">
              
              <div>
                <h4 className="text-lg font-semibold text-yellow-300">{t.name}</h4>
                <p className="text-sm text-yellow-100">{t.role}</p>
              </div>
            </div>

            {/* Feedback */}
            <p className="text-yellow-200 italic mb-6">“{t.feedback}”</p>

            {/* Contacts */}
            <div className="flex gap-4 border-t border-zinc-700 pt-4">
              {t.linkedin && (
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-200 hover:text-yellow-300 transition"
                >
                  <FaLinkedin size={20} />
                </a>
              )}
              {t.email && (
                <a
                  href={`mailto:${t.email}`}
                  className="text-yellow-200 hover:text-yellow-300 transition"
                >
                  <FaEnvelope size={20} />
                </a>
              )}
              {t.telegram && (
                <a
                  href={t.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-200 hover:text-yellow-300 transition"
                >
                  <FaTelegram size={20} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
