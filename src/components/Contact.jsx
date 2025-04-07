import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";

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
        link: "https://drive.google.com/file/d/1WlY0sHq80D3ZIhzNEO6RRjde-_uAM214/view?usp=sharing"
      }
    ];
  
    return (
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h3 className="text-xl font-bold mb-6 text-white animate-pulse duration-1000" >Contact Me</h3>
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

export default Contact