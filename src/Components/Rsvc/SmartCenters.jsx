import React, { useState } from 'react';
import smarticon1 from '/src/assets/smarticon1.png';
import transfer from '/src/assets/transfer.png';
import costicon from '/src/assets/costicon.png';
import deployment from '/src/assets/deployment.png';
import impact from '/src/assets/impact.png';
import { FaTimes } from 'react-icons/fa';
import hubImage from '/src/assets/hub.png';
import spokeImage from '/src/assets/spoke.png';

const SmartCenters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };
  
  const openHubImage = () => {
    window.open(hubImage, '_blank');
  };

  const openSpokeImage = () => {
    window.open(spokeImage, '_blank');
  };

  return (
    <>
    <div className="smart-centers-container">
      <h1>SMART CENTERS – 5 PILLARS</h1>

      {/* Circles Section */}
      <div className="circles-container">
        <div
          className="circle green-circle"
          onClick={openHubImage}
        >
          <h4 className="circle-heading">Regional IIT Incubator</h4>
          <span>Hub</span>
        </div>

        <div
          className="circle yellow-circle"
          onClick={openSpokeImage}
        >
          <h4 className="circle-heading">Village Entrepreneurs</h4>
          <span>Spoke</span>
        </div>
      </div>

      <div className="pillars">
        <div className="pillar yellow-bg fire-animation" onClick={() => openModal(
          <ul>
            <li>Baseline study</li>
            <li>Community engagement</li>
            <li>Showcase of prototype</li>
            <li>Requirement gathering and Field Feedback</li>
          </ul>
        )}>
          <div className="icon">
            <img src={smarticon1} alt="Awareness Icon" />
          </div>
          <h3 className='text-black'>Awareness & Requirement</h3>
        </div>
        <div className="pillar green-bg water-animation" onClick={() => openModal(
          <ul>
            <li>Determine a SOP/ methodology for evaluation</li>
            <li>Evaluation of existing innovative technology design and scalability</li>
            <li>FUNNELING Based on requirement – plan /organize Tech transfer</li>
            <li>Cost relook</li>
            <li>Supply chain & Logistics</li>
            <li>Plan startup scale up/organize Tech transfer</li>
          </ul>
        )}>
          <div className="icon">
            <img src={transfer} alt="Planning Icon" />
          </div>
          <h3>Planning of Tech Transfer & Localized Manufacturing</h3>
        </div>
        <div className="pillar half-yellow-half-green fire-animation" onClick={() => openModal(
          <ul>
            <li>Based on the plan – execute local manufacturing</li>
            <li>Execute cost reduction</li>
          </ul>
        )}>
          <div className="icon">
            <img src={costicon} alt="Cost Reduction Icon" />
          </div>
          <h3>Cost Reduction & Local Manufacturing/Contract</h3>
        </div>
        <div className="pillar yellow-bg water-animation" onClick={() => openModal(
          <ul>
            <li>Deployment of technologies</li>
            <li>Support on application of Loans & Govt Schemes</li>
            <li>Training After Sales Service</li>
          </ul>
        )}>
          <div className="icon">
            <img src={deployment} alt="Deployment Icon" />
          </div>
          <h3>Deployment & Training</h3>
        </div>
        <div className="pillar green-bg fire-animation" onClick={() => openModal(
          <ul>
            <li>Impact study</li>
            <li>Support by Spoke for impact study</li>
          </ul>
        )}>
          <div className="icon">
            <img src={impact} alt="Impact Study Icon" />
          </div>
          <h3>Impact Study</h3>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <FaTimes className="close-icon" onClick={closeModal} />
            {modalContent}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default SmartCenters;
