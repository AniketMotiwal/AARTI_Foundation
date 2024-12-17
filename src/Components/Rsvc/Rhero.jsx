import React, { useState, useEffect } from 'react';
import backgroundImage1 from '../../assets/rsvc.jpeg'; // Update paths
import backgroundImage2 from '../../assets/DSC_3081.JPG';
import backgroundImage3 from '../../assets/DSC_3093.JPG';

const Rhero = () => {
  const images = [backgroundImage1, backgroundImage2, backgroundImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div>
      <section
        id="hero"
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-center text-white transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 opacity-0 hover:opacity-100 flex flex-col items-center justify-center p-8 rounded"
        >
          <h1 className="text-5xl font-bold typing-effect">
            Empowering Rural Development
          </h1>
          <p className="mt-4 text-lg typing-effect typing-effect-delay">
            Fostering entrepreneurship and sustainable technology solutions for rural India
          </p>
          <h1
            className="font-bold mt-8 typing-effect"
            style={{
              fontSize: '2.25rem', // equivalent to text-4xl
              lineHeight: '3.5rem', // custom line-height
              fontFamily: 'Noto Sans Devanagari, sans-serif',
            }}
          >
            सामर्थ्य ग्रामीण विकास
          </h1>
          <p
            className="mt-4 text-base typing-effect typing-effect-delay"
            style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
          >
            ग्रामीण भारत के लिए उद्यमिता और स्थायी प्रौद्योगिकी समाधानों का संवर्धन।
          </p>
        </div>
      </section>
    </div>
  );
};

export default Rhero;
