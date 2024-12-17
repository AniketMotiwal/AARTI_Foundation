import React from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import motor from 'C:/Aaarti/my-project/src/assets/motor.webp';

const Modular = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">
        Modular Electric 2 Wheeler Platform
      </h1>

      {/* Banner Image */}
      <div className="mb-8 w-full flex justify-center">
        <img
          src={motor}
          alt="Modular Electric 2 Wheeler"
          className="w-full max-w-4xl h-auto object-cover rounded-lg shadow-lg filter brightness-90 contrast-110"
          loading="lazy"
        />
      </div>

      {/* Features Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Advanced Rider Safety and Energy Efficient System</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li className="mb-2">Easily adapt to any use case scenario (both B2C and B2B)</li>
          <li className="mb-2">Rider safety and accident avoidance system and connected vehicle</li>
          <li className="mb-2">Safe and Rugged powertrain</li>
        </ul>

        {/* Future Scope Section */}
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Future Scope</h3>
        <p className="text-gray-700">
          Application of AI and ML for rider safety, vehicle optimization, and diagnostics.
        </p>
      </div>
    </div>
  );
}

export default Modular;
