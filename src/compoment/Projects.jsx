import React from "react";
import { Globe, Github } from "lucide-react";
import projects from "../data/projects.json";

const iconMap = {
  globe: <Globe size={16} />,
  github: <Github size={16} />
};

export default function Projects() {
  return (
    <section className="mt-20 w-full max-w-4xl mx-auto px-6 md:px-10 py-10 bg-white dark:bg-black text-black dark:text-white font-sans">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-8 ">
        <h2 className="text-3xl font-bold">featured projects</h2>
        <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white text-sm flex items-center gap-1">
          view more <span className="ml-1">→</span>
        </a>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div key={i} className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-2xl p-4 md:p-6 transition hover:shadow-lg">
            <img src={project.image} alt={project.title} className="w-full h-44 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold text-black dark:text-white">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, j) => (
                <span
                  key={j}
                  className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-gray-800 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.links.map((link, k) => (
                <a
                  key={k}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1 bg-white dark:bg-black border dark:border-gray-700 border-gray-300 text-black dark:text-white rounded-md flex items-center gap-1"
                >
                  {iconMap[link.type] || null} {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
