import React, { useState, useEffect } from 'react';

const Loader = () => {
  const messages = [
    'WELCOME TO AARTI FOUNDATION',
    'PREPARING YOUR EXPERIENCE...',
    'PLEASE WAIT...',
    'ALMOST THERE...',
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Change message every 1 second
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#f7f7f7] z-50">
      <div className="w-24 h-24 border-4 border-blue-500 border-dotted rounded-full animate-spin mb-4"></div>
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 uppercase text-center animate-fadeIn">
        {messages[messageIndex]}
      </h1>
    </div>
  );
};

export default Loader;
