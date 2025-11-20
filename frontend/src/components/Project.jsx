import React from "react";

export default function Project() {
  const projects = [
    {
      title: "Job Portal System",
      description:
        "A full-featured job portal with role-based access, dashboards, and a complete application workflow.",
      image: "/project1.png", // replace with your image
      tech: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
    {
      title: "Land Ownership & Fraud Prevention System",
      description:
        "A blockchain-powered land registry system built with React and smart contract integration.",
      image: "/project2.png",
      tech: ["React", "Ethereum", "Smart Contracts", "Node.js"],
      link: "#",
      github: "#",
    },
    {
      title: "School Application Portal",
      description:
        "A PHP-based application portal with file uploads, session authentication, and MySQL database.",
      image: "/project3.png",
      tech: ["React", "PHP", "MySQL", "Tailwind"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section
      className="px-6 md:px-16 py-20 bg-[#0f1115] text-white"
      id="projects"
    >
      <h1 className="text-4xl font-bold mb-10 text-left">
        Selected <span className="text-yellow-400">Works</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1c20] p-5 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />

            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#0f1115] border border-gray-700 text-xs text-gray-300 rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <a
                href={project.link}
                className="px-4 py-2 bg-yellow-500 text-black rounded-lg text-sm hover:bg-yellow-400 transition"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
