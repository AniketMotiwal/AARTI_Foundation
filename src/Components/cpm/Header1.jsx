import React, { useState } from 'react';
import logo from 'C:/Aaarti/my-project/src/assets/logo.png'; 
import akon from 'C:/Aaarti/my-project/src/assets/Akon.png';
import iit from 'C:/Aaarti/my-project/src/assets/iit.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFocusAreasOpen, setIsFocusAreasOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleFocusAreas = () => {
    setIsFocusAreasOpen(!isFocusAreasOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 transition-colors duration-300 ease-in-out">
      <div className="flex flex-col items-center p-4 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center w-full md:flex-row md:justify-between">
          <div className="flex items-center space-x-4 md:space-x-8">
            <img src={logo} alt="CPM Logo" className="h-12 md:h-16 lg:h-24 w-auto transform hover:scale-150 transition-transform duration-500" />
            <img src={akon} alt="Akon Logo" className="h-10 md:h-12 lg:h-24 w-auto transform hover:scale-150 transition-transform duration-500" />
            <img src={iit} alt="IIT Logo" className="h-10 md:h-12 lg:h-24 w-auto transform hover:scale-150 transition-transform duration-500" />
          </div>

          <div className="text-center md:text-right mt-2 md:mt-0">
            <h1 className="text-lg md:text-xl lg:text-4xl font-bold">CPM2(Centre of Precision Manufacturing)</h1>
          </div>

          <button onClick={toggleMenu} className="md:hidden text-black absolute right-4 top-4 z-60">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <hr className="w-full border-t border-gray-300 my-4" />

        <div className={`hidden md:flex flex-grow justify-center space-x-8 whitespace-nowrap`}>
          {/* Menu items */}
          <a href="/cpm" className="relative text-black group text-sm sm:text-base md:text-xl">
            Home
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          </a>
          <div className="relative group">
            <a className="relative text-black group text-sm sm:text-base md:text-xl cursor-pointer">
              About Us
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </a>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="/cpm/Introduction" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                Introduction
              </a>
              <a href="/cpm/Vision" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                Vision
              </a>
              <a href="/cpm/Objective" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                Objectives
              </a>
              <a href="/cpm/Facilities" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                Facilities
              </a>
              <a href="/cpm/Global" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                Global Impact
              </a>
            </div>
          </div>
          <div className="relative group" onMouseEnter={toggleFocusAreas} onMouseLeave={toggleFocusAreas}>
            <a className="relative text-black group text-sm sm:text-base md:text-xl cursor-pointer">
              Focus Areas
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </a>
            <div className={`absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg transition-opacity duration-300 ${isFocusAreasOpen ? 'opacity-100' : 'opacity-0'}`}>
              <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
              Precision Finishing
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
              Smart Manufacturing
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
              SustainabilityManufacturing
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
              Industry Collaboration
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
              Capacity Building
              </a>
            </div>
          </div>
          <a href="#research" className="relative text-black group text-sm sm:text-base md:text-xl">
            Research & Collaboration
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          </a>
          <a href="#membership" className="relative text-black group text-sm sm:text-base md:text-xl">
            Membership Models
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          </a>
          <a href="#news" className="relative text-black group text-sm sm:text-base md:text-xl">
            News & Events
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <nav className={`fixed top-0 left-0 w-full bg-white shadow-lg z-40 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col p-4 space-y-4">
          <a href="#home" className="text-black text-lg" onClick={toggleMenu}>Home</a>
          <a href="#about" className="text-black text-lg" onClick={toggleMenu}>About Us</a>
          <a href="#focus" className="text-black text-lg" onClick={toggleMenu}>Focus Areas</a>
          <a href="#research" className="text-black text-lg" onClick={toggleMenu}>Research & Collaboration</a>
          <a href="#membership" className="text-black text-lg" onClick={toggleMenu}>Membership Models</a>
          <a href="#news" className="text-black text-lg" onClick={toggleMenu}>News & Events</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
