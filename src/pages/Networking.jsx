import React from 'react';
import {Network } from '../information/Network'; // Adjust the path as needed

const Networking = () => {
  return (
    <div className="p-8 bg-gray-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Network.map((item, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">{item.host || item.program}</h2>
            <div className="mb-6">
              {(item.advantages || item.benefits || item.mentorship)?.map((detail, idx) => (
                <p key={idx} className="mb-4 text-justify">{detail}</p>
              ))}
            </div>
            {item.ecosystem_building && (
              <p className="text-sm text-gray-400">{item.ecosystem_building}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Networking;
