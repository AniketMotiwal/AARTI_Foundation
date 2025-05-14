import React from 'react';
import image1 from '../../../assets/rsvcintiatives.jpg';
import image2 from '../../../assets/rsvcact2.jpg';
import image3 from '../../../assets/rasct.jpg';

const Activities = () => {
  return (
    <div className="p-10 space-y-16 bg-gray-100">
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-2xl shadow-xl">
        <img src={image1} alt="Seminar" className="w-full md:w-1/2 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
        <p className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed">
          In the Khulgad region, specifically at RSVC Khunt Dhamas, a seminar was organized on November 10, 2024, under the aegis of REAP Almora and the Nehir Himalayan Institute. This seminar engaged 56 villages from the Khulgad region and focused on critical areas such as water, forest, and land conservation, along with women empowerment.
        </p>
      </div>
      
      {/* Second Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white p-6 rounded-2xl shadow-xl">
        <img src={image2} alt="Kisaan Mitra Meet" className="w-full md:w-1/2 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
        <p className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed">
          A Kisaan Mitra meet was organised on 29th September 2024 at Khunt RSVC. The enthusiasm shown by all participants towards advancing the commitment of the RSVC in technical intervention to water, forests, land, and women empowerment was truly encouraging.
        </p>
      </div>
      
      {/* Third Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-2xl shadow-xl">
        <img src={image3} alt="Plantation Project" className="w-full md:w-1/2 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
        <p className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed">
          A project involving the plantation of 70,000 mulberry saplings as part of a watershed management program. This project not only contributes to environmental conservation but also aims to create employment opportunities for the youth, ultimately curbing migration from rural areas.
        </p>
      </div>
    </div>
  );
};

export default Activities;
