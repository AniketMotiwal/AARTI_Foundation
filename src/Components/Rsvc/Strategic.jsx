import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import phd from 'C:/Aaarti/my-project/src/assets/phd.png';
import rotary from 'C:/Aaarti/my-project/src/assets/Rotary.png';
import infosys from 'C:/Aaarti/my-project/src/assets/infosys.png';
import gram from 'C:/Aaarti/my-project/src/assets/Gram.webp';
import sobus from 'C:/Aaarti/my-project/src/assets/sobus.png';
import manthan from 'C:/Aaarti/my-project/src/assets/manthan.jpg'; 
import iit from  'C:/Aaarti/my-project/src/assets/iit.png';
import tr from 'C:/Aaarti/my-project/src/assets/tr.jpg';
import viransh from 'C:/Aaarti/my-project/src/assets/viransh.png';
import platform from 'C:/Aaarti/my-project/src/assets/platform.webp';
import Mphasis from 'C:/Aaarti/my-project/src/assets/Mphasis.jpg';
import Picture12 from 'C:/Aaarti/my-project/src/assets/Picture12.png';

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
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [numLogos]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numLogos);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numLogos) % numLogos);
  };

  return (
    <div className="bg-white dark:bg-card p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">Strategic Partners</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center items-center relative overflow-hidden group">
            <img 
              src={partner.src} 
              alt={partner.alt} 
              className="w-auto h-32 object-contain mx-auto transition-transform duration-300 ease-in-out transform group-hover:scale-110" 
            />
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-primary mt-6">Supported by</h3>
      <div className="relative w-full py-8 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-full flex justify-center items-center p-4">
              <img src={logo} alt={`Logo ${index + 1}`} className="w-auto h-48 object-cover" />
            </div>
          ))}
        </div>
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow"
          onClick={goToPrev}
        >
          <FaArrowLeft />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow"
          onClick={goToNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Strategic;
