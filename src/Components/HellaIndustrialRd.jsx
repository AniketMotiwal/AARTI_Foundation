import React from 'react';
import { Link } from 'react-router-dom';
import hellaPrototype from '../assets/hellaportotype.jpg';

const HellaIndustrialRd = () => {
  return (
    <section id="hella-industrial-rd" className="py-14 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 md:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-700 mb-2">
            Industrial R&amp;D
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 font-serif leading-tight">
            Industrial R&amp;D Activities – Hella
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div className="font-serif text-slate-800 space-y-5">
            <p className="text-base md:text-lg leading-relaxed">
              R&amp;D to develop a low-cost, compact LED driver that meets the highest EMI/EMC
              compliance standards while operating at less than 1A current — funded by{' '}
              <strong>Hella India Pvt. Ltd.</strong>
            </p>
            <blockquote className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/80 rounded-r-lg text-slate-800 text-sm md:text-base italic">
              &ldquo;Develop a low-cost, compact LED driver that meets the highest EMI/EMC compliance
              standards while operating at less than 1A current&rdquo;
            </blockquote>
            <p className="text-base md:text-lg font-semibold text-indigo-900">
              Prototype developed and patent filed by IIT Roorkee.
            </p>
            <p className="text-sm text-slate-600">
              The prototype demonstrates microcontroller-based LED driver design, power-supply
              operation, short-circuit protection, and automatic switch-off for safe operation.
            </p>
          </div>

          <figure className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-50">
            <img
              src={hellaPrototype}
              alt="Hella India LED driver prototype — system diagram, PCB, and test modes at IIT Roorkee"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-600 text-center border-t border-slate-100">
              Microcontroller-based LED driver prototype — development and validation
            </figcaption>
          </figure>
        </div>

        <p className="mt-10 text-center">
          <Link
            to="/Projects"
            className="inline-flex items-center text-indigo-700 font-semibold hover:underline text-base"
          >
            More industrial R&amp;D on Projects
            <span className="ml-2" aria-hidden>
              →
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HellaIndustrialRd;
