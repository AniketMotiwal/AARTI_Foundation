import React from "react";

const activities = [
  {
    title: "Hydrogen Reduction of Mill Scale-Green Steel from Waste",
    fundedBy: "Hella India Pvt. Ltd.",
  },
  {
    title:
      "Develop a low-cost, compact LED driver that meets the highest EMI/EMC compliance standards while operating at less than 1A current",
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
      "International Symposium on Transforming Waste Management: Circular Economy & Energy Sustainability",
    date: "November 28-29, 2024",
    location: "IIT Roorkee",
  },
];

const RecentActivities = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activities</h2>
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all shadow-md"
          >
            <h3 className="text-lg font-semibold text-blue-700">
              {activity.title}
            </h3>
            {activity.fundedBy && (
              <p className="text-sm text-gray-600">
                <strong>Funded by:</strong> {activity.fundedBy}
              </p>
            )}
            {activity.date && (
              <p className="text-sm text-gray-600">
                <strong>Date:</strong> {activity.date}
              </p>
            )}
            {activity.location && (
              <p className="text-sm text-gray-600">
                <strong>Location:</strong> {activity.location}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;