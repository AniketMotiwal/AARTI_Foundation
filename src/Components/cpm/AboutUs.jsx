import React from 'react';
import { cpmMission } from './cpmContent';

const AboutUs = () => {
  return (
    <section id="about-cpm" className="py-14 px-4 sm:px-6 bg-slate-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Centre for Precision Manufacturing (CPM)
        </h2>
        <p className="mt-3 text-indigo-200 text-lg">
          AARTI Foundation · IIT Roorkee · University of Akron, USA
        </p>
        <p className="mt-8 text-lg leading-relaxed text-slate-200 text-left md:text-center">
          {cpmMission}
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
