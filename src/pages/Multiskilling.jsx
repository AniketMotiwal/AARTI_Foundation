import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  FiZap,
  FiUsers,
  FiCpu,
  FiTrendingUp,
  FiBookOpen,
  FiBriefcase,
  FiGlobe,
  FiAward,
  FiBatteryCharging,
  FiTool,
  FiActivity,
  FiLayers,
  FiPlay,
  FiMaximize2,
  FiVolume2,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
  FiX,
} from "react-icons/fi";
import icc from "../assets/icc.png";
import heroImg from "../assets/Picture1.jpg";
import labImg from "../assets/DSC_9819.JPG";
import evLab1 from "../assets/EV-LAB/EV-lab-1.jpeg";
import evLab2 from "../assets/EV-LAB/EV-lab-2.jpeg";
import evLab3 from "../assets/EV-LAB/EV-lab-3.jpeg";
import evLab4 from "../assets/EV-LAB/EV-lab-4.jpeg";
import evLab5 from "../assets/EV-LAB/EV-lab-5.jpeg";
import evLab6 from "../assets/EV-LAB/EV-lab-6.jpeg";
import evLab7 from "../assets/EV-LAB/EV-lab-7.jpeg";
import evLab8 from "../assets/EV-LAB/EV-lab-8.jpeg";
import evLab9 from "../assets/EV-LAB/EV-lab-9.jpeg";

const labGallery = [
  { src: evLab1, alt: "EV Lab — training and equipment setup" },
  { src: evLab2, alt: "EV Lab — hands-on learning session" },
  { src: evLab3, alt: "EV Lab — battery and powertrain workspace" },
  { src: evLab4, alt: "EV Lab — industry-grade facilities" },
  { src: evLab5, alt: "EV Lab — student practical training" },
  { src: evLab6, alt: "EV Lab — research and prototyping area" },
  { src: evLab7, alt: "EV Lab — EV systems demonstration" },
  { src: evLab8, alt: "EV Lab — collaborative learning space" },
  { src: evLab9, alt: "EV Lab — sustainable mobility hub at IIT Roorkee" },
];

const videoSrc =
  "https://res.cloudinary.com/dmehcwvwi/video/upload/v1776146484/EV_Lab005_hq3dps.mp4";

const stats = [
  { value: 500, suffix: "+", label: "Trainees Skilled" },
  { value: 15, suffix: "+", label: "Industry Partners" },
  { value: 10, suffix: "+", label: "Research Projects" },
  { value: 6, suffix: "", label: "Core Facilities" },
];

const tickerItems = [
  "Battery Systems",
  "Powertrain Testing",
  "EV Simulation",
  "Charging Infrastructure",
  "Skill Development",
  "Industry R&D",
  "Startup Incubation",
  "Hands-on Training",
];

const pillars = [
  {
    title: "Industry Collaboration",
    text: "Partner with industry leaders and government bodies to accelerate EV adoption across India.",
    icon: FiBriefcase,
    color: "from-emerald-500 to-teal-600",
    glow: "group-hover:shadow-emerald-200",
  },
  {
    title: "R&D Excellence",
    text: "Facilitate cutting-edge research and development in electric vehicle technology and systems.",
    icon: FiCpu,
    color: "from-violet-500 to-purple-600",
    glow: "group-hover:shadow-violet-200",
  },
  {
    title: "Startup Support",
    text: "Nurture startups and innovators building the next generation of EV solutions.",
    icon: FiTrendingUp,
    color: "from-rose-500 to-pink-600",
    glow: "group-hover:shadow-rose-200",
  },
  {
    title: "Hands-on Training",
    text: "Provide practical, industry-grade training for students, researchers, and professionals.",
    icon: FiUsers,
    color: "from-amber-500 to-orange-500",
    glow: "group-hover:shadow-amber-200",
  },
];

const objectives = [
  { label: "Skill Development", icon: FiBookOpen, color: "text-amber-600" },
  { label: "Research Advancement", icon: FiActivity, color: "text-amber-600" },
  { label: "Entrepreneurship", icon: FiTrendingUp, color: "text-amber-600" },
  { label: "Industry Collaboration", icon: FiBriefcase, color: "text-amber-600" },
  { label: "Sustainable EV Development", icon: FiZap, color: "text-amber-600" },
];

const outcomes = [
  { label: "Enhanced Learning", icon: FiAward, color: "text-violet-600" },
  { label: "Startup Ecosystem", icon: FiLayers, color: "text-violet-600" },
  { label: "Industry Partnerships", icon: FiGlobe, color: "text-violet-600" },
  { label: "Outreach Programs", icon: FiUsers, color: "text-violet-600" },
];

