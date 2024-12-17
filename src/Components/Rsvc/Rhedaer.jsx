import React from 'react';
import iit from 'C:/Aaarti/my-project/src/assets/iit.webp'; // Update path as needed
import rscvc1 from 'C:/Aaarti/my-project/src/assets/rscvcbg.webp'; // Update path as needed
import logo from 'C:/Aaarti/my-project/src/assets/logo.webp'; // Update path as needed

const Rhedaer = () => {
  return (
    <header className="header-container flex flex-col items-center bg-white text-gray-800">
      <div className="flex items-center justify-between w-full mb-2">
        {/* Left Logos */}
        <div className="flex-shrink-0 ml-3 flex items-center space-x-4">
          <img
            src={logo}
            alt="New Logo"
            className="w-32 h-32 md:w-12 md:h-12 lg:w-12 lg:h-24 xl:w-24 xl:h-24 sm:w-24 sm:h-24 transform hover:scale-150 transition-transform duration-300 filter brightness-125"
          />
          <img
            src={iit}
            alt="Left Logo"
            className="w-40 h-40 md:w-16 md:h-16 lg:w-16 lg:h-32 xl:w-24 xl:h-24 sm:w-24 sm:h-24 transform hover:scale-150 transition-transform duration-300 filter brightness-80"
          />
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center">
          <h2 className="text-5xl font-bold mb-0 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 text-transparent bg-clip-text leading-tight pb-1">
            RuTAGe - Smart Village Centre (RSVC)
          </h2>

          <div className="w-full flex justify-end mt-2 sm:mt-1">
            <p className="text-base transition-colors duration-300 hover:text-red-500 hover:font-bold">
              A Rural Technology Enabled Employment & Entrepreneurship model
            </p>
          </div>
        </div>

        {/* Right Logo */}
        <div className="flex-shrink-0">
          <img
            src={rscvc1}
            alt="Right Logo"
            className="h-48 w-auto filter brightness-125"
          />
        </div>
      </div>
    </header>
  );
};

export default Rhedaer;
