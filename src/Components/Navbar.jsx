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
          {/* Mobile Menu Button */}
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

          {/* Navbar Links */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <div className="hidden sm:flex sm:space-x-8 sm:overflow-x-auto"> {/* Adjusted space-x-6 to space-x-8 */}
              <Link
                to="/"
                className={`text-2xl font-medium px-3 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700 hover:underline' : 'text-gray-300 hover:bg-gray-700 hover:underline'} hover:text-white`}
              >
                Home
              </Link>
              <Link
                to="/about"
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
              {/* New "Call for Bid" Link */}
              <Link
                to="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fiitr.ac.in%2FCareers%2Fstatic%2FSRIC%2FTechnical_Specifications_Shared_final.docx&wdOrigin=BROWSELINK"
                target="_blank"
                className={`text-2xl font-medium px-3 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700 hover:underline' : 'text-gray-300 hover:bg-gray-700 hover:underline'} hover:text-white`}
              >
                Call for Bid
              </Link>

              {/* Group the Multiskilling Lab and Contact Us links together */}
              <div className="flex space-x-4">
                <Link
                  to="/Multiskilling"
                  className={`text-2xl font-medium px-3 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700 hover:underline' : 'text-gray-300 hover:bg-gray-700 hover:underline'} hover:text-white`}
                >
                  Multiskilling Lab
                </Link>
                <Link
                  to="/ContactUs"
                  className={`text-2xl font-medium px-3 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700 hover:underline' : 'text-gray-300 hover:bg-gray-700 hover:underline'} hover:text-white`}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
              className={`block text-gray-300 hover:bg-gray-700 hover:text-white text-lg font-semibold py-2 px-3 rounded-md`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMobileMenu}
              className={`block text-gray-300 hover:bg-gray-700 hover:text-white text-lg font-semibold py-2 px-3 rounded-md`}
            >
              About
            </Link>
            <Link
              to="/cpm"
              onClick={toggleMobileMenu}
              className={`block text-gray-300 hover:bg-gray-700 hover:text-white text-lg font-semibold py-2 px-3 rounded-md`}
            >
              CPM
            </Link>
            <Link
              to="/Rsvc"
              onClick={toggleMobileMenu}
              className={`block text-gray-300 hover:bg-gray-700 hover:text-white text-lg font-semibold py-2 px-3 rounded-md`}
            >
              RSVC
            </Link>
            <Link
              to="/Teams"
              onClick={toggleMobileMenu}
              className={`block text-gray-300 hover:bg-gray-700 hover:text-white text-lg font-semibold py-2 px-3 rounded-md`}
            >
              Team
            </Link>
            <Link
              to="/Multiskilling"
              onClick={toggleMobileMenu}
              className={`block text-gray-300 hover:bg-gray-700 hover:text-white text-lg font-semibold py-2 px-3 rounded-md`}
            >
              Multiskilling Lab
            </Link>
            <Link
              to="/ContactUs"
              onClick={toggleMobileMenu}
              className={`block text-gray-300 hover:bg-gray-700 hover:text-white text-lg font-semibold py-2 px-3 rounded-md`}
            >
              Contact Us
            </Link>
            {/* New "Call for Bid" Link in Mobile Menu */}
            <Link
              to="/call-for-bid"
              onClick={toggleMobileMenu}
              className={`block text-gray-300 hover:bg-gray-700 hover:text-white text-lg font-semibold py-2 px-3 rounded-md`}
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
