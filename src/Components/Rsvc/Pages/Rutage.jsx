import React from 'react';
import RNavbar from '../RNavbar';
import Footer2 from '../Footer2';

const Rutage = () => {
  return (
    <>
      <RNavbar />
      <div className="w-full max-w-5xl mx-auto px-8 py-12 min-h-screen flex flex-col"> {/* Increased padding and height */}
        <header className="bg-[#b5a334] text-white text-center py-6">
          <h1 className="text-4xl font-bold">RuTAGe (Technologies)</h1> {/* Increased font size */}
        </header>
        <main className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-8 mt-8"> {/* Increased gap */}
          <section>
            <h2 className="text-2xl font-bold text-[#f47c20]">Livelihood</h2> {/* Increased font size */}
            <ul className="list-disc pl-6 mt-4 space-y-2"> {/* Increased padding and spacing */}
              <li><a href="https://youtu.be/wgsXi9yqrq0?si=XN1Ktmj0cx_RUaZI" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Bageshwari wool Charkha</a></li>
              <li><a href="https://youtu.be/i2p_9FTbuC8?si=n9u2G0Q5Be_9CtMA" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Rural Pottery Kiln</a></li>
              <li><a href="https://youtu.be/yU_-T2_wQbA?si=IPtTDJF3DdOdZFKI" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Bangle making furnace</a></li>
              <li><a href="https://youtu.be/wez_I6YgS2U?si=WwwoRTGMELcMSXHI" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Hank to bobbin winding machine</a></li>
              <li><a href="https://youtu.be/OfB9FTjfpcU?si=YMWAjzZb9ltFM1wv" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Tulsi Mala Bead Making Device</a></li>
              <li><a href="https://youtu.be/gr84mjbungc?si=JwJnSYgKfAY0SCeK" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Sheep-hair Shearing Device</a></li>
              <li><a href="https://youtu.be/qN3UUfok3Hk?si=U2GUTNxEJaYQFYwS" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Motorized potter's wheel</a></li>
              <li><a href="https://youtu.be/OfB9FTjfpcU?si=n-16TVxyQsk1LliP" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Tulsi mala beading dev</a></li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#f47c20]">Agriculture</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><a href="https://youtu.be/O42Qz6tBpc4?si=SvLLM_LU8ypVNdA7" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">LCB Fertilizers</a></li>
              <li><a href="https://youtu.be/ZAFSaOQ0ZPE?si=Cx2KX1b82uS2zKx9" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Puffed Rice making machine</a></li>
              <li><a href="https://youtu.be/qNg636muH6U?si=DR_I2ZLK3mRSagOJ" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Pico hydro cold storage</a></li>
              <li><a href="https://youtu.be/QyrcuLUI_70?si=zC0oSP9wBqOMIg_Q" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Sectional warping machine</a></li>
              <li><a href="https://youtu.be/yfXDVxV57nY?si=KrBuz6zXIG6rIDTw" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Mango Decorticator</a></li>
              <li><a href="https://youtu.be/qNg636muH6U?si=0iTuA2TOZevsYDz5" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Portable Cow Lift</a></li>
              <li><a href="https://youtu.be/NlCK-wy2-54?si=a46bK5_drZHQn9Pt" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Mobile Subjee Cooler</a></li>
              <li><a href="https://youtu.be/yfXDVxV57nY?si=KrBuz6zXIG6rIDTw" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Market Mirchi</a></li>
              <li><a href="https://youtu.be/0ZMNaZMMC5o?si=qzE5vWSbg3bzqDS_" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Oil extracting m/c cold press</a></li>
              <li><a href="https://youtu.be/OzZiz29U1KQ?si=dEPFZs50pF0bbH1w" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Sabji Kothi</a></li>
              <li><a href="https://youtu.be/jMvQYgpm2AQ?si=tCxUxUPWP2OdoS02" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">AI -Agri-Supply Chain</a></li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#f47c20]">Retail</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><a href="https://youtu.be/A1bY014oDD4?si=VoRWS9wK3I6jRAfv" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Air-cooled Vegetable vending cart</a></li>
              <li><a href="https://youtu.be/1sh56NQIvgM?si=wNBMaFzIn3Fljw2L" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Pirn winding machine</a></li>
              <li><a href="https://youtu.be/18qRRM4Orbg?si=KD1tQOJ1ftN6YAZR" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Mechanized roller</a></li>
              <li><a href="https://youtu.be/1doP2CGhG-U?si=UD8HdPDwiq4E7U3K" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Sabai grass rope making m/c</a></li>
              <li><a href="https://youtu.be/wgsXi9yqrq0?si=1ckY68Tvwsd_3LQX" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Variable speed motorized wool charkha</a></li>
              <li><a href="https://youtu.be/ZBG_X2KIrhA?si=6VW2staInqYwfTiP" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Bidrware metal coloring technique</a></li>
              <li><a href="https://youtu.be/jKSvGetLXrU?si=KTcCBrI8NfU4VcTk" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Textile Recycling</a></li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#f47c20]">Water</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><a href="https://youtu.be/hp06nYQe4m8?si=s-m5lPp2f9Svi2oq" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Surf water storage tank</a></li>
              <li><a href="https://youtu.be/A0uN0XfbLqk?si=_H2KkNBx-VpP2kFC" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Silt-filter water treatment plant</a></li>
              <li><a href="https://youtu.be/Oi8ddgMxqKc?si=OfRscdmmwD8rOd6y" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Rainwater harvesting system</a></li>
              <li><a href="https://youtu.be/F5Q4HfRAI9U?si=We3MbNRivQ4zUEAp" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Septic tank</a></li>
              <li><a href="https://youtu.be/YX2tqW3tiKc?si=X6BWW8eFOSXsm7s6" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Rainwater recharge system</a></li>
              <li><a href="https://youtu.be/0oxQ2Q1UfgQ?si=XJizK61lq9GV7vxb" target="_blank" rel="noopener noreferrer" className="text-blue-600 visited:text-blue-800">Water purification plant</a></li>
            </ul>
          </section>
        </main>
      </div>
      <Footer2 />
    </>
  );
};

export default Rutage;
