/** Update VITE_SITE_URL in .env when your live domain is fixed (e.g. https://aarti.iitr.ac.in) */
export const SITE_URL =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) ||
  'https://aarti.iitr.ac.in';

export const SITE_NAME = 'AARTI Foundation';
export const SITE_NAME_FULL =
  'AARTI Foundation | Automotive and Allied Research and Technology Innovation';

const baseKeywords = [
  'AARTI Foundation',
  'AARTI Foundation IIT Roorkee',
  'AARTI IIT Roorkee',
  'AARTI IITR',
  'IIT Roorkee industry accelerator',
  'Automotive and Allied Research and Technology Innovation',
  'Section 8 company IIT Roorkee',
  'Make in India IIT Roorkee',
  'industrial research IIT Roorkee',
  'startup accelerator IIT Roorkee',
  'Ministry of Heavy Industries accelerator',
].join(', ');

const cpmKeywords = [
  'CPM IIT Roorkee',
  'Centre for Precision Manufacturing IIT Roorkee',
  'Center for Precision Manufacturing IIT Roorkee',
  'precision manufacturing IIT Roorkee',
  'smart factory IIT Roorkee',
  'AARTI CPM',
  'CPM AARTI Foundation',
  'University of Akron IIT Roorkee',
  'MHI smart factory emulation',
].join(', ');

const rsvcKeywords = [
  'RSVC IIT Roorkee',
  'RuTAGe Smart Village Centre',
  'RuTAGe IIT Roorkee',
  'AARTI RSVC',
  'Integrated Smart Village Center',
  'ISVC Nakot Tehri Champawat',
  'rural technology IIT Roorkee',
  'smart village centre Uttarakhand',
  'SETU Aayog IIT Roorkee',
].join(', ');

const seoRoutes = {
  '/': {
    title: 'AARTI Foundation IIT Roorkee | Industry Accelerator & Innovation',
    description:
      'AARTI Foundation at IIT Roorkee — industry accelerator for automotive, mobility, precision manufacturing (CPM), RuTAGe Smart Village Centres (RSVC), industrial R&D, and Make in India innovation.',
    keywords: `${baseKeywords}, CPM IIT Roorkee, RSVC IIT Roorkee, RuTAGe, business accelerator cohorts`,
  },
  '/about': {
    title: 'About AARTI Foundation | IIT Roorkee',
    description:
      'Learn about AARTI Foundation — objectives, vision, recognition, outreach, and industry-academia collaboration at Indian Institute of Technology Roorkee.',
    keywords: baseKeywords,
  },
  '/projects': {
    title: 'Projects & Industrial R&D | AARTI Foundation IIT Roorkee',
    description:
      'AARTI Foundation projects: Hella India LED driver R&D, industrial RFPs through SRIC, DGCA RPTO, and collaborative research at IIT Roorkee.',
    keywords: `${baseKeywords}, Hella India IIT Roorkee, industrial RFP SRIC, LED driver research`,
  },
  '/contact': {
    title: 'Contact AARTI Foundation | IIT Roorkee',
    description:
      'Contact AARTI Foundation at IIT Roorkee — James Thomson Building, Roorkee, Uttarakhand. Industry partnerships and research enquiries.',
    keywords: `${baseKeywords}, contact AARTI IIT Roorkee`,
  },
  '/team': {
    title: 'Team | AARTI Foundation IIT Roorkee',
    description: 'Meet the AARTI Foundation team at IIT Roorkee.',
    keywords: baseKeywords,
  },
  '/careers': {
    title: 'Work With Us | AARTI Foundation IIT Roorkee',
    description: 'Careers and openings at AARTI Foundation, IIT Roorkee.',
    keywords: `${baseKeywords}, jobs AARTI IIT Roorkee`,
  },
  '/tenders': {
    title: 'Tenders & Calls for Bid | AARTI Foundation IIT Roorkee',
    description: 'Tender notices, corrigenda and calls for bid issued by AARTI Foundation, IIT Roorkee.',
    keywords: `${baseKeywords}, AARTI tender, IIT Roorkee tender`,
  },
  '/ev-lab': {
    title: 'Electric Vehicle Multiskilling Lab | AARTI Foundation IIT Roorkee',
    description:
      'EV Multiskilling Lab at IIT Roorkee — hands-on training in EV assembly, powertrain and battery testing, charging and simulation, sponsored by ICICI Foundation.',
    keywords: `${baseKeywords}, EV lab IIT Roorkee, electric vehicle training, ICICI Foundation EV lab`,
  },
  '/focus/e-mobility': {
    title: 'E-Mobility | AARTI Foundation IIT Roorkee',
    description: 'E-mobility technologies accelerated at AARTI — accessible vehicles, axial flux motors, modular E2W platforms and battery-assembly equipment.',
    keywords: `${baseKeywords}, e-mobility IIT Roorkee, EV start-ups India`,
  },
  '/focus/economic-growth': {
    title: 'Economic Growth Projects | AARTI Foundation IIT Roorkee',
    description: 'Ventures funded under the Ministry of Heavy Industries Industry Accelerator — technology indigenisation and commercialisation.',
    keywords: baseKeywords,
  },
  '/focus/support-development': {
    title: 'Support & Development | AARTI Foundation IIT Roorkee',
    description: 'Start-up support and skill development programmes run by AARTI Foundation at IIT Roorkee.',
    keywords: baseKeywords,
  },
  '/focus/innovation': {
    title: 'Innovation & Integration | AARTI Foundation IIT Roorkee',
    description: 'Integrating TRL and MRL to take innovations from prototype to large-scale production.',
    keywords: baseKeywords,
  },
  '/focus/networking': {
    title: 'Networking | AARTI Foundation IIT Roorkee',
    description: 'Networking for innovation and sustainable growth with IIT Roorkee, ICAT and industry.',
    keywords: baseKeywords,
  },
  '/cpm': {
    title: 'CPM IIT Roorkee | Centre for Precision Manufacturing | AARTI Foundation',
    description:
      'Centre for Precision Manufacturing (CPM) at IIT Roorkee under AARTI Foundation — Smart Factory Emulation Platform funded by Ministry of Heavy Industries (IoT, AI/ML, cybersecurity), precision finishing, lab facilities, University of Akron collaboration.',
    keywords: `${baseKeywords}, ${cpmKeywords}, smart factory emulation platform MHI, Ministry of Heavy Industries IIT Roorkee`,
  },
  '/cpm/about': {
    title: 'About CPM | Centre for Precision Manufacturing IIT Roorkee',
    description:
      'Vision, objectives and global impact of the Centre for Precision Manufacturing (CPM) at IIT Roorkee — established under AARTI Foundation with the University of Akron, USA.',
    keywords: cpmKeywords,
  },
  '/cpm/facilities': {
    title: 'CPM Facilities & Lab | IIT Roorkee',
    description:
      'CPM facilities at IIT Roorkee: AI manufacturing, CNC, smart factory emulation platform, robotics, and cybersecurity in manufacturing.',
    keywords: cpmKeywords,
  },
  '/Rsvc': {
    title: 'RSVC IIT Roorkee | RuTAGe Smart Village Centre | AARTI Foundation',
    description:
      'RuTAGe Smart Village Centre (RSVC) led by AARTI at IIT Roorkee — ISVC in Nakot, Tehri, Champawat, rural technology, livelihoods, digital governance, women empowerment.',
    keywords: `${baseKeywords}, ${rsvcKeywords}`,
  },
  '/Rsvc/activities': {
    title: 'RSVC Activities | RuTAGe Smart Village Centre IIT Roorkee',
    description: 'Seminars, Kisaan Mitra meets and watershed programmes run by the RuTAGe Smart Village Centre in Uttarakhand.',
    keywords: rsvcKeywords,
  },
  '/Rsvc/technologies': {
    title: 'RSVC Technologies | RuTAG & Manthan | IIT Roorkee',
    description: 'RuTAG technologies at RSVC Almora and solutions from entities registered on the RuTAG Manthan platform.',
    keywords: rsvcKeywords,
  },
  '/Rsvc/partners': {
    title: 'RSVC Strategic Partners | RuTAGe IIT Roorkee',
    description: 'Strategic partners and supporters of RSVC at IIT Roorkee.',
    keywords: rsvcKeywords,
  },
};

