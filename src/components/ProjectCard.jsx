import React from 'react'

function ProjectCard({ title, live, code, preview }) {
    function handleClick() {
      window.open(live, "_blank");
    }
    return (
      <div onClick={handleClick} className="bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <iframe
          src={preview}
          title={title}
          className="w-full h-56 border-none overflow-hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none",scrollbarColor: "transparent" }}
        />
        <div className="p-4">
          <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
          <a href={live} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mr-4">Live</a>
          <a href={code} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">Code</a>
        </div>
      </div>
    );
  }

export default ProjectCard