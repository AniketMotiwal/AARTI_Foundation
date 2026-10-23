import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { useDarkMode } from '../context/DarkModeContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/About', label: 'About' },
  { to: '/cpm', label: 'CPM' },
  { to: '/Rsvc', label: 'RSVC' },
  { to: '/Teams', label: 'Team' },
  { to: '/Projects', label: 'Projects' },
  { to: '/Callforbid', label: 'Call for Bid' },
  { to: '/Multiskilling', label: 'Multiskilling Lab' },
  { to: '/WorkWithUs', label: 'Work with Us' },
  { to: '/ContactUs', label: 'Contact Us' },
];

const linkClass = (darkMode) =>
  `font-medium px-2 lg:px-2.5 xl:px-3 2xl:px-4 py-2 lg:py-2.5 rounded-md transition-colors whitespace-nowrap tracking-wide
  text-sm lg:text-base xl:text-lg 2xl:text-xl
  ${
    darkMode
      ? 'text-gray-200 hover:bg-gray-700 hover:text-white'
      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
  }`;

const Navbar = () => {
  const { darkMode } = useDarkMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const mobileMenuPortal =
    typeof document !== 'undefined'
      ? createPortal(
          <>
            <div
              className={`fixed inset-0 bg-black/50 z-[9998] lg:hidden transition-opacity duration-300 ${
                mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
              onClick={closeMobileMenu}
              aria-hidden={!mobileMenuOpen}
            />
            <div
              className={`fixed inset-y-0 left-0 z-[9999] w-[min(100vw-2rem,18rem)] bg-gray-900 shadow-2xl flex flex-col lg:hidden transition-transform duration-300 ease-out ${
                mobileMenuOpen ? 'translate-x-0' : '-translate-x-full pointer-events-none'
              }`}
              role="dialog"
              aria-modal="true"
              aria-label="Main navigation"
              aria-hidden={!mobileMenuOpen}
            >
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
                <span className="text-white font-semibold text-sm">AARTI Menu</span>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="text-gray-300 hover:text-white p-1"
                  aria-label="Close menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex-1 min-h-0 overflow-y-auto px-3 py-4 space-y-1">
                {navLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMobileMenu}
                    className="block text-gray-200 hover:bg-gray-800 hover:text-white text-base font-medium py-2.5 px-3 rounded-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </>,
          document.body
        )
      : null;

  return (
    <nav
      className={`sticky top-0 transition-colors duration-300 z-50 ${
        darkMode ? 'bg-slate-950 border-b border-slate-800' : 'bg-gray-800'
      } ${mobileMenuOpen ? 'lg:relative' : ''}`}
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[90rem] px-3 sm:px-6 lg:px-8 2xl:px-12">
        <div className="relative flex h-14 lg:h-16 xl:h-[4.25rem] 2xl:h-20 items-center justify-between gap-3">
          <div className="flex items-center lg:hidden shrink-0">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white/30"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6h15m-15 6h15m-15 6h15" />
                )}
              </svg>
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center min-w-0">
            <div className="hidden lg:flex flex-wrap items-center justify-center gap-x-1 xl:gap-x-2 2xl:gap-x-3 max-w-full">
              {navLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={linkClass(darkMode)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              to="/"
              className="lg:hidden font-extrabold text-base sm:text-lg truncate tracking-wide"
            >
              <span className="bg-gradient-to-r from-amber-300 via-emerald-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(52,211,153,0.35)]">
                AARTI FOUNDATION
              </span>
            </Link>
          </div>

          <div className="flex items-center shrink-0">
            <DarkModeToggle
              className="p-2 lg:p-2.5 2xl:p-3 hover:bg-gray-700 dark:hover:bg-slate-800"
              iconClass="h-5 w-5 lg:h-6 lg:w-6 2xl:h-7 2xl:w-7"
            />
          </div>
        </div>
      </div>

      {mobileMenuPortal}
    </nav>
  );
};

export default Navbar;
