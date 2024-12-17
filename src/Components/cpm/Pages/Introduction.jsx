import React from 'react';
import { motion } from 'framer-motion';
import Header1 from '../Header1';
import Footer1 from '../Footer1';

const Introduction = () => {
  return (
    <>
      <Header1 />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-8 bg-white rounded-lg shadow-lg mx-auto max-w-screen-lg pt-[14rem] pb-24 min-h-screen"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          The Centre for Precision Manufacturing (CPM) at IIT Roorkee is envisioned as a cutting-edge research hub, with the goal of positioning India as a global leader in precision manufacturing. It is established under the AARTI Foundation, in collaboration with the University of Akron, USA.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mt-4">
          <strong>Key Points:</strong>
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed text-lg mt-4 space-y-2">
          <li>
            <strong>Significance of Precision Manufacturing:</strong> Precision manufacturing is critical for sectors such as aerospace, defense, automotive, and healthcare. These industries require high-precision components that are essential for modern manufacturing processes.
          </li>
          <li>
            <strong>National Importance:</strong> The Indian government’s commitment to industrial automation and infrastructural development has led to a growing demand for precision tools. Establishing CPM is a strategic move aligned with the National Manufacturing Policy, which aims to increase the manufacturing sector's GDP contribution to 25% by 2025.
          </li>
          <li>
            <strong>Support for National Initiatives:</strong> CPM supports the "Make in India" initiative by improving the ease of doing business, providing investment incentives, and enhancing infrastructure. This positions India as an attractive destination for international clients seeking reliable and cost-effective manufacturing solutions.
          </li>
          <li>
            <strong>Research and Innovation:</strong> CPM aims to drive innovation by providing access to state-of-the-art machinery and fostering a culture of continuous improvement and integration. It will focus on addressing industry challenges through solutions incorporating machine vision, enabling greater precision, closer process control, and improved quality control.
          </li>
          <li>
            <strong>Workforce Development:</strong> The center will play a crucial role in upskilling and reskilling the workforce, creating a pool of highly skilled professionals capable of navigating the complexities of precision manufacturing.
          </li>
          <li>
            <strong>Global Positioning:</strong> Through the establishment of CPM, IIT Roorkee seeks to contribute to positioning India as a hub for high-quality manufacturing, attracting investments and partnerships that can propel the nation toward becoming a leader in the global manufacturing landscape.
          </li>
          <li>
            <strong>Contribution to Sustainable Development Goals (SDGs):</strong> CPM contributes to:
            <ul className="list-disc list-inside pl-6">
              <li>SDG 9: Industry, Innovation, and Infrastructure</li>
              <li>SDG 4: Quality Education</li>
              <li>SDG 8: Decent Work and Economic Growth</li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed text-lg mt-4">
          This summary encapsulates the mission, importance, and potential impact of the CPM at IIT Roorkee, reflecting its strategic alignment with national goals and its role in advancing precision manufacturing in India.
        </p>
      </motion.div>
      <Footer1 />
    </>
  );
};

export default Introduction;
