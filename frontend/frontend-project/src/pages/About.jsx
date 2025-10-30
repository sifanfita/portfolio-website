import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-black text-yellow-100 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-200 mb-8 text-center md:text-left">
          About Me
        </h2>
        
        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          
          {/* Left: Text */}
          <div className="md:w-2/3 text-yellow-100 text-lg space-y-4">
            <p>
              Hello! I’m <span className="text-yellow-200 font-semibold">Sifan Fita Hika</span>, a software engineer and AI enthusiast based in Addis Ababa. 
              I specialize in building modern, responsive web applications and exploring cutting-edge artificial intelligence technologies.
            </p>
            <p>
              I’m passionate about learning new technologies, solving complex problems, and contributing to innovative projects that make a difference. 
              I have experience with <span className="text-yellow-200 font-medium">React, Tailwind CSS, Node.js, Spring Boot, PostgreSQL</span>, and AI/ML tools.
            </p>
            <p>
              Beyond coding, I enjoy mentoring, exploring new ideas, and continuously improving my skills to stay ahead in the ever-evolving tech world.
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default About;
