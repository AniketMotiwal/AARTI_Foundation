import React, { useState } from 'react';

const About = () => {
  const [selectedObj, setSelectedObj] = useState(null);

  const objectiveList = [
    {
      heading: "Accelerator for Startups",
      objective: "To serve as an accelerator for startups. AARTI will leverage the rich knowledge base and resources of IITR and the practical insights of the various industry partners to provide startups with the necessary tools, mentorship, and guidance to nurture their innovative ideas." 
    },
    {
      heading: "Technology and Manufacturing Readiness Integration",
      objective: "To integrate various advanced readiness levels (TRL, MRL, IRL, etc.), ensuring that innovations progress beyond the experimental phase to large-scale production. By guiding startups through this comprehensive journey, the aim is to bridge the gap between technology development and manufacturing readiness, enabling the creation of market-ready solutions that are both technologically advanced and production-ready."
    },
    {
      heading: "Market Propulsion of Innovative Technologies",
      objective: "To foster growth and sustainability ensuring that emerging innovations align with the evolving demands of the industry and the broader technology market. The focus will also be on the market adoption of innovative technologies by nurturing startups and guiding them in developing practical, market-ready solutions."
    },
    {
      heading: "Knowledge Dissemination and Networking",
      objective: "To gather, create, expand, and disseminate knowledge and provide a platform for networking between India and other countries for the benefit of research, technology, and industry."
    },
    {
      heading: "International Collaborations",
      objective: "Entering into International Collaborations by leveraging international alliances that can add value to the chosen domain, connecting Indian research with global efforts in the proposed domain areas, and participating in international projects and advanced facilities."
    },
    {
      heading: "Training and Educational Initiatives",
      objective: "To globally enhance knowledge, skills, and capabilities through comprehensive training and educational initiatives, including certifications, short-term courses, exhibitions, seminars, and promotional activities. These efforts aim to foster continuous learning, professional development, and innovation across diverse fields, thereby contributing to the advancement of society and the empowerment of individuals worldwide."
    },
 
    {
      heading: "Innovation and Start-up Ecosystem",
      objective: "To foster and promote technology-driven, knowledge-based, and innovative start-ups, and establish a robust ecosystem that bridges academia, financial institutions, industries, and other key stakeholders. Enhancing competencies and building capacities, supporting young and aspiring entrepreneurs in transforming ideas into prototypes, and inspiring talent to embark on entrepreneurial journeys through guidance, access to co-working spaces, and promotional activities. The goal is to facilitate strong industrial interactions for problem identification, co-development of technologies, intellectual property generation, and sustainable revenue creation, ultimately nurturing a vibrant start-up culture."
    }
  ];

  const handleReadMoreClick = (obj) => {
    setSelectedObj(obj);
  };

  const handleClosePopup = () => {
    setSelectedObj(null);
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800">
      {/* Mission Section */}
      <section className="bg-gradient-to-r from-blue-400 to-green-400 py-12 text-white mt-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-black">Our Vison</h2>
          <p className="text-lg md:text-xl mb-4 text-justify text-black">
            To establish a global ecosystem where every innovation seamlessly transitions from concept to commercialization, creating a self-reliant and economically empowered society. Driving transformative technological solutions through seamless industry-academia collaboration, startup acceleration, and the integration of advanced readiness frameworks, ultimately fostering sustainable economic growth and global competitiveness.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-400 py-12 text-white mt-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-black">Our Mission</h2>
          <ul className="list-disc space-y-3 text-lg text-black pl-5">
            <li>Foster dynamic collaboration between research and industry to bridge the gap from innovation to commercialization.</li>
            <li>Support startup ecosystems and accelerate the development of transformative technologies.</li>
            <li>Advance Technology Readiness Levels (TRL) and Manufacturing Readiness Levels (MRL) to enable seamless innovation scaling.</li>
            <li>Promote skill development and sustainability to empower societies and drive self-reliance.</li>
            <li>Build global partnerships to position communities for sustainable economic growth and global competitiveness.</li>
          </ul>

        </div>
      </section>

      {/* Objectives Section */}
      <div className="container mx-auto px-6 bg-gradient-to-br from-pink-400 via-purple-600 to-blue-500 p-6 rounded-lg shadow-md mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-black dark:text-white">Objectives</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectiveList.map((obj) => (
            <div
              key={obj.heading}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="p-4">
                <h3 className="text-lg font-bold text-black dark:text-white">{obj.heading}</h3>
                <p className="mt-2 text-black dark:text-gray-300">
                  {obj.objective.substring(0, 100)}...
                </p>
                <button
                  onClick={() => handleReadMoreClick(obj)}
                  className="mt-4 text-blue-500 hover:text-blue-700"
                  aria-label={`Read more about ${obj.heading}`}
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values Section */}
      <div className="container mx-auto px-6 mt-12">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-white text-center mb-6">AARTI - Core Values</h2>
          <ul className="list-decimal space-y-4 text-lg text-white pl-6">
            <li>Innovation and Excellence</li>
            <li>Commitment to Sustainability</li>
            <li>Technological Advancement</li>
            <li>Ethics and Integrity</li>
            <li>Commitment to Social Responsibilities</li>
          </ul>
        </div>
      </div>

      {/* Popup for 'Read More' */}
      {selectedObj && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold">{selectedObj.heading}</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">{selectedObj.objective}</p>
            <button
              onClick={handleClosePopup}
              className="mt-4 text-blue-500 hover:text-blue-700"
              aria-label="Close popup"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
