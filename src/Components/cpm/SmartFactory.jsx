import React, { useEffect, useRef } from 'react';
import cpm1 from '../../assets/CPM1.jpg';
import cpm2 from '../../assets/CPM2.jpg';
import cpm3 from '../../assets/CPM3.jpg';
import cpm4 from '../../assets/CPM4.jpg';
import mhiLogo from '../../assets/MHI.svg';
import aartiLogo from '../../assets/logo.webp';
import iitLogo from '../../assets/iit.png';

const focusItems = [
  'IoT',
  'Data generation',
  'AI/ML in Manufacturing',
  'Cybersecurity in Manufacturing.',
];

const ifactoryVideoUrl =
  'https://res.cloudinary.com/dmehcwvwi/video/upload/v1780914737/Ifactory_At_Iit_Roorkee_mq2qov.mp4';

const platformPhotos = [
  { src: cpm1, alt: 'Smart factory emulation platform — full line view' },
  { src: cpm2, alt: 'Smart factory emulation platform — conveyor workstations' },
  { src: cpm3, alt: 'Smart factory emulation platform — integrated stations' },
  { src: cpm4, alt: 'Smart factory emulation platform — MHI-funded lab setup' },
];

const SmartFactory = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.muted = true;
      video.play().catch(() => {});
    };

    tryPlay();
    video.addEventListener('loadeddata', tryPlay);
    video.addEventListener('canplay', tryPlay);

    if (!section) {
      return () => {
        video.removeEventListener('loadeddata', tryPlay);
        video.removeEventListener('canplay', tryPlay);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay();
      },
      { threshold: 0.1, rootMargin: '80px' }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      video.removeEventListener('loadeddata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ifactory"
      className="w-full bg-white text-slate-900 scroll-mt-48 py-10 sm:py-12 md:py-16 lg:py-20 2xl:py-24 px-3 sm:px-6 lg:px-8 2xl:px-12"
    >
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] mx-auto">
        <div className="flex flex-wrap items-center justify-end gap-4 md:gap-8 mb-8 pb-4 border-b border-slate-200">
          <img
            src={mhiLogo}
            alt="Ministry of Heavy Industries — भारी उद्योग मंत्रालय"
            className="h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 w-auto max-w-[min(100%,14rem)] sm:max-w-none object-contain"
          />
          <img
            src={aartiLogo}
            alt="AARTI Foundation"
            className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
          />
          <img
            src={iitLogo}
            alt="Indian Institute of Technology Roorkee"
            className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
          />
        </div>

        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[2.75rem] font-bold font-serif leading-snug text-slate-900 max-w-5xl 2xl:max-w-6xl">
          Smart Factory Emulation Platform for Research and Education funded by Ministry of
          Heavy Industries
        </h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-indigo-50/50 p-6 sm:p-8 shadow-sm h-full flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-10 w-1 rounded-full bg-indigo-600 shrink-0" aria-hidden />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Focus on
              </h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {focusItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 sm:gap-4 rounded-xl bg-white/80 border border-slate-100 px-4 py-3 sm:px-5 sm:py-3.5 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all duration-200"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white text-sm font-bold"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-snug">
                    {item.replace(/\.$/, '')}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {platformPhotos.map((photo) => (
              <figure
                key={photo.alt}
                className="overflow-hidden rounded-lg border border-slate-200 shadow-md bg-slate-50 aspect-[4/3]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16">
          <div className="text-center mb-5 sm:mb-8">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-2">
              Platform showcase
            </p>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">
              iFactory at IIT Roorkee
            </h3>
            <p className="mt-2 text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Smart Factory Emulation Platform — Ministry of Heavy Industries funded facility at CPM
            </p>
          </div>

          <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-slate-200 shadow-lg sm:shadow-xl bg-black">
            <video
              ref={videoRef}
              className="block w-full aspect-video min-h-[220px] sm:min-h-[280px] md:min-h-[360px] object-cover object-center bg-black pointer-events-none"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
            >
              <source src={ifactoryVideoUrl} type="video/mp4" />
              Your browser does not support embedded video playback.
            </video>
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 px-4 py-3 sm:py-4">
              <p className="text-center text-slate-300 text-sm md:text-base">
                iFactory at IIT Roorkee — full platform walkthrough
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFactory;
