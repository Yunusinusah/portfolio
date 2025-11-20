import React from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#0f1115] text-white sticky top-0 z-50 border-b border-gray-800">
      {/* Top Contact Bar */}
      <div className="text-right text-xs md:text-sm py-1 px-4 text-gray-400 border-b border-gray-800">
        +233 559 644 443 &nbsp; | &nbsp; +233 256 670 618
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <span className="text-yellow-400">Yu</span>
          <span className="text-gray-300">NuS</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-300 font-medium">
          <li>
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-yellow-400 transition"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f1115] border-t border-gray-800">
          <ul className="flex flex-col space-y-5 p-6 text-gray-300 font-medium">
            <li>
              <a
                href="#about"
                onClick={toggleMenu}
                className="hover:text-yellow-400 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={toggleMenu}
                className="hover:text-yellow-400 transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="hover:text-yellow-400 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
