// Visit & training photos for the three labs.
// Add a photo: drop it into src/assets/visits/<lab>/ and run `npm run images`.
// The file name becomes the caption ("05-indian-army-training-visit.jpg" -> "Indian Army Training Visit");
// a leading number only sets the order. Use `captions` below to override any caption.

const files = import.meta.glob('../assets/site/visits/*/*.webp', { eager: true, import: 'default' });

export const labs = [
  { id: 'ifactory', name: 'iFactory', to: '/cpm/ifactory' },
  { id: 'industrial-automation', name: 'Industrial Automation Lab' },
  { id: 'ev-lab', name: 'EV Lab', to: '/ev-lab' },
];

const captions = {
  'hands-on-training': 'Hands-on training on the line',
  'sub-assembly-station': 'Sub-assembly station',
};

const keepUpper = new Set(['ev', 'iit', 'iitr', 'mhi', 'icat', 'ai', 'iot', 'plc', 'cnc', 'bms', 'nss', 'ncc']);
const small = new Set(['a', 'an', 'and', 'at', 'by', 'for', 'in', 'of', 'on', 'the', 'to', 'with']);

const toCaption = (slug) =>
  captions[slug] ||
  slug
    .split('-')
    .map((w, i) => (keepUpper.has(w) ? w.toUpperCase() : i > 0 && small.has(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');

export const visits = Object.entries(files)
  .map(([file, src]) => {
    const [, lab, name] = file.match(/visits\/([^/]+)\/([^/]+)\.webp$/);
    const slug = name.replace(/^\d+[-_ ]*/, '');
    return { lab, src, order: name, caption: toCaption(slug) };
  })
  .sort((a, b) => a.order.localeCompare(b.order, undefined, { numeric: true }));

export const visitsFor = (lab) => visits.filter((v) => v.lab === lab);
