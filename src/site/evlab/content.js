// Copy for the Electric Vehicle Multiskilling Lab page (/ev-lab).
import hero from '../../assets/site/hero-ev-lab.webp';
import heroSm from '../../assets/site/hero-ev-lab-sm.webp';
import iciciLogo from '../../assets/ICICI_Foundation_Logo.png';
import lab1 from '../../assets/site/evlab-1.webp';
import lab2 from '../../assets/site/evlab-2.webp';
import lab3 from '../../assets/site/evlab-3.webp';
import lab4 from '../../assets/site/evlab-4.webp';
import lab5 from '../../assets/site/evlab-5.webp';
import lab6 from '../../assets/site/evlab-6.webp';
import lab7 from '../../assets/site/evlab-7.webp';
import lab8 from '../../assets/site/evlab-8.webp';
import lab9 from '../../assets/site/evlab-9.webp';

export const evHero = {
  image: hero,
  imageSm: heroSm,
  imageAlt: 'Electric vehicles and training benches inside the EV Multiskilling Lab',
  eyebrow: 'Electric Vehicle Multiskilling Lab · IIT Roorkee',
  title: 'Where India’s EV workforce is trained.',
  lead: 'Sustainable mobility meets cutting-edge research, hands-on training and real industry impact — sponsored by ICICI Foundation.',
};

export const sponsor = { name: 'ICICI Foundation', role: 'Lab sponsor', logo: iciciLogo };

export const evStats = [
  { value: 500, suffix: '+', label: 'Trainees skilled' },
  { value: 15, suffix: '+', label: 'Industry partners' },
  { value: 10, suffix: '+', label: 'Research projects' },
  { value: 6, suffix: '', label: 'Core facilities' },
];

export const evAbout = {
  title: 'Driving the future of sustainable mobility',
  text: [
    'IIT Roorkee leads innovation in sustainable mobility through advanced electric-vehicle research, prototyping and industry-aligned training.',
    'Students, researchers and industry professionals collaborate on next-generation EV technology — battery systems, powertrains, charging and simulation.',
  ],
  tags: ['Battery tech', 'Powertrain', 'BMS', 'Charging', 'Simulation'],
};

export const evPillars = [
  { icon: 'link', title: 'Industry collaboration', text: 'Partner with industry leaders and government bodies to accelerate EV adoption across India.' },
  { icon: 'cpu', title: 'R&D excellence', text: 'Facilitate cutting-edge research and development in electric-vehicle technology and systems.' },
  { icon: 'trending', title: 'Start-up support', text: 'Nurture start-ups and innovators building the next generation of EV solutions.' },
  { icon: 'users', title: 'Hands-on training', text: 'Practical, industry-grade training for students, researchers and professionals.' },
];

export const evObjectives = ['Skill development', 'Research advancement', 'Entrepreneurship', 'Industry collaboration', 'Sustainable EV development'];

export const evOutcomes = ['Enhanced learning', 'A start-up ecosystem', 'Industry partnerships', 'Outreach programmes'];

export const evFacilities = [
  { icon: 'tool', title: 'EV training set-up', text: 'Full-scale, hands-on EV assembly and diagnostics.' },
  { icon: 'zap', title: 'Powertrain testing', text: 'Motor, inverter and drivetrain validation.' },
  { icon: 'layers', title: 'Battery assembly', text: 'Pack design, BMS integration and assembly.' },
  { icon: 'shield', title: 'Battery testing', text: 'Cell characterisation and safety testing.' },
  { icon: 'zap', title: 'Charging station', text: 'AC/DC charging infrastructure and protocols.' },
  { icon: 'cpu', title: 'EV simulation kit', text: 'Virtual prototyping and hardware-in-the-loop simulation.' },
];

export const evVideo = 'https://res.cloudinary.com/dmehcwvwi/video/upload/v1776146484/EV_Lab005_hq3dps.mp4';

export const evGallery = [
  { src: lab1, caption: 'Lab overview — training stations and vehicles', wide: true },
  { src: lab3, caption: 'Battery learning and development kit' },
  { src: lab4, caption: 'Cell sorting, discharging and capacity testing' },
  { src: lab5, caption: 'Spot-welding workbench' },
  { src: lab2, caption: 'Powertrain test bench' },
  { src: lab6, caption: 'Electric three-wheeler training workbench' },
  { src: lab7, caption: 'Electric three-wheeler on the lab floor' },
  { src: lab8, caption: 'Two- and three-wheeler training stations' },
  { src: lab9, caption: 'Electric scooter on its training rig' },
];
