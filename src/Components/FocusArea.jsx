import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowTrendUp } from 'react-icons/fa6';
import eMobImage from '../assets/e-mob.webp';
import economicImage from '../assets/economic.webp';
import supportImage from '../assets/Support.webp';
import innovationImage from '../assets/innvoation.webp';
import networkingImage from '../assets/networking.webp';
import Process from '../Components/Process';

const FocusArea = () => {
  const [popupCard, setPopupCard] = useState(null);
  const navigate = useNavigate();

  const focusAreas = useMemo(() => [
    {
      heading: 'E-Mobility',
      points: ['E-Mobility'],
      backgroundImage: `url(${eMobImage})`,
      link: '/eMobilityProjects',
    },
    {
      heading: 'Economic Growth',
      points: ['Self-Reliance and Economic Growth', 'Technology Indigenization', 'Commercialization'],
      backgroundImage: `url(${economicImage})`,
      link: '/EconomicProjects',
    },
    {
      heading: 'Support and Development',
      points: ['Support for Startups', 'Skill Development'],
      backgroundImage: `url(${supportImage})`,
      link: '/SupportDevlopemnt',
    },
    {
      heading: 'Innovation and Integration',
      points: ['Integration of TRL and MRL', 'Accelerating Innovation'],
      backgroundImage: `url(${innovationImage})`,
      link: '/Innovation',
    },
    {
      heading: 'Networking',
      points: ['Networking for Innovation and Sustainable Growth'],
      backgroundImage: `url(${networkingImage})`,
      link: '/Networking',
    },
  ], []);

  const handleCardClick = (area) => {
    setPopupCard(area);
  };

  const handlePopupClose = () => {
    setPopupCard(null);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 transition-colors duration-300`}>
      <div className={`relative flex flex-col items-center w-full max-w-7xl p-5 flex-grow `}>
        <h1 className={`text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 sm:mb-16`}>
          FOCUS AREAS
        </h1>

        {/* Conditional Layout: flex-col for mobile, flex-row for larger screens */}
        <div className="flex flex-col sm:flex-row flex-grow justify-center gap-3 px-4 py-3 lg:px-6 lg:py-4 mx-3">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className={`relative w-full sm:w-72 lg:w-80 xl:w-60 h-56 lg:h-72 xl:h-56 bg-blue-500 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 `}
              onClick={() => handleCardClick(area)}
              style={{ backgroundImage: area.backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
              role="button"
              aria-label={`View more about ${area.heading}`}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 p-4 flex flex-col items-center justify-center text-center">
                <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2">{area.heading}</h2>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(area.link);
                  }}
                  className="bg-blue-600 text-white p-2 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 transform hover:scale-110"
                  aria-label={`Navigate to ${area.heading} projects`}
                >
                  <FaArrowTrendUp className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  <Process className="mt-4 mb-4 md:mt-6 md:mb-6 lg:mt-8 lg:mb-8"/>


      {popupCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20 transition-opacity duration-300">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative transition-transform duration-300 transform scale-100">
            <h2 className="text-xl font-bold mb-4">{popupCard.heading}</h2>
            <ul className="list-disc pl-5">
              {popupCard.points.map((point, index) => (
                <li key={index} className="mb-2 text-lg">{point}</li>
              ))}
            </ul>
            <button
              onClick={handlePopupClose}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
   
  );
};

export default FocusArea;
