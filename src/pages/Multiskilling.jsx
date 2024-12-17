import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Multiskilling = () => {
  const sliderImages = [
    "../../assets/EV laboratory pics (3).jpg",
    "../../assets/EV laboratory pics (4).jpg",
    "../../assets/EV laboratory pics (5).jpg",
    "../../assets/EV laboratory pics (6).jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      {/* Main Heading */}
      <h1 className="text-center text-3xl md:text-5xl font-bold text-blue-600 mb-10">
        Electric Vehicle (EV) Lab <br />
        <span className="md:text-sm text-black mb-0">(Sponsored by ICICI Foundation)</span>
      </h1>

      {/* Image Slider */}
      <div className="w-full max-w-5xl mb-12">
        <Slider {...settings}>
          {sliderImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="w-full rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>

      {/* About Section */}
      <div className="w-full max-w-5xl bg-white rounded-lg p-10 mb-12 bg-gradient-to-r from-blue-400 to-green-400">
        <h2 className="text-2xl font-semibold text-black mb-6">About</h2>
        <p className="text-gray-600 text-lg leading-relaxed text-justify">
          At IIT Roorkee, a premier institution known for its engineering
          excellence and research prowess, we are committed to advancing the
          future of sustainable transportation. As the world pivots towards
          reducing carbon emissions and embracing greener urban mobility,
          Electric Vehicles (EVs) stand at the forefront of this transformation.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mt-6 text-justify">
          Recognizing the immense potential of EVs to address these global
          challenges, we are proud to introduce the Multi-Skilling Laboratory
          with a specialized focus on Electric Vehicles (EVs), hosted within
          AARTI, IIT Roorkee’s Industry Accelerator.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mt-6 text-justify">
          The EV Lab Facility is designed to play a pivotal role in developing
          innovative solutions, fostering industry-academia collaboration, and
          cultivating a skilled workforce to lead the charge in the electric
          vehicle sector. This strategic initiative not only advances
          technology but also nurtures the next generation of innovators,
          engineers, and entrepreneurs poised to shape the future of urban
          mobility.
        </p>
      </div>

      {/* Objectives Section */}
      <div className="w-full max-w-5xl bg-white rounded-lg p-10 mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 ">
        <h2 className="text-2xl font-semibold text-black  mb-6">Objectives</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          - Capacity Building and Skill Development (upskilling, reskilling) <br />
          - Research Advancement <br />
          - Entrepreneurship Development <br />
          - Industry-Academia Collaboration <br />
          - Sustainable Development of Small-Format Electric Vehicles (SFDs)
        </p>
      </div>

      {/* Expected Outcomes Section */}
      <div className="w-full max-w-5xl bg-white rounded-lg p-10 mb-12 bg-gradient-to-br from-pink-400 via-purple-600 to-blue-500 ">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Expected Outcomes
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          - Enhanced Learning and Capacity Building <br />
          - Entrepreneurship Ecosystem <br />
          - Industry-Academia Partnerships <br />
          - Community and Outreach Programs
        </p>
      </div>

      {/* Facilities Available at EV Goals Section */}
      <div className="w-full max-w-5xl bg-white rounded-lg p-10 mb-12 bg-gradient-to-r from-blue-400 to-green-400">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Facilities Available at EV Goals
        </h2>
        <strong>1. Electric</strong>
        <br />
        Tools for training and furniture for the lab
        <br />
        2-Wheeler Electric Vehicle Harness, and
        Powertrain Workbench (Open Chassis 2W)
        <br /><br />
        <strong>2. Vehicles Powertrain Training & Testing Setup</strong>
        <br />
        3-Wheeler Electric Vehicle Harness, and
        Powertrain Workbench (Open Chassis 3W)
        <br />
        Motor Dyno for Testing & Research
        <br /><br />
        <strong>3. Battery Pack Assembly Line</strong>
        <br />
        Cell Charging and Discharging Training
        Workbench (8 CH) with data Acquisition system
        <br />
        Battery PACK L&D Kit (LFP & NMC) with
        all components
        <br /><br/>
        <strong>4. Battery Pack Prototyping Setup</strong>
        <br />
        Pneumatic Spot-Welding Machine with
        Pneumatic Setup
        <br /><br/>
        <strong>5. Battery Pack Testing Setup</strong>
        <br />
        Battery, BMS Algorithm & CAN Protocol with Data Acquisition System
        <br />
        Battery Pack Testing & Aging Machine with data Acquisition system
        <br /><br/>
        <strong>6. Charging Station Technology Setup</strong>
        <br />
        Charging Station Learning & Training Workbench
        <br />
        Technology Layout Posters
        <br /><br/>
        <strong> 7.Two-Wheeler EV Simulation Kit</strong>
      </div>
    </div>
  );
};

export default Multiskilling;
