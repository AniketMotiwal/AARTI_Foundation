import React from 'react';
import AIimg from '../../assets/AIimg.webp';
import factory from '../../assets/factory.webp';
import emulation from '../../assets/emulation.webp';
import iot from '../../assets/iot.webp';
import { researchThemes, cpmMission } from './cpmContent';

const themeImages = [AIimg, factory, emulation, iot];

const Research = () => {
  return (
    <section id="research" className="py-20 bg-white scroll-mt-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-2">
            Research & Collaboration
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Innovative Research & Global Collaboration
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {cpmMission}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {researchThemes.map((topic, index) => (
            <article
              key={topic.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={themeImages[index]}
                alt={topic.title}
                className="h-40 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5 flex flex-col flex-1">
                <span className="inline-block self-start text-xs font-semibold uppercase tracking-wide text-indigo-700 bg-indigo-50 px-2 py-1 rounded mb-3">
                  {topic.tag}
                </span>
                <h3 className="text-xl font-bold text-slate-900">{topic.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed flex-1">
                  {topic.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Research;
