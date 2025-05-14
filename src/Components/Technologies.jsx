import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Import your images here
import Picture2 from '/src/assets/Picture2.webp';
import motor from '/src/assets/motor.webp';
import yali from '/src/assets/yali.webp';
import cell from '/src/assets/cell.webp';

const Technologies = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <Link
            to="/mob"
            className="relative w-80 h-80 bg-white p-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden group cursor-pointer"
          >
            <img
              src={yali}
              alt="Accessible Mobility Vehicle"
              className="w-64 h-64 object-fit" // Adjusted image size
            />
            <div className="absolute inset-0 bg-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-black p-4 group-hover:text-black group-hover:font-bold transition-colors duration-300">
                <h3 className="text-lg font-bold mb-2">Accessible Mobility Vehicle</h3>
                <p className="text-sm">
                  Developed by <strong>Yali Mobility</strong>, this vehicle allows persons with locomotor disabilities to drive directly from their wheelchair.
                </p>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            to="/magnetic-motor"
            className="relative w-80 h-80 bg-white p-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden group cursor-pointer"
          >
            <img
              src={Picture2}
              alt="Soft Magnetic Composite Motor"
              className="w-64 h-56 object-fit" // Adjusted image size
            />
            <div className="absolute inset-0 bg-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-black p-4 group-hover:text-black group-hover:font-bold transition-colors duration-300">
                <h3 className="text-lg font-bold mb-2">Axial Flux Motor and Controller
                </h3>
                <p className="text-sm">
                  Developed by <strong>Bodycast Innovators Pvt. Ltd.</strong>, this axial flux motor is a leader in efficiency and power density.
                </p>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            to="/modular-platform"
            className="relative w-80 h-80 bg-white p-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden group cursor-pointer"
          >
            <img
              src={motor}
              alt="Modular E2W Platform" 
              className="w-64 h-56 object-fit" // Adjusted image size
            />
            <div className="absolute inset-0 bg-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-black p-4 group-hover:text-black group-hover:font-bold transition-colors duration-300">
                <h3 className="text-lg font-bold mb-2">Modular E2W Platform</h3>
                <p className="text-sm">
                  Developed by <strong>Creatara Mobility Pvt. Ltd.</strong>, this platform supports a modular approach to electric two-wheelers.
                </p>
              </div>
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            to="/Battery Pack Assembly Equipment"
            className="relative w-80 h-80 bg-white p-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden group cursor-pointer"
          >
            <img
              src={cell}
              alt="Battery Pack Assembly Equipment"
              className="w-64 h-56 object-fit" // Adjusted image size
            />
            <div className="absolute inset-0 bg-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-black p-4 group-hover:text-black group-hover:font-bold transition-colors duration-300">
                <h3 className="text-lg font-bold mb-2">Battery Pack Assembly Equipment</h3>
                <p className="text-sm">
                  Developed by <strong>Maestrotech Systems Pvt. Ltd.</strong>, this equipment enhances the assembly process of battery packs.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
