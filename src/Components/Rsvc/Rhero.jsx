import React, { useState, useEffect } from 'react';
import backgroundImage1 from '../../assets/rsvc.jpeg';
import backgroundImage2 from '../../assets/DSC_3081.JPG';
import backgroundImage3 from '../../assets/DSC_3093.JPG';
import backgroundImage4 from '../../assets/Picture38.png';

const Rhero = () => {
  const images = [
    { src: backgroundImage1, alt: "RSVC Team" },
    { src: backgroundImage2, alt: "Award Ceremony" },
    { src: backgroundImage3, alt: "Village Workshop" },
    { src: backgroundImage4, alt: "Awarded Images" }
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Typed text effect state
  const [typedText, setTypedText] = useState('');
  const fullText = "The RuTAGe Smart Village Centre (RSVC) model, led by AARTI, an industry accelerator of IIT Roorkee, won the first prize at the NSE's Social Stock Exchange event in Varanasi";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Image slideshow effect with fade
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Typed text effect - only starts when hovered
  useEffect(() => {
    if (!isHovered) return;
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [isHovered]);

  return (
    <div 
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Slideshow with Fade Effect */}
      <div className="absolute inset-0 transition-opacity duration-1000">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              backgroundImage: `url(${image.src})`,
              backgroundPosition: 'center 25%' // Adjusted to show faces
            }}
          />
        ))}
      </div>

      {/* Content that appears on hover */}
      {isHovered && (
        <>
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300" />

          {/* Content Container */}
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4">
            {/* Typed Text - Positioned at top with transparency */}
            <div className="w-full max-w-4xl px-4 mb-8 bg-black bg-opacity-50 rounded-lg p-6 backdrop-blur-sm">
              <p className={`text-2xl md:text-3xl font-bold leading-snug
                bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
                bg-clip-text text-transparent`}>
                {typedText}
                {!isTypingComplete && (
                  <span className="ml-1 h-6 w-1 bg-white inline-block align-middle animate-pulse"></span>
                )}
              </p>
            </div>

            {/* Main Content - Center Positioned */}
            <div className="mt-auto mb-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                Empowering Rural Development
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md">
                Fostering entrepreneurship and sustainable technology solutions for rural India
              </p>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                सामर्थ्य ग्रामीण विकास
              </h1>
              <p className="text-lg text-gray-300 drop-shadow-md" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                ग्रामीण भारत के लिए उद्यमिता और स्थायी प्रौद्योगिकी समाधानों का संवर्धन।
              </p>
            </div>

            {/* Image Indicator - Bottom Positioned */}
            <div className="absolute bottom-8 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 w-8 rounded-full transition-all ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Rhero;