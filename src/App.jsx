import React, { useState, useEffect, startTransition, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Loader from '../src/Components/Loader';
// Lazy load components
const Header = lazy(() => import('../src/Components/Header'));
const Navbar = lazy(() => import('../src/Components/Navbar'));
const HeroSection = lazy(() => import('../src/Components/Hero/HeroSection'));
const FocusArea = lazy(() => import('../src/Components/FocusArea'));

const Footer = lazy(() => import('../src/Components/Footer'));
const ProgramPartners = lazy(() => import('../src/Components/ProgramPartners'));
const IndustryAccelerator = lazy(() => import('../src/Components/IndustryAccelerator'));
const Technologies = lazy(() => import('../src/Components/Technologies'));
const Metheod = lazy(() => import('../src/Components/Metheod'));
const EconomicProjects = lazy(() => import('../src/pages/EconomicProjects'));
const EMobilityProjects = lazy(() => import('../src/pages/EMobilityProjects'));
const Innovation = lazy(() => import('../src/pages/Innovation'));
const Networking = lazy(() => import('../src/pages/Networking'));
const SupportDevlopemnt = lazy(() => import('../src/pages/SupportDevlopemnt'));
const Objectives = lazy(() => import('../src/pages/Objectives'));
const Mission = lazy(() => import('../src/pages/Mission'));
const Vision = lazy(() => import('../src/pages/Vision'));
const Mob = lazy(() => import('../src/pages/Mob'));
const Magnetic = lazy(() => import('../src/pages/MagneticMotors'));
const Modular = lazy(() => import('../src/pages/Modular'));
const Machine = lazy(() => import('../src/pages/Machine'));
const Team = lazy(() => import('../src/pages/Team'));
const Multiskilling = lazy(() => import('../src/pages/Multiskilling'));
const About = lazy(() => import('../src/pages/About'));
const Contact = lazy(() => import('../src/pages/Contact'));

// CPM website components
const Header1 = lazy(() => import('../src/Components/cpm/Header1'));
const Hero = lazy(() => import('../src/Components/cpm/Hero'));
const AboutUs = lazy(() => import('../src/Components/cpm/AboutUs'));
const FocusAreas = lazy(() => import('../src/Components/cpm/FocusAreas'));
const Research = lazy(() => import('../src/Components/cpm/Research'));
const Membership = lazy(() => import('../src/Components/cpm/Membership'));
const MakeInIndia = lazy(() => import('../src/Components/cpm/MakeInIndia'));
const NewsEvents = lazy(() => import('../src/Components/cpm/NewsEvents'));
const Footer1 = lazy(() => import('../src/Components/cpm/Footer1'));
const Objective = lazy(() => import('../src/Components/cpm/Pages/Objective'));
const Visions = lazy(() => import('../src/Components/cpm/Pages/Visions'));
const Introduction = lazy(() => import('../src/Components/cpm/Pages/Introduction'));
const Facilities = lazy(() => import('../src/Components/cpm/Pages/Facilities'));
const Global = lazy(() => import('../src/Components/cpm/Pages/Global'));
const PrecisonFinishing = lazy(() => import('../src/Components/cpm/Pages/PrecisonFinishing'));
const SmartManufacturing = lazy(() => import('../src/Components/cpm/Pages/SmartManufacturing'));
const SustainabilityManufacturing = lazy(() => import('../src/Components/cpm/Pages/SustainabilityManufacturing'));
const IndustryCollaboration = lazy(() => import('../src/Components/cpm/Pages/IndustryCollaboration'));
const CapacityBuilding = lazy(() => import('../src/Components/cpm/Pages/CapacityBuilding'));
// RSVC website components
const RNavbar = lazy(() => import('../src/Components/Rsvc/RNavbar'));
const RHeader = lazy(() => import('../src/Components/Rsvc/Rhedaer'));
const RHero = lazy(() => import('../src/Components/Rsvc/Rhero'));
const Approach = lazy(() => import('../src/Components/Rsvc/Approach'));
const Recent = lazy(() => import('../src/Components/Rsvc/Recent'));
const SmartCenters = lazy(() => import('../src/Components/Rsvc/SmartCenters'));
const Footer2 = lazy(() => import('../src/Components/Rsvc/Footer2'));
const Strategic = lazy(() => import('../src/Components/Rsvc/Strategic'));
const Rutage = lazy(() => import('../src/Components/Rsvc/Pages/Rutage'));
const Entities = lazy(() => import('../src/Components/Rsvc/Pages/Entities'));

const AppContent = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();
  const isAartiWebsite = !location.pathname.startsWith('/cpm') && !location.pathname.startsWith('/Rsvc');


  return (
    <>
      {isAartiWebsite && (
        <Suspense fallback={<Loader />}>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </Suspense>
      )}
      <Routes>
        {/* Aarti Website Routes */}
        <Route path="/" element={
          <Suspense fallback={<Loader />}>
            <Header />
            <HeroSection darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <FocusArea darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Technologies darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <ProgramPartners darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <IndustryAccelerator darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Metheod darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Footer />
          </Suspense>
        } />
        <Route path="/EconomicProjects" element={<Suspense fallback={<Loader />}><EconomicProjects /></Suspense>} />
        <Route path="/EMobilityProjects" element={<Suspense fallback={<Loader />}><EMobilityProjects /></Suspense>} />
        <Route path="/SupportDevlopemnt" element={<Suspense fallback={<Loader />}><SupportDevlopemnt /></Suspense>} />
        <Route path="/Innovation" element={<Suspense fallback={<Loader />}><Innovation /></Suspense>} />
        <Route path="/Networking" element={<Suspense fallback={<Loader />}><Networking /></Suspense>} />
        <Route path="/Objectives" element={<Suspense fallback={<Loader />}><Objectives /></Suspense>} />
        <Route path="/Mission" element={<Suspense fallback={<Loader />}><Mission /></Suspense>} />
        <Route path="/Vision" element={<Suspense fallback={<Loader />}><Vision /></Suspense>} />
        <Route path="/mob" element={<Suspense fallback={<Loader />}><Mob /></Suspense>} />
        <Route path="/magnetic-motor" element={<Suspense fallback={<Loader />}><Magnetic /></Suspense>} />
        <Route path="/modular-platform" element={<Suspense fallback={<Loader />}><Modular /></Suspense>} />
        <Route path="/Battery Pack Assembly Equipment" element={<Suspense fallback={<Loader />}><Machine /></Suspense>} />
        <Route path="/Teams" element={<Suspense fallback={<Loader />}><Team darkMode={darkMode} /></Suspense>} />
        <Route path="/Multiskilling" element={<Suspense fallback={<Loader />}><Multiskilling darkMode={darkMode} /></Suspense>} />
        <Route path="/About" element={<Suspense fallback={<Loader />}><About darkMode={darkMode} /></Suspense>} />
        <Route path="/ContactUs" element={<Suspense fallback={<Loader />}><Contact darkMode={darkMode} /></Suspense>} />
        {/* CPM Website Routes */}
        <Route path="/cpm" element={
          <Suspense fallback={<Loader />}>
            <Header1 />
            <Hero />
            <AboutUs />
            <FocusAreas />
            <Research />
            <Membership />
            <MakeInIndia />
            <NewsEvents />
            <Footer1 />
          </Suspense>
        } />
        <Route path="/cpm/Objective" element={<Suspense fallback={<Loader />}><Objective /></Suspense>} />
        <Route path="/cpm/vision" element={<Suspense fallback={<Loader />}><Visions /></Suspense>} />
        <Route path="/cpm/Introduction" element={<Suspense fallback={<Loader />}><Introduction /></Suspense>} />
        <Route path="/cpm/Facilities" element={<Suspense fallback={<Loader />}><Facilities /></Suspense>} />
        <Route path="/cpm/Global" element={<Suspense fallback={<Loader />}><Global /></Suspense>} />
        <Route path="/cpm/PrecisonFinishing" element={<Suspense fallback={<Loader />}><PrecisonFinishing /></Suspense>} />
        <Route path="/cpm/SmartManufacturing" element={<Suspense fallback={<Loader />}><SmartManufacturing /></Suspense>} />
        <Route path="/cpm/SustainabilityManufacturing" element={<Suspense fallback={<Loader />}><SustainabilityManufacturing /></Suspense>} />
        <Route path="/cpm/IndustryCollaboration" element={<Suspense fallback={<Loader />}><IndustryCollaboration /></Suspense>} />
        <Route path="/cpm/CapacityBuilding" element={<Suspense fallback={<Loader />}><CapacityBuilding /></Suspense>} />
        {/* RSVC Website Routes */}
        <Route path="/Rsvc" element={
          <Suspense fallback={<Loader />}>
            <RNavbar />
            <RHeader />
            <RHero />
            <Approach />
            <Recent/>
            <SmartCenters />
            <Strategic />
            <Footer2 />
          </Suspense>
        } />
        <Route path="/Rsvc/Rutage" element={<Suspense fallback={<Loader />}><Rutage /></Suspense>} />
        <Route path="/Rsvc/Entities" element={<Suspense fallback={<Loader />}><Entities /></Suspense>} />
      </Routes>
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
            startTransition(() => {
        setLoading(false);
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className={`relative overflow-hidden ${darkMode ? 'dark' : ''}`}>
        {loading && <Loader />}
        <div className={`transition-opacity ${loading ? 'opacity-0' : 'opacity-100'} duration-500`}>
          <AppContent darkMode={darkMode} toggleDarkMode={() => startTransition(() => setDarkMode(prev => !prev))} />
        </div>
      </div>
    </Router>
  );
};

export default App;
