import React, { useState, useEffect } from "react";
import Rutage1 from "../../assets/rutage.jpg";
import Rutage2 from "../../assets/almora.jpg";
import WorkshopImage from "../../assets/events.jpg";
import OngroundImage from "../../assets/Onground.png";

const Village = () => {
  const images = [Rutage1, Rutage2];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="space-y-12">
      <div className="p-8 bg-gray-50 rounded-lg max-w-4xl mx-auto my-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          RuTAGe Smart Village Centre
        </h1>
        <div className="relative w-full h-96 mb-6 overflow-hidden rounded-lg shadow-md">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((img, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={img}
                  alt={`RuTAGe Smart Village ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
          {images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80 transition backdrop-blur-sm"
              >
                &#10094;
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80 transition backdrop-blur-sm"
              >
                &#10095;
              </button>
            </>
          )}
        </div>
        <p className="text-lg text-gray-800 leading-relaxed">
          The RuTAGe Smart Village Centre aims to empower rural communities by enhancing
          technology adoption and promoting sustainable development.
        </p>
      </div>
      
      <div className="p-8 bg-gray-50 rounded-lg max-w-4xl mx-auto my-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          One-day Workshop on Spring Shed Management
        </h1>
        <div className="relative w-full h-80 mb-6 overflow-hidden rounded-lg shadow-md">
          <img
            src={WorkshopImage}
            alt="Spring shed management workshop"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Integrated Water Resource Management</h2>
            <p className="text-gray-700">
              Develop holistic strategies for sustainable springshed management.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Community-Centric Conservation</h2>
            <p className="text-gray-700">
              Empower local communities in the conservation of springsheds.
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-8 bg-gray-50 rounded-lg max-w-4xl mx-auto my-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          On-Ground Discussions Post Workshop
        </h1>
        <div className="relative w-full h-80 mb-6 overflow-hidden rounded-lg shadow-md">
          <img
            src={OngroundImage}
            alt="On-Ground Discussions"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-lg text-gray-800 leading-relaxed">
          <strong>Integrated Approach:</strong> Combine water conservation with socio-economic development.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4">
          <li>Spring rejuvenation through watershed management.</li>
          <li>Climate-resilient cash crops like mulberry, ginger, and turmeric.</li>
          <li>Community empowerment, especially women and youth.</li>
        </ul>
      </div>
    </div>
  );
};

export default Village;
