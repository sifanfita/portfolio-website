import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "React", level: "85%" },
    { name: "Tailwind CSS", level: "80%" },
    { name: "Node.js", level: "75%" },
    { name: "Spring Boot", level: "70%" },
    { name: "PostgreSQL", level: "75%" },
    { name: "Machine Learning", level: "65%" },
  ];

  return (
    <section id="about" className="bg-black text-yellow-100 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-yellow-200 mb-8 text-center md:text-left"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>

            <motion.div
              className="w-full text-yellow-100 text-lg space-y-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p>
                Hello! I’m{" "}
                <span className="text-yellow-200 font-semibold">
                  Sifan Fita Hika
                </span>
                , a software engineer and AI enthusiast based in Addis Ababa. I
                specialize in building modern, responsive web applications and
                exploring cutting-edge artificial intelligence technologies.
              </p>
              <p>
                I’m passionate about learning new technologies, solving complex
                problems, and contributing to innovative projects that make a
                difference. I have experience with{" "}
                <span className="text-yellow-200 font-medium">
                  React, Tailwind CSS, Node.js, Spring Boot, PostgreSQL
                </span>
                , and AI/ML tools.
              </p>
              <p>
                Beyond coding, I enjoy mentoring, exploring new ideas, and
                continuously improving my skills to stay ahead in the
                ever-evolving tech world.
              </p>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2">
            <motion.h2
              className="text-2xl font-semibold text-yellow-200 mb-6"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Skills
            </motion.h2>

            <div className="w-auto space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  className="w-full"
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-yellow-100">
                      {skill.name}
                    </span>
                    <span className="text-sm text-yellow-300">
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2.5">
                    <motion.div
                      className="bg-yellow-300 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
