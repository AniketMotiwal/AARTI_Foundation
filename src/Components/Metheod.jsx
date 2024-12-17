import React, { useState } from 'react';

const ImplementationMethodologySection = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Implementation Methodology
        </h2>

        {/* Magazine layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12"> {/* Adjusted the grid to 5 columns */}

          {/* Left Column */}
          <div className="lg:col-span-2"> {/* Increased column span */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
                Collaborative Governance
              </h3>
              <p className="text-gray-600 mb-4 text-justify">
                The Industry Accelerator program is implemented through a Section 8 company established under the IIT Roorkee and ICAT collaboration. This company will have a diverse board of directors from both IITR and ICAT, ensuring a well-rounded perspective.
              </p>
              <p className="text-gray-600 text-justify">
                Depending on the progress, IITR faculty members with expertise in various domains will be enlisted to bolster the industry accelerator's support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4 text-justify">
                Bringing Innovations to Market
              </h3>
              <p className="text-gray-600 mb-4 text-justify">
                The primary aim is to propel innovative technologies into the market, contributing to the growth of the automotive and allied technology sectors.
              </p>
              <p className="text-gray-600 text-justify">
                The innovations emerging from this initiative will be groundbreaking, practical, and market-ready, perfectly aligning with the dynamic needs of the industry.
              </p>
            </div>
          </div>

          {/* Center Column */}
          <div className="lg:col-span-3"> {/* Increased column span */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
                Accelerating Innovation
              </h3>
              <p className="text-gray-600 mb-4 text-justify">
                The Section 8 company will serve as an accelerator for startups, leveraging IITR's resources and ICAT's industry insights to provide tools, mentorship, and guidance. The focus is on enhancing Technology Readiness Level (TRL) and Manufacturing Readiness Level (MRL).
              </p>
              <p className="text-gray-600 text-justify">
                Startups will be guided through a comprehensive journey that ensures their innovations are ready for large-scale production.
              </p>
            </div>

            {/* Banner Section */}
            <div className="bg-indigo-700 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4">Exciting Opportunities Await!</h3>
              <p className="text-lg mb-4 text-justify">
                Discover how you can be part of our innovative accelerator program. Explore the potential and join us in shaping the future of technology.
              </p>
              <button
                onClick={toggleShowMore}
                className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                {showMore ? 'Show Less' : 'Learn More'}
              </button>

              {/* Additional Information Section */}
              {showMore && (
                <div className="mt-6 bg-white p-6 rounded-lg shadow-lg text-gray-600">
                  <h4 className="text-xl font-semibold text-indigo-700 mb-4">More About Our Program</h4>
                  <p className="text-justify">
                    Our accelerator program provides comprehensive support to startups through various stages, from ideation to commercialization. Participants will gain access to state-of-the-art facilities, industry experts, and a network of investors.
                  </p>
                  <p className="mt-4 text-justify">
                    The program includes workshops, mentorship sessions, and networking events designed to accelerate the growth of innovative technologies. Startups will also benefit from personalized guidance tailored to their specific needs and challenges.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ImplementationMethodologySection;
