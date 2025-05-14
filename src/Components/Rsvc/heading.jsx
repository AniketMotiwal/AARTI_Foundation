import React from "react";
import { Typed } from "react-typed";

const RSVCAnnouncement = () => {
  return (
    <div className="text-center text-lg font-semibold p-4">
      <Typed
        strings={[
          "The RuTAGe Smart Village Centre (RSVC) model, led by AARTI, an industry accelerator of IIT Roorkee, won the first prize at the NSE's Social Stock Exchange event in Varanasi on August 31, 2024.",
        ]}
        typeSpeed={40}
        backSpeed={20}
        loop={false}
      />
    </div>
  );
};

export default RSVCAnnouncement;
