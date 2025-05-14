import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`sticky top-0 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} transition-colors duration-300 z-50`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button - Left Side */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`inline-flex items-center justify-center p-2 ${darkMode ? 'text-white' : 'text-gray-400'} hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 6h15m-15 6h15m-15 6h15"
                />
              </svg>
            </button>
          </div>

          {/* Navbar Links - Centered */}
          <div className="flex-1 flex items-center justify-center">
            <div className="hidden sm:flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
              <Link
                to="/"
                className={`text-2xl font-medium px-3 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700 hover:underline' : 'text-gray-300 hover:bg-gray-700 hover:underline'} hover:text-white`}
              >
                Home
              </Link>
              <Link
                to="/About"
                className={`text-2xl font-medium px-3 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700 hover:underline' : 'text-gray-300 hover:bg-gray-700 hover:underline'} hover:text-white`}
              >
                About
              </Link>
              <Link
                to="/cpm"
                className={`text-2xl font-medium px-3 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700 hover:underline' : 'text-gray-300 hover:bg-gray-700 hover:underline'} hover:text-white`}
              >
                CPM
              </Link>
              <Link
                to="/Rsvc"
                className={`text-2xl font-medium px-3 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700 hover:underline' : 'text-gray-300 hover:bg-gray-700 hover:underline'} hover:text-white`}
              >
                RSVC
              </Link>
              <Link
                to="/Teams"
                className={`text-2xl font-medium px-3 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700 hover:underline' : 'text-gray-300 hover:bg-gray-700 hover:underline'} hover:text-white`}
              >
                Team
              </Link>
              <Link
                to="/Projects"
                className={`text-2xl font-medium px-3 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700 hover:underline' : 'text-gray-300 hover:bg-gray-700 hover:underline'} hover:text-white`}
              >
                Projects
              </Link>
              <Link
                to="/Callforbid"
                className={`text-2xl font-medium px-3 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700 hover:underline' : 'text-gray-300 hover:bg-gray-700 hover:underline'} hover:text-white`}
              >
                Call for Bid
              </Link>
              <Link
                to="/Multiskilling"
                className={`text-2xl font-medium px-3 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700 hover:underline' : 'text-gray-300 hover:bg-gray-700 hover:underline'} hover:text-white`}
              >
                Multiskilling Lab
              </Link>
              <Link
                to="/WorkWithUs"
                className={`text-2xl font-medium px-3 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700 hover:underline' : 'text-gray-300 hover:bg-gray-700 hover:underline'} hover:text-white`}
              >
                Work with Us
              </Link>
              <Link
                to="/ContactUs"
                className={`text-2xl font-medium px-3 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700 hover:underline' : 'text-gray-300 hover:bg-gray-700 hover:underline'} hover:text-white`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Dark Mode Toggle - Right Side */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={toggleDarkMode}
              className={`ml-4 ${darkMode ? 'text-teal-400' : 'text-teal-100'} hover:text-white focus:outline-none`}
            >
              {darkMode ? (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 15.5a5.5 5.5 0 01-1-10.938A8 8 0 1014 17a5.48 5.48 0 01-4 1.5z" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3v1M12 20v1M5.22 5.22l.707.707M17.07 17.07l.707.707M3 12h1M20 12h1M5.22 18.778l.707-.707M17.07 6.93l.707-.707M12 8a4 4 0 110 8 4 4 0 010-8z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={toggleMobileMenu}
              className={`block text-gray-300 hover:bg-gray-700 hover:text-white text-2xl font-semibold py-2 px-3 rounded-md`}
            >
              Home
            </Link>
            <Link
              to="/About"
              onClick={toggleMobileMenu}
              className={`block text-gray-300 hover:bg-gray-700 hover:text-white text-2xl font-semibold py-2 px-3 rounded-md`}
            >
              About
            </Link>
            <Link
              to="/cpm"
              onClick={toggleMobileMenu}
              className={`block text-gray-300 hover:bg-gray-700 hover:text-white text-2xl font-semibold py-2 px-3 rounded-md`}
            >
              CPM
            </Link>
            <Link
              to="/Rsvc"
              onClick={toggleMobileMenu}
              className={`block text-gray-300 hover:bg-gray-700 hover:text-white text-2xl font-semibold py-2 px-3 rounded-md`}
            >
              RSVC
            </Link>
            <Link
              to="/Teams"
              onClick={toggleMobileMenu}
              className={`block text-gray-300 hover:bg-gray-700 hover:text-white text-2xl font-semibold py-2 px-3 rounded-md`}
            >
              Team
            </Link>
            <Link
              to="/Projects"
              onClick={toggleMobileMenu}
              className={`block text-gray-300 hover:bg-gray-700 hover:text-white text-2xl font-semibold py-2 px-3 rounded-md`}
            >
              Projects
            </Link>
            <Link
              to="/Multiskilling"
              onClick={toggleMobileMenu}
              className={`block text-gray-300 hover:bg-gray-700 hover:text-white text-2xl font-semibold py-2 px-3 rounded-md`}
            >
              Multiskilling Lab
            </Link>
            <Link
              to="/WorkWithUs"
              onClick={toggleMobileMenu}
              className={`block text-gray-300 hover:bg-gray-700 hover:text-white text-2xl font-semibold py-2 px-3 rounded-md`}
            >
              Work with Us
            </Link>
            <Link
              to="/ContactUs"
              onClick={toggleMobileMenu}
              className={`block text-gray-300 hover:bg-gray-700 hover:text-white text-2xl font-semibold py-2 px-3 rounded-md`}
            >
              Contact Us
            </Link>
            <Link
              to="/Callforbid"
              onClick={toggleMobileMenu}
              className={`block text-gray-300 hover:bg-gray-700 hover:text-white text-2xl font-semibold py-2 px-3 rounded-md`}
            >
              Call for Bid
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;