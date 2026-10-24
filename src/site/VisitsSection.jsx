import React, { useMemo, useState } from 'react';
import { Gallery } from './home/HomeSections';
import { Section, SectionHeading, TextLink, cx } from './ui';
import { labs, visits, visitsFor } from './visits';

/**
 * Photo gallery of lab visits and training sessions.
 * `lab` pins it to one lab; without it, visitors can switch between labs with tabs.
 * Renders nothing until at least one photo exists.
 */
const VisitsSection = ({ lab, tone = 'page', eyebrow = 'Visits & training', title, lead }) => {
  const available = labs.filter((l) => visitsFor(l.id).length > 0);
  const [active, setActive] = useState('all');

  const items = useMemo(() => {
    if (lab) return visitsFor(lab);
    return active === 'all' ? visits : visitsFor(active);
  }, [lab, active]);

  if (!items.length && (lab || !visits.length)) return null;

  const activeLab = labs.find((l) => l.id === active);

  return (
    <Section tone={tone} id="visits">
      <SectionHeading
        eyebrow={eyebrow}
        title={title || 'Visits & training across our labs'}
        lead={lead || 'Students, industry delegations, defence personnel and distinguished guests at AARTI’s labs in IIT Roorkee.'}
      />

      {!lab && available.length > 1 && (
        <div role="tablist" aria-label="Filter by lab" className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
          {[{ id: 'all', name: 'All labs' }, ...available].map((l) => {
            const count = l.id === 'all' ? visits.length : visitsFor(l.id).length;
            const selected = active === l.id;
            return (
              <button
                key={l.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(l.id)}
                className={cx(
                  'inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
                  selected
                    ? 'border-brand-700 bg-brand-700 text-white dark:border-gold-500 dark:bg-gold-500 dark:text-brand-950'
                    : 'border-line bg-surface text-ink hover:bg-muted'
                )}
              >
                {l.name}
                <span className={cx('rounded-full px-1.5 text-xs', selected ? 'bg-white/20' : 'bg-muted text-ink-soft')}>{count}</span>
              </button>
            );
          })}
        </div>
      )}

      <Gallery key={lab || active} items={items} layout="masonry" />

      {!lab && activeLab?.to && (
        <TextLink to={activeLab.to} className="mt-8">
          More about the {activeLab.name}
        </TextLink>
      )}
    </Section>
  );
};

export default VisitsSection;