const facilities = [
  { name: "EV Training Setup", icon: FiTool, desc: "Full-scale hands-on EV assembly & diagnostics" },
  { name: "Powertrain Testing", icon: FiActivity, desc: "Motor, inverter & drivetrain validation" },
  { name: "Battery Assembly", icon: FiLayers, desc: "Pack design, BMS integration & assembly" },
  { name: "Battery Testing", icon: FiBatteryCharging, desc: "Cell characterisation & safety testing" },
  { name: "Charging Station", icon: FiZap, desc: "AC/DC charging infrastructure & protocols" },
  { name: "EV Simulation Kit", icon: FiCpu, desc: "Virtual prototyping & HIL simulation" },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

function LabGallery() {
  const [lightbox, setLightbox] = useState(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const touchStartX = useRef(null);

  const goTo = (index) =>
    setMobileIndex((index + labGallery.length) % labGallery.length);

  const handleSwipe = (endX) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - endX;
    if (Math.abs(diff) > 40) goTo(mobileIndex + (diff > 0 ? 1 : -1));
    touchStartX.current = null;
  };

  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((i) => (i + 1) % labGallery.length);
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i - 1 + labGallery.length) % labGallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  const lightboxNav = (dir, e) => {
    e?.stopPropagation();
    setLightbox((i) => (i + dir + labGallery.length) % labGallery.length);
  };

  return (
    <>
      {/* Mobile — full-width swipe slider */}
      <div className="md:hidden">
        <div
          className="relative rounded-2xl overflow-hidden shadow-lg bg-slate-900 ring-1 ring-slate-200"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => handleSwipe(e.changedTouches[0].clientX)}
        >
          <button
            type="button"
            onClick={() => setLightbox(mobileIndex)}
            className="block w-full aspect-[4/3]"
            aria-label="View fullscreen"
          >
            <img
              src={labGallery[mobileIndex].src}
              alt={labGallery[mobileIndex].alt}
              className="w-full h-full object-cover"
            />
          </button>

          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <button
            type="button"
            onClick={() => goTo(mobileIndex - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 text-emerald-800 p-2.5 rounded-full shadow-md active:scale-95 transition"
            aria-label="Previous photo"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => goTo(mobileIndex + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 text-emerald-800 p-2.5 rounded-full shadow-md active:scale-95 transition"
            aria-label="Next photo"
          >
            <FiChevronRight size={20} />
          </button>

          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 text-xs font-semibold text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
            {mobileIndex + 1} / {labGallery.length}
          </span>
        </div>

        <div className="flex gap-2.5 mt-4 overflow-x-auto snap-x snap-mandatory pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {labGallery.map((photo, index) => (
            <button
              key={photo.alt}
              type="button"
              onClick={() => goTo(index)}
              className={`snap-center shrink-0 w-[72px] h-[72px] rounded-xl overflow-hidden border-2 transition-all active:scale-95 ${
                index === mobileIndex
                  ? "border-emerald-500 ring-2 ring-emerald-200 scale-105"
                  : "border-slate-200 opacity-70"
              }`}
            >
              <img
                src={photo.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-1.5 mt-4">
          {labGallery.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === mobileIndex
                  ? "w-6 bg-emerald-500"
                  : "w-2 bg-slate-300"
              }`}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>

        <p className="text-center text-xs text-slate-500 mt-4">
          Swipe or tap thumbnails · Tap image for fullscreen
        </p>
      </div>

      {/* Desktop / tablet — bento grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-4">
        {labGallery.map((photo, index) => (
          <motion.button
            key={photo.alt}
            type="button"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            onClick={() => setLightbox(index)}
            className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow ring-1 ring-slate-200 ${
              index === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                index === 0 ? "h-full min-h-[320px]" : "h-56"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full">
              View
            </span>
          </motion.button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-3 sm:p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) lightboxNav(diff > 0 ? 1 : -1);
            touchStartX.current = null;
          }}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white bg-white/15 active:bg-white/25 p-3 rounded-full z-10"
            aria-label="Close gallery"
          >
            <FiX size={22} />
          </button>
          <button
            type="button"
            onClick={(e) => lightboxNav(-1, e)}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-white/15 active:bg-white/25 text-white p-3 sm:p-4 rounded-full z-10"
            aria-label="Previous image"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={(e) => lightboxNav(1, e)}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-white/15 active:bg-white/25 text-white p-3 sm:p-4 rounded-full z-10"
            aria-label="Next image"
          >
            <FiChevronRight size={24} />
          </button>
          <img
            src={labGallery[lightbox].src}
            alt={labGallery[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-3 sm:bottom-4 left-0 right-0 text-white/90 text-xs sm:text-sm text-center px-4">
            {lightbox + 1} / {labGallery.length}
          </p>
        </div>
      )}
    </>
  );
}

function CountUp({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(value / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const Multiskilling = () => {
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  const handleFullscreen = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-emerald-50/40 dark:from-[#0a0f1a] dark:via-slate-950 dark:to-emerald-950/25 overflow-x-hidden transition-colors duration-300">
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-[88vh] min-h-[560px] overflow-hidden bg-slate-950">
        {/* Blurred cinematic background */}
        <motion.div style={{ y: heroY }} className="absolute -inset-10 sm:-inset-16" aria-hidden>
          <motion.img
            src={heroImg}
            alt=""
            className="w-full h-full object-cover scale-110 blur-lg sm:blur-xl md:blur-2xl brightness-[0.68] contrast-[1.1] saturate-[1.2] dark:brightness-[0.38] dark:contrast-[1.15] dark:saturate-[0.85]"
            initial={{ scale: 1.18 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 16, ease: "easeOut" }}
          />
        </motion.div>

        <div className="absolute inset-0 ev-hero-mesh opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/78 to-emerald-50/30 dark:from-slate-950/97 dark:via-slate-900/85 dark:to-emerald-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40 dark:from-slate-950 dark:to-slate-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_35%,rgba(16,185,129,0.18),transparent_45%)] dark:bg-[radial-gradient(ellipse_at_80%_35%,rgba(52,211,153,0.14),transparent_50%)]" />

        <motion.div
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 right-[6%] w-52 h-52 rounded-full bg-emerald-400/35 dark:bg-emerald-500/25 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-24 left-[4%] w-64 h-64 rounded-full bg-cyan-400/20 dark:bg-teal-500/15 blur-3xl pointer-events-none"
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center pb-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-3xl group"
          >
            <div className="absolute -inset-[1px] rounded-[1.4rem] ev-hero-border-glow opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />
            <div className="relative rounded-3xl bg-white/62 dark:bg-slate-900/58 backdrop-blur-2xl shadow-[0_20px_60px_-12px_rgba(16,185,129,0.18)] dark:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.55)] px-6 py-9 sm:px-10 sm:py-11 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-emerald-400/20 to-transparent rounded-bl-full pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-cyan-400/15 to-transparent rounded-full blur-2xl pointer-events-none" />

              <motion.span
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="relative inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/80 dark:to-teal-950/60 border border-emerald-300/60 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-bold tracking-wide uppercase mb-7 shadow-sm"
              >
                <FiZap className="text-emerald-500 shrink-0" />
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Established Lab · IIT Roorkee
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.7 }}
                className="relative text-[2.35rem] sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight max-w-4xl"
              >
                <span className="text-slate-900 dark:text-white">Electric Vehicle</span>
                <br />
                <span className="ev-hero-title-gradient">(EV) Lab</span>
              </motion.h1>

              <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400" />

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52 }}
                className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-medium"
              >
                Where sustainable mobility meets cutting-edge research, hands-on
                training &amp; real industry impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white text-sm font-bold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/45 hover:scale-[1.02] transition-all">
                  Sponsored by ICICI Foundation
                </span>
                <a
                  href="#inside-lab"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-emerald-500/40 dark:border-emerald-400/50 text-emerald-800 dark:text-emerald-300 text-sm font-bold hover:bg-emerald-500/10 dark:hover:bg-emerald-500/15 transition-all"
                >
                  Explore the lab
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-emerald-600/80 dark:text-emerald-400/80 z-10"
        >
          <FiChevronDown className="text-2xl" />
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section className="relative z-20 -mt-16 px-6 pb-2">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              <div className="relative rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-100 dark:border-slate-600 p-5 md:p-6 text-center shadow-lg shadow-slate-200/60 dark:shadow-black/40 hover:shadow-xl hover:shadow-emerald-100 dark:hover:shadow-emerald-900/30 transition-all">
                <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  <CountUp value={item.value} suffix={item.suffix} />
                </p>
                <p className="text-xs md:text-sm text-slate-500 mt-1.5 font-medium">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="mt-10 py-4 border-y border-emerald-100 dark:border-emerald-800/50 bg-emerald-50/60 dark:bg-emerald-950/40 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-8"
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
              <FiZap className="text-emerald-500 shrink-0" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── PARTNERSHIP + VIDEO ── */}
      <section id="inside-lab" className="max-w-6xl mx-auto px-6 py-20">
        <motion.div {...fadeUp} className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest">
            Inside the Lab
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mt-4">
            Innovation in{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            {...fadeUp}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl overflow-hidden shadow-lg shadow-slate-200/80"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-3xl opacity-30 group-hover:opacity-60 blur transition-opacity" />
            <div className="relative rounded-3xl bg-white border border-slate-100 overflow-hidden h-full flex flex-col">
              <img
                src={icc}
                alt="ICICI Foundation partnership objectives"
                className="w-full flex-1 min-h-[260px] object-contain p-5 bg-slate-50"
              />
              <div className="p-6 border-t border-slate-100 bg-white">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Strategic partnership with ICICI Foundation driving EV skill
                  development, research &amp; entrepreneurship at IIT Roorkee.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.12 }} whileHover={{ y: -6 }}>
            <div className="relative rounded-3xl overflow-hidden group shadow-lg shadow-slate-200/80 h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-3xl opacity-25 group-hover:opacity-50 blur-md transition-opacity z-0" />
              <div className="relative z-10 rounded-3xl bg-white border border-slate-100 overflow-hidden h-full flex flex-col">
                <div className="relative w-full aspect-video bg-slate-900 flex items-center justify-center p-2 sm:p-3 min-h-[260px]">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted={isMuted}
                    playsInline
                    loop
                    className="w-full h-full object-contain cursor-pointer"
                    onClick={handleUnmute}
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                  {isMuted && (
                    <div className="absolute top-3 right-3 pointer-events-none">
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20"
                      >
                        <FiVolume2 className="text-emerald-300 shrink-0" />
                        Tap for sound
                      </motion.div>
                    </div>
                  )}
                  <button
                    onClick={handleFullscreen}
                    className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white p-2 rounded-lg border border-white/20 transition-all opacity-0 group-hover:opacity-100"
                    title="Fullscreen"
                    type="button"
                  >
                    <FiMaximize2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-6 border-t border-slate-100 bg-white">
                  <p className="flex items-center gap-2 text-slate-800 text-sm font-semibold mb-1">
                    <FiPlay className="text-emerald-600 shrink-0" />
                    EV Lab Walkthrough
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    A tour of our Electric Vehicle Lab facilities, training setups
                    and research spaces at IIT Roorkee.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION PILLARS ── */}
      <section className="py-20 bg-white/70 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-slate-800">Our Mission</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              Four pillars powering India&apos;s EV revolution from IIT Roorkee.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative rounded-2xl p-[1px] bg-gradient-to-br ${item.color} shadow-md ${item.glow}`}
              >
                <div className="rounded-2xl bg-white p-6 h-full group-hover:bg-slate-50 transition-colors">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-md`}
                  >
                    <item.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-200/60 to-teal-200/40 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200">
              <img
                src={labImg}
                alt="Students and researchers at EV Lab"
                className="w-full h-[360px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  Live Research
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.12 }}>
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">
              About EV Lab
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-3 mb-6 leading-tight">
              Driving the Future of{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Sustainable Mobility
              </span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              IIT Roorkee leads innovation in sustainable mobility through advanced
              Electric Vehicle research, prototyping &amp; industry-aligned training.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Students, researchers &amp; industry professionals collaborate on
              next-gen EV tech — battery systems, powertrains, charging &amp; simulation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Battery Tech", "Powertrain", "BMS", "Charging", "Simulation"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OBJECTIVES & OUTCOMES ── */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-amber-50/80 via-white to-violet-50/80 border-y border-slate-100">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div {...fadeUp}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <FiZap className="text-amber-600" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-800">Objectives</h2>
              </div>
              <ul className="space-y-3">
                {objectives.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-amber-200 hover:shadow-md hover:shadow-amber-100 transition-all cursor-default"
                  >
                    <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                      <item.icon className={item.color} />
                    </div>
                    <span className="text-slate-700 font-medium">{item.label}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                  <FiAward className="text-violet-600" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-800">Expected Outcomes</h2>
              </div>
              <ul className="space-y-3">
                {outcomes.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-violet-200 hover:shadow-md hover:shadow-violet-100 transition-all cursor-default"
                  >
                    <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                      <item.icon className={item.color} />
                    </div>
                    <span className="text-slate-700 font-medium">{item.label}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div {...fadeUp} className="text-center mb-14">
          <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">
            Infrastructure
          </span>
          <h2 className="text-4xl font-extrabold text-slate-800 mt-3">
            World-Class Facilities
          </h2>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto">
            Industry-grade setups for end-to-end EV education &amp; research.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {facilities.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-emerald-300 to-teal-300 hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-emerald-100"
            >
              <div className="rounded-2xl bg-white p-6 h-full group-hover:bg-emerald-50/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md shadow-emerald-200">
                  <item.icon className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-slate-800 mb-1.5">{item.name}</h3>
                <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── LAB GALLERY ── */}
      <section id="lab-gallery" className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 sm:pb-24">
        <motion.div {...fadeUp} className="text-center mb-8 sm:mb-12">
          <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">
            Photo Gallery
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-800 mt-2 sm:mt-3">
            Inside the EV Lab
          </h2>
          <p className="text-slate-500 mt-2 sm:mt-3 text-sm sm:text-base max-w-lg mx-auto px-1">
            Glimpses from our Electric Vehicle Lab — training, research &amp;
            industry-grade facilities at IIT Roorkee.
          </p>
        </motion.div>
        <LabGallery />
      </section>
    </div>
  );
};

export default Multiskilling;
