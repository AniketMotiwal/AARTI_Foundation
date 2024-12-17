import React from 'react';

const ExecutionStagesSection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 animate-fadeInUp">
          Execution Stages
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-2xl animate-fadeIn">
            <thead>
              <tr className="bg-indigo-600 text-white uppercase text-sm leading-normal">
                <th className="py-3 px-4 sm:px-6 text-left">Stage</th>
                <th className="py-3 px-4 sm:px-6 text-left">Description</th>
                <th className="py-3 px-4 sm:px-6 text-left">Date/Duration</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
              <tr className="border-b border-gray-200 hover:bg-indigo-50 transition-colors duration-200">
                <td className="py-4 px-4 sm:px-6 font-semibold">Program Launch</td>
                <td className="py-4 px-4 sm:px-6">
                  Launched on the Startup India Portal and ASPIRE, inviting applications from startups and industry partners focused on e-mobility solutions.
                </td>
                <td className="py-4 px-4 sm:px-6 font-semibold">January 2022</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-indigo-50 transition-colors duration-200">
                <td className="py-4 px-4 sm:px-6 font-semibold">Application Screening</td>
                <td className="py-4 px-4 sm:px-6">
                  Applications were screened based on relevance to the program's objectives, with a total of 110 applicants qualifying for further evaluation.
                </td>
                <td className="py-4 px-4 sm:px-6 font-semibold">February - March 2022</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-indigo-50 transition-colors duration-200">
                <td className="py-4 px-4 sm:px-6 font-semibold">Shortlisting</td>
                <td className="py-4 px-4 sm:px-6">
                  32 applications were shortlisted for detailed evaluation based on their concept notes and alignment with program goals.
                </td>
                <td className="py-4 px-4 sm:px-6 font-semibold">April 2022</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-indigo-50 transition-colors duration-200">
                <td className="py-4 px-4 sm:px-6 font-semibold">Evaluation and Selection</td>
                <td className="py-4 px-4 sm:px-6">
                  External evaluators assessed the shortlisted applications, resulting in the final selection of 17 projects from 13 industry partners.
                </td>
                <td className="py-4 px-4 sm:px-6 font-semibold">May - July 2022</td>
              </tr>
              <tr className="hover:bg-indigo-50 transition-colors duration-200">
                <td className="py-4 px-4 sm:px-6 font-semibold">Final Approval</td>
                <td className="py-4 px-4 sm:px-6">
                  Final approval from the relevant authority, enabling the commencement of the Industry Accelerator Program in collaboration with ICAT.
                </td>
                <td className="py-4 px-4 sm:px-6 font-semibold">August 2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExecutionStagesSection;
