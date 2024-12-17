import React from 'react';
import RNavbar from '../RNavbar';
import Footer2 from '../Footer2';

const Entities = () => {
  return (
    <>
      <RNavbar />
      <div className="w-full max-w-5xl mx-auto px-8 py-12 min-h-screen flex flex-col"> {/* Adjusted padding and height */}
        <header className="bg-[#b5a334] text-white text-center py-6">
          <h1 className="text-4xl font-bold">Technologies from Entities Registered on Manthan</h1> {/* Increased font size */}
        </header>
        <main className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"> {/* Adjusted grid layout */}
          <section>
            <h2 className="text-2xl font-bold text-[#f47c20]">Agriculture & Water</h2> {/* Increased font size */}
            <ul className="list-disc pl-6 mt-4 space-y-2"> {/* Adjusted padding and spacing */}
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Satellite based Crop Monitoring</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Satellite based Soil analysis</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">IoT Based Soil Moisture at Root Zone/pH/EC</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Central Pivot System</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Decision Support System for Irrigation</a></li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#f47c20]">Education</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Integrated Agri Technology Course</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Good Agriculture Practice Course</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Agri Business Management Course</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Agri Entrepreneur Course</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Agri Technology Field Representative Course</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Amra Raja Rural Skill Development</a></li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#f47c20]">Livelihood</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">BIOFLOC Fisheries</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Cattle Health Tracking System</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Handloom Technologies</a></li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#f47c20]">Advisory Services</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Crop Yield Prediction</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Livestock Health</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Fertigation Schedule</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Medicine Schedule</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Basel Dose</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Crop Selection/Crop Rotation</a></li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#f47c20]">Fintech</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Financial Credit Access Enabler Systems</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 visited:text-blue-800">Blockchain Backed Solutions in Agriculture Waste Management Sustainability</a></li>
            </ul>
          </section>
        </main>
      </div>
      <div className="mt-12">
        <Footer2 />
      </div>
    </>
  );
};

export default Entities;
