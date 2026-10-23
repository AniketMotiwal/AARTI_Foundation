import React from 'react';
import CpmVideoPlayer from './CpmVideoPlayer';

const cpmVideoUrl =
  'https://res.cloudinary.com/dmehcwvwi/video/upload/v1780916652/Copy_of_Copy_of_Copy_of_CPMVideo21-04-2026_hr6sbd.mp4';

const CpmVideo = () => {
  return (
    <section
      id="cpm-video"
      className="scroll-mt-48 bg-slate-50 py-8 sm:py-10 md:py-12 px-3 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-2">
            CPM at IIT Roorkee
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
            Centre for Precision Manufacturing
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Press play for the full overview — sharp quality, native video controls
          </p>
        </div>

        <CpmVideoPlayer
          src={cpmVideoUrl}
          title="CPM IIT Roorkee — overview video"
        />
      </div>
    </section>
  );
};

export default CpmVideo;
