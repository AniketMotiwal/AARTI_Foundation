import React from 'react';

const ObjectivesSidebar = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-gray-800 text-white p-6 fixed flex flex-col justify-between overflow-y-auto">
        <div>
          <h2 className="text-2xl font-bold mb-6">Objectives</h2>
          <div className="space-y-4">
            <p className="hover:text-gray-300 transition-all duration-300 ease-in-out">
              Create a hub for cutting-edge research in precision manufacturing.
            </p>
            <p className="hover:text-gray-300 transition-all duration-300 ease-in-out">
              Foster strong industry-academia partnerships for technology transfer.
            </p>
            <p className="hover:text-gray-300 transition-all duration-300 ease-in-out">
              Upskill and reskill the workforce to meet Industry 4.0 demands.
            </p>
            <p className="hover:text-gray-300 transition-all duration-300 ease-in-out">
              Support the 'Make in India' initiative by enhancing local manufacturing.
            </p>
            <p className="hover:text-gray-300 transition-all duration-300 ease-in-out">
              Establish international connections, especially with industries in the USA.
            </p>
            <p className="hover:text-gray-300 transition-all duration-300 ease-in-out">
              Integrate sustainability into manufacturing through energy efficiency and waste reduction.
            </p>
            <p className="hover:text-gray-300 transition-all duration-300 ease-in-out">
              Assist with technology commercialization and support research services.
            </p>
            <p className="hover:text-gray-300 transition-all duration-300 ease-in-out">
              Facilitate access to best research equipment and expertise.
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-400">© 2024 CPM, IIT Roorkee</p>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-64 p-10 space-y-10">
        {/* Section 1 */}
        <section className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl duration-500 ease-in-out">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Centre for Precision Manufacturing</h1>
          <p className="text-gray-700 leading-relaxed">
            The Centre for Precision Manufacturing (CPM) is dedicated to advancing manufacturing techniques through research and collaboration.
            The Centre is committed to workforce development, sustainability, and international partnerships, especially with the USA, contributing
            to the 'Make in India' initiative by strengthening local manufacturing.
          </p>
        </section>

        {/* Section 2 */}
        <section className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl duration-500 ease-in-out">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Key Initiatives</h2>
          <p className="text-gray-700 leading-relaxed">
            CPM’s initiatives revolve around fostering research in precision finishing, smart manufacturing, and sustainability. 
            By upskilling and reskilling the workforce, the Centre addresses the evolving needs of Industry 4.0 and beyond.
          </p>
        </section>

        {/* Section 3 - Interactive */}
        <section className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl duration-500 ease-in-out">
          <h2 className="text-2xl font-bold mb-4">Global Partnerships</h2>
          <p className="leading-relaxed">
            CPM has established strategic global partnerships, particularly with industries in the USA, to exchange knowledge,
            best practices, and collaborate on cutting-edge research. These collaborations ensure that CPM remains globally competitive
            and relevant in precision manufacturing.
          </p>
          <button className="mt-4 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition duration-300 ease-in-out">
            Learn More
          </button>
        </section>
      </div>
    </div>
  );
};

export default ObjectivesSidebar;
