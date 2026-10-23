import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
import img1 from '../../assets/rsvc.jpeg';
import img2 from '../../assets/site/rsvc-hero-inauguration.webp';
import img3 from '../../assets/site/rsvc-hero-exhibit.webp';

const Recent = () => {
  const slides = [
    {
      img: img2,
      title: 'Integrated Smart Village Centers in Nakot, Tehri and Champawat',
      description:
        'AARTI has established Integrated Smart Village Centers under SETU Aayog guidance, offering digital governance, livelihoods, skilling, scheme access, and technology-enabled rural development.',
      link: '/Rsvc#isvc-centers',
      tag: 'ISVC Launch',
    },
    {
      img: img1,
      title: "IIT Roorkee inaugurates Uttarakhand's first RuTAGe Smart Village Centre in Almora",
      description:
        'The RuTAGe Smart Village Centre (RSVC) model, led by IIT Roorkee, was honoured with the first prize at the NSE Social Stock Exchange event in Varanasi.',
      link: 'https://www.educationtimes.com/article/newsroom/99736493/iit-roorkee-inaugurates-uttarakhands-first-rutage-smart-village-centre-in-almora',
      tag: 'Award & Inauguration',
    },
    {
      img: img2,
      title: 'New Initiative by IIT Roorkee to Boost Rural Development',
      description:
        'IIT Roorkee launches a new initiative to support rural development in Uttarakhand, aiming to improve local infrastructure and livelihoods.',
      link: 'https://www.educationtimes.com/article/newsroom/99736493/iit-roorkee-inaugurates-uttarakhands-first-rutage-smart-village-centre-in-almora',
      tag: 'Rural Development',
    },
    {
      img: img3,
      title: 'Innovative Solutions for Rural Empowerment',
      description:
        'A new research center dedicated to providing innovative solutions for rural communities has been established by IIT Roorkee.',
      link: 'https://www.educationtimes.com/article/newsroom/99736493/iit-roorkee-inaugurates-uttarakhands-first-rutage-smart-village-centre-in-almora',
      tag: 'Innovation',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[currentSlide];
  const isExternal = slide.link.startsWith('http');

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-blue-500/20 text-blue-300 mb-3">
            News & Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Recent Updates</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Latest milestones from RuTAGe Smart Village Centres across Uttarakhand.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl bg-white">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px]">
              <img
                className="w-full h-full object-cover"
                src={slide.img}
                alt={slide.title}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 lg:to-black/20" />
            </div>

            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <span className="inline-block w-fit px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 mb-4">
                {slide.tag}
              </span>
              <h3 className="font-bold text-xl sm:text-2xl lg:text-[1.65rem] text-gray-900 leading-snug mb-4">
                {slide.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 flex-1">
                {slide.description}
              </p>
              <a
                href={slide.link}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 w-fit px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold transition shadow-md"
              >
                Read More
                {isExternal && <FaExternalLinkAlt className="text-xs" />}
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setCurrentSlide((p) => (p === 0 ? slides.length - 1 : p - 1))}
            className="absolute left-2 lg:-left-5 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition z-10"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button
            type="button"
            onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)}
            className="absolute right-2 lg:-right-5 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition z-10"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-gray-700" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? 'w-8 bg-blue-400' : 'w-2 bg-slate-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recent;
