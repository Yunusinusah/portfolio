import {
  Briefcase,
  GraduationCap,
  Award,
  CalendarDays,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

import { useTheme } from '../hooks/useTheme';

const Experience = () => {
  const { isDark } = useTheme();

  const experiences = [
    {
      type: 'education',
      label: 'Education',
      title: 'Bachelor of Science in Computer Science',
      organization: 'University of Technology and Applied Sciences',
      date: '2020 - Present',
      description:
        'Building a strong foundation in computer science, software engineering, web technologies, databases, algorithms, and modern application development.',
      icon: GraduationCap,
    },
    {
      type: 'experience',
      label: 'Professional Development',
      title: 'Full Stack Developer',
      organization: 'Independent / Self-Taught',
      date: '2021 - Present',
      description:
        'Developing real-world applications and continuously expanding my expertise across frontend, backend, databases, authentication, APIs, and modern software architecture.',
      icon: Briefcase,
    },
    {
      type: 'achievement',
      label: 'Achievement',
      title: 'Building Real-World Software',
      organization: 'Personal & Academic Projects',
      date: '2021 - Present',
      description:
        'Designed and developed multiple systems including management platforms, authentication systems, web applications, and enterprise-focused solutions using modern development technologies.',
      icon: Award,
    },
  ];

  return (
    <section
      id="experience"
      className={`relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDark ? 'bg-[#070b14]' : 'bg-slate-50'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-20 left-0 w-72 h-72 rounded-full blur-3xl opacity-10 ${
            isDark ? 'bg-blue-500' : 'bg-blue-400'
          }`}
        />

        <div
          className={`absolute bottom-20 right-0 w-72 h-72 rounded-full blur-3xl opacity-10 ${
            isDark ? 'bg-purple-500' : 'bg-purple-400'
          }`}
        />

        <div
          className={`absolute inset-0 opacity-[0.025] ${
            isDark ? 'bg-white' : 'bg-slate-900'
          }`}
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="max-w-3xl mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-5 border ${
              isDark
                ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                : 'bg-blue-50 text-blue-600 border-blue-100'
            }`}
          >
            <Sparkles size={15} />
            My Journey
          </div>

          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Experience &{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p
            className={`text-lg leading-relaxed max-w-2xl transition-colors duration-300 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            A look at the experiences, education, and continuous learning that
            have shaped my journey as a software developer.
          </p>
        </div>

        {/* Journey */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className={`absolute left-5 sm:left-8 top-0 bottom-0 w-px ${
              isDark
                ? 'bg-gradient-to-b from-blue-500 via-purple-500 to-transparent'
                : 'bg-gradient-to-b from-blue-400 via-purple-400 to-transparent'
            }`}
          />

          <div className="space-y-8">
            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative pl-14 sm:pl-20 group"
                >
                  {/* Timeline icon */}
                  <div
                    className={`absolute left-0 top-7 w-10 h-10 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center border-4 transition-all duration-300 z-10 ${
                      isDark
                        ? 'bg-[#070b14] border-slate-800 group-hover:border-blue-500/50'
                        : 'bg-slate-50 border-white shadow-sm group-hover:border-blue-200'
                    }`}
                  >
                    <div
                      className={`w-full h-full rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isDark
                          ? 'bg-slate-900 group-hover:bg-blue-500/10'
                          : 'bg-slate-100 group-hover:bg-blue-50'
                      }`}
                    >
                      <Icon
                        size={22}
                        className={`transition-colors duration-300 ${
                          isDark
                            ? 'text-blue-400 group-hover:text-blue-300'
                            : 'text-blue-600 group-hover:text-blue-700'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`relative rounded-2xl border p-6 sm:p-8 transition-all duration-300 group-hover:-translate-y-1 ${
                      isDark
                        ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50'
                    }`}
                  >
                    {/* Top row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                      <div>
                        {/* Category */}
                        <div
                          className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider mb-3 ${
                            item.type === 'education'
                              ? isDark
                                ? 'bg-blue-500/10 text-blue-400'
                                : 'bg-blue-50 text-blue-600'
                              : item.type === 'achievement'
                              ? isDark
                                ? 'bg-purple-500/10 text-purple-400'
                                : 'bg-purple-50 text-purple-600'
                              : isDark
                              ? 'bg-emerald-500/10 text-emerald-400'
                              : 'bg-emerald-50 text-emerald-600'
                          }`}
                        >
                          {item.label}
                        </div>

                        <h3
                          className={`text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300 ${
                            isDark
                              ? 'text-white group-hover:text-blue-400'
                              : 'text-slate-900 group-hover:text-blue-600'
                          }`}
                        >
                          {item.title}
                        </h3>

                        <p
                          className={`font-medium transition-colors duration-300 ${
                            isDark ? 'text-blue-400' : 'text-blue-600'
                          }`}
                        >
                          {item.organization}
                        </p>
                      </div>

                      {/* Date */}
                      <div
                        className={`flex items-center gap-2 shrink-0 text-sm font-medium ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        <CalendarDays size={16} />
                        {item.date}
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className={`leading-7 max-w-3xl transition-colors duration-300 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* Bottom accent */}
                    <div
                      className={`absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        item.type === 'achievement'
                          ? 'bg-gradient-to-r from-transparent via-purple-500 to-transparent'
                          : 'bg-gradient-to-r from-transparent via-blue-500 to-transparent'
                      }`}
                    />

                    {/* Arrow */}
                    <div
                      className={`absolute top-6 right-6 hidden sm:flex w-9 h-9 rounded-full items-center justify-center opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${
                        isDark
                          ? 'bg-slate-800 text-slate-400'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ArrowUpRight size={17} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom summary */}
        <div
          className={`mt-16 rounded-2xl border p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-colors duration-300 ${
            isDark
              ? 'bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-slate-800'
              : 'bg-white border-slate-200'
          }`}
        >
          <div>
            <p
              className={`text-sm font-semibold uppercase tracking-wider mb-2 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              Always learning
            </p>

            <h3
              className={`text-xl sm:text-2xl font-bold ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Growing through every project and challenge.
            </h3>
          </div>

          <div
            className={`flex items-center gap-3 text-sm ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isDark
                  ? 'bg-blue-500/10 text-blue-400'
                  : 'bg-blue-50 text-blue-600'
              }`}
            >
              <Briefcase size={19} />
            </div>

            <span>Open to new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;