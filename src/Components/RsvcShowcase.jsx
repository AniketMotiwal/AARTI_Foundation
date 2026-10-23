import React from 'react';
import { Link } from 'react-router-dom';
import rsvcSpeech from '../assets/Rsvc-speech.png';
import rsvcTeam from '../assets/rsvc.jpeg';
import rutageImg from '../assets/rutage.jpg';
import almoraImg from '../assets/almora.jpg';
import awardImg from '../assets/DSC_3081.JPG';
import workshopImg from '../assets/DSC_3093.JPG';

const galleryPhotos = [
  { src: rsvcTeam, alt: 'RuTAGe Smart Village Centre outreach' },
  { src: rutageImg, alt: 'RuTAGe Smart Village Centre' },
  { src: almoraImg, alt: 'RSVC inauguration — Almora, Uttarakhand' },
  { src: awardImg, alt: 'Award and recognition ceremony' },
  { src: workshopImg, alt: 'Community workshop and field engagement' },
];

const RsvcShowcase = () => {
  return (
    <section id="rsvc-showcase" className="py-14 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8 md:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-700 mb-2">
            Rural transformation
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 font-serif tracking-tight">
            RuTAGe Smart Village Centre (RSVC)
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Led by AARTI, an industry accelerator of IIT Roorkee, the RSVC model won first prize at
            the NSE Social Stock Exchange event in Varanasi—advancing technology integration and
            community engagement in rural India through a Hub and Spoke approach.
          </p>
        </header>

        <figure className="mb-10 rounded-2xl overflow-hidden shadow-xl border border-emerald-100 bg-white">
          <img
            src={rsvcSpeech}
            alt="RSVC community programme — outreach and leadership address"
            className="w-full h-auto object-cover max-h-[520px]"
            loading="eager"
          />
          <figcaption className="px-4 py-3 text-sm text-slate-600 text-center bg-white border-t border-slate-100">
            Community outreach and women-led rural development under the RSVC programme
          </figcaption>
        </figure>

        <div className="rounded-xl bg-white border border-emerald-100 p-6 md:p-8 shadow-sm max-w-5xl mx-auto font-serif text-slate-800 text-base md:text-lg leading-relaxed text-justify mb-10">
          <h3 className="text-xl font-bold text-emerald-900 mb-3">
            Driving transformation through RSVC
          </h3>
          <p>
            Women-led, community-driven rural transformation through technical interventions in
            primary and secondary processing and supply chain logistics—delivering measurable
            outcomes in integrated farming, livelihood generation, education support, and
            women&apos;s empowerment.
          </p>
          <p className="mt-3 text-slate-700">
            <strong>Partners:</strong> Nehir Himalayan Foundation, Sericulture Department,
            AARTI@IITR, SETU, and local communities.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {galleryPhotos.map((photo, index) => (
            <figure
              key={index}
              className="overflow-hidden rounded-lg shadow-md border border-slate-200 bg-white aspect-[4/3]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-300"
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center">
          <Link
            to="/Rsvc"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition-colors shadow-md"
          >
            Explore full RSVC website
            <span className="ml-2" aria-hidden>
              →
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RsvcShowcase;
