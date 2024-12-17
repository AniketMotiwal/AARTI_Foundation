import React from 'react';

const GlobalImpact = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-8 space-y-8 md:space-y-0 md:space-x-8">
      {/* Section 1 */}
      <div className="md:w-1/3 bg-gray-800 text-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-4">Global Impact</h2>
        <p className="leading-relaxed">
          The Centre for Precision Manufacturing (CPM) actively creates international connections,
          particularly with industries in the USA, to ensure global relevance. These collaborations
          help CPM stay at the forefront of precision manufacturing, ensuring it remains impactful globally.
        </p>
      </div>

      {/* Section 2 */}
      <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">International Collaborations & Technology Transfer</h2>
        <p className="text-gray-700 leading-relaxed">
          CPM partners with global leaders, particularly industries in the USA, focusing on technology transfer
          and practical applications. These strategic collaborations ensure that the Centre’s research has a
          significant global impact, contributing to the advancement of precision manufacturing worldwide.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          By sharing expertise, CPM helps foster technology transfer, skilling and reskilling the workforce to meet
          the evolving demands of Industry 4.0. These international partnerships drive cutting-edge research and
          sustainable manufacturing practices, contributing to global competitiveness.
        </p>
      </div>
    </div>
  );
};

export default GlobalImpact;
