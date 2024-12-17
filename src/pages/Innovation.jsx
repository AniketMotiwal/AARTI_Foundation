import React from 'react';
import { innovation } from '../information/Innovation'; // Importing innovation data

const Innovation = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-1/3 lg:w-1/4 bg-gray-200 p-6"> {/* Increased width and padding */}
        <h2 className="text-xl font-semibold mb-4">Innovation & Technology</h2>
        <ul>
          <li><a href="#description" className="block py-3 px-5 hover:bg-gray-300">Description</a></li>
          <li><a href="#purpose" className="block py-3 px-5 hover:bg-gray-300">Purpose</a></li>
          <li><a href="#focus" className="block py-3 px-5 hover:bg-gray-300">Key Areas of Focus</a></li>
          <li><a href="#partners" className="block py-3 px-5 hover:bg-gray-300">Partners</a></li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="w-full md:w-2/3 lg:w-3/4 p-6">
        <div id="description" className="mb-8">
          <h3 className="text-2xl font-semibold highlight-on-hover">
            {innovation[0].Innovation_and_Technology.Industry_Accelerator.Description}
          </h3>
          <p className="text-lg highlight-on-hover">
            {innovation[0].Innovation_and_Technology.Industry_Accelerator.Purpose}
          </p>
        </div>

        <div id="focus" className="mb-8">
          <h4 className="text-xl font-semibold">Key Areas of Focus:</h4>
          <ul className="list-disc pl-5">
            {innovation[0].Innovation_and_Technology.Industry_Accelerator.Key_Areas_of_Focus.map((item, index) => (
              <li key={index} className="highlight-on-hover">{item}</li>
            ))}
          </ul>
        </div>

        <div id="partners">
          <h4 className="text-xl font-semibold">Partners:</h4>
          <ul className="list-disc pl-5">
            {innovation[0].Innovation_and_Technology.Industry_Accelerator.Partners.map((partner, index) => (
              <li key={index} className="highlight-on-hover">
                <strong>{partner.Name}:</strong> {partner.Role}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Innovation;
