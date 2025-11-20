import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E24] text-gray-400 py-10 text-center">
      <div className="text-sm">
        © {new Date().getFullYear()} Yunus — All rights reserved.
      </div>
    </footer>
  );
}
