import React, { useState, useRef } from 'react';
import { eMobilityData } from '../information/eMobilityData';
import { FiX } from 'react-icons/fi'; // Import the close icon from React Icons

const EMobilityProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const videoRefs = useRef([]);

  const handleOpenPopup = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  React.useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === hoveredIndex) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [hoveredIndex]);

  const handleCardClick = (videoSrc) => {
    window.open(videoSrc, '_blank');
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-12">E-Mobility Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {eMobilityData.map((project, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden border border-transparent transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-blue-500 duration-300 ease-in-out group cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCardClick(project.videoSrc)} // Click anywhere on the card to open video
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"
              src={project.videoSrc}
              muted
              loop
            ></video>

            <div className="relative z-10 p-8 flex flex-col justify-end h-full">
              <h3 className="text-3xl font-semibold mb-6 hover:text-blue-600 transition-colors duration-300">
                {project.title}
              </h3>
              
              <div className={`mt-4 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents the card click from triggering
                    handleOpenPopup(project);
                  }}
                  className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="bg-white p-8 rounded-lg max-w-4xl w-full overflow-y-auto max-h-[90vh] relative">
            <FiX
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-3xl text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-300"
            />
            <h3 className="text-3xl font-semibold mb-6">{selectedProject.title}</h3>
            <p className="text-gray-800 mb-6">{selectedProject.description}</p>
            <h4 className="text-2xl font-semibold mb-4">Partners:</h4>
            <p className="text-gray-800 mb-6">{selectedProject.partners}</p>
            <h4 className="text-2xl font-semibold mb-4">Key Features:</h4>
            <ul className="list-disc pl-6 mb-6">
              {selectedProject.features.map((feature, idx) => (
                <li key={idx} className="text-gray-800">{feature}</li>
              ))}
            </ul>
            <h4 className="text-2xl font-semibold mb-4">Technology:</h4>
            <p className="text-gray-800 mb-6">{selectedProject.technology}</p>
            <h4 className="text-2xl font-semibold mb-4">Future Scope:</h4>
            <p className="text-gray-800 mb-6">{selectedProject.futureScope}</p>
            <h4 className="text-2xl font-semibold mb-4">Video Link:</h4>
            <p className="text-gray-800 mb-6">
              <a
                href={selectedProject.videoSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Watch Video
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EMobilityProjects;
