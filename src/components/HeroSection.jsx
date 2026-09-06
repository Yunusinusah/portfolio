import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Sparkles,
} from 'lucide-react';

import { useTheme } from '../hooks/useTheme';

const HeroSection = () => {
  const { isDark } = useTheme();
  const [displayedText, setDisplayedText] = useState('');

  const fullText = 'Full Stack Web Developer';
  const typingSpeed = 70;

  // Typing effect
  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [displayedText]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center overflow-hidden px-5 sm:px-8 lg:px-12 transition-colors duration-500 ${
        isDark
          ? 'bg-[#070b14] text-white'
          : 'bg-white text-slate-900'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid */}
        <div
          className={`absolute inset-0 opacity-[0.035] ${
            isDark ? 'opacity-[0.06]' : ''
          }`}
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Gradient glow */}
        <div
          className={`absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl ${
            isDark
              ? 'bg-blue-600/15'
              : 'bg-blue-400/10'
          }`}
        />

        <div
          className={`absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl ${
            isDark
              ? 'bg-purple-600/15'
              : 'bg-purple-400/10'
          }`}
        />

        {/* Small decorative circles */}
        <div className="absolute top-32 left-[10%] w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        <div className="absolute top-[25%] right-[15%] w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-700" />
        <div className="absolute bottom-[25%] left-[20%] w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse delay-1000" />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">

            {/* Availability badge */}
            <div className="mb-7 inline-flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${
                  isDark
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                    : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>

                Available for opportunities
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[0.95] mb-7 ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              Hi, I'm

              <span className="block mt-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Inusah Mustapha.
              </span>
            </h1>

            {/* Typing title */}
            <div
              className={`flex items-center justify-center lg:justify-start gap-3 text-xl sm:text-2xl font-semibold mb-6 ${
                isDark
                  ? 'text-slate-300'
                  : 'text-slate-700'
              }`}
            >
              <Code2
                size={25}
                className="text-blue-500"
              />

              <span>
                {displayedText}
                <span className="text-blue-500 animate-pulse ml-1">
                  |
                </span>
              </span>
            </div>

            {/* Description */}
            <p
              className={`max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed mb-9 ${
                isDark
                  ? 'text-slate-400'
                  : 'text-slate-600'
              }`}
            >
              I design and build modern, scalable web applications
              that solve real-world problems using clean architecture,
              powerful technologies, and thoughtful user experiences.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10">

              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                View My Work

                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                    : 'bg-slate-100 border-slate-200 text-slate-900 hover:bg-slate-200'
                }`}
              >
                <Mail size={18} />

                Get In Touch
              </button>

              <a
                href="/resume.pdf"
                download
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'text-slate-300 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Download size={18} />

                Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-3">

              <a
                href="https://github.com/Yunusinusah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`p-3 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300'
                }`}
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/inusah-mustapha-8b2544217/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`p-3 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300'
                }`}
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:inusahmustapha428@gmail.com"
                aria-label="Email"
                className={`p-3 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300'
                }`}
              >
                <Mail size={20} />
              </a>

              <div
                className={`hidden sm:block h-px w-20 ml-2 ${
                  isDark
                    ? 'bg-slate-700'
                    : 'bg-slate-200'
                }`}
              />

              <span
                className={`hidden sm:block text-sm ${
                  isDark
                    ? 'text-slate-500'
                    : 'text-slate-400'
                }`}
              >
                Let's build something great.
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Outer glow */}
            <div
              className={`absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full blur-3xl ${
                isDark
                  ? 'bg-blue-600/10'
                  : 'bg-blue-500/10'
              }`}
            />

            {/* Developer card */}
            <div
              className={`relative w-full max-w-lg rounded-3xl border p-1 shadow-2xl ${
                isDark
                  ? 'bg-gradient-to-br from-white/10 to-white/[0.02] border-white/10 shadow-black/40'
                  : 'bg-gradient-to-br from-slate-200 to-white border-slate-200 shadow-slate-200/70'
              }`}
            >
              <div
                className={`rounded-[22px] overflow-hidden ${
                  isDark
                    ? 'bg-[#0c111d]'
                    : 'bg-slate-950'
                }`}
              >

                {/* Terminal header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">

                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Code2 size={14} />
                    developer.ts
                  </div>

                  <Sparkles
                    size={16}
                    className="text-blue-400"
                  />
                </div>

                {/* Code */}
                <div className="p-6 sm:p-8 font-mono text-sm sm:text-base leading-8 overflow-hidden">

                  <div>
                    <span className="text-purple-400">
                      const
                    </span>{' '}
                    <span className="text-blue-400">
                      developer
                    </span>{' '}
                    = {'{'}
                  </div>

                  <div className="pl-6">
                    <span className="text-slate-400">
                      name:
                    </span>{' '}
                    <span className="text-green-400">
                      "Inusah Mustapha"
                    </span>,
                  </div>

                  <div className="pl-6">
                    <span className="text-slate-400">
                      role:
                    </span>{' '}
                    <span className="text-green-400">
                      "Full Stack Developer"
                    </span>,
                  </div>

                  <div className="pl-6">
                    <span className="text-slate-400">
                      passion:
                    </span>{' '}
                    <span className="text-green-400">
                      "Building great software"
                    </span>,
                  </div>

                  <div className="pl-6">
                    <span className="text-slate-400">
                      stack:
                    </span>{' '}
                    [
                  </div>

                  <div className="pl-12">
                    <span className="text-yellow-400">
                      "React"
                    </span>,
                  </div>

                  <div className="pl-12">
                    <span className="text-yellow-400">
                      "Next.js"
                    </span>,
                  </div>

                  <div className="pl-12">
                    <span className="text-yellow-400">
                      "Spring Boot"
                    </span>,
                  </div>

                  <div className="pl-12">
                    <span className="text-yellow-400">
                      "Node.js"
                    </span>,
                  </div>

                  <div className="pl-12">
                    <span className="text-yellow-400">
                      "MySQL"
                    </span>
                  </div>

                  <div className="pl-6">
                    ],
                  </div>

                  <div>
                    {'};'}
                  </div>

                  <div className="mt-5">
                    <span className="text-purple-400">
                      console
                    </span>
                    .
                    <span className="text-blue-400">
                      log
                    </span>
                    (
                    <span className="text-green-400">
                      "Let's build something!"
                    </span>
                    );
                  </div>

                  {/* Cursor */}
                  <div className="mt-3 flex items-center">
                    <span className="text-green-400">
                      $
                    </span>

                    <span className="ml-2 w-2 h-5 bg-blue-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className={`absolute -bottom-6 -left-2 sm:-left-10 px-5 py-4 rounded-2xl border backdrop-blur-xl shadow-xl ${
                isDark
                  ? 'bg-slate-900/80 border-white/10'
                  : 'bg-white/90 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">

                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold border-2 border-slate-900">
                    JS
                  </div>

                  <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold border-2 border-slate-900">
                    TS
                  </div>

                  <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold border-2 border-slate-900">
                    SB
                  </div>
                </div>

                <div>
                  <p
                    className={`text-sm font-semibold ${
                      isDark
                        ? 'text-white'
                        : 'text-slate-900'
                    }`}
                  >
                    Modern Tech Stack
                  </p>

                  <p className="text-xs text-slate-500">
                    Built for scalability
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('projects')}
        aria-label="Scroll to projects"
        className={`absolute bottom-7 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 transition-colors ${
          isDark
            ? 'text-slate-500 hover:text-slate-300'
            : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>

        <div className="w-5 h-8 rounded-full border flex justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-current animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
