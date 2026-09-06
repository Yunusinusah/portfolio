import { useState } from 'react';

import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  Sparkles,
  Github,
  Linkedin,
} from 'lucide-react';

import { useTheme } from '../hooks/useTheme';

const Contact = () => {
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:inusahmustapha428@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'inusahmustapha428@gmail.com',
      href: 'mailto:inusahmustapha428@gmail.com',
      color: 'blue',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+233 559 644 443',
      href: 'tel:+233559644443',
      color: 'purple',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ghana',
      color: 'emerald',
    },
  ];

  return (
    <section
      id="contact"
      className={`relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDark ? 'bg-[#070b14]' : 'bg-white'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-20 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 ${
            isDark ? 'bg-blue-500' : 'bg-blue-400'
          }`}
        />

        <div
          className={`absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10 ${
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
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-5 border ${
              isDark
                ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                : 'bg-blue-50 text-blue-600 border-blue-100'
            }`}
          >
            <Sparkles size={15} />
            Let's Connect
          </div>

          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Let's build something{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              great together.
            </span>
          </h2>

          <p
            className={`text-lg leading-relaxed max-w-2xl ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Have a project in mind, an opportunity to discuss, or simply want
            to connect? Send me a message and I'll get back to you.
          </p>
        </div>

        {/* Main contact area */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Availability card */}
            <div
              className={`relative overflow-hidden rounded-2xl border p-7 ${
                isDark
                  ? 'bg-slate-900/70 border-slate-800'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>

                <span
                  className={`text-sm font-semibold ${
                    isDark ? 'text-emerald-400' : 'text-emerald-600'
                  }`}
                >
                  Available for opportunities
                </span>
              </div>

              <h3
                className={`text-2xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Have an idea?
              </h3>

              <p
                className={`leading-7 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                I'm always interested in discussing new projects,
                collaborations, and opportunities where technology can solve
                meaningful problems.
              </p>
            </div>

            {/* Contact information */}
            <div className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;

                const colorClasses = {
                  blue: isDark
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'bg-blue-50 text-blue-600',
                  purple: isDark
                    ? 'bg-purple-500/10 text-purple-400'
                    : 'bg-purple-50 text-purple-600',
                  emerald: isDark
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'bg-emerald-50 text-emerald-600',
                };

                const content = (
                  <>
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                        colorClasses[item.color]
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
                          isDark ? 'text-slate-500' : 'text-slate-400'
                        }`}
                      >
                        {item.label}
                      </p>

                      <p
                        className={`text-sm font-medium truncate ${
                          isDark ? 'text-slate-200' : 'text-slate-700'
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>

                    {item.href && (
                      <ArrowUpRight
                        size={17}
                        className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      />
                    )}
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`group flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-0.5 ${
                      isDark
                        ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                    }`}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className={`group flex items-center gap-4 rounded-2xl border p-4 ${
                      isDark
                        ? 'bg-slate-900/50 border-slate-800'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            <div
              className={`rounded-2xl border p-5 ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800'
                  : 'bg-white border-slate-200'
              }`}
            >
              <p
                className={`text-sm font-semibold mb-4 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                Find me online
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/inusahmustapha"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:col-span-3">
            <div
              className={`relative rounded-2xl border p-6 sm:p-8 ${
                isDark
                  ? 'bg-slate-900/70 border-slate-800'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="mb-8">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Send me a message
                </h3>

                <p
                  className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  Fill out the form below and your email client will open with
                  the message prepared for me.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-semibold mb-2 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={`w-full px-4 py-3.5 rounded-xl outline-none transition-all duration-300 ${
                        isDark
                          ? 'bg-slate-800/80 text-white border border-slate-700 placeholder-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
                          : 'bg-white text-slate-900 border border-slate-200 placeholder-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-semibold mb-2 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3.5 rounded-xl outline-none transition-all duration-300 ${
                        isDark
                          ? 'bg-slate-800/80 text-white border border-slate-700 placeholder-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
                          : 'bg-white text-slate-900 border border-slate-200 placeholder-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
                      }`}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-semibold mb-2 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    placeholder="Tell me a little about your project or idea..."
                    className={`w-full px-4 py-3.5 rounded-xl outline-none transition-all duration-300 resize-none ${
                      isDark
                        ? 'bg-slate-800/80 text-white border border-slate-700 placeholder-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
                        : 'bg-white text-slate-900 border border-slate-200 placeholder-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
                    }`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:-translate-y-0.5"
                >
                  <Send
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  />

                  Send Message

                  <ArrowUpRight
                    size={17}
                    className="opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 text-center">
          <p
            className={`text-sm ${
              isDark ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            I usually respond as soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;