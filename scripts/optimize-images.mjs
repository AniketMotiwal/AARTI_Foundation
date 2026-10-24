// Converts the large source photos in src/assets into web-sized WebP files
// under src/assets/site. Run with: npm run images
import sharp from 'sharp';
import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'src/assets';
const OUT = 'src/assets/site';

// [source file, output name, max width]
const jobs = [
  // Hero
  ['IIT-Roorkee.jpg', 'hero-iitr', 1920],
  ['DSC_9871.JPG', 'hero-drone-training', 1920],
  ['DSC_9851.JPG', 'hero-ev-lab', 1920],
  ['DSC_9834.JPG', 'hero-ev-workbench', 1920],

  // Moments / gallery
  ['DSC_2094.JPG', 'moment-mou-signing', 1400],
  ['DSC_3081.JPG', 'moment-rsvc-inauguration', 1400],
  ['DSC_3093.JPG', 'moment-rsvc-exhibit', 1400],
  ['DSC_9626.JPG', 'moment-lamp-lighting', 1400],
  ['DSC_9682.JPG', 'moment-capacity-courses', 1400],
  ['DSC_9686.JPG', 'moment-mou-exchange', 1400],
  ['DSC_9691.JPG', 'moment-hella-mou', 1400],
  ['DSC_9699.JPG', 'moment-green-hydrogen', 1400],
  ['DSC_9742.JPG', 'moment-felicitation', 1400],
  ['DSC_9819.JPG', 'moment-ev-lab-opening', 1400],
  ['DSC_9824.JPG', 'moment-ev-lab-tour', 1400],
  ['DSC_9838.JPG', 'moment-ev-lab-demo', 1400],

  // Programmes
  ['businnes-chorts1.jpg', 'cohort-1', 1200],
  ['businnes-chorts2.jpg', 'cohort-2', 1200],
  ['businnes-chorts3.jpg', 'cohort-3', 1200],
  ['Capcity building for young women.jpg', 'outreach-women-capacity', 1200],
  ['Int conf.jpg', 'outreach-intl-conference', 1200],
  ['sampak.jpg', 'outreach-global-faculty', 1200],
  ['Rsvc-speech.png', 'rsvc-community', 1200],
  ['rsvc.jpeg', 'rsvc-team', 1200],
  ['rutage.jpg', 'rsvc-centre', 1200],
  ['almora.jpg', 'rsvc-almora', 1200],
  ['Onground.png', 'rsvc-on-ground', 1200],
  ['Picture38.png', 'rsvc-nse-award', 1600],
  ['DSC_3081.JPG', 'rsvc-hero-inauguration', 1920],
  ['DSC_3093.JPG', 'rsvc-hero-exhibit', 1920],
  ['hellaportotype.jpg', 'hella-prototype', 1200],
  ['Picture1.jpg', 'ev-lab-collage', 1000],
  ['CPM1.jpg', 'cpm-1', 1200],

  // CPM microsite
  ['cobort cpm.jpg', 'cpm-cobot', 1200],
  ['CPM2.jpg', 'cpm-2', 1200],
  ['CPM3.jpg', 'cpm-3', 1200],
  ['CPM4.jpg', 'cpm-4', 1200],
  ['EV laboratory pics (2).jpg', 'cpm-lab-1', 1200],
  ['EV laboratory pics (4).jpg', 'cpm-lab-2', 1400],

  // RSVC microsite
  ['ISVC1.jpeg', 'isvc-nakot', 1400],
  ['ISVC2.jpeg', 'isvc-tehri', 1200],
  ['ISVC3.jpeg', 'isvc-champawat', 1200],
  ['ISVC4.jpeg', 'isvc-outreach', 1200],
  ['events.jpg', 'rsvc-springshed-workshop', 1200],
  ['rsvcintiatives.jpg', 'rsvc-khulgad-seminar', 1200],
  ['rsvcact2.jpg', 'rsvc-kisaan-mitra', 1200],
  ['rasct.jpg', 'rsvc-mulberry', 1200],
  ['picohydro.jpg', 'rsvc-tech-picohydro', 900],
  ['Air.jpg', 'rsvc-tech-cart', 900],
  ['ru.jpg', 'rsvc-tech-charkha', 900],
  ['hub.png', 'rsvc-layout-hub', 1600],
  ['spoke.png', 'rsvc-layout-spoke', 1600],
  ['rutage.jpg', 'rsvc-almora-centre', 1200],

  // EV Lab
  ['EV-LAB/EV-lab-1.jpeg', 'evlab-1', 1400],
  ['EV-LAB/EV-lab-2.jpeg', 'evlab-2', 1400],
  ['EV-LAB/EV-lab-3.jpeg', 'evlab-3', 1400],
  ['EV-LAB/EV-lab-4.jpeg', 'evlab-4', 1400],
  ['EV-LAB/EV-lab-5.jpeg', 'evlab-5', 1400],
  ['EV-LAB/EV-lab-6.jpeg', 'evlab-6', 1400],
  ['EV-LAB/EV-lab-7.jpeg', 'evlab-7', 1400],
  ['EV-LAB/EV-lab-8.jpeg', 'evlab-8', 1400],
  ['EV-LAB/EV-lab-9.jpeg', 'evlab-9', 1400],
];

