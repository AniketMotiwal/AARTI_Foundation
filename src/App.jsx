import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Seo from './Components/Seo';
import DarkModeToggle from './Components/DarkModeToggle';
import { DarkModeProvider } from './context/DarkModeContext';
import SiteLayout, { PageLoading } from './site/layout/SiteLayout';

// AARTI main website (redesign)
const Home = lazy(() => import('./site/pages/Home'));
const About = lazy(() => import('./site/pages/About'));
const Team = lazy(() => import('./site/pages/Team'));
const Projects = lazy(() => import('./site/pages/Projects'));
const Contact = lazy(() => import('./site/pages/Contact'));
const Technology = lazy(() => import('./site/pages/Technology'));
const NotFound = lazy(() => import('./site/pages/NotFound'));
const Tenders = lazy(() => import('./site/pages/Opportunities').then((m) => ({ default: m.Tenders })));
const Careers = lazy(() => import('./site/pages/Opportunities').then((m) => ({ default: m.Careers })));
const focus = (name) => lazy(() => import('./site/pages/FocusPages').then((m) => ({ default: m[name] })));
const EMobility = focus('EMobility');
const EconomicGrowth = focus('EconomicGrowth');
const SupportDevelopment = focus('SupportDevelopment');
const Innovation = focus('Innovation');
const Networking = focus('Networking');
const EvLab = lazy(() => import('./pages/Multiskilling'));

// CPM website components
const Header1 = lazy(() => import('./Components/cpm/Header1'));
const CpmOverview = lazy(() => import('./Components/cpm/CpmOverview'));
const Research = lazy(() => import('./Components/cpm/Research'));
const MakeInIndia = lazy(() => import('./Components/cpm/MakeInIndia'));
const SmartFactory = lazy(() => import('./Components/cpm/SmartFactory'));
const Footer1 = lazy(() => import('./Components/cpm/Footer1'));
const Objective = lazy(() => import('./Components/cpm/Pages/Objective'));
const Visions = lazy(() => import('./Components/cpm/Pages/Visions'));
const Introduction = lazy(() => import('./Components/cpm/Pages/Introduction'));
const Facilities = lazy(() => import('./Components/cpm/Pages/Facilities'));
const Global = lazy(() => import('./Components/cpm/Pages/Global'));
const PrecisonFinishing = lazy(() => import('./Components/cpm/Pages/PrecisonFinishing'));
const SmartManufacturing = lazy(() => import('./Components/cpm/Pages/SmartManufacturing'));
const SustainabilityManufacturing = lazy(() => import('./Components/cpm/Pages/SustainabilityManufacturing'));
const IndustryCollaboration = lazy(() => import('./Components/cpm/Pages/IndustryCollaboration'));
const CapacityBuilding = lazy(() => import('./Components/cpm/Pages/CapacityBuilding'));

// RSVC website components
const RNavbar = lazy(() => import('./Components/Rsvc/RNavbar'));
const RHeader = lazy(() => import('./Components/Rsvc/Rhedaer'));
const RHero = lazy(() => import('./Components/Rsvc/Rhero'));
const Approach = lazy(() => import('./Components/Rsvc/Approach'));
const IsvcCenters = lazy(() => import('./Components/IsvcCenters'));
const Recent = lazy(() => import('./Components/Rsvc/Recent'));
const SmartCenters = lazy(() => import('./Components/Rsvc/SmartCenters'));
const Footer2 = lazy(() => import('./Components/Rsvc/Footer2'));
const Strategic = lazy(() => import('./Components/Rsvc/Strategic'));
const Rutage = lazy(() => import('./Components/Rsvc/Pages/Rutage'));
const Entities = lazy(() => import('./Components/Rsvc/Pages/Entities'));
const Activites = lazy(() => import('./Components/Rsvc/Pages/Activites'));
const Village = lazy(() => import('./Components/Rsvc/village'));

