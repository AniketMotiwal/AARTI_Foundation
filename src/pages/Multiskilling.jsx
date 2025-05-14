import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icc from "../assets/icc.png"
import vedio from "../assets/Media1.mp4"
const Multiskilling = () => {
  const sliderImages = [
    "../../assets/Picture1.jpg",
    "../../assets/Picture5.png",
    "../../assets/Picture1.jpg",
    "../../assets/DSC_9819.JPG",
    "../../assets/DSC_9824.JPG",
    "../../assets/DSC_9834.JPG",
    "../../assets/DSC_9838.JPG",
    "../../assets/DSC_9851.JPG"
  ];

  // Faster slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    fade: false,
    cssEase: 'ease-out',
    pauseOnHover: false,
    pauseOnFocus: false,
    swipeToSlide: true,
    touchThreshold: 10,
    adaptiveHeight: false,
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      {/* Main Heading */}
      <h1 className="text-center text-3xl md:text-5xl font-bold text-blue-600 mb-10">
        Electric Vehicle (EV) Lab <br />
        <span className="md:text-sm text-black mb-0">(Sponsored by ICICI Foundation)</span>
      </h1>

      {/* Ultra-Fast Image Slider */}
      <div className="w-full max-w-4xl mb-12 shadow-xl rounded-lg overflow-hidden">
        <Slider {...settings}>
          {sliderImages.map((image, index) => (
            <div key={index} className="relative h-96 md:h-[500px]">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
                style={{
                  filter: 'brightness(0.95) contrast(1.05)',
                }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          ))}
        </Slider>
      </div>

      {/* ICICI Foundation Collaboration Section - Image Only */}
      <div className="w-full max-w-5xl-lg p-10 mb-12 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Image Section */}
          <div className="p-4 rounded-lg overflow-hidden w-full md:w-2/3">
            <img
              src={icc}
              alt="ICICI Foundation Collaboration"
              className="w-full h-auto object-contain"
              style={{
                minHeight: '500px',  // Increased from 400px
                maxHeight: '700px',  // Increased from 600px
                objectFit: 'cover',
                imageRendering: '-webkit-optimize-contrast'
              }}
              loading="eager"
            />
          </div>

          {/* Video Section */}
          <div className="p-4 rounded-lg overflow-hidden w-full md:w-1/2">
            <video
              controls
              autoPlay
              muted
              playsInline
              loop
              className="w-full object-contain"
              style={{
                minHeight: '400px',
                maxHeight: '600px',
              }}
            >
              <source src={vedio} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      {/* About Section - Enhanced */}
      <div className="w-full max-w-5xl bg-white rounded-lg p-10 mb-12 bg-gradient-to-r from-blue-400 to-green-400 shadow-lg">
        <h2 className="text-2xl font-semibold text-black mb-6">About EV Lab</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 text-lg leading-relaxed text-justify mb-6">
              At IIT Roorkee, a premier institution known for its engineering
              excellence and research prowess, we are committed to advancing the
              future of sustainable transportation. As the world pivots towards
              reducing carbon emissions and embracing greener urban mobility,
              Electric Vehicles (EVs) stand at the forefront of this transformation.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Recognizing the immense potential of EVs to address these global
              challenges, we are proud to introduce the Multi-Skilling Laboratory
              with a specialized focus on Electric Vehicles (EVs), hosted within
              AARTI, IIT Roorkee's Industry Accelerator.
            </p>
          </div>
          <div>
            <p className="text-gray-700 text-lg leading-relaxed text-justify mb-6">
              The EV Lab Facility is designed to play a pivotal role in developing
              innovative solutions, fostering industry-academia collaboration, and
              cultivating a skilled workforce to lead the charge in the electric
              vehicle sector.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              This strategic initiative not only advances
              technology but also nurtures the next generation of innovators,
              engineers, and entrepreneurs poised to shape the future of urban
              mobility.
            </p>
          </div>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="w-full max-w-5xl bg-white rounded-lg p-10 mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg">
        <h2 className="text-2xl font-semibold text-black mb-6">Objectives</h2>
        <ul className="text-gray-700 text-lg leading-relaxed space-y-3">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Capacity Building and Skill Development (upskilling, reskilling)</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Research Advancement</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Entrepreneurship Development</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Industry-Academia Collaboration</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Sustainable Development of Small-Format Electric Vehicles (SFDs)</span>
          </li>
        </ul>
      </div>

      {/* Expected Outcomes Section */}
      <div className="w-full max-w-5xl bg-white rounded-lg p-10 mb-12 bg-gradient-to-br from-pink-400 via-purple-600 to-blue-500 shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-6">Expected Outcomes</h2>
        <ul className="text-white text-lg leading-relaxed space-y-3">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Enhanced Learning and Capacity Building</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Entrepreneurship Ecosystem</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Industry-Academia Partnerships</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Community and Outreach Programs</span>
          </li>
        </ul>
      </div>

      {/* Facilities Available at EV Goals Section */}
      <div className="w-full max-w-5xl bg-white rounded-lg p-10 mb-12 bg-gradient-to-r from-blue-400 to-green-400 shadow-lg">
        <h2 className="text-2xl font-semibold text-black mb-6">Facilities Available at EV Lab</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-black mb-2">1. Electric Vehicle Training Setup</h3>
            <p className="text-gray-700">
              Tools for training and furniture for the lab<br />
              2-Wheeler Electric Vehicle Harness, and Powertrain Workbench (Open Chassis 2W)
            </p>
          </div>

          <div className="bg-white/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-black mb-2">2. Vehicles Powertrain Training & Testing Setup</h3>
            <p className="text-gray-700">
              3-Wheeler Electric Vehicle Harness, and Powertrain Workbench (Open Chassis 3W)<br />
              Motor Dyno for Testing & Research
            </p>
          </div>

          <div className="bg-white/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-black mb-2">3. Battery Pack Assembly Line</h3>
            <p className="text-gray-700">
              Cell Charging and Discharging Training Workbench (8 CH) with data Acquisition system<br />
              Battery PACK L&D Kit (LFP & NMC) with all components
            </p>
          </div>

          <div className="bg-white/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-black mb-2">4. Battery Pack Prototyping Setup</h3>
            <p className="text-gray-700">
              Pneumatic Spot-Welding Machine with Pneumatic Setup
            </p>
          </div>

          <div className="bg-white/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-black mb-2">5. Battery Pack Testing Setup</h3>
            <p className="text-gray-700">
              Battery, BMS Algorithm & CAN Protocol with Data Acquisition System<br />
              Battery Pack Testing & Aging Machine with data Acquisition system
            </p>
          </div>

          <div className="bg-white/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-black mb-2">6. Charging Station Technology Setup</h3>
            <p className="text-gray-700">
              Charging Station Learning & Training Workbench<br />
              Technology Layout Posters
            </p>
          </div>

          <div className="bg-white/30 p-6 rounded-lg backdrop-blur-sm col-span-2">
            <h3 className="text-xl font-semibold text-black mb-2">7. Two-Wheeler EV Simulation Kit</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multiskilling;