import React from 'react';

const Vision = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-orange-400 py-12 text-white  min-h-screen lg:min-h-0 lg:h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg md:text-xl mb-4">
              Our vision is to become a leading catalyst for technological innovation and indigenous development in the Indian capital goods sector. We aim to focus on sustainable and accessible mobility solutions that empower communities and industries.
            </p>
            <p className="text-lg md:text-xl mb-4">
              By fostering collaboration between academia, industry, and startups, we seek to accelerate the growth of cutting-edge technologies that advance self-reliance (AtmaNirbhar Bharat) and enhance global competitiveness in electric mobility and related sectors. Our vision emphasizes building mobility that enriches lives by fostering collaboration between academia, industry, and startups. The goal is to accelerate the development of innovative, sustainable, and accessible mobility solutions, aligning with India's self-reliance goals. We aim to become a leading catalyst for technological innovation, focusing on empowering communities and industries while maintaining a global competitive edge.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Key Points:</h3>
            <ul className="text-left space-y-3 text-lg">
              <li>Aiming to become a global leader in technological innovation.</li>
              <li>Fostering collaboration to accelerate growth in electric mobility.</li>
              <li>Developing accessible products that empower both industries and individuals.</li>
            </ul>
          </div>
          {/* Right Section */}
          <div className="lg:w-1/2 transition-transform duration-500 hover:scale-105 p-6 bg-white text-black rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Additional Insights</h3>
            <p className="text-lg mb-4">
              This section can include additional insights or data that complement the vision statement. It can be used to highlight specific initiatives, partnerships, or achievements that align with the vision.
            </p>
            <p className="text-lg">
              For instance, detail recent projects or upcoming plans that support the vision of advancing technological innovation and sustainability in the capital goods and mobility sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
