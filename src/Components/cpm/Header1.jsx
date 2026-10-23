

// import React, { useState, useEffect } from "react";
// import logo from "/src/assets/logo.png";
// import akon from "/src/assets/Akon.png";
// import iit from "/src/assets/iit.png";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
//       ${isScrolled
//           ? "bg-white/70 backdrop-blur-lg shadow-md"
//           : "bg-transparent"
//         }`}
//     >
//       <div
//         className={`max-w-screen-xl mx-auto transition-all duration-300 
//         ${isScrolled ? "py-2" : "py-4"} px-4`}
//       >
//         <div className="flex items-center justify-between">
//           {/* 🔥 LOGOS */}
//           <div className="flex items-center gap-4">
//             <img
//               src={iit}
//               alt="IIT"
//               className={`transition-all duration-300 transform 
//   ${isScrolled ? "scale-90" : "scale-110"} 
//   h-20 md:h-28 lg:h-32`}
//             />

//             <img
//               src={akon}
//               alt="AARTI"
//               className={`transition-all duration-300 transform 
//   ${isScrolled ? "scale-90" : "scale-110"} 
//   h-20 md:h-28 lg:h-32`}
//             />

//             <img
//               src={logo}
//               alt="CPM"
//               className={`transition-all duration-300 transform 
//   ${isScrolled ? "scale-90" : "scale-110"} 
//   h-20 md:h-28 lg:h-32`}
//             />
//           </div>

//           {/* 🔥 TITLE */}
//           <h1
//             className={`font-bold transition-all duration-300 break-words
//   ${isScrolled
//                 ? "text-black text-lg md:text-xl lg:text-2xl max-w-[80%]"
//                 : "text-white text-2xl md:text-3xl lg:text-4xl max-w-[90%]"
//               }`}
//           >
//             CPM (Centre of Precision Manufacturing)
//           </h1>

//           {/* 🔥 MOBILE ICON */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden text-black z-50"
//           >
//             {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>

//         {/* 🔥 NAVBAR */}
//         <nav
//           className={`hidden md:flex justify-center gap-8 mt-3 transition-all duration-300 
//           ${isScrolled ? "text-black" : "text-white"}`}
//         >
//           {[
//             "Home",
//             "About Us",
//             "Focus Areas",
//             "Research & Collaboration",
//             "Membership Models",
//             "News & Events",
//           ].map((item, i) => (
//             <a
//               key={i}
//               href="#"
//               className="relative group text-lg"
//             >
//               {item}
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//             </a>
//           ))}
//         </nav>
//       </div>

//       {/* 🔥 MOBILE MENU */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 
//         ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         <div className="flex flex-col p-6 gap-6 mt-16 text-lg">
//           <a href="#">Home</a>
//           <a href="#">About Us</a>
//           <a href="#">Focus Areas</a>
//           <a href="#">Research</a>
//           <a href="#">Membership</a>
//           <a href="#">News</a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { scrollToCpmSection } from "./scrollToCpmSection";
import logo from "/src/assets/logo.png";
import akon from "/src/assets/Akon.png";
import iit from "/src/assets/iit.png";
import { FaBars, FaTimes, FaChevronDown, FaHome, FaIndustry } from "react-icons/fa";
import DarkModeToggle from "../DarkModeToggle";

const navLinkClass =
  "nav-link relative group text-base md:text-xl lg:text-2xl font-medium tracking-wide";
const navUnderline =
  "absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300";
const dropdownItemClass =
  "block px-4 py-2.5 hover:bg-gray-100 whitespace-nowrap text-sm md:text-base lg:text-lg";

const focusAreaLinks = [
  "Precision Finishing",
  "Smart Manufacturing",
  "Sustainability Manufacturing",
  "Industry Collaboration",
  "Capacity Building",
];

