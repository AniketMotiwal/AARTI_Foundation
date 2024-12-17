import React from 'react';
import { motion } from 'framer-motion';
import Header1 from '../Header1';
import Footer1 from '../Footer1';

const Facilities = () => {
  return (
    <>
      <Header1 />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative p-8 bg-white rounded-lg shadow-lg max-w-screen-xl mx-auto my-16 overflow-hidden mt-[11rem]"
      >
        {/* Bubble Elements */}
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="bubble"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">Facilities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AI-Based Manufacturing Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-xl transition ease-in-out duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">AI-Based Manufacturing</h3>
            <p className="text-gray-700 leading-relaxed">
              Integrates advanced AI technologies for predictive maintenance, quality control, and supply chain optimization. These capabilities allow for proactive decision-making and efficient production processes.
            </p>
          </motion.div>

          {/* Smart Factory Emulation Platform Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-xl transition ease-in-out duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">Smart Factory Emulation Platform</h3>
            <p className="text-gray-700 leading-relaxed">
              This platform focuses on IoT integration, data generation, AI/ML in manufacturing, and cybersecurity. It provides a sandbox environment for research and development in modern manufacturing processes, enhancing adaptability and efficiency.
            </p>
          </motion.div>

          {/* Advanced CNC Machinery Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.4 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-xl transition ease-in-out duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">Advanced CNC Machinery</h3>
            <p className="text-gray-700 leading-relaxed">
              The center is equipped with precision CNC vertical machining centers, grinding machines, and other high-tech equipment to support precision finishing techniques, ensuring the highest standards in manufacturing.
            </p>
          </motion.div>

          {/* Energy Efficiency and Sustainability Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.6 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-xl transition ease-in-out duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">Energy Efficiency and Sustainability</h3>
            <p className="text-gray-700 leading-relaxed">
              Facilities designed to optimize energy consumption and minimize environmental impact. This commitment to sustainability ensures that manufacturing processes are both efficient and environmentally responsible.
            </p>
          </motion.div>

          {/* Robotics and Automation Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-xl transition ease-in-out duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">Robotics and Automation</h3>
            <p className="text-gray-700 leading-relaxed">
              Integrating AI-driven robots to perform complex tasks and collaborate with human workers, boosting productivity and ensuring precision in manufacturing processes.
            </p>
          </motion.div>

          {/* Generative Design Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-xl transition ease-in-out duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">Generative Design</h3>
            <p className="text-gray-700 leading-relaxed">
              Leveraging AI to rapidly generate design alternatives, this facility accelerates the research and development process, ensuring innovative solutions are developed swiftly.
            </p>
          </motion.div>

          {/* Supply Chain Optimization Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1.2 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-xl transition ease-in-out duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">Supply Chain Optimization</h3>
            <p className="text-gray-700 leading-relaxed">
              Employing AI to enhance supply chain management for greater efficiency and responsiveness, ensuring that all aspects of the manufacturing process are streamlined.
            </p>
          </motion.div>

          {/* Cybersecurity in Manufacturing Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1.4 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-xl transition ease-in-out duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">Cybersecurity in Manufacturing</h3>
            <p className="text-gray-700 leading-relaxed">
              Recognizing the importance of securing digital infrastructure, this facility incorporates robust cybersecurity measures to protect against cyber threats and ensure the integrity of manufacturing operations.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <Footer1 />
    </>
  );
};

export default Facilities;
