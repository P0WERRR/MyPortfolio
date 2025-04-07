import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { SiCodechef } from "react-icons/si";

function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-semibold mb-4 text-white drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]"
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
    </main>
  );
}

function ProjectCard({ title, live, code, preview }) {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <iframe
        src={preview}
        title={title}
        className="w-full h-56 border-none overflow-hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
        <a href={live} target="_blank" className="text-blue-400 hover:underline mr-4">Live</a>
        <a href={code} target="_blank" className="text-gray-400 hover:underline">Code</a>
      </div>
    </div>
  );
}

function Projects() {
  const projectData = [
    {
      title: "E-commerce Website",
      live: "https://velvetique.netlify.app/",
      code: "https://github.com/P0WERRR/E-commerse-velvetique",
      preview: "https://velvetique.netlify.app/"
    },
    {
      title: "Gemini Clone",
      live: "https://eureka-ai-ldlk.vercel.app/",
      code: "https://github.com/P0WERRR/Eureka-Ai",
      preview: "https://eureka-ai-ldlk.vercel.app/"
    },
    {
      title: "Weather App",
      live: "https://rococo-alfajores-1ef3a4.netlify.app/",
      code: "https://github.com/P0WERRR/weatherApp",
      preview: "https://rococo-alfajores-1ef3a4.netlify.app/"
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <h3 className="text-xl font-bold mb-6 text-white drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] tracking-wider animate-pulse" style={{ fontFamily: 'Orbitron, sans-serif' }}>Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const contactItems = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/adityarajbundela"
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      label: "GitHub",
      link: "https://github.com/P0WERRR"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      label: "Email",
      link: "mailto:rajaybundela68@gmail.com"
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      label: "Phone",
      link: "tel:+917828960217"
    },
    {
      icon: <SiCodechef className="w-6 h-6" />,
      label: "Resume",
      link: "/resume.pdf"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h3 className="text-xl font-bold mb-6 text-white" style={{ textShadow: '0 0 6px rgba(0, 255, 255, 0.7)' }}>Contact Me</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-zinc-800 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 text-center"
          >
            {item.icon}
            <span className="mt-2 text-sm text-white font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-20">
      <h3 className="text-xl font-bold mb-4" style={{ textShadow: '0 0 6px rgba(0, 255, 255, 0.7)' }}>About Me</h3>
      <p className="text-gray-400 text-sm md:text-base mb-4">
        I'm Aditya Raj Bundela, a frontend developer currently seeking opportunities to contribute to exciting web projects. I've completed a Full-Stack Development course from Devsnest (Nov 2021 - Jul 2022) and have a strong focus on frontend development and DSA. With hands-on experience through personal projects and over 150+ DSA problems solved, I'm ready to bring clean, efficient, and scalable code to the table.
      </p>
    </section>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-4 max-w-5xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2">
        <SiCodechef className="text-4xl" />
      </div>
      <nav className="hidden sm:flex gap-4 text-sm items-center">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/projects" className="hover:text-gray-400">Projects</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
      </nav>
      <div className="sm:hidden relative">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars className="w-6 h-6" />
        </button>
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-zinc-900 bg-opacity-90 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 text-xl">
            <Link to="/" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/projects" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/about" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}

function App() {
  useEffect(() => {
    document.title = "Aditya Raj Bundela Portfolio";
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = '/favicon.ico';
    document.head.appendChild(link);
  }, []);

  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-mono" style={{
        background: "radial-gradient(circle at center, rgba(255,255,255,0.05), rgba(0,0,0,1))"
      }}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="text-center text-gray-500 text-sm py-10">
          <p>Built with React + Tailwind CSS · © {new Date().getFullYear()}</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
