// Copy for the RSVC (RuTAGe Smart Village Centre) microsite.
import heroTeam from '../../assets/site/rsvc-team.webp';
import nseAward from '../../assets/site/rsvc-nse-award.webp';
import inauguration from '../../assets/site/rsvc-hero-inauguration.webp';
import almoraCentre from '../../assets/site/rsvc-almora-centre.webp';
import almora from '../../assets/site/rsvc-almora.webp';
import onGround from '../../assets/site/rsvc-on-ground.webp';
import springshed from '../../assets/site/rsvc-springshed-workshop.webp';
import layoutHub from '../../assets/site/rsvc-layout-hub.webp';
import layoutSpoke from '../../assets/site/rsvc-layout-spoke.webp';
import isvcNakot from '../../assets/site/isvc-nakot.webp';
import isvcTehri from '../../assets/site/isvc-tehri.webp';
import isvcChampawat from '../../assets/site/isvc-champawat.webp';
import isvcOutreach from '../../assets/site/isvc-outreach.webp';
import khulgad from '../../assets/site/rsvc-khulgad-seminar.webp';
import kisaanMitra from '../../assets/site/rsvc-kisaan-mitra.webp';
import mulberry from '../../assets/site/rsvc-mulberry.webp';
import techCart from '../../assets/site/rsvc-tech-cart.webp';
import techPicohydro from '../../assets/site/rsvc-tech-picohydro.webp';
import techCharkha from '../../assets/site/rsvc-tech-charkha.webp';
import psaLogo from '../../assets/site/partner-psa-manthan.webp';
import manthan from '../../assets/site/partner-manthan.webp';
import iitr from '../../assets/site/logo-iitr.webp';
import trif from '../../assets/site/partner-trif.webp';
import viraansh from '../../assets/site/partner-viraansh.webp';
import platformCommons from '../../assets/site/partner-platform-commons.webp';
import mphasis from '../../assets/site/partner-mphasis.webp';
import grantThornton from '../../assets/site/partner-grant-thornton.webp';
import phd from '../../assets/site/partner-phd-chamber.webp';
import rotary from '../../assets/site/partner-rotary.webp';
import infosys from '../../assets/site/partner-infosys.webp';
import gramUnnati from '../../assets/site/partner-gram-unnati.webp';
import sobus from '../../assets/site/partner-sobus.webp';

export const rsvcHome = { label: 'RSVC', to: '/Rsvc' };

export const hero = {
  image: heroTeam,
  imageAlt: 'Inauguration of the RuTAGe Smart Village Centre with community leaders',
  eyebrow: 'RuTAGe Smart Village Centre · RSVC',
  title: 'Technology that works for the village.',
  lead: 'A rural-technology-enabled employment and entrepreneurship model — led by AARTI, the industry accelerator of IIT Roorkee — bringing validated innovations to Himalayan communities.',
};

export const backers = [
  { name: 'Office of the Principal Scientific Adviser', role: 'RuTAG Manthan platform, Government of India', logo: psaLogo },
  { name: 'IIT Roorkee', role: 'Hub institute', logo: iitr },
];

export const award = {
  title: 'First prize at the NSE Social Stock Exchange',
  text: 'The RSVC model, led by AARTI, an industry accelerator of IIT Roorkee, won first prize at the NSE Social Stock Exchange event in Varanasi.',
  image: nseAward,
};

export const intro = {
  title: 'Women-led, community-driven rural transformation',
  text: [
    'The RuTAGe Smart Village Centre aims to empower rural communities by enhancing technology adoption and promoting sustainable development.',
    'AARTI drives transformation through RSVC with technical interventions in primary and secondary processing and supply-chain logistics — delivering outcomes in integrated farming, livelihood generation, education support and women’s empowerment.',
  ],
  partners: ['Nehir Himalayan Foundation', 'Sericulture Department', 'AARTI@IITR', 'SETU', 'Local communities'],
  images: [
    { src: almoraCentre, alt: 'RuTAGe Smart Village Centre building' },
    { src: almora, alt: 'RSVC inauguration in Almora, Uttarakhand' },
  ],
};

