import React from 'react';

const NewsEvents = () => {
  const news = [
    { title: 'Latest Achievement', description: 'Details about recent success.' },
    { title: 'Upcoming Event', description: 'Information about upcoming event.' },
  ];

  return (
    <section
      id="news"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Video Background */}
      <video
        src="https://iitr.ac.in/Careers/static/SRIC/sample.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-md">
          Latest News and Events
        </h1>

        {/* News Items */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
