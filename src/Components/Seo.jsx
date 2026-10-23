import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import {
  SITE_NAME,
  SITE_URL,
  buildCanonical,
  getSeoForPath,
} from '../seo/seoConfig';

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AARTI Foundation',
  alternateName: [
    'AARTI',
    'Automotive and Allied Research and Technology Innovation Foundation',
    'AARTI IIT Roorkee',
  ],
  url: SITE_URL,
  description:
    'Industry accelerator of IIT Roorkee — CPM (Centre for Precision Manufacturing), RSVC (RuTAGe Smart Village Centre), industrial R&D, and innovation.',
  parentOrganization: {
    '@type': 'EducationalOrganization',
    name: 'Indian Institute of Technology Roorkee',
    alternateName: 'IIT Roorkee',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Roorkee',
    addressRegion: 'Uttarakhand',
    postalCode: '247667',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://x.com/AARTIIITR',
    'https://www.linkedin.com/company/aarti-allied-and-automotive-research-and-technology-innovation',
  ],
};

const Seo = () => {
  const { pathname } = useLocation();
  const seo = getSeoForPath(pathname);
  const canonical = buildCanonical(seo.canonicalPath || pathname);
  const ogImage = `${SITE_URL.replace(/\/$/, '')}/logo.png`;

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content="AARTI Foundation, IIT Roorkee" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta name="geo.region" content="IN-UT" />
      <meta name="geo.placename" content="Roorkee" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />

      {(pathname === '/' || pathname.startsWith('/cpm') || pathname.startsWith('/Rsvc')) && (
        <script type="application/ld+json">{JSON.stringify(ORGANIZATION_JSON_LD)}</script>
      )}
    </Helmet>
  );
};

export default Seo;
