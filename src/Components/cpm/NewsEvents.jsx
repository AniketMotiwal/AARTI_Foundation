import React from 'react';

const NewsEvents = () => {
  const news = [
    { title: '', description: '' },
    { title: '', description: '' },
  ];

  return (
    <section id="news" className="relative h-screen flex items-center justify-center text-white">
      {/* Video Background */}
      <video
        src="https://iitr.ac.in/Careers/static/SRIC/sample.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Content on top of the video */}
      <div className="relative z-10 max-w-2xl px-5">
        <h1 className="text-4xl font-extrabold leading-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-md">
          Latest News and Events
        </h1>
        <div className="mt-4">
          {news.map((item, index) => (
            <div key={index} className="bg-black bg-opacity-50 p-4 mb-4 rounded-md">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsEvents;
