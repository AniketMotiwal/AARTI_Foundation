
import React from 'react';
import { motion } from 'framer-motion';
import DirectorSir from '../assets/DirectorSir.webp';
import akdewedi from '../assets/akdewedi.webp';
import up from '../assets/up.webp';
import Gk from '../assets/Gk.webp';
import Sir from '../assets/dalera.webp'
import Ak from '../assets/ankit.webp'



// Directors and Programmes team data with designation and link to external websites
const directors = [
  { name: 'Prof. K. K. Pant', designation: 'Chairperson', img: DirectorSir, link: 'https://www.iitr.ac.in/Institute/Director%20IIT%20Roorkee.html', central: true },
  { name: 'Prof. U. P. Singh', designation: 'Deputy Director, IIT Roorkee', img: up, link: 'https://iitr.ac.in/Departments/Chemistry%20Department/People/Faculty/U.P.%20Singh.html' },
  { name: 'Prof. Akshay Dvivedi', designation: 'Managing Director ', img: akdewedi, link: 'https://iitr.ac.in/Departments/Mechanical%20and%20Industrial%20Engineering%20Department/People/Faculty/100549.html' },
  { name: 'Mr. G. K. Rastogi', designation: 'Finance Officer, IIT Roorkee', img: Gk, link: 'https://iitr.ac.in/Administration/Institute%20Central%20Administration.html' },
  { name: 'Mr. Ankit Trivedi', designation: 'Lead-ICAT Incubation and Acceleration Centre', img: Ak, link: 'https://example.com/trivedi' },
  { name: 'Mr. Saurabh Dalela', designation: 'Director ICAT', img: Sir, link: 'https://in.linkedin.com/in/saurabhdalela' },

];

const team = [
  { name: 'CEO', designation: 'Chief Executive Officer', img: 'path_to_image_team_1', link: 'https://example.com/ceo' },
  { name: 'Manager (Outreach & Societal Impact)', designation: 'Outreach Manager', img: 'path_to_image_team_2', link: 'https://example.com/outreach' },
  { name: 'Manager (Admin & Finance)', designation: 'Finance Manager', img: 'path_to_image_team_3', link: 'https://example.com/finance' },
  { name: 'Manager (Incubation)', designation: 'Incubation Manager', img: 'path_to_image_team_4', link: 'https://example.com/incubation' },
  { name: 'Manager (Skill Development)', designation: 'Skill Manager', img: 'path_to_image_team_5', link: 'https://example.com/skill' },
  { name: 'Project Associate (Operations & Outreach)', designation: 'Operations Associate', img: 'path_to_image_team_6', link: 'https://example.com/operations' },
];

// Circle component for both directors and team members with clickable link
const Circle = ({ name, img, designation, link, central, darkMode}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        className={`relative ${central ? 'w-48 h-48' : 'w-40 h-40'} rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 m-4 p-3 flex items-center justify-center ${
          darkMode ? 'border-blue-500 bg-blue-900' : 'border-gray-300 bg-gray-200'
        }`}
        whileHover={{ scale: 1.2, rotateY: 10 }}
        whileTap={{ scale: 0.9 }}
        style={{ boxShadow: darkMode ? '0 0 20px rgba(0, 255, 255, 0.5)' : '0 0 20px rgba(0, 0, 255, 0.5)' }} // Blue highlight glow effect
      >
        {img ? (
          <img
            src={img}
            alt="#"
            className="absolute inset-0 w-full h-34 object-cover" // Ensure image covers the entire circle
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-center text-sm font-bold text-white bg-black bg-opacity-50">
            <span>{name}</span>
          </div>
        )}
        {/* Hover overlay showing name and designation */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white font-bold text-center text-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
          <span>{name}</span>
          <span className="text-xs mt-1">{designation}</span>
        </div>
      </motion.div>
    </a>
  );
};

const Team = ({ darkMode }) => {
  return (
    <div className={`relative min-h-screen p-8 ${darkMode ? 'bg-black' : 'bg-white'} transition-colors duration-500`}>
    <section className="relative flex flex-col items-center justify-center mb-16">
      <h2 className={`text-4xl font-bold mb-8 text-center ${darkMode ? 'text-blue-300' : 'text-black'}`}>Board of Directors</h2>
      <div className="mb-12 flex justify-center">
        {directors.filter(d => d.central).map((director, index) => (
          <Circle key={index} name={director.name} designation={director.designation} img={director.img} link={director.link} central darkMode={darkMode} />
        ))}
      </div>
      <div className="flex justify-center gap-8 flex-wrap">
        {directors.filter(d => !d.central).map((director, index) => (
          <Circle key={index} name={director.name} designation={director.designation} img={director.img} link={director.link} darkMode={darkMode} />
        ))}
      </div>
    </section>
    {/* <section className="relative flex flex-col items-center justify-center mb-16">
      <h2 className={`text-4xl font-bold mb-8 text-center ${darkMode ? 'text-blue-300' : 'text-black'}`}>Programmes Teams</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {team.map((member, index) => (
          <Circle key={index} name={member.name} designation={member.designation} img={member.img} link={member.link} darkMode={darkMode} />
        ))}
      </div>
    </section> */}
  </div>
  );
};

export default Team;
