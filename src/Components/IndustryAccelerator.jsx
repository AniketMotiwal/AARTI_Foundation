import React from 'react';

const IndustryAcceleratorSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12 animate-fadeInUp">
          Industry Accelerator Program
        </h2>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-2xl mx-auto animate-fadeInUp">
          Enhancing competitiveness in the Indian Capital Goods Sector by supporting startups and industry partners in the Auto and Mobility domains.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
          <div className="bg-white p-12 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6 transition-colors duration-300 hover:text-indigo-600">
              Program Overview
            </h3>
            <p className="text-lg text-gray-600 hover:text-indigo-500 transition-colors duration-300">
              Focused on developing innovative products and technologies, this program offers mentorship and facilitates industry partnerships to drive growth in the auto and mobility sectors.
            </p>
          </div>
          <div className="bg-white p-12 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6 transition-colors duration-300 hover:text-indigo-600">
              Collaborative Innovation
            </h3>
            <p className="text-lg text-gray-600 hover:text-indigo-500 transition-colors duration-300">
              IIT Roorkee and ICAT collaborate to host startups over a three-year period, emphasizing indigenous development aligned with the AtmaNirbhar Bharat mission.
            </p>
          </div>
          <div className="bg-white p-12 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6 transition-colors duration-300 hover:text-indigo-600">
              Mentorship and Resources
            </h3>
            <p className="text-lg text-gray-600 hover:text-indigo-500 transition-colors duration-300">
              Participants receive guidance from industry experts and access to IITR's state-of-the-art facilities, fostering a thriving ecosystem for innovation.
            </p>
          </div>
          <div className="bg-white p-12 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6 transition-colors duration-300 hover:text-indigo-600">
              Industry Partnerships
            </h3>
            <p className="text-lg text-gray-600 hover:text-indigo-500 transition-colors duration-300">
              The program connects startups with industry partners, facilitating networking opportunities and potential investments to accelerate product development.
            </p>
          </div>
          <div className="bg-white p-12 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6 transition-colors duration-300 hover:text-indigo-600">
              Innovation Ecosystem
            </h3>
            <p className="text-lg text-gray-600 hover:text-indigo-500 transition-colors duration-300">
              By building an innovation ecosystem, the program ensures long-term success for participants, with opportunities for tech transfer and export.
            </p>
          </div>
          <div className="bg-white p-12 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6 transition-colors duration-300 hover:text-indigo-600">
              Market Readiness
            </h3>
            <p className="text-lg text-gray-600 hover:text-indigo-500 transition-colors duration-300">
              The accelerator helps startups progress from proof of concept to market-ready products, integrating Technology Readiness Level (TRL) and Manufacturing Readiness Level (MRL).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryAcceleratorSection;