const mobileNavSections = [
  {
    id: "about",
    title: "About Us",
    links: [
      { to: "/cpm/Introduction", label: "Introduction" },
      { to: "/cpm/vision", label: "Vision" },
      { to: "/cpm/Objective", label: "Objectives" },
      { to: "/cpm/Facilities", label: "Facilities" },
      { to: "/cpm/Global", label: "Global Impact" },
    ],
  },
  {
    id: "focus",
    title: "Focus Areas",
    links: focusAreaLinks.map((label) => ({ href: "#", label })),
  },
  {
    id: "research",
    title: "Research & Collaboration",
    links: [
      { to: "/cpm#research", label: "Research Overview" },
      { to: "/cpm/Facilities", label: "Facilities" },
      { to: "/cpm/Global", label: "Global Collaboration" },
    ],
  },
];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [openMobileSection, setOpenMobileSection] = useState("about");

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  const goToIFactory = (e) => {
    closeMenu();
    if (location.pathname === "/cpm") {
      e.preventDefault();
      scrollToCpmSection("ifactory");
    }
  };

  const toggleMobileSection = (id) => {
    setOpenMobileSection((current) => (current === id ? null : id));
  };

  const mobileLogoClass =
    "h-10 w-10 sm:h-11 sm:w-11 min-[390px]:h-12 min-[390px]:w-12";
  const desktopLogoClass = "md:h-32 lg:h-36";
  const aartiMobileLogoClass =
    "h-12 w-12 sm:h-14 sm:w-14 min-[390px]:h-16 min-[390px]:w-16";
  const aartiDesktopLogoClass = "md:h-40 lg:h-44";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      setOpenMobileSection("about");
    }
  }, [isMenuOpen]);

  const menuBtnClass =
    "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm";

  const mobileMenuPortal =
    typeof document !== "undefined"
      ? createPortal(
          <>
            <div
              className={`fixed inset-0 bg-slate-900/60 backdrop-blur-[2px] z-[9998] md:hidden transition-opacity duration-300 ${
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
              onClick={closeMenu}
              aria-hidden={!isMenuOpen}
            />
            <div
              className={`fixed inset-y-0 right-0 z-[9999] w-[min(100vw-2.5rem,20rem)] sm:w-80 bg-white shadow-2xl transition-transform duration-300 ease-out overflow-hidden flex flex-col md:hidden ${
                isMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
              }`}
              aria-hidden={!isMenuOpen}
              role="dialog"
              aria-modal="true"
              aria-label="CPM navigation menu"
            >
              <div className="shrink-0 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white px-4 py-4 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-indigo-200">
                    CPM IIT Roorkee
                  </p>
                  <p className="font-semibold text-sm truncate">Navigation</p>
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                  aria-label="Close menu"
                >
                  <FaTimes size={16} />
                </button>
              </div>

              <nav className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-3 py-4 space-y-2">
                <Link
                  to="/cpm"
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 bg-indigo-50 text-indigo-900 font-semibold border border-indigo-100 hover:bg-indigo-100 transition-colors"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white">
                    <FaHome size={14} />
                  </span>
                  Home
                </Link>

                {mobileNavSections.map((section) => {
                  const isOpen = openMobileSection === section.id;
                  return (
                    <div
                      key={section.id}
                      className="rounded-xl border border-slate-200 bg-slate-50/80 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => toggleMobileSection(section.id)}
                        className="w-full flex items-center justify-between gap-2 px-3 py-3 text-left font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm">{section.title}</span>
                        <FaChevronDown
                          size={12}
                          className={`shrink-0 text-slate-500 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="border-t border-slate-200 bg-white pb-1">
                          {section.links.map((link) =>
                            link.href ? (
                              <a
                                key={link.label}
                                href={link.href}
                                onClick={closeMenu}
                                className="block pl-4 pr-3 py-2.5 text-sm text-slate-600 border-l-2 border-transparent hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-800 transition-colors"
                              >
                                {link.label}
                              </a>
                            ) : (
                              <Link
                                key={link.to + link.label}
                                to={link.to}
                                onClick={closeMenu}
                                className="block pl-4 pr-3 py-2.5 text-sm text-slate-600 border-l-2 border-transparent hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-800 transition-colors"
                              >
                                {link.label}
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}

                <Link
                  to="/cpm#ifactory"
                  onClick={goToIFactory}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 font-semibold text-slate-800 border border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-900 transition-colors"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800 text-white">
                    <FaIndustry size={14} />
                  </span>
                  iFactory
                </Link>
              </nav>
            </div>
          </>,
          document.body
        )
      : null;

  const mobileControls = (
    <div className="flex items-center gap-1.5 shrink-0">
      <DarkModeToggle className={`w-10 h-10 border ${menuBtnClass}`} iconClass="h-4 w-4" />
      <button
        type="button"
        onClick={toggleMenu}
        className={`relative flex items-center justify-center w-10 h-10 rounded-lg border transition-colors duration-200 ${menuBtnClass}`}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
      </button>
    </div>
  );

  const desktopNav = (
    <nav
      className={`hidden md:flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12 transition-all duration-300 text-slate-900 dark:text-slate-100 ${
        isScrolled ? "py-2" : "py-3"
      }`}
    >
      <Link to="/cpm" className={navLinkClass}>
        Home
        <span className={navUnderline} />
      </Link>

      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("about")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <span className={`${navLinkClass} cursor-pointer`}>
          About Us
          <span className={navUnderline} />
        </span>
        {activeMenu === "about" && (
          <div className="dropdown absolute left-0 top-full bg-white text-black shadow-lg rounded-md py-2 min-w-[220px] z-50">
            <Link to="/cpm/Introduction" className={dropdownItemClass}>Introduction</Link>
            <Link to="/cpm/vision" className={dropdownItemClass}>Vision</Link>
            <Link to="/cpm/Objective" className={dropdownItemClass}>Objectives</Link>
            <Link to="/cpm/Facilities" className={dropdownItemClass}>Facilities</Link>
            <Link to="/cpm/Global" className={dropdownItemClass}>Global Impact</Link>
          </div>
        )}
      </div>

      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("focus")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <span className={`${navLinkClass} cursor-pointer`}>
          Focus Areas
          <span className={navUnderline} />
        </span>
        {activeMenu === "focus" && (
          <div className="dropdown absolute left-0 top-full bg-white text-black shadow-lg rounded-md py-2 min-w-[240px] z-50">
            {focusAreaLinks.map((label) => (
              <a key={label} href="#" className={dropdownItemClass}>
                {label}
              </a>
            ))}
          </div>
        )}
      </div>

      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("research")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <span className={`${navLinkClass} cursor-pointer`}>
          Research &amp; Collaboration
          <span className={navUnderline} />
        </span>
        {activeMenu === "research" && (
          <div className="dropdown absolute left-0 top-full bg-white text-black shadow-lg rounded-md py-2 min-w-[220px] z-50">
            <Link to="/cpm#research" className={dropdownItemClass}>Research Overview</Link>
            <Link to="/cpm/Facilities" className={dropdownItemClass}>Facilities</Link>
            <Link to="/cpm/Global" className={dropdownItemClass}>Global Collaboration</Link>
          </div>
        )}
      </div>

      <Link to="/cpm#ifactory" onClick={goToIFactory} className={navLinkClass}>
        iFactory
        <span className={navUnderline} />
      </Link>

      <DarkModeToggle
        className="ml-2 p-2.5 border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700"
        iconClass="h-5 w-5"
      />
    </nav>
  );

  return (
    <>
      {/* Brand strip — scrolls up & hides */}
      <div
        className={`bg-white dark:bg-slate-900 overflow-hidden transition-all duration-500 ease-in-out ${
          isScrolled ? "max-h-0 opacity-0 pointer-events-none" : "max-h-[520px] opacity-100"
        }`}
      >
        <div className="max-w-screen-xl mx-auto py-3 md:py-5 px-2 sm:px-4">
          <div className="flex items-center justify-between gap-1 sm:gap-2 w-full">
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-4 shrink-0">
              <img
                src={iit}
                alt="IIT"
                className={`transition-all duration-300 object-contain md:w-auto ${mobileLogoClass} ${desktopLogoClass}`}
              />
              <img
                src={akon}
                alt="AARTI"
                className={`transition-all duration-300 object-contain md:w-auto ${mobileLogoClass} ${desktopLogoClass}`}
              />
              <img
                src={logo}
                alt="CPM"
                className={`transition-all duration-300 object-contain md:w-auto ${aartiMobileLogoClass} ${aartiDesktopLogoClass}`}
              />
            </div>

            <h1 className="md:hidden flex-1 min-w-0 px-0.5 sm:px-1.5 text-center font-bold leading-snug text-slate-900 dark:text-slate-100 text-sm min-[360px]:text-base min-[390px]:text-lg sm:text-xl">
              CPM (Center for Precision Manufacturing)
            </h1>

            <h1 className="hidden md:block font-bold text-center flex-1 mx-2 lg:mx-4 leading-tight text-slate-900 dark:text-slate-100 whitespace-nowrap text-[clamp(1.15rem,2.4vw,3rem)]">
              CPM (Center for Precision Manufacturing)
            </h1>

            <div className="md:hidden">{mobileControls}</div>
          </div>
        </div>
      </div>

      {/* Sticky navbar — stays on top while scrolling */}
      <header
        className={`sticky top-0 left-0 w-full z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-700 shadow-sm transition-all duration-300 ${
          isScrolled
            ? "shadow-lg dark:shadow-black/50"
            : "max-md:h-0 max-md:overflow-hidden max-md:border-0 max-md:opacity-0 max-md:pointer-events-none"
        } ${isMenuOpen ? "z-[10000] !opacity-100 !pointer-events-auto max-md:!h-auto" : ""}`}
      >
        <div className="max-w-screen-xl mx-auto px-2 sm:px-4">
          {/* Mobile compact bar when scrolled */}
          {isScrolled && (
            <div className="md:hidden flex items-center justify-between gap-2 py-2.5 border-b border-slate-100 dark:border-slate-800">
              <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base truncate">
                CPM · IIT Roorkee
              </p>
              {mobileControls}
            </div>
          )}

          {desktopNav}
        </div>
      </header>

      {mobileMenuPortal}
    </>
  );
};

export default Header;