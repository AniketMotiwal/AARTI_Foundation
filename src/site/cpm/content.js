// Copy for the CPM (Centre for Precision Manufacturing) microsite.
import cobot from '../../assets/site/cpm-cobot.webp';
import line1 from '../../assets/site/cpm-1.webp';
import line2 from '../../assets/site/cpm-2.webp';
import line3 from '../../assets/site/cpm-3.webp';
import line4 from '../../assets/site/cpm-4.webp';
import akronLogo from '../../assets/Akon.webp';
import mhiLogo from '../../assets/site/logo-mhi.webp';
import iitrLogo from '../../assets/site/logo-iitr.webp';
import aartiLogo from '../../assets/site/logo-aarti.webp';

export const cpmHome = { label: 'CPM', to: '/cpm' };

export const hero = {
  image: cobot,
  imageAlt: 'Collaborative robot and automatic tool changer at the CPM smart factory, IIT Roorkee',
  eyebrow: 'Centre for Precision Manufacturing · IIT Roorkee',
  title: 'Precision manufacturing for a self-reliant India.',
  lead: 'A research hub established under the AARTI Foundation in collaboration with the University of Akron, USA — with the goal of positioning India as a global leader in precision manufacturing.',
};

export const collaborators = [
  { name: 'IIT Roorkee', role: 'Host institute', logo: iitrLogo },
  { name: 'AARTI Foundation', role: 'Establishing body', logo: aartiLogo },
  { name: 'University of Akron, USA', role: 'Academic collaborator', logo: akronLogo },
  { name: 'Ministry of Heavy Industries', role: 'Funds the Smart Factory Emulation Platform', logo: mhiLogo },
];

export const mission =
  'The Centre for Precision Manufacturing (CPM) at IIT Roorkee is envisioned as a cutting-edge research hub, with the goal of positioning India as a global leader in precision manufacturing. It is established under the AARTI Foundation, in collaboration with the University of Akron, USA.';

export const keyPoints = [
  {
    icon: 'target',
    title: 'Significance of precision manufacturing',
    text: 'Critical for aerospace, defence, automotive and healthcare — sectors that depend on high-precision components and modern process control.',
  },
  {
    icon: 'flag',
    title: 'National importance',
    text: 'Aligned with industrial automation and the National Manufacturing Policy, supporting India’s target to raise manufacturing’s GDP contribution.',
  },
  {
    icon: 'award',
    title: 'Support for national initiatives',
    text: 'Advances Make in India through industry-ready infrastructure, technology transfer and globally competitive manufacturing capability.',
  },
  {
    icon: 'cpu',
    title: 'Research & innovation',
    text: 'State-of-the-art machinery, machine vision, closer process control and quality systems that address real industry challenges.',
  },
  {
    icon: 'users',
    title: 'Workforce development',
    text: 'Upskilling and reskilling programmes that build professionals ready for Industry 4.0 and precision manufacturing.',
  },
  {
    icon: 'globe',
    title: 'Global positioning',
    text: 'International collaboration — especially with the University of Akron — to attract partnerships and elevate India as a manufacturing hub.',
  },
];

export const focusAreas = [
  {
    icon: 'cpu',
    title: 'AI / ML in Manufacturing',
    tag: 'MHI platform',
    text: 'Ministry of Heavy Industries–supported research on intelligent manufacturing, predictive analytics and process optimisation.',
  },
  {
    icon: 'grid',
    title: 'Smart Manufacturing',
    tag: 'Research & education',
    text: 'A smart-factory emulation sandbox for IoT integration, digital manufacturing workflows and translational R&D with industry.',
  },
  {
    icon: 'tool',
    title: 'Precision Finishing & CNC',
    tag: 'CPM lab',
    text: 'Advanced machining, grinding and finishing for aerospace, automotive, defence and other high-value components.',
  },
  {
    icon: 'leaf',
    title: 'Sustainable Manufacturing',
    tag: 'Green manufacturing',
    text: 'Energy-efficient processes, waste reduction and responsible production integrated into manufacturing practice.',
  },
  {
    icon: 'link',
    title: 'Industry Collaboration',
    tag: 'Technology transfer',
    text: 'Industry–academia partnerships for technology transfer, commercialisation support and research services.',
  },
  {
    icon: 'users',
    title: 'Capacity Building',
    tag: 'Industry 4.0 skills',
    text: 'Upskilling and reskilling the workforce, with access to the best research equipment and expertise.',
  },
];

export const ifactory = {
  title: 'Smart Factory Emulation Platform for Research and Education',
  funder: 'Funded by the Ministry of Heavy Industries',
  pillars: [
    { title: 'IoT', text: 'Connected shop-floor systems for real-time monitoring, traceability and digital-twin-ready data flows.' },
    { title: 'Data generation', text: 'Structured production and process datasets for analytics, simulation and research validation.' },
    { title: 'AI / ML in manufacturing', text: 'Predictive quality, process optimisation and intelligent decision support on the emulation platform.' },
    { title: 'Cybersecurity in manufacturing', text: 'Securing OT/IT interfaces and industrial networks on modern connected production lines.' },
  ],
  photos: [
    { src: line1, alt: 'Smart factory emulation platform — full line view' },
    { src: line2, alt: 'Smart factory emulation platform — conveyor workstations' },
    { src: line3, alt: 'Smart factory emulation platform — integrated stations' },
    { src: line4, alt: 'Smart factory emulation platform — MHI-funded lab setup' },
  ],
  video: 'https://res.cloudinary.com/dmehcwvwi/video/upload/v1780914737/Ifactory_At_Iit_Roorkee_mq2qov.mp4',
};

