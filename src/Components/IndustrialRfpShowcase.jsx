import React from 'react';
import { Link } from 'react-router-dom';
import {
  rfpHeading,
  rfpIntro,
  rfpLeftColumn,
  rfpRightColumn,
} from '../content/industrialRfpContent';

const CompanyBlock = ({ company, items }) => (
  <div className="mb-6 last:mb-0">
    <h3 className="text-lg md:text-xl font-bold text-slate-900 font-serif">{company}</h3>
    <ul className="mt-2 space-y-2 list-disc pl-5 text-slate-800 text-sm md:text-base font-serif leading-relaxed">
      {items.map((item, index) =>
        typeof item === 'string' ? (
          <li key={index}>{item}</li>
        ) : (
          <li key={index}>
            {item.text}
            {item.subItems && (
              <ul className="mt-2 space-y-1 list-disc pl-5">
                {item.subItems.map((sub) => (
                  <li key={sub}>{sub}</li>
                ))}
              </ul>
            )}
          </li>
        )
      )}
    </ul>
  </div>
);

const IndustrialRfpShowcase = () => {
  return (
    <section id="industrial-rfp" className="py-14 md:py-20 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 md:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-700 mb-2">
            Industrial research
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 font-serif leading-tight">
            {rfpHeading}
          </h2>
          <p className="mt-5 text-base md:text-lg text-slate-800 font-serif leading-relaxed max-w-4xl">
            {rfpIntro}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm lg:border-r lg:border-r-slate-300">
            {rfpLeftColumn.map((block) => (
              <CompanyBlock key={block.company} company={block.company} items={block.items} />
            ))}
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm">
            {rfpRightColumn.map((block) => (
              <CompanyBlock key={block.company} company={block.company} items={block.items} />
            ))}
          </div>
        </div>

        <p className="mt-10 text-center">
          <Link
            to="/Projects"
            className="inline-flex items-center text-indigo-700 font-semibold hover:underline text-base md:text-lg"
          >
            View all projects &amp; activities
            <span className="ml-2" aria-hidden>
              →
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default IndustrialRfpShowcase;
