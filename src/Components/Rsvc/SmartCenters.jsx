import React, { useState } from 'react';
import smarticon1 from '/src/assets/smarticon1.png';
import transfer from '/src/assets/transfer.png';
import costicon from '/src/assets/costicon.png';
import deployment from '/src/assets/deployment.png';
import impact from '/src/assets/impact.png';
import { FaTimes, FaCheckCircle, FaStar } from 'react-icons/fa';
import hubImage from '/src/assets/hub.png';
import spokeImage from '/src/assets/spoke.png';

const PILLARS = [
  {
    id: 'awareness',
    title: 'Awareness & Requirement',
    icon: smarticon1,
    iconAlt: 'Awareness Icon',
    cardClass:
      'bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 text-slate-900 ring-amber-200 hover:ring-amber-400',
    theme: {
      header: 'bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500',
      badge: 'bg-amber-500',
      itemBg: 'bg-gradient-to-r from-amber-50 to-yellow-50',
      itemBorder: 'border-amber-400',
      check: 'text-amber-500',
      glow: 'shadow-amber-200/60',
    },
    items: [
      'Baseline study',
      'Community engagement',
      'Showcase of prototype',
      'Requirement gathering and Field Feedback',
    ],
  },
  {
    id: 'planning',
    title: 'Planning of Tech Transfer & Localized Manufacturing',
    icon: transfer,
    iconAlt: 'Planning Icon',
    cardClass:
      'bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 text-white ring-emerald-200 hover:ring-emerald-400',
    theme: {
      header: 'bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600',
      badge: 'bg-emerald-600',
      itemBg: 'bg-gradient-to-r from-emerald-50 to-green-50',
      itemBorder: 'border-emerald-400',
      check: 'text-emerald-500',
      glow: 'shadow-emerald-200/60',
    },
    items: [
      'Determine a SOP/ methodology for evaluation',
      'Evaluation of existing innovative technology design and scalability',
      'FUNNELING Based on requirement – plan /organize Tech transfer',
      'Cost relook',
      'Supply chain & Logistics',
      'Plan startup scale up/organize Tech transfer',
    ],
  },
  {
    id: 'cost',
    title: 'Cost Reduction & Local Manufacturing/Contract',
    icon: costicon,
    iconAlt: 'Cost Reduction Icon',
    cardClass:
      'bg-gradient-to-br from-yellow-400 via-lime-400 to-green-500 text-slate-900 ring-lime-200 hover:ring-lime-400',
    theme: {
      header: 'bg-gradient-to-r from-yellow-500 via-lime-500 to-green-600',
      badge: 'bg-lime-600',
      itemBg: 'bg-gradient-to-r from-yellow-50 to-lime-50',
      itemBorder: 'border-lime-500',
      check: 'text-lime-600',
      glow: 'shadow-lime-200/60',
    },
    items: [
      'Based on the plan – execute local manufacturing',
      'Execute cost reduction',
    ],
  },
  {
    id: 'deployment',
    title: 'Deployment & Training',
    icon: deployment,
    iconAlt: 'Deployment Icon',
    cardClass:
      'bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-400 text-slate-900 ring-orange-200 hover:ring-orange-400',
    theme: {
      header: 'bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500',
      badge: 'bg-orange-500',
      itemBg: 'bg-gradient-to-r from-yellow-50 to-orange-50',
      itemBorder: 'border-orange-400',
      check: 'text-orange-500',
      glow: 'shadow-orange-200/60',
    },
    items: [
      'Deployment of technologies',
      'Support on application of Loans & Govt Schemes',
      'Training After Sales Service',
    ],
  },
  {
    id: 'impact',
    title: 'Impact Study',
    icon: impact,
    iconAlt: 'Impact Study Icon',
    cardClass:
      'bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 text-white ring-teal-200 hover:ring-teal-400',
    theme: {
      header: 'bg-gradient-to-r from-green-600 via-emerald-700 to-teal-700',
      badge: 'bg-teal-600',
      itemBg: 'bg-gradient-to-r from-green-50 to-teal-50',
      itemBorder: 'border-teal-500',
      check: 'text-teal-600',
      glow: 'shadow-teal-200/60',
    },
    items: [
      'Impact study',
      'Support by Spoke for impact study',
    ],
  },
];

