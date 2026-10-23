import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const SunIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M12 3v1M12 20v1M5.22 5.22l.707.707M17.07 17.07l.707.707M3 12h1M20 12h1M5.22 18.778l.707-.707M17.07 6.93l.707-.707M12 8a4 4 0 110 8 4 4 0 010-8z" />
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 15.5a5.5 5.5 0 01-1-10.938A8 8 0 1014 17a5.48 5.48 0 01-4 1.5z" />
  </svg>
);

const DarkModeToggle = ({ className = '', iconClass = 'h-5 w-5' }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className={`inline-flex items-center justify-center rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 ${className}`}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Light mode' : 'Dark mode'}
    >
      {darkMode ? (
        <MoonIcon className={`${iconClass} text-amber-300`} />
      ) : (
        <SunIcon className={`${iconClass} text-amber-400`} />
      )}
    </button>
  );
};

export default DarkModeToggle;
