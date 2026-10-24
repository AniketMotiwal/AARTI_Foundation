import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { CheckList, IconCard, LogoStrip, MicroHero } from '../micro';
import { Button, PageHeader, Reveal, Section, SectionHeading, TextLink } from '../ui';
import {
  about,
  collaborators,
  cpmHome,
  facilities,
  focusAreas,
  hero,
  ifactory,
  keyPoints,
  labPhotos,
  makeInIndia,
  mission,
  partnerModels,
  sdgs,
} from './content';

const SdgRow = () => (
  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
    {sdgs.map((s) => (
      <div key={s.code} className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4">
        <span className={`flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl text-white ${s.color}`}>
          <span className="text-[0.6rem] font-bold uppercase tracking-wider">SDG</span>
          <span className="font-display text-xl font-semibold leading-none">{s.code.split(' ')[1]}</span>
        </span>
        <span className="text-sm font-semibold leading-snug text-ink">{s.label}</span>
      </div>
    ))}
  </div>
);

const IFactory = () => (
  <Section tone="navy" id="ifactory" className="relative overflow-hidden">
    <div
      className="pointer-events-none absolute inset-0 opacity-40"
      style={{ backgroundImage: 'radial-gradient(50rem 26rem at 100% 0%, rgba(18,205,244,0.2), transparent 60%)' }}
      aria-hidden
    />
    <div className="relative">
      <SectionHeading invert eyebrow={`iFactory · ${ifactory.funder}`} title={ifactory.title} />
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="grid gap-3 sm:grid-cols-2">
          {ifactory.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <span className="font-display text-sm font-semibold text-gold-400">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{p.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {ifactory.photos.map((p) => (
            <div key={p.alt} className="aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
              <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <figure className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-black">
        <video className="block aspect-video w-full object-cover" src={ifactory.video} poster={ifactory.photos[0].src} autoPlay muted loop playsInline controls preload="metadata" />
        <figcaption className="bg-white/[0.04] px-5 py-4 text-center text-sm text-white/70">
          iFactory at IIT Roorkee — full platform walkthrough
        </figcaption>
      </figure>
    </div>
  </Section>
);

export const CpmOverview = () => (
  <>
    <MicroHero
      image={hero.image}
      imageAlt={hero.imageAlt}
      eyebrow={hero.eyebrow}
      title={hero.title}
      lead={hero.lead}
      actions={
        <>
          <Button to="/cpm#ifactory">Explore the iFactory</Button>
          <Button to="/cpm/facilities" variant="ghostLight">
            Our facilities
          </Button>
        </>
      }
    />
    <LogoStrip items={collaborators} className="-mt-10" />

    <Section className="!pt-20">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-4">Why CPM</p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            India’s next manufacturing leap needs precision.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">{mission}</p>
          <TextLink to="/cpm/about" className="mt-7">
            Vision, objectives &amp; global impact
          </TextLink>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {keyPoints.map((k, i) => (
            <IconCard key={k.title} {...k} delay={i * 60} />
          ))}
        </div>
      </div>
    </Section>

    <Section tone="surface" id="focus">
      <SectionHeading
        eyebrow="Focus areas"
        title="Six areas of research and practice."
        lead="From AI on the shop floor to precision finishing, each area connects IIT Roorkee research with industry problems."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {focusAreas.map((f, i) => (
          <IconCard key={f.title} {...f} index={i} delay={i * 60} className="bg-page" />
        ))}
      </div>
    </Section>

    <IFactory />

    <Section>
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4">Sustainable Development Goals</p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">CPM contributes to three SDGs.</h2>
          <div className="mt-8">
            <SdgRow />
          </div>
        </Reveal>
        <Reveal delay={100} className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-10">
          <div className="absolute inset-x-0 top-0 flex h-1.5" aria-hidden>
            <span className="flex-1 bg-[#FF9933]" />
            <span className="flex-1 bg-paper" />
            <span className="flex-1 bg-[#138808]" />
          </div>
          <p className="eyebrow mb-4">Make in India</p>
          <p className="font-display text-2xl leading-relaxed text-ink">{makeInIndia}</p>
        </Reveal>
      </div>
    </Section>

    <Section tone="muted">
      <SectionHeading eyebrow="Partner with CPM" title="Three ways to work with us." align="center" />
      <div className="grid gap-5 md:grid-cols-3">
        {partnerModels.map((m, i) => (
          <Reveal key={m.title} delay={i * 80} className="rounded-3xl border border-line bg-surface p-7">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 font-display font-semibold text-brand-950">{i + 1}</span>
            <h3 className="mt-6 font-display text-xl font-semibold text-ink">{m.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{m.text}</p>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button to="/contact" variant="navy">
          Talk to the CPM team
        </Button>
      </div>
    </Section>
  </>
);

export const CpmAbout = () => (
  <>
    <PageHeader
      eyebrow="About CPM"
      title="Centre for Precision Manufacturing"
      lead="Established under the AARTI Foundation at IIT Roorkee, in collaboration with the University of Akron, USA."
      home={cpmHome}
    />
    <Section>
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="prose-site text-lg leading-relaxed text-ink-soft lg:col-span-7">
          {about.intro.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={100} className="lg:col-span-5">
          <SdgRow />
        </Reveal>
      </div>
    </Section>

    <Section tone="surface" id="vision">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="Vision" title="A global leader in manufacturing." className="!mb-0" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
          {about.vision.map((v, i) => (
            <Reveal key={v.slice(0, 20)} delay={i * 60} className="rounded-3xl border border-line bg-page p-7 text-[0.95rem] leading-relaxed text-ink-soft">
              {v}
            </Reveal>
          ))}
        </div>
      </div>
    </Section>

    <Section id="objectives">
      <SectionHeading eyebrow="Objectives" title="What CPM sets out to do." />
      <ol className="grid gap-4 sm:grid-cols-2">
        {about.objectives.map((o, i) => (
          <Reveal as="li" key={o} delay={i * 40} className="flex gap-4 rounded-2xl border border-line bg-surface p-5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-800 dark:bg-gold-500/15 dark:text-gold-300">
              <FiCheck className="h-4 w-4" aria-hidden />
            </span>
            <span className="leading-relaxed text-ink">{o}</span>
          </Reveal>
        ))}
      </ol>
    </Section>

    <Section tone="navy" id="global">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading invert eyebrow="Global impact" title="International collaboration & technology transfer." className="!mb-0" />
        </div>
        <div className="lg:col-span-7">
          <CheckList items={about.global} invert />
        </div>
      </div>
    </Section>
  </>
);

export const CpmFacilities = () => (
  <>
    <PageHeader
      eyebrow="Infrastructure"
      title="Facilities"
      lead="State-of-the-art laboratories supporting precision manufacturing, smart factory research and industry collaboration at IIT Roorkee."
      home={cpmHome}
    />
    <Section>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {facilities.map((f, i) => (
          <IconCard key={f.title} {...f} delay={i * 50} />
        ))}
      </div>
    </Section>
    <Section tone="surface">
      <SectionHeading eyebrow="Inside the lab" title="The smart factory at CPM" action={<Button to="/cpm#ifactory" variant="outline" size="sm">Watch the iFactory walkthrough</Button>} />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {labPhotos.map((p, i) => (
          <div key={p.alt} className={`overflow-hidden rounded-2xl bg-muted ${i === 0 ? 'col-span-2 row-span-2' : 'aspect-[4/3]'}`}>
            <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </Section>
  </>
);
