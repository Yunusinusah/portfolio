import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="px-10 md:px-20 py-28 grid md:grid-cols-2 gap-10 items-center">
      {/* Left Text Section */}
      <div>
        <h1 className="text-6xl font-extrabold leading-tight text-white">
          Inusah <br /> Mustapha<span className="text-[#F5A623]">.</span>
        </h1>

        <div className="w-20 h-1 bg-[#F5A623] my-6"></div>

        <p className="text-gray-400 text-lg max-w-md">
          Full-Stack Developer and Designer based in Ghana. I build elegant,
          modern, and interactive web experiences.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-8 text-gray-300">
          <a
            href="https://github.com/Yunusinusah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github className="hover:text-white transition" size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/inusah-mustapha-8b2544217/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin className="hover:text-white transition" size={24} />
          </a>
          <a
            href="https://x.com/Inusah1_5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Twitter className="hover:text-white transition" size={24} />
          </a>
          <a
            href="mailto:inusahmustapha428@gmail.com"
            className="hover:text-white transition"
          >
            <Mail className="hover:text-white transition" size={24} />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src="/upload/yunusa_img.png"
          alt="Profile"
          className="w-80 md:w-[420px] rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
