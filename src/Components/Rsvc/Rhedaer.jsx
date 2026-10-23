import React, { useRef, useEffect, useCallback } from 'react';
import iit from '/src/assets/iit.webp';
import rscvc1 from '/src/assets/rscvcbg.webp';
import logo from '/src/assets/logo.webp';

const logoClass =
  'object-contain transform hover:scale-110 transition-transform duration-300';
const aartiLogoClass = `${logoClass} filter brightness-125`;
const iitLogoClass = `${logoClass} filter brightness-80`;
const rightLogoClass = 'object-contain w-auto filter brightness-125';

const mobileLogoSize = 'h-12 mobile320:h-14 sm:h-20 w-auto';
const desktopLogoSize =
  'h-[4.5rem] md:h-20 lg:h-[5.25rem] xl:h-32 2xl:h-40 w-auto max-w-none';

const useFitText = (minSize, maxSize) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const fit = useCallback(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    let size = maxSize;
    text.style.fontSize = `${size}px`;

    while (text.scrollWidth > container.clientWidth && size > minSize) {
      size -= 0.5;
      text.style.fontSize = `${size}px`;
    }
  }, [minSize, maxSize]);

  useEffect(() => {
    fit();
    const t1 = setTimeout(fit, 150);
    const t2 = setTimeout(fit, 600);

    const observer = new ResizeObserver(fit);
    if (containerRef.current) observer.observe(containerRef.current);

    window.addEventListener('resize', fit);
    if (document.fonts?.ready) {
      document.fonts.ready.then(fit);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      observer.disconnect();
      window.removeEventListener('resize', fit);
    };
  }, [fit]);

  return { containerRef, textRef };
};

const Rhedaer = () => {
  const titleFit = useFitText(15, 72);
  const subtitleFit = useFitText(10, 28);

  return (
    <header className="w-full bg-white text-gray-800 px-2 sm:px-3 md:px-4 lg:px-6 overflow-visible">
      <div className="max-w-[1920px] mx-auto w-full py-2 sm:py-3 md:py-4 lg:py-5">
        {/* Mobile & small tablets */}
        <div className="flex flex-col gap-2 md:hidden">
          <div className="flex items-center justify-center gap-2 sm:gap-4 w-full">
            <img
              src={logo}
              alt="AARTI Logo"
              className={`${mobileLogoSize} ${aartiLogoClass}`}
            />
            <img
              src={iit}
              alt="IIT Roorkee Logo"
              className={`${mobileLogoSize} ${iitLogoClass}`}
            />
          </div>

          <div className="flex justify-center w-full">
            <img
              src={rscvc1}
              alt="Manthan & PSA Logo"
              className={`h-10 mobile320:h-12 sm:h-16 max-w-[92%] ${rightLogoClass}`}
            />
          </div>

          <div className="w-full px-1">
            <h2 className="text-center font-bold leading-tight py-0.5 text-[clamp(0.72rem,3.4vw,1.25rem)]">
              <span className="text-blue-600">RuTAGe</span>
              <span className="text-green-600"> - Smart Village Centre </span>
              <span className="text-yellow-500">(RSVC)</span>
            </h2>
          </div>

          <p className="text-center text-[clamp(0.65rem,2.6vw,0.9rem)] leading-snug px-2">
            A Rural Technology Enabled Employment & Entrepreneurship model
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-x-3 lg:gap-x-5 xl:gap-x-8 2xl:gap-x-12 w-full">
          <div className="flex shrink-0 items-center gap-2 lg:gap-3 justify-self-start">
            <img
              src={logo}
              alt="AARTI Logo"
              className={`${desktopLogoSize} ${aartiLogoClass}`}
            />
            <img
              src={iit}
              alt="IIT Roorkee Logo"
              className={`${desktopLogoSize} ${iitLogoClass}`}
            />
          </div>

          <div className="flex flex-col items-center justify-center min-w-0 w-full px-1 lg:px-2 relative z-10">
            <div ref={titleFit.containerRef} className="w-full overflow-hidden">
              <h2
                ref={titleFit.textRef}
                className="font-bold whitespace-nowrap text-center leading-tight tracking-tight w-max max-w-none mx-auto"
              >
                <span className="text-blue-600">RuTAGe</span>
                <span className="text-green-600"> - Smart Village Centre </span>
                <span className="text-yellow-500">(RSVC)</span>
              </h2>
            </div>

            <div
              ref={subtitleFit.containerRef}
              className="w-full overflow-hidden mt-1 lg:mt-2"
            >
              <p
                ref={subtitleFit.textRef}
                className="text-center whitespace-nowrap w-max max-w-none mx-auto leading-snug text-gray-800"
              >
                A Rural Technology Enabled Employment & Entrepreneurship model
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center justify-self-end self-center pl-1 lg:pl-2">
            <img
              src={rscvc1}
              alt="Manthan & PSA Logo"
              className="h-24 md:h-[5.5rem] lg:h-28 xl:h-32 2xl:h-40 object-contain w-auto filter brightness-125"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Rhedaer;
