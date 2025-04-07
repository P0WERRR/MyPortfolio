import React, { useState } from 'react'
import { SiCodechef } from "react-icons/si";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Header = () => {
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

export default Header