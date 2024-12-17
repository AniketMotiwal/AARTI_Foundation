import React, { useState, useEffect } from 'react';
import Akon from 'C:/Aaarti/my-project/src/assets/Akon.webp';
import iit from 'C:/Aaarti/my-project/src/assets/iit.webp'; // Import additional logos

const Logos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const logos = [Akon, iit]; // Add more logos as needed
  const numLogos = logos.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % numLogos);
    }, 3000); // Adjust the time (in milliseconds) to control the speed of the automatic sliding

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [numLogos]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numLogos);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numLogos) % numLogos);
  };

  return (
    <div className="relative w-full py-8 overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-full flex justify-center items-center p-4">
            <img src={logo} alt={`Logo ${index + 1}`} className="w-24 h-auto" />
          </div>
        ))}
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
        onClick={goToPrev}
      >
        &lt;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
        onClick={goToNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default Logos;
