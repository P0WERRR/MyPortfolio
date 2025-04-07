import React from 'react'
import { motion } from "framer-motion";

const Home =() => {
  const handleClick = () => {
    window.open("https://drive.google.com/file/d/1WlY0sHq80D3ZIhzNEO6RRjde-_uAM214/view?usp=sharing", "_blank");
  }
    return (
      <main className="flex flex-col items-center justify-center text-center px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="animate-pulse duration-1000 text-3xl md:text-5xl font-semibold mb-4 text-white drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Hi, I’m Aditya Raj Bundela.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-400 max-w-xl text-sm md:text-base mb-8"
        >
          I'm a frontend developer passionate about building modern, responsive UIs. Skilled in HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, Redux, and version control with Git/GitHub. I've also solved 150+ DSA questions on GeeksforGeeks and LeetCode.
        </motion.p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left w-full max-w-5xl">
          <div className="bg-zinc-800 p-4 rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-lg font-bold mb-2">✅ 150+ DSA Problems</h4>
            <p className="text-gray-400 text-sm">Solved on LeetCode and GFG improving logic and problem-solving skills.</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-lg font-bold mb-2">🎓 Full Stack Certified</h4>
            <p className="text-gray-400 text-sm">Completed Devsnest Full Stack Bootcamp (Nov 2021 - Jul 2022).</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-lg font-bold mb-2">💼 Open to Work</h4>
            <p className="text-gray-400 text-sm">Actively seeking frontend developer roles and freelance projects.</p>
          </div>
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg shadow hover:shadow-md transition my-3">
            <button onClick={handleClick} className="text-lg font-bold mb-2">📝 Download Resume</button>
          </div>
      </main>
    );
  }

export default Home