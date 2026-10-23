import React from 'react';
import { Link } from 'react-router-dom';
import capacityWomen from '../assets/Capcity building for young women.jpg';
import intConf from '../assets/Int conf.jpg';
import globalSpeakers from '../assets/sampak.jpg';

const eventHighlights = [
  {
    image: capacityWomen,
    alt: 'Capacity building session for young women in emerging technology at IIT Roorkee',
    caption: 'Capacity Building for Young Women (200+) in Emerging Technology Domain',
  },
  {
    image: intConf,
    alt: 'International conference on transforming waste management — group at IIT Roorkee',
    caption:
      'International Conference on Transforming Waste Management: Circular Economy and Energy Sustainability 2.0',
  },
  {
    image: globalSpeakers,
    alt: 'International academic exchange — virtual session with global faculty',
    caption: 'Prof. Siamak Farhad, University of Tennessee · Prof. Mohan Kolhe, University of Agder, Norway',
  },
];

const OutreachEvents = () => {
  return (
    <section id="outreach-events" className="py-14 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10 md:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-rose-700 mb-2">
            Outreach &amp; programmes
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 font-serif leading-tight max-w-4xl mx-auto">
            500<sup>th</sup> Birth Anniversary of Rani Abakka Chowta
          </h2>
          <p className="mt-3 text-lg md:text-xl font-medium text-slate-700">
            17<sup>th</sup> – 20<sup>th</sup> March 2026
          </p>
        </header>

        <ul className="max-w-3xl mx-auto space-y-3 mb-10 text-slate-800 text-base md:text-lg font-serif">
          <li className="flex gap-3">
            <span className="text-rose-600 font-bold shrink-0">•</span>
            <span>Capacity Building for Young Women (200+) in Emerging Technology Domain</span>
          </li>
          <li className="flex gap-3">
            <span className="text-rose-600 font-bold shrink-0">•</span>
            <span>Business Accelerator Cohorts for Ministry of Heavy Industries</span>
          </li>
        </ul>

        <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
          <Link
            to="/#business-accelerator-cohorts"
            className="text-indigo-700 font-semibold hover:underline"
          >
            View business accelerator cohorts
          </Link>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {eventHighlights.map((item) => (
            <figure
              key={item.caption}
              className="flex flex-col rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-4 text-sm md:text-base text-slate-800 leading-snug bg-gradient-to-b from-blue-50 to-blue-100/80 border-t border-blue-100 font-medium text-center">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutreachEvents;
