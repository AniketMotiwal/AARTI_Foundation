import React from 'react';
import process from 'C:/Aaarti/my-project/src/assets/process.png';

const Process = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen relative">
      {/* Heading */}
      <h1 className="text-2xl md:text-6xl font-bold text-blue-700 mb-2 md:mb-6 mt-6 md:mt-10">
        JOURNEY SO FAR
      </h1>
      
      {/* Conditional rendering for layout on mobile screens using grid and flex */}
      <div className="grid grid-cols-1 md:flex md:flex-row justify-center items-center w-auto">
        <img 
          src={process}
          alt="Process Banner" 
          className="w-full md:w-98 h-auto max-w-screen max-h-screen object-contain"
        />
      </div>
    </div>
  );
};

export default Process;
