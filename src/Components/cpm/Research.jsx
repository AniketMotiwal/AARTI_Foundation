import React from 'react';
import AIimg from 'C:/Aaarti/my-project/src/assets/AIimg.webp';
import factory from 'C:/Aaarti/my-project/src/assets/factory.webp';
import emulation from 'C:/Aaarti/my-project/src/assets/emulation.webp';
import iot from 'C:/Aaarti/my-project/src/assets/iot.webp';
const Research = () => {
  const topics = [
    { title: 'AI-Based Manufacturing', description: 'Leveraging AI in manufacturing.', image: AIimg },
    { title: 'Smart Factory', description: 'Innovative smart factory initiatives.', image: factory },
    { title: 'Emulation Platform', description: 'Our state-of-the-art emulation platform.', image: emulation },
    { title: 'IoT & Cybersecurity', description: 'Ensuring cybersecurity in IoT systems.', image: iot },
  ];

  return (
    <section id="research" className="py-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Innovative Research & Global Collaboration</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 rounded shadow-md mx-4 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            <img src={topic.image} alt={topic.title} className="mb-4 w-full h-32 object-cover rounded" />
            <h3 className="text-2xl font-bold">{topic.title}</h3>
            <p className="mt-2 text-gray-600">{topic.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Research;
