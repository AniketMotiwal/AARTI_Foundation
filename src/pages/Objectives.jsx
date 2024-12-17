import React, { useState } from 'react';
import { objectiveList } from '../information/objectiveList'; // Adjust the import path as needed

const Objectives = () => {
  const [selectedObj, setSelectedObj] = useState(null);

  const handleReadMoreClick = (obj) => {
    setSelectedObj(obj);
  };

  const handleClosePopup = () => {
    setSelectedObj(null);
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-semibold mb-4">Objectives</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {objectiveList.map((obj) => (
          <div
            key={obj.heading}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="p-4">
              <h3 className="text-lg font-bold">{obj.heading}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{obj.objective.substring(0, 100)}...</p>
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

export default Objectives;
