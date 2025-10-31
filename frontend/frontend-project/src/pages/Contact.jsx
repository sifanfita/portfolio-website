import React, { useState, useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="bg-black text-yellow-100 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-200 mb-4">
          Get in Touch
        </h2>
        <p className="text-yellow-100 mb-12">
          I’d love to hear from you! Whether you want to collaborate or just say hi.
        </p>

        {/* Animated Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-slate-900 text-yellow-100 focus:ring-2 focus:ring-yellow-200 outline-none"
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-slate-900 text-yellow-100 focus:ring-2 focus:ring-yellow-200 outline-none"
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-slate-900 text-yellow-100 focus:ring-2 focus:ring-yellow-200 outline-none"
            required
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            className="bg-yellow-200 hover:bg-yellow-300 px-6 py-3 rounded-md font-medium transition-all text-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-8 text-2xl">
          <a
            href="mailto:sifanfita0@gmail.com?subject=Portfolio Inquiry&body=Hello Sifan,"
            className="hover:text-yellow-300 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/sifan-fita-hika-75138a227/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sifanfita"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
