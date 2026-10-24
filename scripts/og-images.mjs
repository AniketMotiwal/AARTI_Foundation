// Generates 1200×630 social-share (Open Graph) images into public/og.
// Run with: npm run og
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const W = 1200;
const H = 630;
const OUT = 'public/og';

const cards = [
  {
    file: 'aarti',
    photo: 'src/assets/site/hero-iitr.webp',
    eyebrow: 'INDUSTRY ACCELERATOR OF IIT ROORKEE',
    title: ['Where IIT Roorkee research', 'becomes Indian industry.'],
    footer: 'AARTI Foundation · aarti.iitr.ac.in',
  },
  {
    file: 'cpm',
    photo: 'src/assets/site/cpm-cobot.webp',
    eyebrow: 'CENTRE FOR PRECISION MANUFACTURING',
    title: ['Precision manufacturing', 'for a self-reliant India.'],
    footer: 'CPM · AARTI Foundation, IIT Roorkee',
  },
  {
    file: 'rsvc',
    photo: 'src/assets/site/rsvc-team.webp',
    eyebrow: 'RUTAGE SMART VILLAGE CENTRE',
    title: ['Technology that works', 'for the village.'],
    footer: 'RSVC · AARTI Foundation, IIT Roorkee',
  },
  {
    file: 'ev-lab',
    photo: 'src/assets/site/hero-ev-lab.webp',
    eyebrow: 'ELECTRIC VEHICLE MULTISKILLING LAB',
    title: ['Where India’s EV', 'workforce is trained.'],
    footer: 'EV Lab · AARTI Foundation, IIT Roorkee',
  },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const overlay = (card) => `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#030834" stop-opacity="0.97"/>
      <stop offset="0.55" stop-color="#030834" stop-opacity="0.82"/>
      <stop offset="1" stop-color="#030834" stop-opacity="0.35"/>
    </linearGradient>
    <linearGradient id="bar" x1="0" x2="1">
      <stop offset="0" stop-color="#F0AF00"/><stop offset="0.6" stop-color="#FAC12E"/><stop offset="1" stop-color="#12CDF4"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect x="72" y="214" width="36" height="2" fill="#F0AF00"/>
  <text x="120" y="221" font-family="Segoe UI, Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="3" fill="#FAC12E">${esc(card.eyebrow)}</text>
  ${card.title
    .map(
      (line, i) =>
        `<text x="72" y="${300 + i * 72}" font-family="Georgia, 'Times New Roman', serif" font-size="62" font-weight="700" fill="#ffffff">${esc(line)}</text>`
    )
    .join('')}
  <text x="72" y="${H - 64}" font-family="Segoe UI, Arial, sans-serif" font-size="22" fill="#ffffff" fill-opacity="0.75">${esc(card.footer)}</text>
  <rect y="${H - 8}" width="${W}" height="8" fill="url(#bar)"/>
</svg>`;

// White rounded tile holding a logo
const tile = async (src, size) => {
  const logo = await sharp(src).resize(size - 16, size - 16, { fit: 'contain', background: '#ffffff' }).flatten({ background: '#ffffff' }).toBuffer();
  const mask = Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="18" fill="#fff"/></svg>`);
  return sharp(mask).composite([{ input: logo, top: 8, left: 8 }]).png().toBuffer();
};

await mkdir(OUT, { recursive: true });
const iit = await tile('src/assets/site/logo-iitr.webp', 104);
const aarti = await tile('src/assets/site/logo-aarti.webp', 104);

for (const card of cards) {
  await sharp(card.photo)
    .resize(W, H, { fit: 'cover', position: 'right' })
    .composite([
      { input: Buffer.from(overlay(card)), top: 0, left: 0 },
      { input: iit, top: 72, left: 72 },
      { input: aarti, top: 72, left: 192 },
    ])
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(`${OUT}/${card.file}.jpg`);
  console.log(`${OUT}/${card.file}.jpg`);
}

// Favicons (small files instead of the 2,800px logo)
await sharp('src/assets/site/logo-aarti.webp').resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile('public/favicon.png');
await sharp('src/assets/site/logo-aarti.webp')
  .resize(156, 156, { fit: 'contain', background: '#ffffff' })
  .extend({ top: 12, bottom: 12, left: 12, right: 12, background: '#ffffff' })
  .flatten({ background: '#ffffff' })
  .png()
  .toFile('public/apple-touch-icon.png');
console.log('public/favicon.png, public/apple-touch-icon.png');
