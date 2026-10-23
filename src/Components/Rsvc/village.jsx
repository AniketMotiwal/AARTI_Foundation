import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaCheckCircle, FaUsers, FaLeaf, FaWater } from 'react-icons/fa';
import Rutage1 from '../../assets/rutage.jpg';
import Rutage2 from '../../assets/almora.jpg';
import WorkshopImage from '../../assets/events.jpg';
import OngroundImage from '../../assets/site/rsvc-on-ground.webp';

const SectionBadge = ({ children }) => (
  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-blue-100 text-blue-700 mb-3">
    {children}
  </span>
);

const ImageCarousel = ({ images, altPrefix }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5 group">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={img}
              alt={`${altPrefix} ${index + 1}`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => setCurrentSlide((p) => (p === 0 ? images.length - 1 : p - 1))}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 p-2.5 rounded-full shadow-lg hover:bg-white transition"
            aria-label="Previous image"
          >
            <FaChevronLeft className="text-blue-700" />
          </button>
          <button
            type="button"
            onClick={() => setCurrentSlide((p) => (p === images.length - 1 ? 0 : p + 1))}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-2.5 rounded-full shadow-lg hover:bg-white transition"
            aria-label="Next image"
          >
            <FaChevronRight className="text-blue-700" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${currentSlide === i ? 'bg-white scale-110' : 'bg-white/50'}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Village = () => {
  const rutageImages = [Rutage1, Rutage2];

  const partners = [
    'Nehir Himalayan Foundation',
    'Sericulture Department',
    'AARTI@IITR',
    'SETU',
    'Local Communities',
  ];

  return (
    <div className="w-full">
      {/* RuTAGe Smart Village Centre */}
      <section className="py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="order-2 lg:order-1">
              <SectionBadge>RSVC Initiative</SectionBadge>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-blue-800 leading-tight mb-5">
                RuTAGe Smart Village Centre
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                The RuTAGe Smart Village Centre aims to empower rural communities by enhancing
                technology adoption and promoting sustainable development.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                AARTI drives transformation through RSVC with women-led, community-driven rural
                interventions in primary and secondary processing and supply chain logistics—delivering
                outcomes in integrated farming, livelihood generation, education support, and
                women&apos;s empowerment.
              </p>
              <div className="flex flex-wrap gap-2">
                {partners.map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-white border border-blue-100 text-blue-800 shadow-sm"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <ImageCarousel images={rutageImages} altPrefix="RuTAGe Smart Village" />
            </div>
          </div>
        </div>
      </section>

      {/* Workshop */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
                <img
                  src={WorkshopImage}
                  alt="Spring shed management workshop"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-emerald-800">
                    Field Workshop · Uttarakhand
                  </span>
                </div>
              </div>
            </div>

            <div>
              <SectionBadge>Community Workshop</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 leading-tight mb-5">
                One-day Workshop on Spring Shed Management
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                A hands-on capacity-building session bringing together local stakeholders to
                strengthen springshed conservation and water security in the Himalayan region.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 shadow-sm hover:shadow-md transition">
                  <FaWater className="text-blue-600 text-xl mb-3" />
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    Integrated Water Resource Management
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Develop holistic strategies for sustainable springshed management.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 shadow-sm hover:shadow-md transition">
                  <FaUsers className="text-emerald-600 text-xl mb-3" />
                  <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                    Community-Centric Conservation
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Empower local communities in the conservation of springsheds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On-Ground Discussions */}
      <section className="py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="order-2 lg:order-1">
              <SectionBadge>Post-Workshop Impact</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 leading-tight mb-5">
                On-Ground Discussions Post Workshop
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-indigo-700">Integrated Approach:</strong> Combine water
                conservation with socio-economic development through participatory field dialogues
                with farmers, women SHGs, and youth groups.
              </p>

              <ul className="space-y-3">
                {[
                  'Spring rejuvenation through watershed management.',
                  'Climate-resilient cash crops like mulberry, ginger, and turmeric.',
                  'Community empowerment, especially women and youth.',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white border border-gray-100 shadow-sm"
                  >
                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
                <img
                  src={OngroundImage}
                  alt="On-Ground Discussions"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-xs font-semibold text-green-800 shadow">
                    <FaLeaf /> Field Engagement
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Village;
