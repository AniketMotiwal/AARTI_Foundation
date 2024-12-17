import React from 'react';

const Approach = () => {
  return (
    <>
      <section id="approach" className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-8"> {/* Increased horizontal padding */}
          <h2 className="text-4xl font-bold mb-8 text-center hover:text-indigo-600">
            Approaches
          </h2>
          <p className="text-lg mb-8 leading-relaxed text-center hover:text-green-600 hover:text-3xl">
            The RuTAGe Smart Village Centre (RSVC) project employs a “Hub and Spoke” model designed to enhance technology integration and community engagement in rural areas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Increased gap between columns */}
            <div className="md:mr-8"> {/* Added right margin for spacing between columns */}
              <h3 className="text-2xl font-semibold mb-4 hover:text-indigo-600 hover:text-xl">
                Hub
              </h3>
              <p className="text-lg leading-relaxed mb-4 hover:text-green-600 text-justify hover:text-3xl">
                The Hub is established at an IIT or a reputed institute and works with a panel of industries. Its key functions include studying technology manufacturing scale-up, evaluating innovations, and advising on product design, cost reductions, and local manufacturing.
              </p>
              <ul className="list-disc pl-5 mb-4 hover:text-3xl">
                <li className="hover:text-red-600">Quality validation through IITs/designated Institutes in Technical Labs.</li>
                <li className="hover:text-red-600">Established market access for innovators.</li>
              </ul>
            </div>
            <div className="md:ml-8"> {/* Added left margin for spacing between columns */}
              <h3 className="text-2xl font-semibold mb-4 hover:text-indigo-600 hover:text-xl">
                Spoke
              </h3>
              <p className="text-lg leading-relaxed mb-4 hover:text-green-600 text-justify hover:text-3xl">
                The Spoke refers to dedicated centers either as prefab units or permanent setups at village panchayats, or mobile units, depending on household density. These centers focus on structured community engagement and feedback collection.
              </p>
              <ul className="list-disc pl-5 mb-4 hover:text-3xl">
                <li className="hover:text-red-600">Structured setup for community engagement.</li>
                <li className="hover:text-red-600">Feedback collection to customize solutions based on local needs.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Approach;
