import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const jumpTo = (id) => (e) => {
  if (window.location.pathname !== '/Rsvc') return;
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.pushState(null, '', `#${id}`);
};

const linkClass = 'text-gray-300 hover:text-white hover:underline transition text-sm';

const Footer2 = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 240);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-emerald-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Our Initiatives */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-5 border-b border-gray-700 pb-2">
              Our Initiatives
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className={linkClass}>
                  AARTI Foundation
                </Link>
              </li>
              <li>
                <Link to="/cpm" className={linkClass}>
                  CPM — Centre for Precision Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/Rsvc" className={linkClass}>
                  RSVC — RuTAGe Smart Village Centre
                </Link>
              </li>
              <li>
                <Link to="/cpm#ifactory" className={linkClass}>
                  iFactory
                </Link>
              </li>
            </ul>
          </div>

          {/* RSVC */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-5 border-b border-gray-700 pb-2">
              RSVC
            </h4>
            <ul className="space-y-3 columns-1 sm:columns-2 lg:columns-1">
              <li>
                <Link to="/Rsvc" className={linkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Rsvc/Activites" className={linkClass}>
                  Activities
                </Link>
              </li>
              <li>
                <a href="/Rsvc#smart-pillars" onClick={jumpTo('smart-pillars')} className={linkClass}>
                  5 Pillars
                </a>
              </li>
              <li>
                <a href="/Rsvc#approach" onClick={jumpTo('approach')} className={linkClass}>
                  Approaches
                </a>
              </li>
              <li>
                <a href="/Rsvc#isvc-centers" onClick={jumpTo('isvc-centers')} className={linkClass}>
                  ISVC Centers
                </a>
              </li>
              <li>
                <Link to="/Rsvc/Rutage" className={linkClass}>
                  RuTaGe Technologies
                </Link>
              </li>
              <li>
                <Link to="/Rsvc/Entities" className={linkClass}>
                  Manthan Entities
                </Link>
              </li>
              <li>
                <Link to="/Rsvc/Strategic" className={linkClass}>
                  Strategic Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* AARTI */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-5 border-b border-gray-700 pb-2">
              AARTI
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/About" className={linkClass}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/Teams" className={linkClass}>
                  Team
                </Link>
              </li>
              <li>
                <Link to="/Projects" className={linkClass}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/ContactUs" className={linkClass}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/WorkWithUs" className={linkClass}>
                  Work with Us
                </Link>
              </li>
              <li>
                <Link to="/Multiskilling" className={linkClass}>
                  Multiskilling Lab
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700/80" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} RuTAGe Smart Village Centre · AARTI Foundation, IIT
            Roorkee. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-5">
            <a
              href="https://x.com/AARTIIITR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-sky-400 transition text-sm"
            >
              <FaTwitter size={16} />
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/aarti-allied-and-automotive-research-and-technology-innovation/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition text-sm"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>
            <span className="hidden sm:block text-gray-600">|</span>
            <a href="#" className="text-sm text-gray-400 hover:text-white hover:underline">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white hover:underline">
              Terms
            </a>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer2;
