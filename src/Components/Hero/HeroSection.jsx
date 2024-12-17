import React, { useEffect, useState, useRef } from 'react';
import slide1 from '../../assets/slide2.webp';
import slide2 from '../../assets/bg.png';
import slide3 from '../../assets/DSC_3081.JPG';
import slide4 from '../../assets/rsvc.jpeg';

// Define the array of images for the slideshow
const images = [slide1, slide2, slide3, slide4];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(images[0]);
  const ref = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setBackgroundImage(images[(currentImageIndex + 1) % images.length]);
        setTransitioning(false);
      }, 500); // Match this with the transition duration
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setBackgroundImage(images[currentImageIndex]);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [currentImageIndex]);

  return (
    <div ref={ref} className="relative bg-primary text-primary-foreground overflow-hidden">
      <div
        className={`absolute inset-0 transition-all duration-500 ease-in-out ${transitioning ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.8) contrast(1.2)', // Increase brightness and contrast
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-[-1]"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4 sm:px-8 md:px-12">
        {/* You can add back your heading and buttons here */}
        {/* <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          Welcome to Hero Section
        </h1> */}
        
      </div>
    </div>
  );
};

export default HeroSection;
