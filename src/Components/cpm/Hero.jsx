import React, { useEffect, useRef } from 'react';

const heroVideoUrl =
  'https://res.cloudinary.com/dmehcwvwi/video/upload/v1780916652/Copy_of_Copy_of_Copy_of_CPMVideo21-04-2026_hr6sbd.mp4';

const Hero = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-slate-900" aria-label="CPM overview video">
      <video
        ref={videoRef}
        className="block w-full h-auto max-h-[min(70vh,720px)] object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={heroVideoUrl} type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