// Small (mobile) variants of full-bleed hero photos, used via srcSet
const heroSmall = [
  ['IIT-Roorkee.jpg', 'hero-iitr-sm'],
  ['DSC_9871.JPG', 'hero-drone-training-sm'],
  ['DSC_9851.JPG', 'hero-ev-lab-sm'],
  ['DSC_9834.JPG', 'hero-ev-workbench-sm'],
  ['rsvc.jpeg', 'rsvc-team-sm'],
];
for (const [file, name] of heroSmall) jobs.push([file, name, 828]);

// Vector logos rasterised to WebP
const logos = [['MHI.svg', 'logo-mhi', 480]];

await mkdir(OUT, { recursive: true });

// Visit & training photos: every image dropped into src/assets/visits/<lab>/ is converted
// to src/assets/site/visits/<lab>/<same-name>.webp and shows up on the website automatically.
// The file name becomes the caption: "05-indian-army-training-visit.jpg" -> "Indian army training visit".
for (const lab of await readdir(path.join(SRC, 'visits'))) {
  const dir = path.join(SRC, 'visits', lab);
  if (!(await stat(dir)).isDirectory()) continue;
  await mkdir(path.join(OUT, 'visits', lab), { recursive: true });
  for (const file of await readdir(dir)) {
    if (!/\.(jpe?g|png|webp|heic)$/i.test(file)) continue;
    jobs.push([path.join('visits', lab, file), path.join('visits', lab, path.parse(file).name), 1600]);
  }
}

let before = 0;
let after = 0;
for (const [file, name, width] of jobs) {
  const input = path.join(SRC, file);
  const output = path.join(OUT, `${name}.webp`);
  await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 74, effort: 5 })
    .toFile(output);
  const a = (await stat(input)).size;
  const b = (await stat(output)).size;
  before += a;
  after += b;
  console.log(`${file.padEnd(40)} ${(a / 1024).toFixed(0).padStart(7)} KB -> ${(b / 1024).toFixed(0).padStart(5)} KB`);
}
// Brand marks: trim the empty canvas so both logos render at the same visual size
for (const [file, name] of [['logo.png', 'logo-aarti'], ['iit.png', 'logo-iitr']]) {
  await sharp(path.join(SRC, file))
    .trim({ threshold: 10 })
    .resize({ width: 320, height: 320, fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .webp({ quality: 90 })
    .toFile(path.join(OUT, `${name}.webp`));
  console.log(`${file.padEnd(40)} -> ${name}.webp`);
}

// Partner logos: trim surrounding whitespace so every logo fills its tile
const partnerLogos = [
  ['manthan.jpg', 'partner-manthan'],
  ['tr.jpg', 'partner-trif'],
  ['viransh.png', 'partner-viraansh'],
  ['platform.webp', 'partner-platform-commons'],
  ['Mphasis.jpg', 'partner-mphasis'],
  ['Picture12.png', 'partner-grant-thornton'],
  ['phd.png', 'partner-phd-chamber'],
  ['Rotary.png', 'partner-rotary'],
  ['infosys.png', 'partner-infosys'],
  ['Gram.webp', 'partner-gram-unnati'],
  ['sobus.png', 'partner-sobus'],
  ['rscvcbg.webp', 'partner-psa-manthan'],
  ['lucknow.png', 'partner-iiml'],
  ['Hella.png', 'partner-hella'],
  ['icat.jpg', 'partner-icat'],
  ['Lumnx.png', 'partner-lumax'],
  ['altgreen.png', 'partner-altigreen'],
  ['iitkanpur.png', 'partner-iitk-design'],
  ['Bhagwan.png', 'partner-bia'],
  ['mathworks.jpg', 'partner-mathworks'],
  ['Entuple.png', 'partner-entuple'],
  ['shiavlik.png', 'partner-shivalik'],
  ['startup.webp', 'partner-startup-india'],
  ['tworks.png', 'partner-tworks'],
  ['mob.png', 'partner-yali'],
  ['Akon.webp', 'partner-akron'],
  ['partners6.webp', 'partner-aspire'],
  ['ICICI_Foundation_Logo.png', 'partner-icici'],
];
for (const [file, name] of partnerLogos) {
  await sharp(path.join(SRC, file))
    .trim({ threshold: 20 })
    .resize({ width: 480, height: 240, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(path.join(OUT, `${name}.webp`));
  console.log(`${file.padEnd(40)} -> ${name}.webp`);
}

for (const [file, name, width] of logos) {
  await sharp(path.join(SRC, file), { density: 200 })
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(path.join(OUT, `${name}.webp`));
  console.log(`${file.padEnd(40)} -> ${name}.webp`);
}

console.log(`\nTotal:${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB`);
