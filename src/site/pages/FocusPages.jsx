import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlayCircle } from 'react-icons/fi';
import { eMobilityData } from '../../information/eMobilityData';
import { Economicgrowth } from '../../information/EconomicGrowth';
import { Development } from '../../information/Devlopement';
import { innovation } from '../../information/Innovation';
import { Network } from '../../information/Network';
import { focusAreas, technologies } from '../content';
import { PageHeader, Reveal, Section, SectionHeading, Tag, cx } from '../ui';

const crumbs = [{ label: 'Focus Areas' }];

const OtherAreas = ({ current }) => (
  <Section tone="muted">
    <SectionHeading eyebrow="Explore" title="Other focus areas" />
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {focusAreas
        .filter((a) => a.slug !== current)
        .map((a) => (
          <Link key={a.slug} to={a.to} className="group rounded-3xl border border-line bg-surface p-6 transition-shadow hover:shadow-lift">
            <h3 className="font-display text-lg font-semibold text-ink">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.summary}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 dark:text-gold-400">
              Explore <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </Link>
        ))}
    </div>
  </Section>
);

const Bullets = ({ items }) => (
  <ul className="space-y-2">
    {items.map((t) => (
      <li key={t} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" aria-hidden />
        {t}
      </li>
    ))}
  </ul>
);

const Label = ({ children }) => <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-soft">{children}</p>;