export const approach = {
  lead: 'RSVC uses a Hub and Spoke model designed to enhance technology integration and community engagement in rural areas.',
  hub: {
    title: 'Hub',
    subtitle: 'Regional IIT incubator',
    text: 'Established at an IIT or reputed institute and working with a panel of industries — studying technology manufacturing scale-up, evaluating innovations, and advising on product design, cost reduction and local manufacturing.',
    points: [
      'Quality validation through IITs and designated technical labs.',
      'Established market access for innovators.',
      'Technology scale-up, design review and cost-reduction advisory.',
    ],
    layout: layoutHub,
  },
  spoke: {
    title: 'Spoke',
    subtitle: 'Village entrepreneurs',
    text: 'Dedicated centres — prefab units, permanent set-ups at village panchayats, or mobile units depending on household density — focused on structured community engagement and feedback.',
    points: [
      'Structured set-up for community engagement at panchayat level.',
      'Feedback collection to customise solutions for local needs.',
      'Prefab, permanent or mobile units based on household density.',
    ],
    layout: layoutSpoke,
  },
};

export const pillars = [
  {
    title: 'Awareness & requirement',
    items: ['Baseline study', 'Community engagement', 'Showcase of prototypes', 'Requirement gathering and field feedback'],
  },
  {
    title: 'Planning of tech transfer & localised manufacturing',
    items: [
      'Define an SOP / methodology for evaluation',
      'Evaluate existing technology design and scalability',
      'Funnel by requirement and organise tech transfer',
      'Cost relook',
      'Supply chain & logistics',
      'Plan start-up scale-up',
    ],
  },
  {
    title: 'Cost reduction & local manufacturing',
    items: ['Execute local manufacturing as planned', 'Execute cost reduction'],
  },
  {
    title: 'Deployment & training',
    items: ['Deployment of technologies', 'Support for loans & government schemes', 'Training and after-sales service'],
  },
  {
    title: 'Impact study',
    items: ['Impact study', 'Spoke-supported impact assessment'],
  },
];

export const isvc = {
  badge: 'Funded by Rallis',
  title: 'Integrated Smart Village Centres',
  text: 'AARTI has established Integrated Smart Village Centres in Nakot, Tehri and Champawat districts under the guidance of SETU Aayog for:',
  points: [
    'Digital governance services at the doorstep',
    'Livelihoods, skilling and entrepreneurship support',
    'Access to government schemes and entitlements',
    'A platform for community–administration coordination',
    'Technical intervention for rural development',
  ],
  photos: [
    { src: isvcNakot, label: 'Nakot', caption: 'Inauguration at Nakot' },
    { src: isvcTehri, label: 'Tehri', caption: 'Community engagement session at Tehri' },
    { src: isvcChampawat, label: 'Champawat', caption: 'Field team and beneficiaries at Champawat' },
    { src: isvcOutreach, label: 'Outreach', caption: 'On-ground activities at the centres' },
  ],
};

export const fieldwork = [
  {
    tag: 'Community workshop',
    title: 'One-day workshop on springshed management',
    text: 'A hands-on capacity-building session bringing together local stakeholders to strengthen springshed conservation and water security in the Himalayan region.',
    points: [
      'Integrated water-resource management — holistic strategies for sustainable springsheds.',
      'Community-centric conservation — empowering local communities to protect springsheds.',
    ],
    image: springshed,
  },
  {
    tag: 'Post-workshop impact',
    title: 'On-ground discussions after the workshop',
    text: 'Combining water conservation with socio-economic development through participatory field dialogues with farmers, women SHGs and youth groups.',
    points: [
      'Spring rejuvenation through watershed management.',
      'Climate-resilient cash crops like mulberry, ginger and turmeric.',
      'Community empowerment, especially of women and youth.',
    ],
    image: onGround,
  },
];

