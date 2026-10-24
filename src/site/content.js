// Single source of truth for the AARTI main website copy.
// Edit text, dates and links here — components only handle layout.

import heroIitr from '../assets/site/hero-iitr.webp';
import heroDrone from '../assets/site/hero-drone-training.webp';
import heroEvLab from '../assets/site/hero-ev-lab.webp';
import heroWorkbench from '../assets/site/hero-ev-workbench.webp';
import heroIitrSm from '../assets/site/hero-iitr-sm.webp';
import heroDroneSm from '../assets/site/hero-drone-training-sm.webp';
import heroEvLabSm from '../assets/site/hero-ev-lab-sm.webp';
import heroWorkbenchSm from '../assets/site/hero-ev-workbench-sm.webp';

import momentMou from '../assets/site/moment-mou-signing.webp';
import momentRsvc from '../assets/site/moment-rsvc-inauguration.webp';
import momentLamp from '../assets/site/moment-lamp-lighting.webp';
import momentCourses from '../assets/site/moment-capacity-courses.webp';
import momentHellaMou from '../assets/site/moment-hella-mou.webp';
import momentHydrogen from '../assets/site/moment-green-hydrogen.webp';
import momentFelicitation from '../assets/site/moment-felicitation.webp';
import momentEvOpening from '../assets/site/moment-ev-lab-opening.webp';
import momentEvDemo from '../assets/site/moment-ev-lab-demo.webp';
import momentNse from '../assets/site/rsvc-nse-award.webp';
import momentRsvcExhibit from '../assets/site/moment-rsvc-exhibit.webp';
import momentEvTour from '../assets/site/moment-ev-lab-tour.webp';

import cohort1 from '../assets/site/cohort-1.webp';
import cohort3 from '../assets/site/cohort-3.webp';
import womenCapacity from '../assets/site/outreach-women-capacity.webp';
import intlConference from '../assets/site/outreach-intl-conference.webp';
import globalFaculty from '../assets/site/outreach-global-faculty.webp';
import rsvcCommunity from '../assets/site/rsvc-community.webp';
import rsvcTeam from '../assets/site/rsvc-team.webp';
import rsvcAlmora from '../assets/site/rsvc-almora.webp';
import rsvcOnGround from '../assets/site/rsvc-on-ground.webp';
import hellaPrototype from '../assets/site/hella-prototype.webp';
import evLabCollage from '../assets/site/ev-lab-collage.webp';

import yali from '../assets/yali.webp';
import divyangjan from '../assets/Divyangjan.webp';
import axialMotor from '../assets/Picture2.webp';
import motorDesign from '../assets/cycle.webp';
import motorBuild from '../assets/appliancies.webp';
import e2w from '../assets/motor.webp';
import cellMachine from '../assets/cell.webp';

import logoIitr from '../assets/iit.webp';
import logoMhi from '../assets/site/logo-mhi.webp';
import pIiml from '../assets/site/partner-iiml.webp';
import pHella from '../assets/site/partner-hella.webp';
import pIcat from '../assets/site/partner-icat.webp';
import pLumax from '../assets/site/partner-lumax.webp';
import pAltigreen from '../assets/site/partner-altigreen.webp';
import pIitk from '../assets/site/partner-iitk-design.webp';
import pBia from '../assets/site/partner-bia.webp';
import pMathworks from '../assets/site/partner-mathworks.webp';
import pEntuple from '../assets/site/partner-entuple.webp';
import pShivalik from '../assets/site/partner-shivalik.webp';
import pStartupIndia from '../assets/site/partner-startup-india.webp';
import pTworks from '../assets/site/partner-tworks.webp';
import pYali from '../assets/site/partner-yali.webp';
import pAkron from '../assets/site/partner-akron.webp';
import pAspire from '../assets/site/partner-aspire.webp';
import pIcici from '../assets/site/partner-icici.webp';

import imgPant from '../assets/DirectorSir.webp';
import imgPraveen from '../assets/deputy.jpg';
import imgDvivedi from '../assets/site/team-akshay-dvivedi.webp';
import imgRastogi from '../assets/Gk.webp';
import imgTrivedi from '../assets/ankit.webp';
import imgDalela from '../assets/dalera.webp';

/* ------------------------------------------------------------------ */
/* Organisation                                                        */
/* ------------------------------------------------------------------ */

