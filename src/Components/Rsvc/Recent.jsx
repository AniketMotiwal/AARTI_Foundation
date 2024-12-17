import React, { useState, useEffect } from 'react';
import img1 from '../../assets/rsvc.jpeg';  // Ensure the correct relative path
import img2 from '../../assets/DSC_3081.JPG';
import img3 from '../../assets/DSC_3093.JPG'; 

const Recent = () => {
  const slides = [
    {
      img: img1,
      title: 'IIT Roorkee inaugurates Uttarakhand’s first RuTAGe Smart Village Centre in Almora',
      description: 'The RuTAGe Smart Village Centre (RSVC) model, conceptualised by the Office of the Principal Scientific Advisor (PSA), Government of India, and led by IIT Roorkee, was honoured with the first prize at the...',
      link: 'https://www.educationtimes.com/article/newsroom/99736493/iit-roorkee-inaugurates-uttarakhands-first-rutage-smart-village-centre-in-almora'
    },
    {
      img: img2,
      title: 'New Initiative by IIT Roorkee to Boost Rural Development',
      description: 'IIT Roorkee launches a new initiative to support rural development in Uttarakhand, aiming to improve local infrastructure and livelihoods...',
      link: 'https://www.educationtimes.com/article/newsroom/99736493/iit-roorkee-inaugurates-uttarakhands-first-rutage-smart-village-centre-in-almora'
    },
    {
      img: img3,
      title: 'Innovative Solutions for Rural Empowerment',
      description: 'A new research center dedicated to providing innovative solutions for rural communities has been established by IIT Roorkee...',
      link: 'https://www.educationtimes.com/article/newsroom/99736493/iit-roorkee-inaugurates-uttarakhands-first-rutage-smart-village-centre-in-almora'
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Updates</h2>
      <p className="text-gray-600 mb-6">Stay tuned for the latest updates in our project.</p>

      <div className="relative">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-card">
          <img className="w-full" src={slides[currentSlide].img} alt="Smart Village Centre" />
          <div className="p-4">
            <h2 className="font-bold text-lg text-primary">{slides[currentSlide].title}</h2>
            <p className="text-muted-foreground text-base">{slides[currentSlide].description}</p>
            <a
              href={slides[currentSlide].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-500 text-white hover:bg-blue-400 px-4 py-2 rounded"
            >
              READ MORE
            </a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`inline-block mx-1 w-3 h-3 rounded-full cursor-pointer ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recent;
