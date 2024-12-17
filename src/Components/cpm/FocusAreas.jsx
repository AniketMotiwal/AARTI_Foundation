import React from 'react';
import icon from '/src/assets/icon.webp';
import smart from '/src/assets/smart.webp';
import sustainimg from '/src/assets/sustainimg.webp';
import upkskill from '/src/assets/upkskill.webp';
import Logos from '../cpm/Logos';

const FocusAreas = () => {
  const areas = [
    { title: 'Precision Finishing', description: 'High precision finishing techniques.', icon },
    { title: 'Smart Manufacturing', description: 'Utilizing smart technologies in manufacturing.', icon: smart },
    { title: 'Sustainability in Manufacturing', description: 'Promoting sustainable practices.', icon: sustainimg },
    { title: 'Upskilling & Reskilling', description: 'Workforce development programs.', icon: upkskill },
  ];

  return (
    <>
      <section id="focus" className="py-16 px-4 md:px-8 lg:px-16">
        <Logos />
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="p-4 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c0fe 100%)'
              }}
            >
              <img
                src={area.icon}
                alt={area.title}
                className="mx-auto mb-3 w-24 h-24 object-contain"
              />
              <h3 className="text-xl font-bold">{area.title}</h3>
              <p className="mt-1 text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default FocusAreas;