export const news = [
  {
    tag: 'ISVC launch',
    title: 'Integrated Smart Village Centres in Nakot, Tehri and Champawat',
    text: 'Set up under SETU Aayog guidance, offering digital governance, livelihoods, skilling, scheme access and technology-enabled rural development.',
    image: inauguration,
    to: '/Rsvc#isvc',
  },
  {
    tag: 'Award & inauguration',
    title: 'IIT Roorkee inaugurates Uttarakhand’s first RuTAGe Smart Village Centre in Almora',
    text: 'The RSVC model was honoured with the first prize at the NSE Social Stock Exchange event in Varanasi.',
    image: almora,
    to: 'https://www.educationtimes.com/article/newsroom/99736493/iit-roorkee-inaugurates-uttarakhands-first-rutage-smart-village-centre-in-almora',
  },
];

/* Activities ---------------------------------------------------------- */

export const activities = [
  {
    date: '10 November 2024',
    title: 'Seminar at RSVC Khunt Dhamas, Khulgad region',
    text: 'Organised under the aegis of REAP Almora and the Nehir Himalayan Institute, the seminar engaged 56 villages from the Khulgad region on water, forest and land conservation, along with women’s empowerment.',
    image: khulgad,
  },
  {
    date: '29 September 2024',
    title: 'Kisaan Mitra meet at Khunt RSVC',
    text: 'Participants showed real enthusiasm for advancing RSVC’s commitment to technical intervention in water, forests, land and women’s empowerment.',
    image: kisaanMitra,
  },
  {
    title: 'Plantation of 70,000 mulberry saplings',
    text: 'Part of a watershed-management programme that contributes to environmental conservation and creates employment for young people — helping curb migration from rural areas.',
    image: mulberry,
  },
];

/* Technologies -------------------------------------------------------- */

export const almoraTechnologies = [
  { title: 'Air-cooling-based vending cart', image: techCart },
  { title: 'Pico-hydro (watermill) based cold storage and other livelihood activities', image: techPicohydro },
  { title: 'Variable-speed solar-based Bageshwari wool charkha', image: techCharkha },
];

export const manthanTechnologies = [
  {
    icon: 'droplet',
    title: 'Agriculture & water',
    items: ['Satellite-based crop monitoring', 'Satellite-based soil analysis', 'IoT-based root-zone soil moisture / pH / EC', 'Central pivot system', 'Decision-support system for irrigation'],
  },
  {
    icon: 'book',
    title: 'Education',
    items: [
      'Integrated agri-technology course',
      'Good agriculture practice course',
      'Agri-business management course',
      'Agri-entrepreneur course',
      'Agri-technology field representative course',
      'Amra Raja rural skill development',
    ],
  },
  { icon: 'users', title: 'Livelihood', items: ['Biofloc fisheries', 'Cattle health tracking system', 'Handloom technologies'] },
  {
    icon: 'search',
    title: 'Advisory services',
    items: ['Crop-yield prediction', 'Livestock health', 'Fertigation schedule', 'Medicine schedule', 'Basal dose', 'Crop selection / crop rotation'],
  },
  {
    icon: 'trending',
    title: 'Fintech',
    items: ['Financial credit-access enabler systems', 'Blockchain-backed solutions for agricultural waste-management sustainability'],
  },
];

/* Partners ------------------------------------------------------------ */

export const strategicPartners = [
  { name: 'RuTAG Manthan', logo: manthan },
  { name: 'IIT Roorkee', logo: iitr },
  { name: 'Transform Rural India', role: 'National nodal partner for community engagement & entrepreneurship', logo: trif },
  { name: 'Viraansh', role: 'National implementation partner', logo: viraansh },
  { name: 'Platform Commons', logo: platformCommons },
  { name: 'Mphasis', logo: mphasis },
  { name: 'Grant Thornton', role: 'Facilitating “Lakhpati Didi”', logo: grantThornton },
];

export const supporters = [
  { name: 'PHD Chamber of Commerce and Industry', logo: phd },
  { name: 'Rotary District 3131', logo: rotary },
  { name: 'Infosys Foundation', logo: infosys },
  { name: 'Gram Unnati', logo: gramUnnati },
  { name: 'SOBUS', logo: sobus },
];
