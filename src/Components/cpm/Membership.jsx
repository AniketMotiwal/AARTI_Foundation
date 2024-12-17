import React from 'react';
import member from 'C:/Aaarti/my-project/src/assets/member.webp';
import partnership from 'C:/Aaarti/my-project/src/assets/partnership.webp';
import exclusive from 'C:/Aaarti/my-project/src/assets/exclusive.webp';

const Membership = () => {
  const models = [
    { title: 'Membership in Lieu of Funding', description: 'Benefit from strategic influence.', image: member },
    { title: 'Membership for Facility Usage', description: 'Access to cutting-edge resources.', image: partnership },
    { title: 'Exclusive Partnership Model', description: 'Exclusive research benefits.', image: exclusive },
  ];

  return (
    <section id="membership" className="py-20 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">Partner with Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {models.map((model, index) => (
          <div 
            key={index} 
            className="p-6 mx-4 bg-gradient-to-r from-blue-500 to-purple-800 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-slide-up"
          >
            <img 
              src={model.image} 
              alt={model.title} 
              className="mb-4 w-full h-58 object-cover rounded" 
            />
            <h3 className="text-2xl font-bold text-white">{model.title}</h3>
            <p className="mt-2 text-white">{model.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Membership;
