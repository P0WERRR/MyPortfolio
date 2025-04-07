import { useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";




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
      <div className="relative bg-black text-white min-h-screen font-mono " style={{
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
