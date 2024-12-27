import React from 'react';
import logo from '../assets/logo.webp';
import { FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  const scrollToTop = () => {
    const scrollDuration = 500; // Shortened duration for a faster experience
    const start = window.scrollY;
    const startTime = performance.now();

    const scrollAnimation = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / scrollDuration, 1);

      window.scrollTo(0, start * (1 - progress));

      if (progress < 1) {
        requestAnimationFrame(scrollAnimation);
      }
    };

    requestAnimationFrame(scrollAnimation);
  };

  return (
    <footer className="bg-gray-200 dark:bg-gray-900 relative">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src={logo}
                className="h-30 w-30 md:h-32 md:w-32 transition-transform duration-300 transform hover:scale-150"
                alt="#"
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">AARTI</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium flex space-x-4 items-center">
                <li>
                  <a
                    href="https://x.com/AARTIIITR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500"
                  >
                    <FaTwitter size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/aarti-allied-and-automotive-research-and-technology-innovation/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 <a href="#" className="hover:underline">AARTI™</a>. All Rights Reserved.
          </span>
          {/* Added "Designed by Aniket Moitiwal" */}
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ml-auto">
            Designed by <span className="font-semibold text-blue-600">Aniket Motiwal</span>
          </span>
        </div>
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
