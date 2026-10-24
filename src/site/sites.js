// Shell configuration for the three websites that share one layout:
// the AARTI main site and the CPM and RSVC centre microsites.
import { navigation } from './content';

const centresGroup = navigation.find((n) => n.label === 'Centres');

export const mainSite = {
  id: 'aarti',
  brand: { title: 'AARTI Foundation', subtitle: 'IIT Roorkee', to: '/' },
  nav: navigation,
  cta: { label: 'Contact us', to: '/contact' },
  footerIntro:
    'Automotive and Allied Research and Technology Innovation — the industry accelerator of IIT Roorkee, set up as a Section 8 company under the Ministry of Heavy Industries Industry Accelerator programme.',
  footerColumns: [
    navigation.find((n) => n.label === 'About'),
    centresGroup,
    navigation.find((n) => n.label === 'Focus Areas'),
    {
      label: 'Get involved',
      children: [
        { label: 'Projects', to: '/projects' },
        { label: 'Tenders', to: '/tenders' },
        { label: 'Careers', to: '/careers' },
        { label: 'Contact', to: '/contact' },
      ],
    },
  ],
};

const aartiColumn = {
  label: 'AARTI Foundation',
  children: [
    { label: 'AARTI home', to: '/' },
    { label: 'About AARTI', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Careers', to: '/careers' },
    { label: 'Contact', to: '/contact' },
  ],
};

export const cpmSite = {
  id: 'cpm',
  parent: true,
  brand: { title: 'CPM', subtitle: 'Centre for Precision Manufacturing', to: '/cpm' },
  nav: [
    { label: 'Overview', to: '/cpm' },
    {
      label: 'About',
      children: [
        { label: 'About CPM', to: '/cpm/about', note: 'Mission, key points and SDGs' },
        { label: 'Vision', to: '/cpm/about#vision' },
        { label: 'Objectives', to: '/cpm/about#objectives' },
        { label: 'Global impact', to: '/cpm/about#global' },
      ],
    },
    { label: 'Focus Areas', to: '/cpm#focus' },
    { label: 'Facilities', to: '/cpm/facilities' },
    { label: 'iFactory', to: '/cpm/ifactory' },
  ],
  cta: { label: 'Partner with CPM', to: '/contact' },
  footerIntro:
    'The Centre for Precision Manufacturing at IIT Roorkee — established under the AARTI Foundation in collaboration with the University of Akron, USA, and home to the MHI-funded Smart Factory Emulation Platform.',
  footerColumns: [
    {
      label: 'CPM',
      children: [
        { label: 'Overview', to: '/cpm' },
        { label: 'About CPM', to: '/cpm/about' },
        { label: 'Facilities', to: '/cpm/facilities' },
        { label: 'iFactory', to: '/cpm/ifactory' },
      ],
    },
    centresGroup,
    aartiColumn,
  ],
};

export const rsvcSite = {
  id: 'rsvc',
  parent: true,
  brand: { title: 'RSVC', subtitle: 'RuTAGe Smart Village Centre', to: '/Rsvc' },
  nav: [
    { label: 'Overview', to: '/Rsvc' },
    {
      label: 'Our Model',
      children: [
        { label: 'Hub & Spoke', to: '/Rsvc#approach', note: 'How RSVC links IITs with villages' },
        { label: 'Five pillars', to: '/Rsvc#pillars', note: 'From awareness to impact study' },
        { label: 'Smart Village Centres', to: '/Rsvc#isvc', note: 'Nakot, Tehri and Champawat' },
      ],
    },
    { label: 'Activities', to: '/Rsvc/activities' },
    { label: 'Technologies', to: '/Rsvc/technologies' },
    { label: 'Partners', to: '/Rsvc/partners' },
  ],
  cta: { label: 'Contact us', to: '/contact' },
  footerIntro:
    'A rural-technology-enabled employment and entrepreneurship model, led by AARTI Foundation, the industry accelerator of IIT Roorkee.',
  footerColumns: [
    {
      label: 'RSVC',
      children: [
        { label: 'Overview', to: '/Rsvc' },
        { label: 'Activities', to: '/Rsvc/activities' },
        { label: 'Technologies', to: '/Rsvc/technologies' },
        { label: 'Partners', to: '/Rsvc/partners' },
      ],
    },
    centresGroup,
    aartiColumn,
  ],
};
