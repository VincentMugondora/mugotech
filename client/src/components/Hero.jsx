import React from "react";
import { FaPlay } from "react-icons/fa";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="bg-[#111111] text-white min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="flex flex-col relative
      h-[90vh] md:flex-row justify-between items-center px-10 md:px-20 py-16">
        {/* decorative glow and cut-out */}
        {/* Left Text Section */}
        <div className="relative z-10 max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Elevate Your Business Through Online Marketing
          </h1>
          <p className="text-gray-400">
            Unlock the full potential of your business with Elevate Your Business through 
            Online Marketing. In this transformative journey, we guide you through the 
            dynamic landscape of digital strategies, unveiling the power of online 
            marketing to propel your brand to new heights.
          </p>

          <div className="flex items-center space-x-4">
            <button className="bg-green-400 hover:bg-green-500 text-black px-6 py-3 rounded-full font-semibold">
              Get Started
            </button>
            <button className="flex items-center space-x-2 border border-gray-600 px-5 py-3 rounded-xl hover:bg-white/5">
              <FaPlay className="text-green-400" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative z-10 mt-12 md:mt-48 md:w-1/2 grid grid-cols-2 gap-4 pl-0 ml-0 justify-start">
          {/* top shadow coming from navbar */}
          <div className="pointer-events-none absolute -top-8 left-0 right-0 h-28 md:h-44 bg-linear-to-b from-black via-black/80 to-transparent"></div>
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="Team work"
              className="object-cover w-full h-[60vh]"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Meeting"
              className="object-cover w-full h-[50vh]"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
              alt="Laptop"
              className="object-cover w-full h-[60vh]"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden -mt-[10vh]">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
              alt="Laptop"
              className="object-cover w-full h-[60vh]"
            />
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <div className="flex justify-start space-x-12 py-8 px-10 md:px-20 text-gray-400">
        <span className="text-lg">informa</span>
        <span className="text-lg">Microsoft</span>
        <span className="text-lg">logitech</span>
      </div>
    </section>
  );
};

export default HeroSection;
