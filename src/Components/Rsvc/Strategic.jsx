import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import phd from '/src/assets/phd.png';
import rotary from '/src/assets/Rotary.png';
import infosys from '/src/assets/infosys.png';
import gram from '/src/assets/Gram.webp';
import sobus from '/src/assets/sobus.png';
import manthan from '/src/assets/manthan.jpg'; 
import iit from  '/src/assets/iit.png';
import tr from '/src/assets/tr.jpg';
import viransh from '/src/assets/viransh.png';
import platform from '/src/assets/platform.webp';
import Mphasis from '/src/assets/Mphasis.jpg';
import Picture12 from '/src/assets/Picture12.png';

const Strategic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const partners = [
    { src: manthan, alt: "Manthan" },
    { src: iit, alt: "IT Roorkee" },
    { src: tr, alt: "TRS" },
    { src: viransh, alt: "Viransh" },
    { src: platform, alt: "Platform Commons" },
    { src: Mphasis, alt: "Mphasis" },
    { src: Picture12, alt: "GenXThorton" }
  ];

  const logos = [phd, rotary, infosys, gram, sobus];
  const numLogos = logos.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % numLogos);
    }, 3000);

    return () => clearInterval(interval);
  }, [numLogos]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numLogos);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numLogos) % numLogos);
  };

  return (
    <div className="bg-white p-4 sm:p-6 max-w-6xl mx-auto">
      <p className="text-sm sm:text-base text-gray-600 text-center mb-6 max-w-3xl mx-auto">
        RSVC collaborations include Nehir Himalayan Foundation, Sericulture Department, SETU,
        AARTI@IITR, and community partners—supporting measurable impact in farming, livelihoods,
        and women&apos;s empowerment.
      </p>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
        Strategic Partners
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
            <img 
              src={partner.src} 
              alt={partner.alt} 
              className="w-auto h-16 sm:h-20 md:h-24 object-contain"
            />
          </div>
        ))}
      </div>

      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 text-center">
        Supported by
      </h3>
      <div className="relative w-full py-4 sm:py-6 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-full flex justify-center items-center p-2 sm:p-4">
              <img 
                src={logo} 
                alt={`Logo ${index + 1}`} 
                className="w-auto h-24 sm:h-32 md:h-40 object-contain" 
              />
            </div>
          ))}
        </div>
        <button
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-1 sm:p-2 rounded-full shadow hover:bg-gray-100"
          onClick={goToPrev}
        >
          <FaArrowLeft className="text-sm sm:text-base" />
        </button>
        <button
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-1 sm:p-2 rounded-full shadow hover:bg-gray-100"
          onClick={goToNext}
        >
          <FaArrowRight className="text-sm sm:text-base" />
        </button>
      </div>
    </div>
  );
};

export default Strategic;