import React from 'react';
import logo from '../assets/logo.webp';
import iit from '../assets/iit.webp';

const backgroundColor = 'bg-white';

const Header = () => {
  return (
    <header
      className={`relative flex flex-col md:flex-row items-center justify-between p-4 ${backgroundColor} text-black shadow-lg hover:shadow-2xl transition-shadow duration-300`}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-300 opacity-50 z-[-1]"></div>

      {/* Left Side Logo (Stacked in mobile, inline in larger screens) */}
      <div className="flex flex-col items-center md:flex-row md:space-x-4 space-y-2 md:space-y-0">
        <img
          src={logo}
          alt="Logo"
          loading="lazy"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 transform hover:scale-125 transition-transform duration-500"
        />
      </div>

      {/* Center Text */}
      <div className="flex-grow flex flex-col md:flex-row items-center justify-center text-center my-2 md:my-4 space-y-1 md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-lg p-1 md:p-2 lg:p-3 mb-1">
            AARTI Foundation
            <div className="text-sm md:text-base lg:text-4xl mt-4">
              (Automotive and Allied Research and Technology Innovation)
            </div>
          </h1>
          <p className="text-xs md:text-sm lg:text-xl mt-0 -mb-2 text-right w-full overflow-hidden whitespace-nowrap text-lime-950">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500">
              An Industry accelerator of IIT Roorkee
              <br />
              Section 8 Company of IIT Roorkee
            </span>

          </p>

        </div>
      </div>

      {/* Right Side Affiliation with IIT Roorkee Logo */}
      <div className="flex flex-col justify-between items-center md:flex-row md:justify-end md:space-x-4 space-y-2 md:space-y-0">
        <img
          src={iit}
          alt="IIT Roorkee Logo"
          loading="lazy"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-white p-4 rounded-full transform hover:scale-125 transition-transform duration-500"
        />
      </div>
    </header>
  );
};

export default Header;