export function getSeoForPath(pathname) {
  if (seoRoutes[pathname]) {
    return seoRoutes[pathname];
  }

  const lower = pathname.toLowerCase();
  const caseMatch = Object.keys(seoRoutes).find((key) => key.toLowerCase() === lower);
  if (caseMatch) {
    return { ...seoRoutes[caseMatch], canonicalPath: caseMatch };
  }

  if (lower.startsWith('/technologies/')) {
    const name = lower
      .split('/')[2]
      .split('-')
      .map((w) => (w === 'e2w' ? 'E2W' : w.charAt(0).toUpperCase() + w.slice(1)))
      .join(' ');
    return {
      title: `${name} | AARTI Foundation IIT Roorkee`,
      description: `${name} — a technology accelerated by AARTI Foundation, the industry accelerator of IIT Roorkee.`,
      keywords: `${baseKeywords}, ${name}`,
      canonicalPath: pathname,
    };
  }

  if (pathname.startsWith('/cpm')) {
    return {
      ...seoRoutes['/cpm'],
      title: `CPM IIT Roorkee | ${SITE_NAME}`,
      canonicalPath: pathname,
    };
  }

  if (pathname.startsWith('/Rsvc')) {
    return {
      ...seoRoutes['/Rsvc'],
      title: `RSVC RuTAGe IIT Roorkee | ${SITE_NAME}`,
      canonicalPath: pathname,
    };
  }

  return {
    title: `${SITE_NAME_FULL} | IIT Roorkee`,
    description:
      'AARTI Foundation — industry accelerator of IIT Roorkee. CPM precision manufacturing, RSVC smart villages, industrial R&D, and innovation.',
    keywords: `${baseKeywords}, ${cpmKeywords}, ${rsvcKeywords}`,
    canonicalPath: pathname,
  };
}

export function buildCanonical(pathname, siteUrl = SITE_URL) {
  const base = siteUrl.replace(/\/$/, '');
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${path}`;
}
