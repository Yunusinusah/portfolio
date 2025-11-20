import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import HeroSection from "../components/HeroSection";
import Project from "../components/Project";

export default function Home() {
  return (
    <div className="bg-[#1E1E24] text-gray-200 min-h-screen">
      <Navbar />

      <main className="mt-20 space-y-40">
        <HeroSection />
        <About />
        <Project />
      </main>

      <Footer />
    </div>
  );
}
