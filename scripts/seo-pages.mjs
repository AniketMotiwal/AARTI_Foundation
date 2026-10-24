// Runs after `vite build`. Writes one HTML file per sitemap URL (e.g. dist/cpm/about.html)
// with that page's title, description, canonical and social-share tags already in the <head>,
// so link previews (WhatsApp, LinkedIn, X) and crawlers see the right metadata without JS.
// .htaccess serves /path from /path.html when the file exists.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { SITE_NAME, buildCanonical, getSeoForPath, ogImageFor } from '../src/seo/seoConfig.js';

const DIST = 'dist';
const template = await readFile(path.join(DIST, 'index.html'), 'utf8');
const sitemap = await readFile('public/sitemap.xml', 'utf8');
const paths = [...sitemap.matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map((m) => m[1]);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const headFor = (pathname) => {
  const seo = getSeoForPath(pathname);
  const url = buildCanonical(seo.canonicalPath || pathname);
  const image = ogImageFor(pathname);
  const t = esc(seo.title);
  const d = esc(seo.description);
  return `<!--seo:start-->
    <title>${t}</title>
    <meta name="description" content="${d}" data-rh="true" />
    <meta name="keywords" content="${esc(seo.keywords)}" data-rh="true" />
    <link rel="canonical" href="${url}" data-rh="true" />
    <meta property="og:type" content="website" data-rh="true" />
    <meta property="og:site_name" content="${esc(SITE_NAME)}" data-rh="true" />
    <meta property="og:title" content="${t}" data-rh="true" />
    <meta property="og:description" content="${d}" data-rh="true" />
    <meta property="og:url" content="${url}" data-rh="true" />
    <meta property="og:image" content="${image}" data-rh="true" />
    <meta property="og:image:width" content="1200" data-rh="true" />
    <meta property="og:image:height" content="630" data-rh="true" />
    <meta property="og:locale" content="en_IN" data-rh="true" />
    <meta name="twitter:card" content="summary_large_image" data-rh="true" />
    <meta name="twitter:title" content="${t}" data-rh="true" />
    <meta name="twitter:description" content="${d}" data-rh="true" />
    <meta name="twitter:image" content="${image}" data-rh="true" />
    <!--seo:end-->`;
};

const render = (pathname) => template.replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, headFor(pathname));

for (const p of paths) {
  const file = p === '/' ? path.join(DIST, 'index.html') : path.join(DIST, `${p.replace(/\/$/, '')}.html`);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, render(p));
  console.log(`${p.padEnd(48)} -> ${file}`);
}
