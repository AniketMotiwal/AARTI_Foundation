import React from 'react';
import cohort1 from '../assets/businnes-chorts1.jpg';
import cohort2 from '../assets/businnes-chorts2.jpg';
import cohort3 from '../assets/businnes-chorts3.jpg';

const cohortPhotos = [
  { src: cohort1, alt: 'Business accelerator cohort — leadership session' },
  { src: cohort2, alt: 'Business accelerator cohort — lab and technology visit' },
  { src: cohort3, alt: 'Business accelerator cohort — participants at IIT Roorkee' },
];

const BusinessAcceleratorCohorts = () => {
  return (
    <section id="business-accelerator-cohorts" className="py-14 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-center font-serif tracking-tight">
          Three Business Accelerator Cohorts
        </h2>

        <div className="mt-8 space-y-6 max-w-5xl mx-auto font-serif text-slate-800 text-base md:text-lg leading-relaxed text-justify">
          <p>
            AARTI has been mandated by the MHI to train 300 industries. Since the last board meeting,
            AARTI has organised three business accelerator cohort focused on business acceleration,
            innovation, and leadership development for MSME owners, start-up founders, and industry
            professionals through immersive learning, strategic insights, and personalized mentoring.
            Conducted in three cohorts, the program engaged participants from 180+ industries.
          </p>
          <p>
            AARTI during these cohorts, in order to contribute to the IIT Roorkee&apos;s ecosystem,
            ensures participation from 15% of young startups/students.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {cohortPhotos.map((photo, index) => (
            <figure
              key={index}
              className="overflow-hidden rounded-lg shadow-lg border border-slate-200 bg-slate-50"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-52 sm:h-56 md:h-64 object-cover hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessAcceleratorCohorts;
