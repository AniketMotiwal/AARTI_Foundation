import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { about, backers, highlights } from '../content';
import { Journey } from '../home/HomeSections';
import { Button, PageHeader, Reveal, Section, SectionHeading, Tag, cx } from '../ui';

const Objectives = () => {
  const [open, setOpen] = useState(0);
  return (
    <ul className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface">
      {about.objectives.map((o, i) => {
        const isOpen = open === i;
        return (
          <li key={o.title}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-5 px-6 py-5 text-left transition-colors hover:bg-muted sm:px-8"
              >
                <span className="font-display text-sm font-semibold text-gold-600">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex-1 font-display text-lg font-semibold text-ink">{o.title}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft">
                  {isOpen ? <FiMinus className="h-4 w-4" /> : <FiPlus className="h-4 w-4" />}
                </span>
              </button>
            </h3>
            <div className={cx('grid transition-[grid-template-rows] duration-300', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
              <div className="overflow-hidden">
                <p className="px-6 pb-6 pl-[3.75rem] text-[0.95rem] leading-relaxed text-ink-soft sm:px-8 sm:pl-[4.25rem]">{o.text}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const About = () => (
  <>
    <PageHeader
      eyebrow="About AARTI"
      title="An industry accelerator, built by IIT Roorkee."
      lead="Automotive and Allied Research and Technology Innovation — a Section 8 company taking Indian innovation from concept to commercialisation."
    />

    <Section>
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow mb-4">Who we are</p>
          <div className="prose-site space-y-0 text-lg leading-relaxed text-ink-soft">
            {about.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={100} className="lg:col-span-5">
          <ul className="grid gap-3">
            {backers.map((b) => (
              <li key={b.name} className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4">
                <span className="flex h-14 w-24 shrink-0 items-center justify-center rounded-xl bg-paper p-2 ring-1 ring-line">
                  <img src={b.logo} alt={`${b.name} logo`} className="max-h-full max-w-full object-contain" />
                </span>
                <span>
                  <span className="block font-semibold text-ink">{b.name}</span>
                  <span className="block text-sm text-ink-soft">{b.role}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>

    <Section tone="surface" id="vision">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="relative overflow-hidden rounded-3xl bg-brand-950 p-8 text-white sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/20 blur-3xl" aria-hidden />
          <p className="eyebrow mb-5 !text-gold-400">Our vision</p>
          <p className="relative font-display text-xl leading-relaxed sm:text-2xl">{about.vision}</p>
        </Reveal>
        <Reveal delay={100} className="rounded-3xl border border-line bg-page p-8 sm:p-10" id="mission">
          <p className="eyebrow mb-5">Our mission</p>
          <ol className="space-y-5">
            {about.mission.map((m, i) => (
              <li key={m} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-100 text-xs font-bold text-gold-800 dark:bg-gold-500/15 dark:text-gold-300">
                  {i + 1}
                </span>
                <span className="leading-relaxed text-ink">{m}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>

    <Section id="objectives">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Objectives"
              title="What we set out to do."
              lead="Seven objectives guide every programme, partnership and investment at AARTI."
              className="!mb-0"
            />
          </div>
        </div>
        <div className="lg:col-span-8">
          <Objectives />
        </div>
      </div>
    </Section>

    <Section tone="surface" id="values">
      <SectionHeading eyebrow="Core values" title="How we work." align="center" />
      <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {about.values.map((v, i) => (
          <Reveal key={v.title} delay={i * 60} className="bg-surface p-7 sm:last:col-span-2 lg:last:col-span-1">
            <span className="block h-1 w-8 rounded-full bg-gold-500" aria-hidden />
            <h3 className="mt-6 font-display text-lg font-semibold text-ink">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>

    <div id="journey">
      <Journey />
    </div>

    <Section>
      <SectionHeading eyebrow="Implementation" title="How the accelerator works." />
      <div className="grid gap-6 md:grid-cols-3">
        {about.governance.map((g, i) => (
          <Reveal key={g.title} delay={i * 80} className="rounded-3xl border border-line bg-surface p-7">
            <h3 className="font-display text-xl font-semibold text-ink">{g.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{g.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section tone="muted" id="recognition">
      <SectionHeading eyebrow="Milestones" title="Recognition & outreach" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {highlights.map((h) => (
          <article key={h.title} className="rounded-3xl border border-line bg-surface p-7">
            <div className="flex flex-wrap items-center gap-3">
              <Tag>{h.tag}</Tag>
              {h.date && <span className="text-xs text-ink-soft">{h.date}</span>}
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">{h.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{h.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <Button to="/team" variant="navy">
          Meet the board
        </Button>
        <Button to="/projects" variant="outline">
          Projects &amp; activities
        </Button>
      </div>
    </Section>
  </>
);

export default About;
