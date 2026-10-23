import React, { useState, useEffect } from 'react';
import {
  FaCheckCircle,
  FaUniversity,
  FaMapMarkedAlt,
  FaSearchPlus,
  FaTimes,
  FaPlus,
  FaMinus,
} from 'react-icons/fa';
import hubImage from '/src/assets/hub.png';
import spokeImage from '/src/assets/spoke.png';

const hubPoints = [
  'Quality validation through IITs and designated technical labs.',
  'Established market access for innovators.',
  'Technology scale-up, design review, and cost reduction advisory.',
];

const spokePoints = [
  'Structured setup for community engagement at panchayat level.',
  'Feedback collection to customize solutions for local needs.',
  'Prefab, permanent, or mobile units based on household density.',
];

const ZoomableLayoutImage = ({ src, alt, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);

  const open = () => {
    setScale(1);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  const borderBg =
    theme === 'hub'
      ? 'border-indigo-100 bg-indigo-50/60 hover:border-indigo-200'
      : 'border-emerald-100 bg-emerald-50/60 hover:border-emerald-200';

  const overlay =
    theme === 'hub'
      ? 'from-indigo-600/80 to-blue-600/80'
      : 'from-emerald-600/80 to-teal-600/80';

  return (
    <>
      <button
        type="button"
        onClick={open}
        className={`group relative w-full rounded-xl overflow-hidden border-2 ${borderBg} shadow-inner transition-all cursor-zoom-in`}
        aria-label={`Zoom ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-56 sm:h-72 md:h-80 lg:h-[22rem] xl:h-96 object-contain p-2 sm:p-4 transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-t ${overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        >
          <FaSearchPlus className="text-white text-3xl" />
          <span className="text-white text-sm font-semibold">Click to zoom in</span>
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full z-10"
            aria-label="Close zoom"
          >
            <FaTimes size={22} />
          </button>

          <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setScale((s) => Math.min(s + 0.25, 3));
              }}
              className="text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-lg"
              aria-label="Zoom in"
            >
              <FaPlus />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setScale((s) => Math.max(s - 0.25, 0.5));
              }}
              className="text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-lg"
              aria-label="Zoom out"
            >
              <FaMinus />
            </button>
            <span className="text-white/80 text-sm ml-1">{Math.round(scale * 100)}%</span>
          </div>

          <div
            className="max-w-full max-h-full overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="object-contain transition-transform duration-200"
              style={{
                transform: `scale(${scale})`,
                maxWidth: 'min(95vw, 1400px)',
                maxHeight: '85vh',
              }}
            />
          </div>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-xs sm:text-sm text-center">
            Scroll or use + / − to zoom · Press Esc to close
          </p>
        </div>
      )}
    </>
  );
};

const Approach = () => {
  return (
    <section
      id="approach"
      className="py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-indigo-50/60 via-white to-emerald-50/40 text-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-indigo-100 text-indigo-700 mb-4">
            Our Model
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 mb-4">
            Approaches
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-600">
            The RuTAGe Smart Village Centre (RSVC) project employs a Hub and Spoke model designed
            to enhance technology integration and community engagement in rural areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 mb-12 lg:mb-16">
          {/* Hub */}
          <div className="rounded-2xl bg-white border border-indigo-100 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-36 sm:h-40 bg-gradient-to-br from-indigo-500 to-blue-600 px-6 py-5 flex items-end">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                  <FaUniversity className="text-white text-lg" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Hub</h3>
              </div>
            </div>
            <div className="p-5 sm:p-6 lg:p-7">
              <ZoomableLayoutImage
                src={hubImage}
                alt="Layout RSVC — Hub"
                theme="hub"
              />
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mt-5 mb-5">
                The Hub is established at an IIT or a reputed institute and works with a panel of
                industries. Its key functions include studying technology manufacturing scale-up,
                evaluating innovations, and advising on product design, cost reductions, and local
                manufacturing.
              </p>
              <ul className="space-y-3">
                {hubPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-gray-700"
                  >
                    <FaCheckCircle className="text-indigo-500 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Spoke */}
          <div className="rounded-2xl bg-white border border-emerald-100 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-36 sm:h-40 bg-gradient-to-br from-emerald-500 to-teal-600 px-6 py-5 flex items-end">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                  <FaMapMarkedAlt className="text-white text-lg" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Spoke</h3>
              </div>
            </div>
            <div className="p-5 sm:p-6 lg:p-7">
              <ZoomableLayoutImage
                src={spokeImage}
                alt="Layout RSVC — Spoke"
                theme="spoke"
              />
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mt-5 mb-5">
                The Spoke refers to dedicated centers either as prefab units or permanent setups at
                village panchayats, or mobile units, depending on household density. These centers
                focus on structured community engagement and feedback collection.
              </p>
              <ul className="space-y-3">
                {spokePoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-gray-700"
                  >
                    <FaCheckCircle className="text-emerald-500 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Approach;
