import React, { useState } from 'react';
import { Development } from '../information/Devlopement';

const SupportDevelopment = () => {
  const [selectedProject, setSelectedProject] = useState(null);  // Initialize as null

  const openModal = (project) => {
    console.log('Selected project:', project); // Debug log
    setSelectedProject(project);
  };

  const closeModal = () => {
    console.log('Closing modal'); // Debug log
    setSelectedProject(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Support Development Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Development.map((project, index) => (
          <div
            key={index}
            className="relative max-w-sm p-6 bg-white border-4 border-transparent rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-500">
              {project.project_name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 hover:text-red-500">
              <strong>Submitted by:</strong> {project.submitted_by}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 hover:text-green-500">
              <strong>Submitted to:</strong> {project.submitted_to}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 hover:text-yellow-500">
              <strong>Total Cost:</strong> {project.project_costs.total_cost}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 hover:text-purple-500">
              <strong>MHI Contribution:</strong> {project.project_costs.contributions.MHI_Contribution}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 hover:text-pink-500">
              <strong>Industry Contribution:</strong> {project.project_costs.contributions.industry_contribution}
            </p>
            <button
              onClick={() => openModal(project)}  // Pass the project object
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg w-full shadow-lg overflow-y-auto max-h-full">
      <h2 className="text-xl font-bold mb-4">{selectedProject.project_name}</h2>
      <p><strong>Submitted by:</strong> {selectedProject.submitted_by}</p>
      <p><strong>Submitted to:</strong> {selectedProject.submitted_to}</p>
      <p><strong>Total Cost:</strong> {selectedProject.project_costs.total_cost}</p>
      <p><strong>MHI Contribution:</strong> {selectedProject.project_costs.contributions.MHI_Contribution}</p>
      <p><strong>Industry Contribution:</strong> {selectedProject.project_costs.contributions.industry_contribution}</p>
      <p><strong>Objectives:</strong> {selectedProject.objectives?.join(', ') || 'N/A'}</p>
      <p><strong>Expected Outcomes:</strong> {Object.values(selectedProject.expected_outcomes || {}).join(', ') || 'N/A'}</p>
      <p><strong>Key Partners:</strong> {selectedProject.key_partners?.join(', ') || 'N/A'}</p>
      <p><strong>Technology Development:</strong> {selectedProject.technology_development?.innovations?.join(', ') || 'N/A'}</p>
      <p><strong>Timeline:</strong> {selectedProject.timeline?.milestones?.join(', ') || 'N/A'}</p>
      <p><strong>Sustainability Goals:</strong> {selectedProject.sustainability_goals?.join(', ') || 'N/A'}</p>
      <p><strong>Execution Methodology:</strong> {selectedProject.execution_methodology?.project_phases?.join(', ') || 'N/A'}</p>
      <p><strong>Commercialization Strategy:</strong> {Object.values(selectedProject.commercialization_strategy || {}).join(', ') || 'N/A'}</p>
      <p><strong>Financial Projections:</strong> {Object.values(selectedProject.financial_projections || {}).join(', ') || 'N/A'}</p>
      <p><strong>Risk Management:</strong> {Object.values(selectedProject.risk_management || {}).join(', ') || 'N/A'}</p>
      <p><strong>Stakeholder Engagement:</strong> {Object.values(selectedProject.stakeholder_engagement || {}).join(', ') || 'N/A'}</p>

      <button
        onClick={closeModal}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Close
      </button>
    </div>
  </div>
)}


    </div>
  );
};

export default SupportDevelopment;