/** Card for an MHI-funded project (Economic Growth / Support & Development data). */
const FundedProject = ({ p, index }) => {
  const c = p.project_costs;
  const outcomes = Object.values(p.expected_benefits || p.expected_outcomes || {}).filter((v) => typeof v === 'string');
  const milestones = p.timeline?.milestones || [];
  return (
    <Reveal as="article" delay={index * 60} className="overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="flex flex-col gap-6 border-b border-line p-6 sm:p-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-brand-700 dark:text-gold-400">{p.submitted_by}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold leading-snug text-ink">{p.project_name}</h3>
          <p className="mt-2 text-sm text-ink-soft">Submitted to {p.submitted_to}</p>
        </div>
        <dl className="grid shrink-0 grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line text-center">
          {[
            ['Total', c.total_cost],
            ['MHI', c.contributions?.MHI_Contribution],
            ['Industry', c.contributions?.industry_contribution],
          ].map(([k, v]) => (
            <div key={k} className="bg-page px-4 py-3">
              <dt className="text-[0.7rem] font-semibold uppercase tracking-wider text-ink-soft">{k}</dt>
              <dd className="mt-1 whitespace-nowrap font-display text-base font-semibold text-ink">{(v || '—').replace(' INR', '')}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-3">
        <div>
          <Label>Objectives</Label>
          <Bullets items={p.objectives || []} />
        </div>
        <div>
          <Label>Expected outcomes</Label>
          <Bullets items={outcomes} />
        </div>
        <div>
          {p.key_partners?.length > 0 && (
            <>
              <Label>Partners</Label>
              <div className="mb-6 flex flex-wrap gap-2">
                {p.key_partners.map((k) => (
                  <Tag key={k} className="!normal-case !tracking-normal">
                    {k}
                  </Tag>
                ))}
              </div>
            </>
          )}
          {milestones.length > 0 && (
            <>
              <Label>Timeline</Label>
              <Bullets items={milestones} />
            </>
          )}
        </div>
      </div>
    </Reveal>
  );
};

/* ---------------------------------------------------------------- */

export const EMobility = () => (
  <>
    <PageHeader
      eyebrow="Focus area 01"
      title="E-Mobility"
      lead="Sustainable, clean mobility built in India — from accessible vehicles for Divyangjan to rare-earth-light motors and battery-assembly equipment."
      crumbs={crumbs}
    />
    <Section>
      <SectionHeading eyebrow="Technologies" title="Accelerated at AARTI" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {technologies.map((t) => (
          <Link key={t.slug} to={`/technologies/${t.slug}`} className="group rounded-3xl border border-line bg-surface p-3 transition-shadow hover:shadow-lift">
            <div className="flex h-40 items-center justify-center rounded-2xl bg-white p-5">
              <img src={t.image} alt={t.title} loading="lazy" className="max-h-full object-contain" />
            </div>
            <div className="px-3 pb-3 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-400">{t.company}</p>
              <h3 className="mt-1 font-display font-semibold text-ink">{t.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </Section>
    <Section tone="surface">
      <SectionHeading eyebrow="Programme notes" title="E-mobility projects & insights" />
      <div className="grid gap-6 lg:grid-cols-2">
        {eMobilityData.map((p, i) => (
          <Reveal as="article" key={p.title} delay={i * 60} className="flex flex-col rounded-3xl border border-line bg-page p-7 sm:p-8">
            <p className="text-sm font-semibold text-brand-700 dark:text-gold-400">{p.partners}</p>
            <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-ink">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.features.map((f) => (
                <Tag key={f} className="!normal-case !tracking-normal">
                  {f}
                </Tag>
              ))}
            </div>
            <div className="mt-6 grid flex-1 gap-5 border-t border-line pt-5 sm:grid-cols-2">
              <div>
                <Label>Technology</Label>
                <p className="text-sm leading-relaxed text-ink-soft">{p.technology}</p>
              </div>
              <div>
                <Label>Future scope</Label>
                <p className="text-sm leading-relaxed text-ink-soft">{p.futureScope}</p>
              </div>
            </div>
            {p.videoSrc && (
              <a href={p.videoSrc} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline dark:text-gold-400">
                <FiPlayCircle className="h-5 w-5" aria-hidden /> Watch video
              </a>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
    <OtherAreas current="e-mobility" />
  </>
);

export const EconomicGrowth = () => (
  <>
    <PageHeader
      eyebrow="Focus area 02"
      title="Economic Growth"
      lead="Self-reliance through technology indigenisation and commercialisation — the ventures approved for funding under the Ministry of Heavy Industries."
      crumbs={crumbs}
    />
    <Section>
      <div className="space-y-6">
        {Economicgrowth.map((p, i) => (
          <FundedProject key={p.project_name} p={p} index={i} />
        ))}
      </div>
    </Section>
    <OtherAreas current="economic-growth" />
  </>
);

export const SupportDevelopment = () => (
  <>
    <PageHeader
      eyebrow="Focus area 03"
      title="Support & Development"
      lead="Targeted mentorship, facilities and skill development that move start-ups from prototype to production."
      crumbs={crumbs}
    />
    <Section>
      <div className="space-y-6">
        {Development.map((p, i) => (
          <FundedProject key={p.project_name} p={p} index={i} />
        ))}
      </div>
    </Section>
    <OtherAreas current="support-development" />
  </>
);

export const Innovation = () => {
  const ia = innovation[0].Innovation_and_Technology.Industry_Accelerator;
  const em = innovation[0].Innovation_and_Technology.Technological_Innovation?.E_Mobility;
  const stages = em?.ICAT_Auto_and_Mobility_Program?.Execution_Stages || [];
  return (
    <>
      <PageHeader eyebrow="Focus area 04" title="Innovation & Integration" lead={ia.Purpose} crumbs={crumbs} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-4">Industry Accelerator</p>
            <p className="font-display text-2xl leading-relaxed text-ink">{ia.Description}</p>
            {em?.Description && <p className="mt-6 text-base leading-relaxed text-ink-soft">{em.Description}</p>}
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <div className="rounded-3xl border border-line bg-surface p-7">
              <Label>Key areas of focus</Label>
              <Bullets items={ia.Key_Areas_of_Focus} />
            </div>
          </Reveal>
        </div>
      </Section>
      {stages.length > 0 && (
        <Section tone="surface">
          <SectionHeading eyebrow="ICAT Auto & Mobility Programme" title="From application to commercialisation" lead={em.ICAT_Auto_and_Mobility_Program.Launch_Plan} />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((s, i) => (
              <li key={s} className="rounded-3xl border border-line bg-page p-6">
                <span className="font-display text-3xl font-semibold text-gold-600">{String(i + 1).padStart(2, '0')}</span>
                <p className="mt-4 font-medium leading-snug text-ink">{s}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}
      <Section>
        <SectionHeading eyebrow="Partners" title="Who does what" />
        <div className="grid gap-5 md:grid-cols-2">
          {ia.Partners.map((p) => (
            <div key={p.Name} className="rounded-3xl border border-line bg-surface p-7">
              <h3 className="font-display text-xl font-semibold text-ink">{p.Name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.Role}</p>
            </div>
          ))}
        </div>
      </Section>
      <OtherAreas current="innovation" />
    </>
  );
};

export const Networking = () => (
  <>
    <PageHeader
      eyebrow="Focus area 05"
      title="Networking"
      lead="Networking for innovation and sustainable growth — connecting founders with industry, regulators, investors and mentors."
      crumbs={crumbs}
    />
    <Section>
      <div className="grid gap-6 lg:grid-cols-3">
        {Network.map((n, i) => {
          const points = n.advantages || n.benefits || [];
          const note = n.ecosystem_building || n.mentorship;
          return (
            <Reveal as="article" key={n.host || n.program} delay={i * 80} className={cx('flex flex-col rounded-3xl border border-line p-7 sm:p-8', i === 2 ? 'bg-brand-950 text-white' : 'bg-surface')}>
              <h3 className={cx('font-display text-2xl font-semibold', i === 2 ? 'text-white' : 'text-ink')}>{n.host || n.program}</h3>
              <ul className="mt-5 flex-1 space-y-3">
                {points.map((p) => (
                  <li key={p} className={cx('flex gap-3 text-sm leading-relaxed', i === 2 ? 'text-white/75' : 'text-ink-soft')}>
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
              {note && <p className={cx('mt-6 border-t pt-5 text-sm italic leading-relaxed', i === 2 ? 'border-white/15 text-white/60' : 'border-line text-ink-soft')}>{note}</p>}
            </Reveal>
          );
        })}
      </div>
    </Section>
    <OtherAreas current="networking" />
  </>
);
