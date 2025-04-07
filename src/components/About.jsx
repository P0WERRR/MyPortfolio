import React from 'react';
import { motion } from 'framer-motion';
import img from "../assets/Aditya.jpg";

function About() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
      <div className='flex justify-center'>
        <img
          src={img}
          alt="Aditya Raj Bundela"
          className="w-42 rounded-full shadow-lg border border-cyan-500"
        />
      </div>
      
      {/* About Text */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-white animate-pulse duration-1000" style={{ textShadow: '0 0 6px rgba(0, 255, 255, 0.7)' }}>
          About Me
        </h3>
        <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed">
          I'm Aditya Raj Bundela, a frontend developer with a passion for creating smooth, responsive user interfaces...
        </p>
        <ul className="text-gray-400 text-sm space-y-2 list-disc pl-5">
          <li>🛠️ 150+ DSA problems solved</li>
          <li>📚 Full-Stack Devsnest Bootcamp</li>
          <li>🚀 Open to freelance gigs</li>
        </ul>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        <div className="bg-zinc-800 p-4 rounded-lg shadow text-center">
          <h4 className="text-lg text-cyan-400 font-bold">150+</h4>
          <p className="text-gray-400 text-sm">DSA Problems Solved</p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg shadow text-center">
          <h4 className="text-lg text-cyan-400 font-bold">10+</h4>
          <p className="text-gray-400 text-sm">Projects Built</p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg shadow text-center">
          <h4 className="text-lg text-cyan-400 font-bold">5+</h4>
          <p className="text-gray-400 text-sm">Tech Stacks Mastered</p>
        </div>
      </div>

      {/* Tech Stack with Animation */}
      <motion.div
        className="mt-10"
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
        <div className="flex flex-wrap gap-4 text-sm">
          {["React", "JavaScript", "Java", "Bootstrap", "Tailwind CSS", "HTML", "CSS", "Git", "GitHub", "Redux"].map((tech, idx) => (
            <span key={idx} className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
