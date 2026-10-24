import React, { lazy } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Seo from './Components/Seo';
import { DarkModeProvider } from './context/DarkModeContext';
import SiteLayout from './site/layout/SiteLayout';
import { cpmSite, mainSite, rsvcSite } from './site/sites';

const named = (loader, name) => lazy(() => loader().then((m) => ({ default: m[name] })));

// AARTI main website
const Home = lazy(() => import('./site/pages/Home'));
const About = lazy(() => import('./site/pages/About'));
const Team = lazy(() => import('./site/pages/Team'));
const Projects = lazy(() => import('./site/pages/Projects'));
const Contact = lazy(() => import('./site/pages/Contact'));
const Technology = lazy(() => import('./site/pages/Technology'));
const NotFound = lazy(() => import('./site/pages/NotFound'));
const opportunities = () => import('./site/pages/Opportunities');
const Tenders = named(opportunities, 'Tenders');
const Careers = named(opportunities, 'Careers');
const focusPages = () => import('./site/pages/FocusPages');
const EMobility = named(focusPages, 'EMobility');
const EconomicGrowth = named(focusPages, 'EconomicGrowth');
const SupportDevelopment = named(focusPages, 'SupportDevelopment');
const Innovation = named(focusPages, 'Innovation');
const Networking = named(focusPages, 'Networking');
const EvLab = lazy(() => import('./site/evlab/EvLab'));

// CPM microsite
const cpmPages = () => import('./site/cpm/CpmPages');
const CpmOverview = named(cpmPages, 'CpmOverview');
const CpmAbout = named(cpmPages, 'CpmAbout');
const CpmFacilities = named(cpmPages, 'CpmFacilities');

// RSVC microsite
const rsvcPages = () => import('./site/rsvc/RsvcPages');
const RsvcOverview = named(rsvcPages, 'RsvcOverview');
const RsvcActivities = named(rsvcPages, 'RsvcActivities');
const RsvcTechnologies = named(rsvcPages, 'RsvcTechnologies');
const RsvcPartners = named(rsvcPages, 'RsvcPartners');

// Old URLs → new URLs. Paths differing only by letter case (e.g. /About) already
// match the new lowercase routes because React Router matching is case-insensitive.
const mainRedirects = {
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

const cpmRedirects = {
  '/cpm/Introduction': '/cpm/about',
  '/cpm/vision': '/cpm/about#vision',
  '/cpm/Objective': '/cpm/about#objectives',
  '/cpm/Global': '/cpm/about#global',
  '/cpm/PrecisonFinishing': '/cpm#focus',
  '/cpm/SmartManufacturing': '/cpm#focus',
  '/cpm/SustainabilityManufacturing': '/cpm#focus',
  '/cpm/IndustryCollaboration': '/cpm#focus',
  '/cpm/CapacityBuilding': '/cpm#focus',
};

const rsvcRedirects = {
  '/Rsvc/Activites': '/Rsvc/activities',
  '/Rsvc/Rutage': '/Rsvc/technologies',
  '/Rsvc/Entities': '/Rsvc/technologies#manthan',
  '/Rsvc/Strategic': '/Rsvc/partners',
};

const redirectRoutes = (map) =>
  Object.entries(map).map(([from, to]) => <Route key={from} path={from} element={<Navigate to={to} replace />} />);

const AppRoutes = () => (
  <>
    <Seo />
    <Routes>
      {/* AARTI main website */}
      <Route element={<SiteLayout site={mainSite} />}>
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
        {redirectRoutes(mainRedirects)}
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* CPM microsite */}
      <Route path="/cpm" element={<SiteLayout site={cpmSite} />}>
        <Route index element={<CpmOverview />} />
        <Route path="about" element={<CpmAbout />} />
        <Route path="facilities" element={<CpmFacilities />} />
        {redirectRoutes(cpmRedirects)}
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* RSVC microsite */}
      <Route path="/Rsvc" element={<SiteLayout site={rsvcSite} />}>
        <Route index element={<RsvcOverview />} />
        <Route path="activities" element={<RsvcActivities />} />
        <Route path="technologies" element={<RsvcTechnologies />} />
        <Route path="partners" element={<RsvcPartners />} />
        {redirectRoutes(rsvcRedirects)}
        <Route path="*" element={<NotFound />} />
      </Route>
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
