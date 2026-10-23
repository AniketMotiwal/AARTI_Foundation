import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { scrollToCpmSection } from './scrollToCpmSection';

const smoothScrollToTop = (duration) => {
  const start = window.scrollY;
  const startTime = performance.now();

  const scroll = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easing = progress * (2 - progress);

    window.scrollTo(0, start * (1 - easing));

    if (elapsedTime < duration) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};

const Footer = () => {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const goToIFactory = (e) => {
    if (location.pathname === '/cpm') {
      e.preventDefault();
      scrollToCpmSection('ifactory');
    }
  };

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    smoothScrollToTop(500);
  };

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          <div className="md:w-1/4">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">Our Initiatives</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  AARTI Foundation
                </Link>
              </li>
              <li>
                <Link to="/cpm" className="hover:text-gray-300">
                  CPM
                </Link>
              </li>
              <li>
                <Link to="/Rsvc" className="hover:text-gray-300">
                  RSVC
                </Link>
              </li>
              <li>
                <Link to="/cpm#ifactory" onClick={goToIFactory} className="hover:text-gray-300">
                  iFactory
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:flex-1 text-center px-2 md:px-6">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-indigo-400 font-medium mb-1.5">
              CPM · IIT Roorkee
            </p>
            <h2 className="text-base sm:text-lg font-bold text-white leading-snug">
              Centre for Precision Manufacturing
            </h2>
          </div>

          <div className="md:w-1/4 md:text-right">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">Follow Us</h3>
            <ul className="space-y-1 text-sm md:inline-block md:text-left">
              <li>
                <a
                  href="https://x.com/AARTIIITR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-gray-300 md:justify-end"
                >
                  <FaTwitter className="mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/aarti-allied-and-automotive-research-and-technology-innovation/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-gray-300 md:justify-end"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 mt-4 pt-4 border-t border-gray-800">
          © {new Date().getFullYear()} <span className="font-semibold">Aarti Foundation</span>
        </div>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
