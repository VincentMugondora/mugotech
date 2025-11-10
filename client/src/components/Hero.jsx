import React from "react";
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="bg-[#0b0c10] text-white min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <div className="text-2xl font-bold text-green-400">Dgicraft</div>
        <ul className="hidden md:flex space-x-8 text-gray-300">
          <li><a href="#" className="hover:text-white">Home</a></li>
          <li><a href="#" className="hover:text-white">About</a></li>
          <li><a href="#" className="hover:text-white">Services</a></li>
          <li><a href="#" className="hover:text-white">Cases</a></li>
        </ul>
        <button className="bg-green-400 hover:bg-green-500 text-black px-5 py-2 rounded-md font-semibold">
          Get Started
        </button>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-20 py-16">
        {/* Left Text Section */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Elevate Your Business <br /> Through Online Marketing
          </h1>
          <p className="text-gray-400">
            Unlock the full potential of your business with Elevate Your Business through 
            Online Marketing. In this transformative journey, we guide you through the 
            dynamic landscape of digital strategies, unveiling the power of online 
            marketing to propel your brand to new heights.
          </p>

          <div className="flex items-center space-x-4">
            <button className="bg-green-400 hover:bg-green-500 text-black px-5 py-3 rounded-md font-semibold">
              Get Started
            </button>
            <button className="flex items-center space-x-2 border border-gray-500 px-5 py-3 rounded-md hover:bg-gray-800">
              <FaPlay className="text-green-400" />
              <span>Watch Demo</span>
            </button>
          </div>

          <p className="text-sm text-gray-500 italic mt-2">
            Let’s start your journey here!
          </p>
        </div>

        {/* Right Image Section */}
        <div className="mt-10 md:mt-0 md:w-1/2 grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Team work"
            className="rounded-lg object-cover w-full h-56"
          />
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Meeting"
            className="rounded-lg object-cover w-full h-56"
          />
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
            alt="Laptop"
            className="rounded-lg object-cover w-full h-56 col-span-2"
          />
        </div>
      </div>

      {/* Logos Section */}
      <div className="flex justify-center space-x-12 py-8 bg-[#101218] text-gray-400">
        <span className="text-lg">informa</span>
        <span className="text-lg">Microsoft</span>
        <span className="text-lg">logitech</span>
      </div>
    </section>
  );
};

export default HeroSection;
