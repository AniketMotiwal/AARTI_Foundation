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
  '/About': {
    title: 'About AARTI Foundation | IIT Roorkee',
    description:
      'Learn about AARTI Foundation — objectives, vision, recognition, outreach, and industry-academia collaboration at Indian Institute of Technology Roorkee.',
    keywords: baseKeywords,
  },
  '/Projects': {
    title: 'Projects & Industrial R&D | AARTI Foundation IIT Roorkee',
    description:
      'AARTI Foundation projects: Hella India LED driver R&D, industrial RFPs through SRIC, DGCA RPTO, and collaborative research at IIT Roorkee.',
    keywords: `${baseKeywords}, Hella India IIT Roorkee, industrial RFP SRIC, LED driver research`,
  },
  '/ContactUs': {
    title: 'Contact AARTI Foundation | IIT Roorkee',
    description:
      'Contact AARTI Foundation at IIT Roorkee — James Thomson Building, Roorkee, Uttarakhand. Industry partnerships and research enquiries.',
    keywords: `${baseKeywords}, contact AARTI IIT Roorkee`,
  },
  '/Teams': {
    title: 'Team | AARTI Foundation IIT Roorkee',
    description: 'Meet the AARTI Foundation team at IIT Roorkee.',
    keywords: baseKeywords,
  },
  '/WorkWithUs': {
    title: 'Work With Us | AARTI Foundation IIT Roorkee',
    description: 'Careers and openings at AARTI Foundation, IIT Roorkee.',
    keywords: `${baseKeywords}, jobs AARTI IIT Roorkee`,
  },
  '/cpm': {
    title: 'CPM IIT Roorkee | Centre for Precision Manufacturing | AARTI Foundation',
    description:
      'Centre for Precision Manufacturing (CPM) at IIT Roorkee under AARTI Foundation — Smart Factory Emulation Platform funded by Ministry of Heavy Industries (IoT, AI/ML, cybersecurity), precision finishing, lab facilities, University of Akron collaboration.',
    keywords: `${baseKeywords}, ${cpmKeywords}, smart factory emulation platform MHI, Ministry of Heavy Industries IIT Roorkee`,
  },
  '/cpm/Introduction': {
    title: 'CPM Introduction | Precision Manufacturing IIT Roorkee',
    description:
      'Introduction to CPM at IIT Roorkee — cutting-edge precision manufacturing research hub under AARTI Foundation and University of Akron, USA.',
    keywords: cpmKeywords,
  },
  '/cpm/Facilities': {
    title: 'CPM Facilities & Lab | IIT Roorkee',
    description:
      'CPM facilities at IIT Roorkee: AI manufacturing, CNC, smart factory emulation platform, robotics, and cybersecurity in manufacturing.',
    keywords: cpmKeywords,
  },
  '/cpm/vision': {
    title: 'CPM Vision | Centre for Precision Manufacturing IIT Roorkee',
    description: 'Vision and goals of the Centre for Precision Manufacturing at IIT Roorkee.',
    keywords: cpmKeywords,
  },
  '/cpm/Objective': {
    title: 'CPM Objectives | IIT Roorkee AARTI Foundation',
    description: 'Objectives of CPM — precision manufacturing, workforce development, Make in India.',
    keywords: cpmKeywords,
  },
  '/cpm/Global': {
    title: 'CPM Global Impact | IIT Roorkee',
    description: 'Global collaboration and impact of CPM at IIT Roorkee.',
    keywords: cpmKeywords,
  },
  '/Rsvc': {
    title: 'RSVC IIT Roorkee | RuTAGe Smart Village Centre | AARTI Foundation',
    description:
      'RuTAGe Smart Village Centre (RSVC) led by AARTI at IIT Roorkee — ISVC in Nakot, Tehri, Champawat, rural technology, livelihoods, digital governance, women empowerment.',
    keywords: `${baseKeywords}, ${rsvcKeywords}`,
  },
  '/Rsvc/Strategic': {
    title: 'RSVC Strategic Partners | RuTAGe IIT Roorkee',
    description: 'Strategic partners and supporters of RSVC at IIT Roorkee.',
    keywords: rsvcKeywords,
  },
  '/Rsvc/Rutage': {
    title: 'RuTAGe | RSVC IIT Roorkee',
    description: 'RuTAGe technologies and smart village programmes at IIT Roorkee.',
    keywords: rsvcKeywords,
  },
};

export function getSeoForPath(pathname) {
  if (seoRoutes[pathname]) {
    return seoRoutes[pathname];
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
