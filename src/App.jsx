import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-semibold mb-4"
      >
        Hi, I’m Aditya Raj Bundela.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-gray-400 max-w-xl text-sm md:text-base"
      >
        I'm a frontend developer passionate about building modern, responsive UIs. Skilled in HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, Redux, and version control with Git/GitHub. I've also solved 150+ DSA questions on GeeksforGeeks and LeetCode.
      </motion.p>
    </main>
  );
}

function ProjectCard({ title, live, code, preview }) {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <iframe
        src={preview}
        title={title}
        className="w-full h-56 border-none"
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
      <h3 className="text-xl font-bold mb-6">Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-20">
      <h3 className="text-xl font-bold mb-4">About Me</h3>
      <p className="text-gray-400 text-sm md:text-base mb-4">
        I'm Aditya Raj Bundela, a frontend developer currently seeking opportunities to contribute to exciting web projects. I've completed a Full-Stack Development course from Devsnest (Nov 2021 - Jul 2022) and have a strong focus on frontend development and DSA. With hands-on experience through personal projects and over 150+ DSA problems solved, I'm ready to bring clean, efficient, and scalable code to the table.
      </p>
      <ul className="text-gray-400 text-sm md:text-base space-y-1">
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/adityarajbundela" className="text-blue-400 hover:underline" target="_blank">adityarajbundela</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/P0WERRR" className="text-blue-400 hover:underline" target="_blank">P0WERRR</a></li>
        <li><strong>Email:</strong> <a href="mailto:rajaybundela68@gmail.com" className="text-blue-400 hover:underline">rajaybundela68@gmail.com</a></li>
        <li><strong>Phone:</strong> <a href="tel:+917828960217" className="text-blue-400 hover:underline">+91 7828960217</a></li>
        <li><strong>Resume:</strong> <a href="/Aditya'sResume01.pdf" download className="text-blue-400 hover:underline">Download Resume</a></li>
      </ul>
    </section>
  );
}

function App() {
  useEffect(() => {
    document.title = "Aditya Raj Bundela Portfolio";
  }, []);

  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-mono">
        <header className="flex justify-between items-center p-4 max-w-5xl mx-auto">
          <h1 className="text-lg font-bold">
            <Link to="/">Aditya Raj Bundela</Link>
          </h1>
          <nav className="flex gap-6 text-sm">
            <Link to="/projects" className="hover:text-gray-400">Projects</Link>
            <Link to="/about" className="hover:text-gray-400">About</Link>
          </nav>
          <div className="flex gap-4">
            <a href="https://github.com/P0WERRR" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5 hover:text-gray-400" />
            </a>
            <a href="https://www.linkedin.com/in/adityarajbundela" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-5 h-5 hover:text-gray-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-5 h-5 hover:text-gray-400" />
            </a>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <footer className="text-center text-gray-500 text-sm py-10">
          <p>Built with React + Tailwind CSS · © 2025</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
