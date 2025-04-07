import React from 'react'
import ProjectCard from './ProjectCard';
import { motion } from "framer-motion";

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
      },
      {
        title: "Speed Typer",
        live: "https://glittering-brigadeiros-f80f4c.netlify.app/",
        code: "https://github.com/P0WERRR/Speed-Typer",
        preview: "https://glittering-brigadeiros-f80f4c.netlify.app/"
      },
      {
        title: "Speed Typer",
        live: "https://basic-stopwatch-pjct.netlify.app/",
        code: "https://github.com/P0WERRR/Stopwatch-basic",
        preview: "https://basic-stopwatch-pjct.netlify.app/"
      }
    ];
  
    const infiniteProjects = [...projectData];
  
    return (
      <section className="w-full overflow-hidden py-20 bg-black">
        <h3 className="animate-pulse duration-1000 text-xl font-bold mb-6 text-white text-center drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] tracking-wider " style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Projects
        </h3>
        <motion.div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}>
  
          {infiniteProjects.map((project, index) => (
            <div key={index} className="min-w-[300px]">
              <ProjectCard {...project} />
            </div>
          ))}
        </motion.div>
      </section>
    );
  }

export default Projects