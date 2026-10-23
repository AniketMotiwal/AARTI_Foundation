import React from 'react';
import Header1 from '../Header1';
import Footer1 from '../Footer1';

const FocusAreaPage = ({ title }) => {
  return (
    <>
      <Header1 />
      <main className="py-8 pb-24 min-h-screen bg-white px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-2">
            CPM Focus Area
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h1>
          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            Content for this focus area will be published here soon. Use the navigation above to
            explore other sections of the Centre for Precision Manufacturing at IIT Roorkee.
          </p>
        </div>
      </main>
      <Footer1 />
    </>
  );
};

export default FocusAreaPage;