export const org = {
  name: 'AARTI Foundation',
  short: 'AARTI',
  expansion: 'Automotive and Allied Research and Technology Innovation',
  tagline: 'An Industry Accelerator of IIT Roorkee',
  legal: 'Section 8 Company of IIT Roorkee',
  email: 'md@aarti.iitr.ac.in',
  // Contact-form submissions are delivered here via FormSubmit (formsubmit.co) — no backend needed.
  // The first submission sends a one-time activation link to this inbox; click it once to start receiving messages.
  contactFormEmail: 'aarti01062024@gmail.com',
  phone: '+91 94111 76136',
  phoneHref: '+919411176136',
  address: ['James Thomson Building', 'Indian Institute of Technology Roorkee', 'Roorkee, Uttarakhand 247667, India'],
  mapUrl: 'https://maps.google.com/?q=James+Thomson+Building+IIT+Roorkee',
  mapEmbed:
    'https://www.google.com/maps?q=James%20Thomson%20Building%2C%20IIT%20Roorkee&output=embed',
  social: {
    x: 'https://x.com/AARTIIITR',
    linkedin:
      'https://www.linkedin.com/company/aarti-allied-and-automotive-research-and-technology-innovation/',
  },
};

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navigation = [
  {
    label: 'About',
    children: [
      { label: 'About AARTI', to: '/about', note: 'Vision, mission and objectives' },
      { label: 'Board & Leadership', to: '/team', note: 'The people steering AARTI' },
      { label: 'Our Journey', to: '/about#journey', note: 'From 110 applications to 4 accelerated ventures' },
    ],
  },
  {
    label: 'Centres',
    children: [
      { label: 'CPM', to: '/cpm', note: 'Centre for Precision Manufacturing' },
      { label: 'RSVC', to: '/Rsvc', note: 'RuTAGe Smart Village Centre' },
      { label: 'EV Lab', to: '/ev-lab', note: 'Multiskilling lab for electric vehicles' },
    ],
  },
  {
    label: 'Focus Areas',
    children: [
      { label: 'E-Mobility', to: '/focus/e-mobility' },
      { label: 'Economic Growth', to: '/focus/economic-growth' },
      { label: 'Support & Development', to: '/focus/support-development' },
      { label: 'Innovation & Integration', to: '/focus/innovation' },
      { label: 'Networking', to: '/focus/networking' },
    ],
  },
  { label: 'Projects', to: '/projects' },
  {
    label: 'Opportunities',
    children: [
      { label: 'Tenders', to: '/tenders', note: 'Calls for bids and procurement notices' },
      { label: 'Careers', to: '/careers', note: 'Open positions and advertisements' },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const heroSlides = [
  { src: heroIitr, srcSm: heroIitrSm, caption: 'Main Building, IIT Roorkee' },
  { src: heroDrone, srcSm: heroDroneSm, caption: 'Agri-drone training for farmers and students' },
  { src: heroEvLab, srcSm: heroEvLabSm, caption: 'Electric Vehicle Multiskilling Lab' },
  { src: heroWorkbench, srcSm: heroWorkbenchSm, caption: 'EV powertrain training workbench' },
];

export const impactStats = [
  { value: 300, suffix: '', label: 'Industries mandated by MHI for acceleration training' },
  { value: 180, suffix: '+', label: 'Industries engaged across three business cohorts' },
  { value: 200, suffix: '+', label: 'Young women trained in emerging technologies' },
  { value: 4, suffix: '', label: 'Ventures approved under the MHI Industry Accelerator' },
];

export const focusAreas = [
  {
    slug: 'e-mobility',
    title: 'E-Mobility',
    summary: 'Accessible vehicles, axial-flux motors and indigenous EV platforms built with Indian start-ups.',
    to: '/focus/e-mobility',
    icon: 'zap',
  },
  {
    slug: 'economic-growth',
    title: 'Economic Growth',
    summary: 'Self-reliance through technology indigenisation and commercialisation of home-grown IP.',
    to: '/focus/economic-growth',
    icon: 'trending',
  },
  {
    slug: 'support-development',
    title: 'Support & Development',
    summary: 'Hands-on support for start-ups and skill development for the next industrial workforce.',
    to: '/focus/support-development',
    icon: 'users',
  },
  {
    slug: 'innovation',
    title: 'Innovation & Integration',
    summary: 'Moving ideas up the TRL and MRL ladder until they are ready for large-scale production.',
    to: '/focus/innovation',
    icon: 'layers',
  },
  {
    slug: 'networking',
    title: 'Networking',
    summary: 'Connecting founders with industry, regulators, investors and global academic partners.',
    to: '/focus/networking',
    icon: 'globe',
  },
];

export const backers = [
  { name: 'IIT Roorkee', role: 'Implementing institute', logo: logoIitr },
  { name: 'Ministry of Heavy Industries', role: 'Industry Accelerator programme, Government of India', logo: logoMhi },
  { name: 'ICAT', role: 'Co-host for testing, validation and industry outreach', logo: pIcat },
];

export const centres = [
  {
    code: 'CPM',
    name: 'Centre for Precision Manufacturing',
    summary:
      'A smart-factory emulation platform funded by the Ministry of Heavy Industries, built with the University of Akron — IoT, AI/ML, robotics and cyber-secure manufacturing.',
    to: '/cpm',
    image: momentEvOpening,
    imageAlt: 'Inauguration of a laboratory facility at IIT Roorkee',
  },
  {
    code: 'RSVC',
    name: 'RuTAGe Smart Village Centre',
    summary:
      'Women-led, community-driven rural transformation through a hub-and-spoke model. First prize at the NSE Social Stock Exchange event, Varanasi.',
    to: '/Rsvc',
    image: rsvcTeam,
    imageAlt: 'RuTAGe Smart Village Centre inauguration with community leaders',
  },
  {
    code: 'EV Lab',
    name: 'Electric Vehicle Multiskilling Lab',
    summary:
      'Industry-grade setups for EV training, powertrain and battery testing, charging and simulation — sponsored by ICICI Foundation.',
    to: '/ev-lab',
    image: momentEvDemo,
    imageAlt: 'Demonstration on an electric two-wheeler training bench',
  },
];

export const highlights = [
  {
    tag: 'Outreach',
    date: '17–20 March 2026',
    title: 'Capacity building for 200+ young women in emerging technology',
    text: 'Held to commemorate the 500th birth anniversary of Rani Abakka Chowta at IIT Roorkee.',
    image: womenCapacity,
    imageAlt: 'Capacity building session for young women at IIT Roorkee',
    featured: true,
  },
  {
    tag: 'Recognition',
    title: 'First prize at the NSE Social Stock Exchange',
    text: 'The RSVC model, led by AARTI, was awarded for accelerating social impact in rural India.',
    image: momentNse,
    imageAlt: 'AARTI team receiving the NSE Social Stock Exchange award',
  },
  {
    tag: 'Regulatory',
    title: 'DGCA approval as a Remote Pilot Training Organisation',
    text: 'AARTI is cleared by DGCA to run remote-pilot (drone) training to national standards.',
  },
  {
    tag: 'Industrial R&D',
    title: 'Patent filed for a compact LED driver with Hella India',
    text: 'A low-cost driver meeting the highest EMI/EMC standards below 1 A — prototype built at IIT Roorkee.',
  },
  {
    tag: 'Brand & IP',
    title: 'AARTI and RuTAGe marks accepted in the Trademark Journal',
    text: 'Both logos accepted for publication, strengthening the identity of AARTI programmes.',
  },
  {
    tag: 'Training',
    date: '1–4 March 2025',
    title: 'Capacity building courses launched',
    text: 'A four-day workshop on green hydrogen and a drone course on agriculture for farmers and school students.',
  },
];

export const journey = [
  { value: 'PAN India', label: 'Call launched' },
  { value: '110', label: 'Applications received' },
  { value: '32', label: 'Shortlisted to present' },
  { value: 'DPRs', label: 'Detailed project reports invited' },
  { value: '6', label: 'Presented to MHI Screening Committee' },
  { value: '4', label: 'Approved by MHI Apex Committee' },
];

export const technologies = [
  {
    slug: 'accessible-mobility-vehicle',
    title: 'Accessible Mobility Vehicle',
    company: 'Yali Mobility Pvt. Ltd.',
    summary: 'Lets people with locomotor disabilities drive directly from their wheelchair.',
    image: yali,
    gallery: [{ src: divyangjan, alt: 'Accessible mobility vehicle for Divyangjan' }],
    description:
      'Yali is an accessible mobility vehicle that allows persons with locomotor disabilities to drive it directly along with their wheelchair, ensuring independence and comfort. The vehicle features a retractable ramp, a wheelchair docking mechanism, and electric motor and battery management systems.',
    features: [
      'Wheelchair docking system',
      'Retractable ramp',
      'Soft suspension for comfort',
      'Advanced battery management',
      'Enhanced safety mechanisms',
    ],
    technology:
      'An accessible vehicle for wheelchair users with improved safety and reduced physical effort for ingress and egress.',
    futureScope:
      'Docking systems for metros, trains and buses — extending commute inclusivity for wheelchair users.',
    video: 'https://iitr.ac.in/Careers/static/SRIC/Media1.mp4',
  },
  {
    slug: 'axial-flux-motor',
    title: 'Axial Flux Motor & Controller',
    company: 'Bodycast Innovators Pvt. Ltd.',
    summary: 'A soft-magnetic-composite motor leading on efficiency and power density.',
    image: axialMotor,
    gallery: [
      { src: motorDesign, alt: 'Axial flux motor — design' },
      { src: motorBuild, alt: 'Axial flux motor — build and applications' },
    ],
    description:
      'Design, build and manufacture of a novel axial flux motor from Soft Magnetic Composite (SMC). Class-leading on almost every parameter over existing motors — efficiency, power density, cost and size/weight — with a significant reduction in the use of rare-earth metals.',
    features: [
      'High efficiency and power density',
      'Compact YASA-type design',
      'Reduced manufacturing cost',
      'SMC-based construction',
      'Lower rare-earth content',
    ],
    technology: 'Superior efficiency and torque density, suited to high-speed electric two- and three-wheelers.',
    futureScope: 'Applications beyond EVs — electric aircraft, large electric buses and compact e-axles.',
  },
  {
    slug: 'modular-e2w-platform',
    title: 'Modular E2W Platform',
    company: 'Creatara Mobility Pvt. Ltd.',
    summary: 'A modular electric two-wheeler platform for both B2C and B2B use.',
    image: e2w,
    description:
      'An advanced rider-safety and energy-efficient electric two-wheeler platform that adapts to any use case, with a connected-vehicle stack and a rugged powertrain.',
    features: [
      'Adapts to B2C and B2B use cases',
      'Rider safety and accident-avoidance system',
      'Connected vehicle',
      'Safe and rugged powertrain',
    ],
    technology: 'Modular chassis and electronics designed for rapid variant development.',
    futureScope: 'AI and ML for rider safety, vehicle optimisation and diagnostics.',
  },
  {
    slug: 'battery-pack-assembly',
    title: 'Battery Pack Assembly Equipment',
    company: 'Maestrotech Systems Pvt. Ltd.',
    summary: "India's first battery-cell sorting and double-sided spot-welding machines.",
    image: cellMachine,
    description:
      'A cell-sorting machine selects qualified cells from raw ones on quantitative criteria — capacity, resistance, open-circuit voltage — to assure the reliability and safety of assembled packs, alongside a double-sided spot-welding machine.',
    features: [
      'Selection of qualified cells on quantitative criteria',
      'Low-cost solution for cylindrical cell variants',
      'Faster, leaner battery-pack welding',
      "India's first cell-sorting & double-sided spot-welding machines",
    ],
    technology: 'Automated test-and-sort with precision resistance welding for cylindrical cells.',
    futureScope: 'Reducing reliance on imported battery-assembly equipment across Indian EV makers.',
  },
];

export const rfp = {
  title: 'Two industrial RFPs circulated to the IIT Roorkee community',
  intro:
    'Requests for Proposal were circulated through SRIC for industrial research. These companies shared their problem statements:',
  items: [
    {
      company: 'Avanti Bufa Pvt. Ltd.',
      problems: ['Automated quality-control system for thread-pitch evaluation after projection welding and powder coating.'],
    },
    {
      company: 'Notofire Pvt. Ltd.',
      problems: [
        'A UL 864-compliant 16-loop addressable fire-alarm control panel with interchangeable graphical/touchscreen displays and UL-compliant detectors.',
      ],
    },
    {
      company: 'Severn Glocon Valves Pvt. Ltd.',
      problems: [
        'Coating solutions for severe-service valve applications.',
        'Advanced valve seals for cryogenic applications (−196 °C to −253 °C).',
      ],
    },
    {
      company: 'Hella India Lighting Ltd. (SOE, Derabassi)',
      problems: [
        'Cost-optimised radar module for commercial vehicles — parking assistance and AIS-186 blind-spot information.',
        'Camera-based driver-drowsiness detection for commercial vehicles (AIS-184).',
        'A single LED driver module for HB, LB, DRL and position lights on 12 V and 24 V systems.',
      ],
    },
  ],
};

export const hellaCase = {
  title: 'A compact LED driver, from brief to patent',
  sponsor: 'Hella India Pvt. Ltd.',
  brief:
    'Develop a low-cost, compact LED driver that meets the highest EMI/EMC compliance standards while operating at less than 1 A current.',
  outcome: 'Prototype developed and patent filed by IIT Roorkee.',
  detail:
    'The microcontroller-based design covers power-supply operation, short-circuit protection and automatic switch-off for safe operation.',
  image: hellaPrototype,
};

export const cohorts = {
  title: 'Three business accelerator cohorts',
  text: [
    'AARTI has been mandated by the Ministry of Heavy Industries to train 300 industries. Three cohorts have run so far — focused on business acceleration, innovation and leadership for MSME owners, start-up founders and industry professionals — engaging participants from 180+ industries.',
    'To strengthen the IIT Roorkee ecosystem, every cohort reserves 15% of its seats for young start-ups and students.',
  ],
  images: [
    { src: cohort1, alt: 'Business accelerator cohort — leadership session' },
    { src: cohort3, alt: 'Business accelerator cohort participants at IIT Roorkee' },
  ],
};

export const rsvcSpotlight = {
  title: 'Rural transformation, led by women',
  text: 'Technical interventions in primary and secondary processing and supply-chain logistics — delivering measurable outcomes in integrated farming, livelihoods, education support and women’s empowerment.',
  partners: 'Nehir Himalayan Foundation · Sericulture Department · AARTI@IITR · SETU · local communities',
  images: [
    { src: rsvcCommunity, alt: 'RSVC community programme with women participants' },
    { src: rsvcAlmora, alt: 'RSVC inauguration in Almora, Uttarakhand' },
    { src: rsvcOnGround, alt: 'On-ground RSVC sessions with village communities' },
  ],
};

export const moments = [
  { src: momentMou, caption: 'MoU signing between AARTI and iHub DivyaSampark, IIT Roorkee', wide: true },
  { src: momentRsvc, caption: 'Inauguration of a RuTAGe Smart Village Centre' },
  { src: momentLamp, caption: 'Inaugural lamp lighting at a training programme' },
  { src: momentHellaMou, caption: 'MoU exchange with industry partners' },
  { src: momentHydrogen, caption: 'Training programme on green hydrogen plants' },
  { src: momentEvOpening, caption: 'Opening of the EV Multiskilling Lab', wide: true },
  { src: momentFelicitation, caption: 'Felicitation of distinguished guests' },
  { src: momentCourses, caption: 'Launch of capacity building courses, March 2025' },
  { src: momentRsvcExhibit, caption: 'RuTAGe technologies on display — Bageshwari wool charkha' },
  { src: momentEvTour, caption: 'Walkthrough of the EV Multiskilling Lab' },
];

export const partners = [
  { name: 'FORVIA Hella', logo: pHella },
  { name: 'ICAT', logo: pIcat },
  { name: 'ICICI Foundation', logo: pIcici },
  { name: 'University of Akron', logo: pAkron },
  { name: 'Lumax', logo: pLumax },
  { name: 'Altigreen', logo: pAltigreen },
  { name: 'IIML Incubator, IIM Lucknow', logo: pIiml },
  { name: 'Department of Design, IIT Kanpur', logo: pIitk },
  { name: 'MathWorks', logo: pMathworks },
  { name: 'Entuple Technologies', logo: pEntuple },
  { name: 'Startup India', logo: pStartupIndia },
  { name: 'T-Works', logo: pTworks },
  { name: 'ASPIRE — ICAT', logo: pAspire },
  { name: 'Yali Mobility', logo: pYali },
  { name: 'Bhagwanpur Industries Association', logo: pBia },
  { name: 'Shivalik College of Engineering', logo: pShivalik },
];

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  intro: [
    'AARTI — Automotive and Allied Research and Technology Innovation — is a Section 8 company set up by IIT Roorkee as an industry accelerator under the Ministry of Heavy Industries, with ICAT as co-host.',
    'We take technologies from the lab to the factory floor: mentoring start-ups, integrating Technology and Manufacturing Readiness Levels, running applied research for industry, and building the skills India’s capital-goods and mobility sectors need.',
  ],
  vision:
    'To establish a global ecosystem where every innovation seamlessly transitions from concept to commercialisation, creating a self-reliant and economically empowered society — driving transformative technology through industry-academia collaboration, start-up acceleration and advanced readiness frameworks, while nurturing human capital through focused capacity building.',
  mission: [
    'Foster dynamic collaboration between research and industry to bridge the gap from innovation to commercialisation.',
    'Support start-up ecosystems and accelerate the development of transformative technologies.',
    'Advance Technology (TRL) and Manufacturing (MRL) Readiness Levels to enable seamless scaling.',
    'Promote skill development and sustainability to empower communities and drive self-reliance.',
    'Build global partnerships for sustainable economic growth and global competitiveness.',
  ],
  values: [
    { title: 'Innovation & Excellence', text: 'Rigour of IIT research, applied to real industrial problems.' },
    { title: 'Sustainability', text: 'Clean mobility, green hydrogen and resource-efficient manufacturing.' },
    { title: 'Technological Advancement', text: 'Indigenous IP that reduces import dependence.' },
    { title: 'Ethics & Integrity', text: 'Transparent governance as a not-for-profit Section 8 company.' },
    { title: 'Social Responsibility', text: 'Rural, women-led and inclusive programmes alongside industry work.' },
  ],
  objectives: [
    {
      title: 'Accelerator for start-ups',
      text: 'Leverage the knowledge base and resources of IIT Roorkee and the practical insight of industry partners to give start-ups the tools, mentorship and guidance to nurture their ideas.',
    },
    {
      title: 'Technology & manufacturing readiness',
      text: 'Integrate readiness levels (TRL, MRL, IRL) so innovations progress beyond the experimental phase to large-scale production — bridging technology development and manufacturing.',
    },
    {
      title: 'Market propulsion of innovative technologies',
      text: 'Foster growth and sustainability by ensuring emerging innovations align with industry demand, and drive their market adoption through practical, market-ready solutions.',
    },
    {
      title: 'Knowledge dissemination & networking',
      text: 'Gather, create and disseminate knowledge, and provide a platform for networking between India and other countries for the benefit of research, technology and industry.',
    },
    {
      title: 'International collaborations',
      text: 'Leverage international alliances that add value to the chosen domains, connecting Indian research with global efforts, projects and advanced facilities.',
    },
    {
      title: 'Training & education',
      text: 'Enhance skills through certifications, short-term courses, exhibitions and seminars that foster continuous learning and professional development.',
    },
    {
      title: 'Innovation & start-up ecosystem',
      text: 'Promote technology-driven start-ups and an ecosystem bridging academia, financial institutions and industry — from problem identification and co-development to IP generation and sustainable revenue.',
    },
  ],
  governance: [
    {
      title: 'Collaborative governance',
      text: 'The Industry Accelerator is implemented through a Section 8 company established under the IIT Roorkee–ICAT collaboration, with a board drawn from both institutions. IIT Roorkee faculty across domains are enlisted as the programme grows.',
    },
    {
      title: 'Accelerating innovation',
      text: 'The company leverages IIT Roorkee’s resources and ICAT’s industry insight to provide tools, mentorship and guidance, with a focus on raising TRL and MRL so start-ups are ready for large-scale production.',
    },
    {
      title: 'Bringing innovations to market',
      text: 'The aim is to propel practical, market-ready technologies into the automotive and allied sectors — aligned with the AtmaNirbhar Bharat mission.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Team                                                                */
/* ------------------------------------------------------------------ */

export const board = [
  {
    name: 'Prof. K. K. Pant',
    role: 'Chairperson',
    affiliation: 'Director, IIT Roorkee',
    img: imgPant,
    link: 'https://www.iitr.ac.in/Institute/Director%20IIT%20Roorkee.html',
    lead: true,
  },
  { name: 'Prof. Praveen Kumar', role: 'Director', affiliation: 'Deputy Director, IIT Roorkee', img: imgPraveen, link: 'https://iitr.ac.in/' },
  {
    name: 'Prof. Akshay Dvivedi',
    role: 'Managing Director',
    affiliation: 'Mechanical & Industrial Engineering, IIT Roorkee',
    img: imgDvivedi,
    link: 'https://iitr.ac.in/Departments/Mechanical%20and%20Industrial%20Engineering%20Department/People/Faculty/100549.html',
  },
  {
    name: 'Mr. G. K. Rastogi',
    role: 'Director',
    affiliation: 'Finance Officer, IIT Roorkee',
    img: imgRastogi,
    link: 'https://iitr.ac.in/Administration/Institute%20Central%20Administration.html',
  },
  { name: 'Mr. Saurabh Dalela', role: 'Director', affiliation: 'Director, ICAT', img: imgDalela, link: 'https://in.linkedin.com/in/saurabhdalela' },
  { name: 'Mr. Ankit Trivedi', role: 'Director', affiliation: 'Lead — ICAT Incubation and Acceleration Centre', img: imgTrivedi },
];

/* ------------------------------------------------------------------ */
/* Projects & activities                                               */
/* ------------------------------------------------------------------ */

export const activities = [
  {
    title: '500th Birth Anniversary of Rani Abakka Chowta — capacity building for 200+ young women in emerging technology',
    date: '17–20 March 2026',
    location: 'IIT Roorkee',
    type: 'Outreach',
  },
  {
    title: 'International Conference on Transforming Waste Management: Circular Economy and Energy Sustainability 2.0',
    location: 'IIT Roorkee',
    type: 'Conference',
    image: intlConference,
  },
  {
    title: 'International Symposium on Transforming Waste Management: Circular Economy & Energy Sustainability',
    date: '28–29 November 2024',
    location: 'IIT Roorkee',
    type: 'Conference',
  },
  {
    title: 'Global academic exchange with Prof. Siamak Farhad (University of Tennessee) and Prof. Mohan Kolhe (University of Agder, Norway)',
    type: 'Academic exchange',
    image: globalFaculty,
  },
  { title: 'DGCA approval as a Remote Pilot Training Organisation (RPTO)', type: 'Regulatory' },
];

export const researchProjects = [
  {
    title: 'Compact LED driver meeting the highest EMI/EMC standards below 1 A',
    sponsor: 'Hella India Pvt. Ltd.',
    status: 'Prototype developed · patent filed',
  },
  {
    title: 'Design and development of a compact LED driver — a discrete electronic solution for EVs',
    sponsor: 'Hella India Pvt. Ltd.',
  },
  { title: 'Hydrogen reduction of mill scale — green steel from waste', sponsor: 'Hella India Pvt. Ltd.' },
  { title: 'IoT-based smoke, temperature and carbon-monoxide detection unit', sponsor: 'NOTOFIRE Pvt. Ltd.' },
];

/* ------------------------------------------------------------------ */
/* Opportunities                                                       */
/* ------------------------------------------------------------------ */

// `closes` is an ISO date — notices past this date are listed as closed automatically.
export const tenders = [
  {
    category: 'Equipment & Purchases',
    title: 'AARTI invites online bids for 3D Printing Systems',
    opened: '2025-01-23',
    closes: '2025-02-02',
    note: 'Closing date extended',
    status: 'Cancelled',
    documents: [
      { label: 'Tender notice', href: 'https://drive.google.com/file/d/1DDcXDiQG0Tr0sF7Y91aincmHVwXt1pj1/view?usp=sharing' },
      { label: 'Corrigendum — date extension', href: 'https://drive.google.com/file/d/1-Lw8SkAfNIe-HwgNpQ-eFhHcpg2SlHN3/view?usp=drive_link' },
      { label: 'Award of contract — cancelled', href: 'https://drive.google.com/file/d/1xNk5lL75LI0PVQJuvarl62HDAleq60UQ/view?usp=sharing' },
    ],
  },
];

export const jobs = [
  {
    title: 'Project Officer — ISVC Project',
    detail: 'Walk-in interview on 17 February 2026 at 2:00 PM.',
    closes: '2026-02-17',
    pdf: '/Advertisement-ISVC.pdf',
  },
  {
    title: 'Chief Executive Officer (CEO) / Chief Operating Officer (COO) / Chief Technical Officer (CTO)',
    detail: 'Advertisement dated 8 July 2025. Last date to apply: 20 July 2025, 5:00 PM.',
    closes: '2025-07-20',
    pdf: '/adv09072025.pdf',
  },
];

export const evLabImage = evLabCollage;
