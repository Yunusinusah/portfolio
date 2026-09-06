import {
  Code2,
  Database,
  Server,
  Layers3,
  MapPin,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
} from 'lucide-react';

import { useTheme } from '../hooks/useTheme';

const About = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={`relative py-24 sm:py-28 px-5 sm:px-8 lg:px-12 overflow-hidden transition-colors duration-500 ${
        isDark
          ? 'bg-[#0a0f1a]'
          : 'bg-slate-50'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-0 right-0 w-[450px] h-[450px] rounded-full blur-3xl ${
            isDark
              ? 'bg-blue-600/5'
              : 'bg-blue-500/5'
          }`}
        />

        <div
          className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl ${
            isDark
              ? 'bg-purple-600/5'
              : 'bg-purple-500/5'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-blue-500" />

            <span
              className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                isDark
                  ? 'text-blue-400'
                  : 'text-blue-600'
              }`}
            >
              About Me
            </span>
          </div>

          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl ${
              isDark
                ? 'text-white'
                : 'text-slate-950'
            }`}
          >
            Turning ideas into
            <span className="block mt-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              meaningful digital experiences.
            </span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12">

          {/* About text */}
          <div
            className={`rounded-3xl border p-7 sm:p-9 lg:p-10 transition-all duration-300 ${
              isDark
                ? 'bg-white/[0.03] border-white/10'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >

            {/* Intro */}
            <div className="flex items-start gap-4 mb-8">

              <div
                className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                  isDark
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'bg-blue-50 text-blue-600'
                }`}
              >
                <Code2 size={24} />
              </div>

              <div>
                <p
                  className={`text-xl font-semibold ${
                    isDark
                      ? 'text-white'
                      : 'text-slate-900'
                  }`}
                >
                  Full Stack Web Developer
                </p>

                <p
                  className={`text-sm mt-1 ${
                    isDark
                      ? 'text-slate-500'
                      : 'text-slate-500'
                  }`}
                >
                  Building software that solves real problems.
                </p>
              </div>
            </div>

            {/* Paragraphs */}
            <div
              className={`space-y-5 text-base sm:text-lg leading-8 ${
                isDark
                  ? 'text-slate-400'
                  : 'text-slate-600'
              }`}
            >
              <p>
                I'm a passionate Full Stack Web Developer with a
                strong foundation in Computer Science. I enjoy
                transforming ideas into reliable, scalable, and
                user-friendly applications.
              </p>

              <p>
                My interest in software development started with
                curiosity about how technology works behind the
                scenes. That curiosity has grown into a passion for
                designing systems, building APIs, developing intuitive
                interfaces, and solving complex technical problems.
              </p>

              <p>
                I work across both frontend and backend development,
                with experience building applications using modern
                JavaScript frameworks, backend technologies, databases,
                and enterprise systems.
              </p>
            </div>

            {/* Technologies */}
            <div className="mt-10 pt-8 border-t border-current/10">

              <p
                className={`text-sm font-semibold mb-4 ${
                  isDark
                    ? 'text-slate-300'
                    : 'text-slate-700'
                }`}
              >
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-2">

                {[
                  'React',
                  'Next.js',
                  'Node.js',
                  'Spring Boot',
                  'Java',
                  'PHP',
                  'MySQL',
                  'MongoDB',
                  'Tailwind CSS',
                  'REST APIs',
                ].map((tech) => (
                  <span
                    key={tech}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium border transition-all duration-300 hover:-translate-y-0.5 ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-slate-300 hover:border-blue-500/40 hover:text-blue-400'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600'
                    }`}
                  >
                    {tech}
                  </span>
                ))}

              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-5">

            {/* Profile card */}
            <div
              className={`relative overflow-hidden rounded-3xl p-7 sm:p-8 border ${
                isDark
                  ? 'bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-teal-400/10 border-white/10'
                  : 'bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 border-slate-200'
              }`}
            >

              {/* Decorative icon */}
              <div
                className={`absolute -right-5 -top-5 w-28 h-28 rounded-full border ${
                  isDark
                    ? 'border-blue-500/10'
                    : 'border-blue-200'
                }`}
              />

              <div
                className={`absolute -right-1 -top-1 w-16 h-16 rounded-full border ${
                  isDark
                    ? 'border-purple-500/10'
                    : 'border-purple-200'
                }`}
              />

              <div className="relative">

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    isDark
                      ? 'bg-blue-500/10 text-blue-400'
                      : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  <GraduationCap size={28} />
                </div>

                <p
                  className={`text-sm font-medium mb-2 ${
                    isDark
                      ? 'text-slate-500'
                      : 'text-slate-500'
                  }`}
                >
                  Education
                </p>

                <h3
                  className={`text-2xl font-bold mb-1 ${
                    isDark
                      ? 'text-white'
                      : 'text-slate-900'
                  }`}
                >
                  BSc Computer Science
                </h3>

                <p
                  className={`text-sm ${
                    isDark
                      ? 'text-slate-400'
                      : 'text-slate-600'
                  }`}
                >
                  Computer Science & Software Development
                </p>

              </div>
            </div>

            {/* Information grid */}
            <div className="grid grid-cols-2 gap-5">

              {/* Location */}
              <div
                className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-white/[0.03] border-white/10 hover:border-blue-500/30'
                    : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
                }`}
              >
                <MapPin
                  size={22}
                  className="text-blue-500 mb-5"
                />

                <p
                  className={`text-2xl font-bold mb-1 ${
                    isDark
                      ? 'text-white'
                      : 'text-slate-900'
                  }`}
                >
                  Ghana
                </p>

                <p
                  className={`text-sm ${
                    isDark
                      ? 'text-slate-500'
                      : 'text-slate-500'
                  }`}
                >
                  Based in
                </p>
              </div>

              {/* Experience */}
              <div
                className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-white/[0.03] border-white/10 hover:border-purple-500/30'
                    : 'bg-white border-slate-200 hover:border-purple-300 shadow-sm'
                }`}
              >
                <Briefcase
                  size={22}
                  className="text-purple-500 mb-5"
                />

                <p
                  className={`text-2xl font-bold mb-1 ${
                    isDark
                      ? 'text-white'
                      : 'text-slate-900'
                  }`}
                >
                  5+
                </p>

                <p
                  className={`text-sm ${
                    isDark
                      ? 'text-slate-500'
                      : 'text-slate-500'
                  }`}
                >
                  Projects
                </p>
              </div>

            </div>

            {/* Open opportunities */}
            <div
              className={`group rounded-2xl border p-6 transition-all duration-300 ${
                isDark
                  ? 'bg-emerald-500/5 border-emerald-500/15 hover:border-emerald-500/30'
                  : 'bg-emerald-50 border-emerald-200 hover:border-emerald-300'
              }`}
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      isDark
                        ? 'bg-emerald-500/10'
                        : 'bg-emerald-100'
                    }`}
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                    </span>
                  </div>

                  <div>
                    <p
                      className={`font-semibold ${
                        isDark
                          ? 'text-white'
                          : 'text-slate-900'
                      }`}
                    >
                      Open to opportunities
                    </p>

                    <p
                      className={`text-sm mt-1 ${
                        isDark
                          ? 'text-slate-500'
                          : 'text-slate-500'
                      }`}
                    >
                      Let's build something meaningful.
                    </p>
                  </div>

                </div>

                <ArrowUpRight
                  size={20}
                  className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                    isDark
                      ? 'text-slate-500'
                      : 'text-slate-400'
                  }`}
                />

              </div>
            </div>
          </div>
        </div>

        {/* Bottom capabilities */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

          {[
            {
              icon: Code2,
              title: 'Frontend',
              text: 'Modern interfaces',
            },
            {
              icon: Server,
              title: 'Backend',
              text: 'Scalable APIs',
            },
            {
              icon: Database,
              title: 'Database',
              text: 'Reliable data systems',
            },
            {
              icon: Layers3,
              title: 'Architecture',
              text: 'Clean & maintainable',
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04]'
                    : 'bg-white border-slate-200 hover:shadow-sm'
                }`}
              >
                <Icon
                  size={20}
                  className="text-blue-500 mb-4"
                />

                <h3
                  className={`font-semibold mb-1 ${
                    isDark
                      ? 'text-white'
                      : 'text-slate-900'
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-sm ${
                    isDark
                      ? 'text-slate-500'
                      : 'text-slate-500'
                  }`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default About;