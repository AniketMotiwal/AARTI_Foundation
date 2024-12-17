import React from 'react';
import cycle from '../assets/cycle.webp';
import appliancies from '../assets/appliancies.webp';

const MagneticMotors = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-12">Our Novel Axial Flux Motor</h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <li className="relative group overflow-hidden rounded-lg shadow-2xl">
            <img 
              src={cycle} 
              alt="Motor Design" 
              className="w-full h-80 object-fit transition-transform duration-300 ease-in-out transform group-hover:scale-110" 
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              Design
            </div>
          </li>
          <li className="relative group overflow-hidden rounded-lg shadow-2xl">
            <img 
              src={appliancies} 
              alt="Motor Build" 
              className="w-full h-80 object-fit transition-transform duration-300 ease-in-out transform group-hover:scale-110" 
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              Build
            </div>
          </li>
        </ul>

        <p className="text-lg text-gray-700 mx-auto max-w-3xl">
          Design, build, and manufacture a state-of-the-art Novel Axial Flux Motor from Soft Magnetic Composite. 
          Class leaders in almost all the parameters over the existing motors (Efficiency, Power Density, Cost, Size/Weight) 
          with significant reduction in the use of rare earth metals.
        </p>
      </div>
    </div>
  );
};

export default MagneticMotors;
