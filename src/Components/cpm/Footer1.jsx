import React, { useState, useEffect } from 'react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import icons

// Smooth scrolling function
const smoothScrollToTop = (duration) => {
  const start = window.scrollY;
  const startTime = performance.now();

  const scroll = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1); // Ensure progress is between 0 and 1
    const easing = progress * (2 - progress); // Ease-in-out effect

    window.scrollTo(0, start * (1 - easing));

    if (elapsedTime < duration) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll event to show/hide button
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 200);
  };

  // Add and remove event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function with custom duration
  const scrollToTop = () => {
    smoothScrollToTop(500); // Adjust to a shorter, practical duration
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Grid for Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#focus" className="hover:text-gray-300">Focus Areas</a></li>
              <li><a href="#membership" className="hover:text-gray-300">Membership</a></li>
            
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://x.com/AARTIIITR" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-300">
                  <FaTwitter className="mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/aarti-allied-and-automotive-research-and-technology-innovation/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-300">
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </li>
              <li><a href="#" className="hover:text-gray-300">Newsletter</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-300">Cookies Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Blog</a></li>
              <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-300">Events</a></li>
              <li><a href="#" className="hover:text-gray-300">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mt-8">
          © {new Date().getFullYear()} <span className="font-semibold">Aarti Foundation</span>
        </div>

        {/* Scroll to Top Button */}
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
