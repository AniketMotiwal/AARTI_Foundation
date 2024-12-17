import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RNavbar = () => {
  const [isTechDropdownOpen, setIsTechDropdownOpen] = useState(false);

  const handleTechClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsTechDropdownOpen(!isTechDropdownOpen);
  };

  return (
    <div className="w-full">
      <nav className="flex items-center justify-center bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between w-full max-w-5xl space-x-12"> {/* Adjusted max width and spacing */}
          <Link to="/Rsvc" className="text-white text-4xl font-bold hover:underline">Home</Link>
          <Link to="#" className="text-white text-4xl font-bold hover:underline">About</Link>
          <Link to="#" className="text-white text-4xl font-bold hover:underline">Approach</Link>

          <div className="relative inline-block text-left">
            <button
              onClick={handleTechClick}
              className="text-white text-4xl font-bold hover:underline focus:outline-none"
            >
              Technologies
            </button>
            {isTechDropdownOpen && (
              <div className="absolute left-0 mt-2 w-72 bg-white text-black rounded-lg shadow-lg z-10">
                <Link
                  to="/Rsvc/Rutage"
                  className="block px-4 py-3 font-semibold hover:bg-gray-100"
                >
                  RuTaGe (Technologies)
                </Link>
                <div className="border-t border-gray-300"></div>
                <Link
                  to="/Rsvc/Entities"
                  className="block px-4 py-3 font-semibold hover:bg-gray-100"
                >
                  Technologies from Entities Registered on Manthan
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default RNavbar;
