import React from 'react';
import { cpmMission, cpmKeyPoints, sdgContributions } from './cpmContent';
import cobortCpm from '../../assets/cobort cpm.jpg';
import iitLogo from '../../assets/iit.webp';

const CpmOverview = () => {
  return (
    <section id="about-cpm" className="relative py-12 md:py-16 px-4 sm:px-6 bg-white overflow-hidden scroll-mt-48">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${iitLogo})` }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto">
        <header className="text-center md:text-left mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Centre for Precision Manufacturing
          </h1>
          <p className="mt-2 text-lg md:text-xl font-medium text-slate-700 italic">
            (In Collaboration with Akron University)
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div className="space-y-6">
            <p className="text-slate-800 text-base md:text-lg leading-relaxed text-justify">
              {cpmMission}
            </p>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Key Points</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-800">
                {cpmKeyPoints.map((point) => (
                  <li key={point.title} className="leading-snug">
                    <span className="font-semibold">{point.title}</span>
                    <span className="block text-sm text-slate-600 mt-0.5 pl-0">{point.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg bg-slate-50 border border-slate-200 p-5">
              <h2 className="text-lg font-bold text-slate-900">
                Contribution to Sustainable Development Goals (SDGs)
              </h2>
              <p className="mt-2 text-slate-700 font-medium">CPM contributes to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-800">
                {sdgContributions.map((sdg) => (
                  <li key={sdg.code}>
                    <strong>{sdg.code}:</strong> {sdg.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <figure className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
              <img
                src={cobortCpm}
                alt="Collaborative robot and automatic tool changer at CPM Smart Factory, IIT Roorkee"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </figure>
            <p className="mt-3 text-center text-sm text-slate-500">
              Smart manufacturing lab — collaborative robotics &amp; precision systems
            </p>
          </div>
        </div>

        <footer className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-semibold text-slate-600 tracking-wide">IIT ROORKEE</p>
          <p className="text-sm text-slate-500">
            Smart Factory Emulation Platform · Ministry of Heavy Industries
          </p>
        </footer>
      </div>
    </section>
  );
};

export default CpmOverview;
