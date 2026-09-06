import {
  Github,
  Linkedin,
  Mail,
  Heart,
  ArrowUp,
  ArrowUpRight,
  Code2,
} from 'lucide-react';

import { useTheme } from '../hooks/useTheme';

const Footer = () => {
  const { isDark } = useTheme();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/Yunusinusah',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/inusah-mustapha-8b2544217/',
      icon: Linkedin,
    },
    {
      label: 'Email',
      href: 'mailto:inusahmustapha428@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <footer
      className={`relative overflow-hidden border-t transition-colors duration-300 ${
        isDark
          ? 'bg-[#050810] border-slate-800'
          : 'bg-slate-50 border-slate-200'
      }`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[200px] rounded-full blur-3xl opacity-10 ${
            isDark ? 'bg-blue-500' : 'bg-blue-400'
          }`}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a
                href="#"
                className="inline-flex items-center gap-3 mb-5 group"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
                    isDark
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      : 'bg-blue-50 text-blue-600 border border-blue-100'
                  }`}
                >
                  <Code2 size={21} />
                </div>

                <div>
                  <h3
                    className={`text-lg font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Inusah Mustapha
                  </h3>

                  <p
                    className={`text-xs ${
                      isDark ? 'text-slate-500' : 'text-slate-400'
                    }`}
                  >
                    Full Stack Developer
                  </p>
                </div>
              </a>

              <p
                className={`max-w-sm leading-7 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                I build modern, scalable, and user-focused software solutions
                with a passion for solving real-world problems through
                technology.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className={`text-sm font-semibold uppercase tracking-wider mb-5 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Navigation
              </h4>

              <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`inline-flex items-center gap-1 text-sm transition-all duration-300 hover:translate-x-1 ${
                        isDark
                          ? 'text-slate-400 hover:text-blue-400'
                          : 'text-slate-600 hover:text-blue-600'
                      }`}
                    >
                      {link.label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4
                className={`text-sm font-semibold uppercase tracking-wider mb-5 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Connect
              </h4>

              <p
                className={`text-sm leading-6 mb-5 max-w-xs ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Interested in working together or have a project in mind?
                Let's connect.
              </p>

              <div className="flex gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={
                        social.label !== 'Email' ? '_blank' : undefined
                      }
                      rel={
                        social.label !== 'Email'
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      aria-label={social.label}
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${
                        isDark
                          ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white hover:border-slate-700'
                          : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <Icon size={19} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`h-px ${
            isDark ? 'bg-slate-800' : 'bg-slate-200'
          }`}
        />

        {/* Bottom footer */}
        <div className="py-7 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p
            className={`text-sm text-center sm:text-left ${
              isDark ? 'text-slate-500' : 'text-slate-500'
            }`}
          >
            © {currentYear} Inusah Mustapha. All rights reserved.
          </p>

          <div
            className={`flex items-center gap-1.5 text-sm ${
              isDark ? 'text-slate-500' : 'text-slate-500'
            }`}
          >
            <span>Designed & built with</span>

            <Heart
              size={14}
              className="text-red-500 fill-red-500"
            />

            <span>in Ghana</span>
          </div>

          {/* Back to top */}
          <a
            href="#"
            aria-label="Back to top"
            className={`group w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${
              isDark
                ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            <ArrowUp
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;