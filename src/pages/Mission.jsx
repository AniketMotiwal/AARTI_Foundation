import React from 'react';

const Mission = () => {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-green-400 py-12 text-white min-h-screen lg:min-h-0 lg:h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl mb-4 text-justify">
              Our mission is to support and scale startups and industries working in the capital goods and e-mobility sectors through strategic mentorship, advanced incubation facilities, and robust technical support. Leveraging IIT Roorkee’s expertise and industry collaborations, we aim to foster innovation, facilitate market-ready product development, and drive technological solutions that meet the evolving demands of the automotive and mobility sectors.
            </p>
            <p className="text-lg md:text-xl mb-4 text-justify">
              We are committed to nurturing sustainable, inclusive technologies that improve the quality of life and create export opportunities, aligning with India’s goals for self-reliance and environmental sustainability.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Key Points:</h3>
            <ul className="text-left space-y-3 text-lg">
              <li>Supporting startups and industries in the capital goods and e-mobility sectors.</li>
              <li>Providing strategic mentorship and advanced incubation facilities.</li>
              <li>Driving product development to meet modern mobility demands.</li>
              <li>Commitment to sustainable and self-reliant technological solutions.</li>
            </ul>
          </div>
          {/* Right Section */}
          <div className="lg:w-1/2 transition-transform duration-500 hover:scale-105 p-6 bg-white text-black rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Additional Information</h2>
            <p className="text-lg mb-4">
              This section can include additional details or content that complements the mission statement. You can use this space for further elaboration, showcase other initiatives, or present related data.
            </p>
            <p className="text-lg">
              For instance, highlight achievements, partnerships, or specific projects that align with the mission. This section provides a contrasting background to enhance readability and focus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
