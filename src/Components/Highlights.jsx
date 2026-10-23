import React from 'react';

const highlights = [
  {
    title: 'Trademark recognition',
    text: 'Logos of AARTI and RuTAGe accepted for publication in the Trademark Journal.',
  },
  {
    title: 'DGCA approval',
    text: 'Approval granted by DGCA for Remote Pilot Training Organization (RPTO).',
  },
  {
    title: 'Industrial RFPs (SRIC)',
    text: 'Two RFPs circulated to the IIT Roorkee community — problem statements from Avanti Bufa, Notofire, Severn Glocon, and Hella India Lighting.',
  },
  {
    title: 'Hella India R&D',
    text: 'Low-cost compact LED driver R&D with prototype developed and patent filed at IIT Roorkee.',
  },
];

const Highlights = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-50 to-teal-50 dark:from-slate-900 dark:to-emerald-950/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Recent Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-slate-800/90 p-6 rounded-lg shadow-md dark:shadow-black/40 border-l-4 border-indigo-500 dark:border-indigo-400"
            >
              <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">{item.title}</h3>
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
