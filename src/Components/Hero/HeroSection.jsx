import React, { useEffect, useState } from 'react';
import slide1 from '../../assets/IIT-Roorkee.jpg';
import slide from '../../assets/DSC_2094.JPG';
import slide2 from '../../assets/bg.png';
import slide3 from '../../assets/DSC_3081.JPG';
import slide4 from '../../assets/rsvc.jpeg';
import slide5 from '../../assets/DSC_9686.JPG';
import slide6 from '../../assets/DSC_9695.JPG';
import slide7 from '../../assets/DSC_9630.JPG';
import slide8 from '../../assets/DSC_9626.JPG';
import slide9 from '../../assets/DSC_9633.JPG';
import slide10 from '../../assets/DSC_9691.JPG';
import slide11 from '../../assets/DSC_9682.JPG';
import slide12 from '../../assets/DSC_9699.JPG';
import slide13 from '../../assets/DSC_9742.JPG';
import slide14 from '../../assets/DSC_9819.JPG';
import slide15 from '../../assets/DSC_9844.JPG';
import slide16 from '../../assets/DSC_9871.JPG';

const images = [
  slide1, slide, slide2, slide3, slide4,
  slide5, slide6, slide7, slide8, slide9,
  slide10, slide11, slide12, slide13, slide14, slide15,slide16
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentIndex + 1) % images.length;
      setPrevIndex(currentIndex);
      setCurrentIndex(next);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const getFitStyle = (index) =>
    [5, 6, 7, 8, 9, 10, 11, 12, 13, 14].includes(index) ? 'object-fit' : 'object-cover';

  const imageStyle = 'filter brightness-110 contrast-110'; // boost brightness and contrast a bit

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Previous Image */}
      {prevIndex !== null && (
        <img
          src={images[prevIndex]}
          alt={`Slide ${prevIndex + 1}`}
          className={`absolute inset-0 w-full h-full ${getFitStyle(prevIndex)} ${imageStyle} transition-opacity duration-700 ease-in-out opacity-0 z-0`}
        />
      )}

      {/* Current Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={`absolute inset-0 w-full h-full ${getFitStyle(currentIndex)} ${imageStyle} transition-opacity duration-700 ease-in-out opacity-100 z-10`}
      />

      {/* Reduced Overlay for brightness */}
      <div className="absolute inset-0 bg-black opacity-10 z-20" />

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setPrevIndex(currentIndex);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white scale-110' : 'bg-gray-400 opacity-70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
