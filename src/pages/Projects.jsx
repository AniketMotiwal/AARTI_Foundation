import React from "react";
import {
  rfpIntro,
  rfpLeftColumn,
  rfpRightColumn,
} from "../content/industrialRfpContent";

const activities = [
  {
    title: "DGCA approval for Remote Pilot Training Organization (RPTO)",
    note: "Regulatory approval granted by DGCA.",
  },
  {
    title:
      "Develop a low-cost, compact LED driver that meets the highest EMI/EMC compliance standards while operating at less than 1A current",
    fundedBy: "Hella India Pvt. Ltd.",
    note: "Prototype developed and patent filed by IIT Roorkee.",
  },
  {
    title: "Hydrogen Reduction of Mill Scale-Green Steel from Waste",
    fundedBy: "Hella India Pvt. Ltd.",
  },
  {
    title:
      "Design of IoT-Based Smoke, Temperature, and Carbon Monoxide Detection Unit",
    fundedBy: "NOTOFIRE Pvt. Ltd.",
  },
  {
    title:
      "Design and Development of Compact LED Driver: A Discrete Electronic Solution For Electric Vehicles",
    fundedBy: "Hella India Pvt. Ltd.",
  },
  {
    title:
      "International Conference on Transforming Waste Management: Circular Economy and Energy Sustainability 2.0",
    location: "IIT Roorkee",
  },
  {
    title:
      "International Symposium on Transforming Waste Management: Circular Economy & Energy Sustainability",
    date: "November 28-29, 2024",
    location: "IIT Roorkee",
  },
  {
    title: "500th Birth Anniversary of Rani Abakka Chowta — capacity building for young women (200+) in emerging technology",
    date: "17–20 March 2026",
    location: "IIT Roorkee",
  },
];

const formatRfpItem = (item) =>
  typeof item === "string" ? item : item.subItems ? `${item.text} ${item.subItems.join("; ")}` : item.text;

const industryRfpThemes = [
  ...rfpLeftColumn.map((b) => ({
    industry: b.company,
    problem: b.items.map(formatRfpItem).join(" "),
  })),
  ...rfpRightColumn.map((b) => ({
    industry: b.company,
    problem: b.items.map(formatRfpItem).join(" "),
  })),
];

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10 pt-20">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Recent Activities</h2>
        <p className="text-gray-600 mb-4 text-sm">
          Industrial R&D and outreach supported through SRIC-led Request for Proposals circulated to the IIT Roorkee community.
        </p>
        <ul className="space-y-4">
          {activities.map((activity, index) => (
            <li
              key={index}
              className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all shadow-md"
            >
              <h3 className="text-lg font-semibold text-blue-700">{activity.title}</h3>
              {activity.fundedBy && (
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Funded by:</strong> {activity.fundedBy}
                </p>
              )}
              {activity.note && (
                <p className="text-sm text-gray-600 mt-1">{activity.note}</p>
              )}
              {activity.date && (
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Date:</strong> {activity.date}
                </p>
              )}
              {activity.location && (
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Location:</strong> {activity.location}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Industry Problem Statements (RFP)
        </h2>
        <p className="text-gray-600 mb-4 text-sm">{rfpIntro}</p>
        <ul className="space-y-4">
          {industryRfpThemes.map((item, index) => (
            <li key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-indigo-700">{item.industry}</h3>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">{item.problem}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-center">
          <a href="/#industrial-rfp" className="text-indigo-700 font-semibold hover:underline">
            View formatted RFP overview on home
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
