import React from 'react';
import flag from '/src/assets/flag.png';

const MakeInIndia = () => {
  return (
    <section id="make-in-india" className="py-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Supporting Make in India</h2>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-700">
          The CPM is committed to enhancing local manufacturing capabilities through strategic initiatives that support the 'Make in India' campaign, driving economic growth and innovation.
        </p>
        <img 
          src={flag} 
          alt="Indian Flag" 
          className="mx-auto mt-8 shadow-lg" // Added shadow class
        />
      </div>
    </section>
  );
}

export default MakeInIndia;
