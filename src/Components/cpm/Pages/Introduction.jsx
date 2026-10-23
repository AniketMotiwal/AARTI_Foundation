import React from 'react';
import { motion } from 'framer-motion';
import Header1 from '../Header1';
import Footer1 from '../Footer1';
import CpmOverview from '../CpmOverview';

const Introduction = () => {
  return (
    <>
      <Header1 />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-8 pb-24 min-h-screen bg-white"
      >
        <CpmOverview />
      </motion.div>
      <Footer1 />
    </>
  );
};

export default Introduction;
