import {
  Code2,
  Server,
  Database,
  Wrench,
  GitBranch,
  Cloud,
  Braces,
  Layers3,
} from 'lucide-react';

import { useTheme } from '../hooks/useTheme';

const Skills = () => {
  const { isDark } = useTheme();

  const skillsCategories = [
    {
      name: 'Frontend Development',
      description:
        'Building responsive, accessible, and modern user interfaces.',
      icon: Code2,
      skills: [
        'React',
        'Next.js',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
      ],
      accent: 'blue',
    },
    {
      name: 'Backend Development',
      description:
        'Designing reliable APIs and scalable server-side applications.',
      icon: Server,
      skills: [
        'Node.js',
        'Express.js',
        'Spring Boot',
        'Java',
        'PHP',
        'REST APIs',
      ],
      accent: 'purple',
    },
    {
      name: 'Database & Data',
      description:
        'Designing structured, reliable, and efficient data systems.',
      icon: Database,
      skills: [
        'MySQL',
        'MongoDB',
        'SQL',
        'Database Design',
        'JPA / Hibernate',
        'Data Modeling',
      ],
      accent: 'emerald',
    },
    {
      name: 'Tools & DevOps',
      description:
        'Using modern development tools to build and maintain software.',
      icon: Wrench,
      skills: [
        'Git',
        'GitHub',
        'Vite',
        'Postman',
        'Docker',
        'AWS',
      ],
      accent: 'orange',
    },
  ];

  const additionalSkills = [
    'JWT Authentication',
    'Spring Security',
    'API Integration',
    'Responsive Design',
    'System Architecture',
    'Authentication & Authorization',
    'Version Control',
    'Agile Development',
  ];

  const accentStyles = {
    blue: {
      icon: isDark
        ? 'bg-blue-500/10 text-blue-400'
        : 'bg-blue-50 text-blue-600',
      badge: isDark
        ? 'bg-blue-500/10 border-blue-500/20 text-blue-300'
        : 'bg-blue-50 border-blue-200 text-blue-700',
      dot: 'bg-blue-500',
    },
    purple: {
      icon: isDark
        ? 'bg-purple-500/10 text-purple-400'
        : 'bg-purple-50 text-purple-600',
      badge: isDark
        ? 'bg-purple-500/10 border-purple-500/20 text-purple-300'
        : 'bg-purple-50 border-purple-200 text-purple-700',
      dot: 'bg-purple-500',
    },
    emerald: {
      icon: isDark
        ? 'bg-emerald-500/10 text-emerald-400'
        : 'bg-emerald-50 text-emerald-600',
      badge: isDark
        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
        : 'bg-emerald-50 border-emerald-200 text-emerald-700',
      dot: 'bg-emerald-500',
    },
    orange: {
      icon: isDark
        ? 'bg-orange-500/10 text-orange-400'
        : 'bg-orange-50 text-orange-600',
      badge: isDark
        ? 'bg-orange-500/10 border-orange-500/20 text-orange-300'
        : 'bg-orange-50 border-orange-200 text-orange-700',
      dot: 'bg-orange-500',
    },
  };

  return (
    <section
      id="skills"
      className={`relative py-24 sm:py-28 px-5 sm:px-8 lg:px-12 overflow-hidden transition-colors duration-500 ${
        isDark
          ? 'bg-[#070b14]'
          : 'bg-white'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div
          className={`absolute top-1/4 -left-40 w-[450px] h-[450px] rounded-full blur-3xl ${
            isDark
              ? 'bg-blue-600/5'
              : 'bg-blue-500/5'
          }`}
        />

        <div
          className={`absolute bottom-0 -right-40 w-[450px] h-[450px] rounded-full blur-3xl ${
            isDark
              ? 'bg-purple-600/5'
              : 'bg-purple-500/5'
          }`}
        />

        {/* Subtle grid */}
        <div
          className={`absolute inset-0 opacity-[0.025] ${
            isDark ? 'opacity-[0.04]' : ''
          }`}
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="max-w-3xl mb-16">

          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-blue-500" />

            <span
              className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                isDark
                  ? 'text-blue-400'
                  : 'text-blue-600'
              }`}
            >
              Technical Skills
            </span>
          </div>

          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 ${
              isDark
                ? 'text-white'
                : 'text-slate-950'
            }`}
          >
            Tools I use to
            <span className="block mt-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              build great software.
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg leading-8 ${
              isDark
                ? 'text-slate-400'
                : 'text-slate-600'
            }`}
          >
            My development experience spans frontend interfaces,
            backend systems, databases, APIs, and the tools required
            to bring everything together into production-ready
            applications.
          </p>
        </div>

        {/* Main skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {skillsCategories.map((category) => {
            const Icon = category.icon;
            const styles = accentStyles[category.accent];

            return (
              <div
                key={category.name}
                className={`group relative p-7 sm:p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-white/[0.03] border-white/10 hover:bg-white/[0.05] hover:border-white/15'
                    : 'bg-slate-50 border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50'
                }`}
              >

                {/* Top */}
                <div className="flex items-start justify-between mb-6">

                  <div className="flex items-center gap-4">

                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${styles.icon}`}
                    >
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3
                        className={`text-xl font-bold ${
                          isDark
                            ? 'text-white'
                            : 'text-slate-900'
                        }`}
                      >
                        {category.name}
                      </h3>

                      <p
                        className={`text-sm mt-1 ${
                          isDark
                            ? 'text-slate-500'
                            : 'text-slate-500'
                        }`}
                      >
                        {category.skills.length} technologies
                      </p>
                    </div>

                  </div>

                  <div
                    className={`hidden sm:flex w-8 h-8 rounded-lg items-center justify-center transition-transform duration-300 group-hover:rotate-12 ${
                      isDark
                        ? 'bg-white/5 text-slate-500'
                        : 'bg-white text-slate-400 border border-slate-200'
                    }`}
                  >
                    <Braces size={16} />
                  </div>

                </div>

                {/* Description */}
                <p
                  className={`text-sm leading-6 mb-7 ${
                    isDark
                      ? 'text-slate-400'
                      : 'text-slate-600'
                  }`}
                >
                  {category.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">

                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
                        styles.badge
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${styles.dot}`}
                      />

                      {skill}
                    </span>
                  ))}

                </div>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                    category.accent === 'blue'
                      ? 'bg-blue-500'
                      : category.accent === 'purple'
                      ? 'bg-purple-500'
                      : category.accent === 'emerald'
                      ? 'bg-emerald-500'
                      : 'bg-orange-500'
                  }`}
                />

              </div>
            );
          })}

        </div>

        {/* Development capabilities */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 mt-6">

          {/* Left card */}
          <div
            className={`rounded-3xl border p-7 sm:p-8 ${
              isDark
                ? 'bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-teal-400/5 border-white/10'
                : 'bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 border-slate-200'
            }`}
          >

            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                isDark
                  ? 'bg-white/10 text-blue-400'
                  : 'bg-white text-blue-600 shadow-sm'
              }`}
            >
              <Layers3 size={24} />
            </div>

            <h3
              className={`text-2xl font-bold mb-3 ${
                isDark
                  ? 'text-white'
                  : 'text-slate-900'
              }`}
            >
              Beyond the stack
            </h3>

            <p
              className={`text-sm leading-7 ${
                isDark
                  ? 'text-slate-400'
                  : 'text-slate-600'
              }`}
            >
              I focus not only on writing code, but also on
              authentication, architecture, maintainability,
              performance, and creating systems that can grow
              with their users.
            </p>

          </div>

          {/* Right card */}
          <div
            className={`rounded-3xl border p-7 sm:p-8 ${
              isDark
                ? 'bg-white/[0.03] border-white/10'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >

            <div className="flex items-center gap-3 mb-6">

              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark
                    ? 'bg-purple-500/10 text-purple-400'
                    : 'bg-purple-50 text-purple-600'
                }`}
              >
                <GitBranch size={20} />
              </div>

              <div>
                <h3
                  className={`font-bold ${
                    isDark
                      ? 'text-white'
                      : 'text-slate-900'
                  }`}
                >
                  Additional Expertise
                </h3>

                <p
                  className={`text-xs mt-1 ${
                    isDark
                      ? 'text-slate-500'
                      : 'text-slate-500'
                  }`}
                >
                  Development practices & technologies
                </p>
              </div>

            </div>

            <div className="flex flex-wrap gap-2">

              {additionalSkills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium border transition-all duration-300 hover:-translate-y-0.5 ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-slate-300 hover:border-purple-500/30 hover:text-purple-300'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-purple-300 hover:text-purple-600'
                  }`}
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

        {/* Bottom tech statement */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center ${
            isDark
              ? 'text-slate-500'
              : 'text-slate-400'
          }`}
        >
          <Cloud size={17} />

          <span className="text-sm">
            Always learning, experimenting, and improving.
          </span>

          <span className="hidden sm:block w-1 h-1 rounded-full bg-current" />

          <span className="text-sm">
            Technology never stops evolving.
          </span>
        </div>

      </div>
    </section>
  );
};

export default Skills;
