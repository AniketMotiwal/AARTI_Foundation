import React from 'react';

// Import your partner logos (replace with actual imports)
import partner1 from '../assets/lucknow.png';
import partner2 from '../assets/Hella.png';
import partner3 from '../assets/icat.jpg';
import partner4 from '../assets/Lumnx.png';
import partner5 from '../assets/altgreen.png';
import partner6 from '../assets/iitkanpur.png';
import partner7 from '../assets/Bhagwan.png';
import partner8 from '../assets/mathworks.jpg';
import partner9 from '../assets/Entuple.png';
import partner10 from '../assets/shiavlik.png';
import partner11 from '../assets/startup.webp';
import partner12 from '../assets/tworks.png';
import partner13 from   '../assets/mob.png'
import partner14 from '../assets/Akon.webp';
import partner15 from '../assets/partners6.webp'

const ProgramPartners = () => {
  const partners = [
    partner1, partner2, partner3, partner4, partner5, partner6,
    partner7, partner8, partner9, partner10, partner11, partner12,partner13,partner14,partner15
  ];

  // Duplicate the array to create a seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Program Partners</h2>
        
        {/* Sliding gallery container */}
        <div className="relative w-full h-32 overflow-hidden">
          {/* Sliding track - adjust duration for speed (medium: 40s) */}
          <div className="absolute flex items-center h-full animate-slide whitespace-nowrap">
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={index} 
                className="inline-flex items-center justify-center mx-8 h-full"
                style={{ minWidth: '150px' }} // Adjust logo width as needed
              >
                <img 
                  src={partner} 
                  alt={`Partner ${index % partners.length + 1}`} 
                  className="max-h-16 max-w-[120px] object-contain transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add the animation keyframes to your Tailwind config or global CSS */}
      <style jsx global>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 40s linear infinite;
        }
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ProgramPartners;