export const sdgs = [
  { code: 'SDG 9', label: 'Industry, Innovation and Infrastructure', color: 'bg-[#FD6925]' },
  { code: 'SDG 4', label: 'Quality Education', color: 'bg-[#C5192D]' },
  { code: 'SDG 8', label: 'Decent Work and Economic Growth', color: 'bg-[#A21942]' },
];

export const makeInIndia =
  'CPM is committed to enhancing local manufacturing capabilities through strategic initiatives that support the Make in India campaign, driving economic growth and innovation.';

export const partnerModels = [
  { title: 'Membership in lieu of funding', text: 'Benefit from strategic influence over the centre’s research agenda.' },
  { title: 'Membership for facility usage', text: 'Access cutting-edge equipment and lab resources at IIT Roorkee.' },
  { title: 'Exclusive partnership model', text: 'Dedicated research engagements with exclusive benefits.' },
];

/* About page ---------------------------------------------------------- */

export const about = {
  intro: [
    'The Centre for Precision Manufacturing (CPM) is dedicated to advancing manufacturing techniques through research and collaboration. The Centre is committed to workforce development, sustainability and international partnerships, especially with the USA, contributing to the Make in India initiative by strengthening local manufacturing.',
    'CPM’s initiatives revolve around research in precision finishing, smart manufacturing and sustainability. By upskilling and reskilling the workforce, the Centre addresses the evolving needs of Industry 4.0 and beyond.',
  ],
  vision: [
    'CPM aspires to be a global leader in manufacturing by driving innovation in precision finishing, smart manufacturing and sustainable practices — contributing to the internationalisation of the Indian manufacturing sector, aligning with global standards and addressing the complex challenges of modern manufacturing.',
    'Through advanced research and development, CPM aims to increase the manufacturing sector’s contribution to India’s GDP, enhance local manufacturing capabilities, and attract international collaborations and investments.',
    'By fostering a future-ready workforce and integrating cutting-edge technology, CPM will help position India as a global manufacturing powerhouse — competitive on the world stage while contributing to the country’s economic growth.',
    'CPM also aims to build a strong international presence by collaborating with leading global manufacturing hubs, promoting knowledge exchange and technological advancement through excellence in manufacturing processes and continuous innovation.',
  ],
  objectives: [
    'Create a hub for cutting-edge research in precision manufacturing.',
    'Foster strong industry–academia partnerships for technology transfer.',
    'Upskill and reskill the workforce to meet Industry 4.0 demands.',
    'Support the Make in India initiative by enhancing local manufacturing.',
    'Establish international connections, especially with industries in the USA.',
    'Integrate sustainability into manufacturing through energy efficiency and waste reduction.',
    'Assist with technology commercialisation and support research services.',
    'Facilitate access to the best research equipment and expertise.',
  ],
  global: [
    'CPM is not just focused on national advancement — it aims to establish India as a global hub for precision manufacturing. Through strategic international collaborations, particularly with industries in the USA, CPM facilitates the exchange of knowledge, best practices and innovative technologies.',
    'CPM partners with global leaders with a focus on technology transfer and practical application, ensuring that the Centre’s research contributes to the advancement of precision manufacturing worldwide.',
    'By sharing expertise and skilling the workforce for Industry 4.0, these partnerships drive cutting-edge research and sustainable manufacturing practices — positioning India as an attractive destination for reliable, cost-effective manufacturing.',
  ],
};

/* Facilities page ----------------------------------------------------- */

export const facilities = [
  { icon: 'cpu', title: 'AI-based manufacturing', text: 'Advanced AI for predictive maintenance, quality control and supply-chain optimisation — enabling proactive decisions on the shop floor.' },
  { icon: 'grid', title: 'Smart Factory Emulation Platform', text: 'MHI-funded platform for IoT, data generation, AI/ML in manufacturing and cybersecurity — a sandbox for manufacturing R&D and education.' },
  { icon: 'tool', title: 'Advanced CNC machinery', text: 'Precision CNC vertical machining centres, grinding and high-tech equipment for precision finishing and industry-grade components.' },
  { icon: 'leaf', title: 'Energy efficiency & sustainability', text: 'Facilities designed to optimise energy use and minimise environmental impact across manufacturing processes.' },
  { icon: 'robot', title: 'Robotics & automation', text: 'AI-driven automation and human–machine collaboration for complex, high-precision manufacturing tasks.' },
  { icon: 'pen', title: 'Generative design', text: 'AI-assisted design exploration to accelerate R&D and innovative product development.' },
  { icon: 'truck', title: 'Supply-chain optimisation', text: 'Data-driven supply-chain intelligence for responsive, efficient production networks.' },
  { icon: 'shield', title: 'Cybersecurity in manufacturing', text: 'Protection of OT/IT systems and digital infrastructure on connected production lines.' },
];

export const labPhotos = [
  { src: cobot, alt: 'Collaborative robot cell with automatic tool changer' },
  ...ifactory.photos,
];
