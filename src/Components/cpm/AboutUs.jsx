import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-600 text-white p-8 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold mb-4 text-center">About the Centre for Precision Manufacturing (CPM)</h2>
    <p className="text-lg leading-relaxed mb-4">The Centre for Precision Manufacturing (CPM) at IIT Roorkee is a cutting-edge research hub aimed at positioning India as a global leader in manufacturing...</p>
    <ul className="list-disc list-inside space-y-2">
        <li>Research Hub: Developing cutting-edge research in precision manufacturing.</li>
        <li>Industry Collaboration: Partnering with industry to ensure technology transfer and practical applications.</li>
        <li>Talent Development: Generating a skilled workforce through advanced training and education.</li>
        <li>Sustainability: Integrating sustainable practices into all aspects of manufacturing.</li>
    </ul>
    <p className="text-lg leading-relaxed mt-4">CPM boasts state-of-the-art facilities, including AI-based manufacturing tools, smart factory emulation platforms, and advanced CNC machinery...</p>
</div>

  );
}

export default AboutUs;
