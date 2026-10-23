import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { navigation, org } from '../content';
import { BrandLockup } from './SiteHeader';
import { Container } from '../ui';

const columns = [
  navigation.find((n) => n.label === 'About'),
  navigation.find((n) => n.label === 'Centres'),
  navigation.find((n) => n.label === 'Focus Areas'),
  {
    label: 'Get involved',
    children: [
      { label: 'Projects', to: '/projects' },
      { label: 'Tenders', to: '/tenders' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

const SiteFooter = () => (
  <footer className="bg-brand-950 text-white/70">
    <div className="h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-sky-brand" aria-hidden />
    <Container className="grid gap-12 py-16 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <BrandLockup invert />
        <p className="mt-6 max-w-sm text-sm leading-relaxed">
          {org.expansion} — the industry accelerator of IIT Roorkee, set up as a Section 8 company under the Ministry
          of Heavy Industries Industry Accelerator programme.
        </p>
        <ul className="mt-6 space-y-3 text-sm">
          <li className="flex gap-3">
            <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
            <a href={org.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              {org.address.join(', ')}
            </a>
          </li>
          <li className="flex gap-3">
            <FiMail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
            <a href={`mailto:${org.email}`} className="hover:text-white">
              {org.email}
            </a>
          </li>
          <li className="flex gap-3">
            <FiPhone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
            <a href={`tel:${org.phoneHref}`} className="hover:text-white">
              {org.phone}
            </a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
        {columns.map((col) => (
          <div key={col.label}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">{col.label}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {col.children.map((c) => (
                <li key={c.to}>
                  <Link to={c.to} className="transition-colors hover:text-gold-400">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>

    <div className="border-t border-white/10">
      <Container className="flex flex-col gap-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {org.name}, IIT Roorkee. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={org.social.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="AARTI on X"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            <FaXTwitter className="h-4 w-4" />
          </a>
          <a
            href={org.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="AARTI on LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            <FaLinkedinIn className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </div>
  </footer>
);

export default SiteFooter;
