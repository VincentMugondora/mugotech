import React from "react";

const Navbar = () => {
  return (
    <nav className="relative z-30 flex justify-between items-center px-10 md:px-20 py-6 bg-[#111111] text-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-400">Dgicraft</div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-gray-300">
        <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
        <li><a href="#" className="hover:text-white transition-colors">About</a></li>
        <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
        <li><a href="#" className="hover:text-white transition-colors">Cases</a></li>
      </ul>

      {/* CTA Button */}
      <button className="bg-green-400 hover:bg-green-500 text-black px-5 py-2 rounded-md font-semibold transition">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
