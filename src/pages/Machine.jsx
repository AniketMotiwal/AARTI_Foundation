import React from 'react';
import Cell from '/src/assets/cell.webp';

const Machine = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-900">
        Cell Sorting Machine & Spot-Welding Machine
      </h1>
      
      <img 
        src={Cell} 
        alt="Cell Sorting Machine" 
        className="w-auto  h-85 object-fit mb-6 rounded-lg"  
      />
      
      <div className="w-full bg-white rounded-lg overflow-hidden">
        <div className="p-6">
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            Cell sorting machine for selection of qualified cells from raw ones according to quantitative criteria (capacity, resistance, open circuit voltage, etc.) to assure reliability and safety of cells that are further assembled.
            <br />
            Low-cost cell sorting solution for different variants of cylindrical cells.
            <br />
            Enhance the efficiency of battery cell assembly by reducing the time and resources required for welding processes.
            <br />
            First Indian Battery cell sorting machine & Double-sided spot welding machine.
          </p>
        </div>
        
        <div className="bg-gray-50 border-t border-gray-200">
          <table className="w-full h-full divide-y divide-gray-200">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 text-gray-700 font-poppins">
                  Selection of qualified cells based on quantitative criteria.
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 text-gray-700 font-poppins">
                  Low-cost solution for different cylindrical cell variants.
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 text-gray-700 font-poppins">
                  Efficiency enhancement in battery cell assembly.
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 text-gray-700 font-poppins">
                  First Indian Battery cell sorting machine & Double-sided spot welding machine.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Machine;
