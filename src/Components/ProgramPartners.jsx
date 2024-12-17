import React from 'react';
import startup from "../assets/startup.webp";
import Partners2 from "../assets/Hella.png";
import partners3 from "../assets/Akon.png";
import partners6 from "../assets/partners6.webp";
import partners8 from "../assets/partners8.webp";
import mob from "../assets/mob.png"

const ProgramPartners = () => {
    const partners = [
        { name: '', img: partners3 },
        { name: '', img: partners8 },
        { name: '', img: partners6 },
        { name: '', img: Partners2 },
        { name: '', img: startup },
        { name: 'ICICI Foundation' },
        { name: 'Bodycast Innovators' },
        { name: 'Creatara Mobility' },
        { name: '', img:mob},
        { name: 'Maestrotech Systems' },
    ];

    return (
        <div className="py-8">
            <h2 className="text-center text-3xl font-bold mb-6">Partners</h2>
            <div className="max-w-screen-xxl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {partners.map((partner, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 rounded-lg border border-black shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 text-center"
                    >
                        {partner.img ? (
                            <img src={partner.img} alt={partner.name} className="max-h-20 object-contain mb-2" />
                        ) : (
                            <div>
                            
                            </div>
                        )}
                        <span className="font-bold">{partner.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgramPartners;
