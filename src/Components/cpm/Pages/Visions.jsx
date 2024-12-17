import React from 'react';
import { motion } from 'framer-motion';
import Header1 from '../Header1';
import Footer1 from '../Footer1';
const Vision = () => {
  return (
    <>
    <Header1 />
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 6 }} // Extended animation duration to 6 seconds
      className="flex flex-col md:flex-row items-center justify-center p-10 bg-white rounded-lg shadow-lg max-w-6xl mx-auto mt-[15rem] mb-6"
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600 text-center md:text-left">Vision</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The Centre for Precision Manufacturing (CPM) aspires to be a global leader in the field of 
          manufacturing by driving innovation in precision finishing, smart manufacturing, and sustainable 
          practices. CPM is dedicated to contributing to the internationalization of the Indian manufacturing 
          sector, aligning with global standards, and addressing the complex challenges of modern 
          manufacturing.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Through its advanced research and development initiatives, CPM aims to increase the 
          manufacturing sector's contribution to India's GDP, enhance local manufacturing capabilities, 
          and attract international collaborations and investments.
        </p>
      </div>
      
      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 6 }} // Extended animation duration to 6 seconds
        className="w-full md:w-1/2 p-4"
      >
        <p className="text-gray-700 leading-relaxed">
          By fostering a future-ready workforce and integrating cutting-edge technology, CPM will play a pivotal role in positioning India as a 
          global manufacturing powerhouse. The center’s focus on innovation and sustainability will ensure that India remains competitive on the world stage, while contributing to the country's economic growth.
        </p>
        <p className="text-gray-700 leading-relaxed mt-6">
          CPM also aims to build a strong international presence by collaborating with leading global manufacturing hubs, thereby promoting knowledge exchange and technological advancements. This vision will be realized through the center’s commitment to excellence in manufacturing processes and the continuous development of innovative solutions.
        </p>
      </motion.div>
    </motion.div>
    <Footer1 />
    </>
  );
};

export default Vision;