const PillarModal = ({ pillar, onClose }) => {
  if (!pillar) return null;

  const { theme } = pillar;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={pillar.title}
    >
      <div
        className={`relative w-full max-w-lg max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl ${theme.glow} animate-[modalPop_0.35s_ease-out]`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`relative ${theme.header} px-5 py-5 sm:px-6 sm:py-6 text-white overflow-hidden`}>
          <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10 blur-sm" />
          <div className="absolute -bottom-8 left-1/3 w-36 h-36 rounded-full bg-white/10 blur-md" />

          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 transition-colors"
            aria-label="Close"
          >
            <FaTimes size={14} />
          </button>

          <div className="relative flex items-center gap-4 pr-10">
            <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center p-2">
              <img src={pillar.icon} alt={pillar.iconAlt} className="w-full h-full object-contain" />
            </div>
            <div className="min-w-0 text-left">
              <p className="flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/80 font-medium mb-1">
                <FaStar size={10} /> Smart Center Pillar
              </p>
              <h2 className="text-base sm:text-lg font-bold leading-snug">{pillar.title}</h2>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-slate-50 to-white px-4 py-5 sm:px-6 sm:py-6 overflow-y-auto max-h-[55vh]">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4 text-left">
            Key Activities
          </p>
          <ul className="space-y-3">
            {pillar.items.map((item, index) => (
              <li
                key={item}
                className={`flex items-start gap-3 p-3 sm:p-4 rounded-xl border-l-4 ${theme.itemBorder} ${theme.itemBg} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <span
                  className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-white text-xs font-bold ${theme.badge} shadow-md`}
                >
                  {index + 1}
                </span>
                <span className="flex-1 text-left text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  {item}
                </span>
                <FaCheckCircle className={`shrink-0 mt-0.5 ${theme.check} opacity-70`} size={16} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const SmartCenters = () => {
  const [activePillar, setActivePillar] = useState(null);

  const openHubImage = () => {
    window.open(hubImage, '_blank');
  };

  const openSpokeImage = () => {
    window.open(spokeImage, '_blank');
  };

  return (
    <section
      id="smart-pillars"
      className="smart-centers-container scroll-mt-28 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-gradient-to-b from-white via-emerald-50/30 to-amber-50/20"
    >
      <style>{`
        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.92) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes pillarGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.25); }
          50% { box-shadow: 0 0 36px rgba(245, 158, 11, 0.35); }
        }
      `}</style>

      <header className="text-center mb-10 sm:mb-12 md:mb-14">
        <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-full bg-gradient-to-r from-emerald-600 to-green-700 text-white shadow-md mb-5">
          RSVC Framework
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.75rem] font-extrabold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent drop-shadow-sm">
            SMART CENTERS
          </span>
          <span className="block sm:inline sm:ml-3 mt-1 sm:mt-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
            – 5 PILLARS
          </span>
        </h2>
        <div className="w-28 sm:w-36 h-1.5 mx-auto mt-5 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-amber-500 animate-pulse" />
        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
          Hub &amp; Spoke model powering rural technology, livelihoods &amp; community growth
        </p>
      </header>

      <div className="circles-container flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
        <div
          className="circle green-circle w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full flex flex-col items-center justify-center cursor-pointer transform hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-green-500 to-emerald-700 text-white shadow-xl ring-4 ring-green-200/50 hover:ring-green-300"
          onClick={openHubImage}
        >
          <h4 className="circle-heading text-xs sm:text-sm md:text-base font-bold mb-1 text-center px-1">Regional IIT Incubator</h4>
          <span className="text-lg sm:text-xl md:text-2xl font-bold">Hub</span>
        </div>

        <div
          className="circle yellow-circle w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full flex flex-col items-center justify-center cursor-pointer transform hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-yellow-300 to-amber-500 text-black shadow-xl ring-4 ring-amber-200/50 hover:ring-amber-300"
          onClick={openSpokeImage}
        >
          <h4 className="circle-heading text-xs sm:text-sm md:text-base font-bold mb-1 text-center px-1">Village Entrepreneurs</h4>
          <span className="text-lg sm:text-xl md:text-2xl font-bold">Spoke</span>
        </div>
      </div>

      <div className="pillars grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
        {PILLARS.map((pillar) => (
          <button
            key={pillar.id}
            type="button"
            className={`pillar-card group relative w-full p-3 sm:p-4 pt-10 sm:pt-12 rounded-2xl cursor-pointer transform hover:scale-[1.04] transition-all duration-300 shadow-lg hover:shadow-xl ring-2 ring-transparent ${pillar.cardClass}`}
            onClick={() => setActivePillar(pillar)}
          >
            <div className="pillar-icon absolute -top-5 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg ring-4 ring-white/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img src={pillar.icon} alt={pillar.iconAlt} className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
            </div>
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-center leading-snug mt-2">
              {pillar.title}
            </h3>
            <p className="mt-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity">
              Tap to explore →
            </p>
          </button>
        ))}
      </div>

      {activePillar && (
        <PillarModal pillar={activePillar} onClose={() => setActivePillar(null)} />
      )}
    </section>
  );
};

export default SmartCenters;
