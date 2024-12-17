import React from 'react';
const Hero = () => {
    return (
        <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-16">
            <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="https://iitr.ac.in/Careers/static/SRIC/sample.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="relative z-10 max-w-2xl px-5">
                <h1 className="text-3xl md:text-3xl lg:text-3xl font-extrabold leading-tight text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-md">
                    Pioneering Precision Manufacturing for a Smarter Future
                </h1>
                <p className="mt-4 text-lg md:text-xl lg:text-xl leading-relaxed font-semibold text-left text-white drop-shadow-md">
                    Driving global collaboration to push the boundaries of industry-relevant technologies and elevate workforce development.
                </p>

                <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        Explore Our Focus Areas
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;

