import React, { useState, useEffect, useCallback } from 'react';
import {
  FaCheckCircle,
  FaSearchPlus,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import isvc1 from '../assets/ISVC1.jpeg';
import isvc2 from '../assets/ISVC2.jpeg';
import isvc3 from '../assets/ISVC3.jpeg';
import isvc4 from '../assets/ISVC4.jpeg';

const isvcPhotos = [
  {
    src: isvc1,
    alt: 'Integrated Smart Village Center — Nakot',
    label: 'Nakot',
    caption: 'Inauguration at Nakot — Integrated Smart Village Center',
  },
  {
    src: isvc2,
    alt: 'Integrated Smart Village Center — Tehri',
    label: 'Tehri',
    caption: 'Community engagement session at Tehri center',
  },
  {
    src: isvc3,
    alt: 'Integrated Smart Village Center — Champawat',
    label: 'Champawat',
    caption: 'Field team and beneficiaries at Champawat',
  },
  {
    src: isvc4,
    alt: 'Integrated Smart Village Center — outreach and activities',
    label: 'ISVC Outreach',
    caption: 'On-ground activities at Integrated Smart Village Centers',
  },
];

const isvcBullets = [
  'Digital governance services at the doorstep',
  'Livelihoods, skilling, and entrepreneurship support',
  'Access to government schemes and entitlements',
  'A platform for community–administration coordination',
  'Technical intervention for rural development',
];

const ImageSlider = ({ photos }) => {
  const [current, setCurrent] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index) => setCurrent((index + photos.length) % photos.length),
    [photos.length]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  useEffect(() => {
    if (!zoomOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [zoomOpen]);

  const slide = photos[current];

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-emerald-200/80 bg-slate-900">
        <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px]">
          {photos.map((photo, index) => (
            <div
              key={photo.label}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === current
                  ? 'opacity-100 scale-100 z-10'
                  : 'opacity-0 scale-105 z-0 pointer-events-none'
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
          ))}

          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-emerald-800 p-3 rounded-full shadow-lg transition"
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-emerald-800 p-3 rounded-full shadow-lg transition"
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>

          <button
            type="button"
            onClick={() => setZoomOpen(true)}
            className="absolute top-3 right-3 z-20 flex items-center gap-2 bg-white/90 hover:bg-white text-emerald-800 text-xs font-semibold px-3 py-2 rounded-full shadow-lg transition"
            aria-label="Zoom image"
          >
            <FaSearchPlus />
            Zoom
          </button>

          <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-5">
            <span className="inline-block px-3 py-1 mb-2 text-xs font-bold uppercase tracking-wider rounded-full bg-emerald-500 text-white">
              {slide.label}
            </span>
            <p className="text-white text-sm sm:text-base font-medium drop-shadow-md">
              {slide.caption}
            </p>
          </div>
        </div>

      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {photos.map((photo, index) => (
          <button
            key={photo.label}
            type="button"
            onClick={() => goTo(index)}
            className={`relative rounded-xl overflow-hidden border-2 transition-all aspect-[4/3] ${
              index === current
                ? 'border-emerald-500 ring-2 ring-emerald-200 scale-[1.02] shadow-md'
                : 'border-transparent opacity-70 hover:opacity-100'
            }`}
          >
            <img src={photo.src} alt={photo.label} className="w-full h-full object-cover" />
            <span className="absolute bottom-1 left-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-white">
              {photo.label}
            </span>
          </button>
        ))}
      </div>

      {zoomOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4"
          onClick={() => setZoomOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setZoomOpen(false)}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full"
            aria-label="Close zoom"
          >
            <FaTimes size={22} />
          </button>
          <img
            src={slide.src}
            alt={slide.alt}
            className="max-w-full max-h-[92vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-4 text-white/80 text-sm">{slide.caption}</p>
        </div>
      )}
    </div>
  );
};

const IsvcCenters = ({ className = '' }) => {
  return (
    <section
      id="isvc-centers"
      className={`py-14 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50/40 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/40 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-emerald-100 text-emerald-800 mb-4">
              Funded by Rallis
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-slate-900 dark:text-white leading-tight mb-5">
              Integrated Smart Village Centers
            </h2>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Established <strong>Integrated Smart Village Centers</strong> in{' '}
              <strong>Nakot</strong>, <strong>Tehri</strong> and <strong>Champawat</strong> districts
              under the guidance of SETU Aayog for the following:
            </p>
            <ul className="space-y-2.5">
              {isvcBullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/80 dark:bg-slate-800/90 border border-emerald-100 dark:border-slate-600 shadow-sm hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-600 transition"
                >
                  <FaCheckCircle className="text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-200 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <ImageSlider photos={isvcPhotos} />
        </div>
      </div>
    </section>
  );
};

export default IsvcCenters;