// Old URLs → new URLs. Paths differing only by letter case (e.g. /About) already
// match the new lowercase routes because React Router matching is case-insensitive.
const redirects = {
  '/Teams': '/team',
  '/ContactUs': '/contact',
  '/WorkWithUs': '/careers',
  '/Callforbid': '/tenders',
  '/Multiskilling': '/ev-lab',
  '/EMobilityProjects': '/focus/e-mobility',
  '/EconomicProjects': '/focus/economic-growth',
  '/SupportDevlopemnt': '/focus/support-development',
  '/Innovation': '/focus/innovation',
  '/Networking': '/focus/networking',
  '/Mission': '/about#mission',
  '/Vision': '/about#vision',
  '/Objectives': '/about#objectives',
  '/mob': '/technologies/accessible-mobility-vehicle',
  '/magnetic-motor': '/technologies/axial-flux-motor',
  '/modular-platform': '/technologies/modular-e2w-platform',
  '/Battery Pack Assembly Equipment': '/technologies/battery-pack-assembly',
};

const page = (Component) => (
  <Suspense fallback={<PageLoading />}>
    <Component />
  </Suspense>
);

const SubsiteThemeToggle = () => {
  const { pathname } = useLocation();
  const isSubsite = pathname.startsWith('/cpm') || pathname.toLowerCase().startsWith('/rsvc');
  if (!isSubsite) return null;
  return (
    <div className="fixed bottom-5 right-5 z-[9999] lg:hidden">
      <DarkModeToggle className="p-3 bg-slate-900/90 text-white border border-slate-600 shadow-xl backdrop-blur-md hover:scale-105" iconClass="h-5 w-5" />
    </div>
  );
};

const AppRoutes = () => (
  <>
    <Seo />
    <SubsiteThemeToggle />
    <Routes>
      {/* AARTI main website */}
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="projects" element={<Projects />} />
        <Route path="tenders" element={<Tenders />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="ev-lab" element={<EvLab />} />
        <Route path="focus/e-mobility" element={<EMobility />} />
        <Route path="focus/economic-growth" element={<EconomicGrowth />} />
        <Route path="focus/support-development" element={<SupportDevelopment />} />
        <Route path="focus/innovation" element={<Innovation />} />
        <Route path="focus/networking" element={<Networking />} />
        <Route path="technologies/:slug" element={<Technology />} />
        {Object.entries(redirects).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* CPM website */}
      <Route
        path="/cpm"
        element={
          <Suspense fallback={<PageLoading />}>
            <Header1 />
            <CpmOverview />
            <Research />
            <MakeInIndia />
            <SmartFactory />
            <Footer1 />
          </Suspense>
        }
      />
      <Route path="/cpm/Objective" element={page(Objective)} />
      <Route path="/cpm/vision" element={page(Visions)} />
      <Route path="/cpm/Introduction" element={page(Introduction)} />
      <Route path="/cpm/Facilities" element={page(Facilities)} />
      <Route path="/cpm/Global" element={page(Global)} />
      <Route path="/cpm/PrecisonFinishing" element={page(PrecisonFinishing)} />
      <Route path="/cpm/SmartManufacturing" element={page(SmartManufacturing)} />
      <Route path="/cpm/SustainabilityManufacturing" element={page(SustainabilityManufacturing)} />
      <Route path="/cpm/IndustryCollaboration" element={page(IndustryCollaboration)} />
      <Route path="/cpm/CapacityBuilding" element={page(CapacityBuilding)} />

      {/* RSVC website */}
      <Route
        path="/Rsvc"
        element={
          <Suspense fallback={<PageLoading />}>
            <RHeader />
            <RNavbar />
            <RHero />
            <Approach />
            <IsvcCenters />
            <Village />
            <Recent />
            <SmartCenters />
            <Footer2 />
          </Suspense>
        }
      />
      <Route path="/Rsvc/Activites" element={page(Activites)} />
      <Route path="/Rsvc/Strategic" element={page(Strategic)} />
      <Route path="/Rsvc/Rutage" element={page(Rutage)} />
      <Route path="/Rsvc/Entities" element={page(Entities)} />
    </Routes>
  </>
);

function App() {
  return (
    <Router>
      <DarkModeProvider>
        <ScrollToTop />
        <AppRoutes />
      </DarkModeProvider>
    </Router>
  );
}

export default App;
