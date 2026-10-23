import React from 'react';
import { motion } from 'framer-motion';
import Header1 from '../Header1';
import Footer1 from '../Footer1';
import AIimg from '../../../assets/AIimg.webp';
import emulation from '../../../assets/emulation.webp';
import factory from '../../../assets/factory.webp';
import evLab from '../../../assets/EV laboratory pics (2).jpg';
import iot from '../../../assets/iot.webp';
import evLab2 from '../../../assets/EV laboratory pics (4).jpg';
import smart from '../../../assets/smart.webp';

const facilities = [
  {
    title: 'AI-Based Manufacturing',
    image: AIimg,
    text: 'Integrates advanced AI for predictive maintenance, quality control, and supply chain optimisation—enabling proactive decisions on the shop floor.',
  },
  {
    title: 'Smart Factory Emulation Platform',
    image: emulation,
    text: 'MHI-funded platform for IoT, data generation, AI/ML in manufacturing, and cybersecurity—a sandbox for modern manufacturing R&D and education.',
  },
  {
    title: 'Advanced CNC Machinery',
    image: evLab,
    text: 'Precision CNC vertical machining centres, grinding, and high-tech equipment for precision finishing and industry-grade components.',
  },
  {
    title: 'Energy Efficiency and Sustainability',
    image: smart,
    text: 'Facilities designed to optimise energy use and minimise environmental impact across manufacturing processes.',
  },
  {
    title: 'Robotics and Automation',
    image: factory,
    text: 'AI-driven automation and human–machine collaboration for complex, high-precision manufacturing tasks.',
  },
  {
    title: 'Generative Design',
    image: evLab2,
    text: 'AI-assisted design exploration to accelerate R&D and innovative product development.',
  },
  {
    title: 'Supply Chain Optimisation',
    image: iot,
    text: 'Data-driven supply chain intelligence for responsive, efficient production networks.',
  },
  {
    title: 'Cybersecurity in Manufacturing',
    image: emulation,
    text: 'Protection of OT/IT systems and digital infrastructure on connected production lines.',
  },
];

const Facilities = () => {
  return (
    <>
      <Header1 />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-8 pb-24 min-h-screen"
      >
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">Infrastructure</p>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">Facilities</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            State-of-the-art laboratories supporting precision manufacturing, smart factory research, and
            industry collaboration at IIT Roorkee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md hover:shadow-xl transition-shadow"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-700">{item.title}</h3>
                <p className="text-slate-600 mt-3 leading-relaxed text-sm">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="text-center mt-12">
          <a href="/cpm#ifactory" className="text-indigo-600 font-semibold hover:underline">
            View iFactory — Smart Factory Emulation Platform →
          </a>
        </p>
      </motion.div>
      <Footer1 />
    </>
  );
};

export default Facilities;
