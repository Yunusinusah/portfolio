import {
  ExternalLink,
  Github,
  ArrowUpRight,
  FolderGit2,
} from 'lucide-react';

import { useTheme } from '../hooks/useTheme';

const Project = () => {
  const { isDark } = useTheme();

  const projects = [
    {
      title: 'Job Portal System',
      category: 'Web Application',
      description:
        'A full-featured job portal that connects employers with applicants through role-based dashboards, job management, and a complete application workflow.',
      image: '/upload/project1.png',
      tech: [
        'React',
        'Node.js',
        'Express',
        'MySQL',
        'Tailwind CSS',
      ],
      link: '#',
      github: 'https://github.com',
      featured: true,
    },
    {
      title: 'Chat Application',
      category: 'Real-Time Application',
      description:
        'A real-time communication platform built for instant messaging, featuring authentication, chat rooms, and persistent message history.',
      image: '/upload/project2.png',
      tech: [
        'React',
        'Node.js',
        'Socket.io',
        'MySQL',
        'Express',
      ],
      link: '#',
      github: 'https://github.com',
      featured: false,
    },
    {
      title: 'Human Resource Management System',
      category: 'Enterprise System',
      description:
        'A comprehensive HR platform for managing employee records, leave, promotions, performance evaluations, and other administrative processes.',
      image: '/upload/project3.png',
      tech: [
        'PHP',
        'MySQL',
        'Tailwind CSS',
      ],
      link: '#',
      github: 'https://github.com',
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className={`relative py-24 sm:py-28 px-5 sm:px-8 lg:px-12 overflow-hidden transition-colors duration-500 ${
        isDark
          ? 'bg-[#0a0f1a]'
          : 'bg-slate-50'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div
          className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl ${
            isDark
              ? 'bg-blue-600/5'
              : 'bg-blue-500/5'
          }`}
        />

        <div
          className={`absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full blur-3xl ${
            isDark
              ? 'bg-purple-600/5'
              : 'bg-purple-500/5'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3 mb-5">

              <span className="w-10 h-px bg-blue-500" />

              <span
                className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                  isDark
                    ? 'text-blue-400'
                    : 'text-blue-600'
                }`}
              >
                Selected Work
              </span>

            </div>

            <h2
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 ${
                isDark
                  ? 'text-white'
                  : 'text-slate-950'
              }`}
            >
              Projects I've
              <span className="block mt-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                built & shipped.
              </span>
            </h2>

            <p
              className={`text-base sm:text-lg leading-8 max-w-2xl ${
                isDark
                  ? 'text-slate-400'
                  : 'text-slate-600'
              }`}
            >
              A selection of applications and systems I've
              designed and developed to solve practical problems
              using modern technologies.
            </p>

          </div>

          {/* Project count */}
          <div
            className={`hidden sm:flex items-center gap-3 px-5 py-3 rounded-xl border ${
              isDark
                ? 'bg-white/[0.03] border-white/10'
                : 'bg-white border-slate-200'
            }`}
          >

            <FolderGit2
              size={19}
              className="text-blue-500"
            />

            <span
              className={`text-sm font-medium ${
                isDark
                  ? 'text-slate-300'
                  : 'text-slate-600'
              }`}
            >
              {projects.length} Featured Projects
            </span>

          </div>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-1 ${
                index === 0
                  ? 'lg:col-span-2'
                  : ''
              } ${
                isDark
                  ? 'bg-white/[0.03] border-white/10 hover:border-white/20'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl'
              }`}
            >

              <div
                className={`grid ${
                  index === 0
                    ? 'lg:grid-cols-[1.1fr_0.9fr]'
                    : 'lg:grid-cols-1'
                }`}
              >

                {/* Image */}
                <div
                  className={`relative overflow-hidden ${
                    index === 0
                      ? 'h-72 lg:h-[420px]'
                      : 'h-64'
                  }`}
                >

                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Top label */}
                  <div className="absolute top-5 left-5">

                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {project.category}
                    </span>

                  </div>

                  {/* Number */}
                  <div className="absolute bottom-5 right-5">

                    <span className="text-5xl font-bold text-white/10">
                      0{index + 1}
                    </span>

                  </div>

                  {/* Hover icon */}
                  <div
                    className={`absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 text-white transition-all duration-300 ${
                      'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
                    }`}
                  >
                    <ArrowUpRight size={19} />
                  </div>

                </div>

                {/* Content */}
                <div className="p-7 sm:p-8 flex flex-col justify-between">

                  <div>

                    <h3
                      className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                        isDark
                          ? 'text-white'
                          : 'text-slate-900'
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`text-sm sm:text-base leading-7 mb-6 ${
                        isDark
                          ? 'text-slate-400'
                          : 'text-slate-600'
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">

                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                            isDark
                              ? 'bg-white/5 border-white/10 text-slate-300'
                              : 'bg-slate-50 border-slate-200 text-slate-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">

                    <a
                      href={project.link}
                      className="group/button inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      <ExternalLink size={16} />

                      Live Demo

                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                      />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border transition-all duration-300 ${
                        isDark
                          ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Github size={16} />

                      Source Code
                    </a>

                  </div>

                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />

            </div>
          ))}

        </div>

        {/* Bottom message */}
        <div
          className={`mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isDark
              ? 'border-white/10'
              : 'border-slate-200'
          }`}
        >

          <div className="flex items-center gap-3">

            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                isDark
                  ? 'bg-blue-500/10 text-blue-400'
                  : 'bg-blue-50 text-blue-600'
              }`}
            >
              <FolderGit2 size={17} />
            </div>

            <p
              className={`text-sm ${
                isDark
                  ? 'text-slate-500'
                  : 'text-slate-500'
              }`}
            >
              More projects coming soon.
            </p>

          </div>

          <a
            href="https://github.com/Yunusinusah"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
              isDark
                ? 'text-slate-300 hover:text-blue-400'
                : 'text-slate-700 hover:text-blue-600'
            }`}
          >
            View GitHub Profile

            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Project;