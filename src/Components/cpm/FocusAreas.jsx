import React from 'react';
import { cpmKeyPoints } from './cpmContent';

const FocusAreas = () => {
  return (
    <section id="focus" className="py-14 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-3">
          Centre for Precision Manufacturing
        </h2>
        <p className="text-center text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          In collaboration with the University of Akron, USA — established under the AARTI Foundation at
          IIT Roorkee to advance precision manufacturing, research, and workforce readiness in India.
        </p>

        <ul className="space-y-4">
          {cpmKeyPoints.map((point) => (
            <li
              key={point.title}
              className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-4"
            >
              <h3 className="font-semibold text-indigo-800">{point.title}</h3>
              <p className="mt-1 text-slate-700 text-sm leading-relaxed">{point.text}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-slate-500">
          Smart Factory Emulation Platform (Ministry of Heavy Industries): IoT · Data generation ·
          AI/ML in manufacturing · Cybersecurity in manufacturing
        </p>
      </div>
    </section>
  );
};

export default FocusAreas;
