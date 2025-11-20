import React from "react";

export default function About() {
  return (
    <section className="px-10 md:px-20 grid md:grid-cols-3 gap-16">
      {/* Contact Block */}
      <div>
        <h3 className="uppercase text-sm tracking-widest text-gray-400">
          – Contact
        </h3>
        <p className="mt-4 text-gray-300 text-lg">
          Any type of query & discussion.
        </p>
        <p className="text-gray-400 mt-2">You can reach me at:</p>
        <a
          href="mailto:inusahmustapha428@gmail.com"
          className="text-[#F5A623] mt-4 inline-block font-medium"
        >
          inusahmustapha428@gmail.com
        </a>
      </div>

      {/* Middle Block */}
      <div>
        <p className="text-gray-300 text-lg">
          You can’t use up creativity. The more you use, the more you have in
          your significant mind.
        </p>

        <div className="flex gap-10 mt-6">
          <div>
            <h1 className="text-[#F5A623] text-3xl font-bold">2</h1>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>
          <div>
            <h1 className="text-[#F5A623] text-3xl font-bold">3</h1>
            <p className="text-gray-400 text-sm">Satisfied Clients</p>
          </div>
        </div>
      </div>

      {/* Skills List */}
      <div className="grid gap-5">
        <div className="bg-[#2A2A31] p-6 rounded-xl text-gray-200">
          Full Stack Developer — 4 Projects
        </div>
      </div>
    </section>
  );
}
