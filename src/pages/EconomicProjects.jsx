import React from 'react';
import { Economicgrowth } from '../information/EconomicGrowth'; // Adjust the path as necessary

const EconomicProjects = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Economic Growth Details</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-4 border-b border-gray-300 text-left">SR NO</th>
              <th className="py-3 px-4 border-b border-gray-300 text-left">Project Name</th>
              <th className="py-3 px-4 border-b border-gray-300 text-left">Submitted By</th>
              <th className="py-3 px-4 border-b border-gray-300 text-left">Submitted To</th>
              <th className="py-3 px-4 border-b border-gray-300 text-left">Total Cost</th>
              <th className="py-3 px-4 border-b border-gray-300 text-left">Objectives</th>
              <th className="py-3 px-4 border-b border-gray-300 text-left">Expected Benefits</th>
            </tr>
          </thead>
          <tbody>
            {Economicgrowth.map((item, index) => (
              <tr key={index} className="hover:bg-blue-50 transition duration-300 ease-in-out">
                <td className="py-3 px-4 border-b border-gray-200 text-left">{index + 1}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-left break-words">{item.project_name}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-left break-words">{item.submitted_by}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-left break-words">{item.submitted_to}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-left">{item.project_costs.total_cost}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-left">
                  <ul className="list-none list-inside space-y-1">
                    {item.objectives.map((objective, i) => (
                      <li key={i}>{objective}</li>
                    ))}
                  </ul>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 text-left">
                  <div className="space-y-1">
                    {item.expected_benefits.import_substitution && (
                      <div>Import Substitution: {item.expected_benefits.import_substitution}</div>
                    )}
                    {item.expected_benefits.CO2_emission_reduction && (
                      <div>CO2 Emission Reduction: {item.expected_benefits.CO2_emission_reduction}</div>
                    )}
                    {item.expected_benefits.employment_generation && (
                      <div>Employment Generation: {item.expected_benefits.employment_generation}</div>
                    )}
                    {item.expected_benefits.environmental_impact && (
                      <div>Environmental Impact: {item.expected_benefits.environmental_impact}</div>
                    )}
                    {item.expected_benefits.industry_impact && (
                      <div>Industry Impact: {item.expected_benefits.industry_impact}</div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EconomicProjects;
