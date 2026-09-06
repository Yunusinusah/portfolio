import { useEffect, useState } from 'react';

import {
  Menu,
  X,
  Moon,
  Sun,
  Code2,
  ArrowUpRight,
} from 'lucide-react';

import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  // Detect the section currently visible on screen
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        isDark
          ? 'bg-[#070b14]/85 border-slate-800'
          : 'bg-white/85 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[72px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-3"
            aria-label="Go to homepage"
          >
            <div
              className={`relative w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 ${
                isDark
                  ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                  : 'bg-blue-50 border-blue-100 text-blue-600'
              }`}
            >
              <Code2 size={20} />

              <span className="absolute -right-1 -top-1 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 border-2 border-white dark:border-[#070b14]" />
            </div>

            <div className="hidden sm:block text-left">
              <p
                className={`text-sm font-bold leading-none ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Inusah Mustapha
              </p>

              <p
                className={`text-[11px] mt-1 ${
                  isDark ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                Full Stack Developer
              </p>
            </div>

            {/* Mobile initials */}
            <span
              className={`sm:hidden text-lg font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent`}
            >
              IM
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? isDark
                        ? 'text-white'
                        : 'text-slate-900'
                      : isDark
                      ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.name}

                  {/* Active indicator */}
                  <span
                    className={`absolute left-1/2 -bottom-0.5 -translate-x-1/2 h-0.5 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 transition-all duration-300 ${
                      isActive ? 'w-5 opacity-100' : 'w-0 opacity-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={`relative w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-yellow-400 hover:border-slate-700'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
              aria-label={
                isDark ? 'Switch to light mode' : 'Switch to dark mode'
              }
            >
              <span className="transition-transform duration-300 hover:rotate-12">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </span>
            </button>

            {/* Contact button - desktop */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:-translate-y-0.5"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
              aria-label={
                isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? 'max-h-[500px] opacity-100 pb-5'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className={`pt-3 border-t ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}
          >
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? isDark
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'bg-blue-50 text-blue-600'
                        : isDark
                        ? 'text-slate-400 hover:bg-slate-900 hover:text-white'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span>{item.name}</span>

                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile contact CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;