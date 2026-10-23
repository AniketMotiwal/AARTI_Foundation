import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import DarkModeToggle from '../DarkModeToggle';

const RNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTechDropdownOpen, setIsTechDropdownOpen] = useState(false);
  const techDropdownRef = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsTechDropdownOpen(false);
  };

  const toggleTech = () => setIsTechDropdownOpen((prev) => !prev);

  const jumpToSection = (sectionId) => (e) => {
    e.preventDefault();
    closeMenu();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${sectionId}`);
      return;
    }
    window.location.href = `/Rsvc#${sectionId}`;
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (techDropdownRef.current && !techDropdownRef.current.contains(event.target)) {
        setIsTechDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
    }
  }, []);

  const linkClass =
    'text-white font-bold hover:underline whitespace-nowrap transition-colors';
  const desktopLinkSize = 'text-base md:text-lg lg:text-xl xl:text-2xl';

  const navLinks = (
    <>
      <Link to="/Rsvc" className={`${linkClass} ${desktopLinkSize}`}>
        Home
      </Link>
      <Link to="#" className={`${linkClass} ${desktopLinkSize}`}>
        About
      </Link>
      <Link to="/Rsvc/Activites" className={`${linkClass} ${desktopLinkSize}`}>
        Activities
      </Link>
      <a
        href="#smart-pillars"
        onClick={jumpToSection('smart-pillars')}
        className={`${linkClass} ${desktopLinkSize}`}
      >
        5 Pillars
      </a>

      <div className="relative" ref={techDropdownRef}>
        <button
          type="button"
          onClick={toggleTech}
          aria-expanded={isTechDropdownOpen}
          aria-haspopup="true"
          className={`${linkClass} ${desktopLinkSize} focus:outline-none inline-flex items-center gap-2`}
        >
          Technologies
          <FaChevronDown
            className={`text-sm lg:text-base transition-transform duration-200 ${
              isTechDropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isTechDropdownOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 lg:w-80 bg-white text-black rounded-lg shadow-xl z-50 border border-gray-200">
            <Link
              to="/Rsvc/Rutage"
              onClick={closeMenu}
              className="block px-4 py-3 text-sm lg:text-base font-semibold hover:bg-gray-100 rounded-t-lg"
            >
              RuTaGe (Technologies)
            </Link>
            <div className="border-t border-gray-200" />
            <Link
              to="/Rsvc/Entities"
              onClick={closeMenu}
              className="block px-4 py-3 text-sm lg:text-base font-semibold hover:bg-gray-100 rounded-b-lg"
            >
              Technologies from Entities Registered on Manthan
            </Link>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="w-full px-2 sm:px-3 md:px-4">
      <nav className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-950 rounded-lg shadow-lg dark:shadow-black/50 dark:ring-1 dark:ring-slate-700 overflow-visible">
        {/* Mobile */}
        <div className="md:hidden overflow-hidden rounded-lg">
          <div className="flex items-center justify-between px-3 py-3">
            <span className="text-white font-bold text-sm sm:text-base">Menu</span>
            <div className="flex items-center gap-1">
              <DarkModeToggle className="p-2 text-white hover:bg-white/20" iconClass="h-5 w-5" />
              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="text-white p-2 rounded-md hover:bg-white/20 focus:outline-none"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="px-3 pb-3 flex flex-col gap-2 border-t border-white/20">
              <Link
                to="/Rsvc"
                onClick={closeMenu}
                className={`${linkClass} block py-2.5 px-3 text-sm sm:text-base rounded-md hover:bg-white/15`}
              >
                Home
              </Link>
              <Link
                to="#"
                onClick={closeMenu}
                className={`${linkClass} block py-2.5 px-3 text-sm sm:text-base rounded-md hover:bg-white/15`}
              >
                About
              </Link>
              <Link
                to="/Rsvc/Activites"
                onClick={closeMenu}
                className={`${linkClass} block py-2.5 px-3 text-sm sm:text-base rounded-md hover:bg-white/15`}
              >
                Activities
              </Link>
              <a
                href="#smart-pillars"
                onClick={jumpToSection('smart-pillars')}
                className={`${linkClass} block py-2.5 px-3 text-sm sm:text-base rounded-md hover:bg-white/15`}
              >
                5 Pillars
              </a>

              <button
                type="button"
                onClick={toggleTech}
                className={`${linkClass} w-full text-left py-2.5 px-3 text-sm sm:text-base rounded-md hover:bg-white/15 flex items-center justify-between gap-3`}
              >
                <span>Technologies</span>
                <FaChevronDown
                  className={`shrink-0 transition-transform duration-200 ${isTechDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isTechDropdownOpen && (
                <div className="mx-1 flex flex-col rounded-md bg-white text-gray-900 overflow-hidden shadow-lg">
                  <Link
                    to="/Rsvc/Rutage"
                    onClick={closeMenu}
                    className="block px-3 py-2.5 text-sm font-semibold hover:bg-gray-100"
                  >
                    RuTaGe (Technologies)
                  </Link>
                  <Link
                    to="/Rsvc/Entities"
                    onClick={closeMenu}
                    className="block px-3 py-2.5 text-sm font-semibold hover:bg-gray-100 border-t border-gray-200"
                  >
                    Technologies from Entities Registered on Manthan
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center w-full flex-nowrap px-8 lg:px-14 xl:px-20 2xl:px-28 py-4 lg:py-5">
          <div className="flex flex-1 items-center justify-evenly gap-10 lg:gap-14 xl:gap-20 2xl:gap-24 min-w-0 pr-6 lg:pr-10">
            {navLinks}
          </div>
          <DarkModeToggle className="shrink-0 p-2.5 text-white hover:bg-white/15 rounded-lg border border-white/20" iconClass="h-5 w-5" />
        </div>
      </nav>
    </div>
  );
};

export default RNavbar;
