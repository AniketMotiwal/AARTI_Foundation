import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowRight,
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiGlobe,
  FiLayers,
  FiMaximize2,
  FiTrendingUp,
  FiUsers,
  FiX,
  FiZap,
} from 'react-icons/fi';
import {
  about,
  backers,
  centres,
  cohorts,
  focusAreas,
  hellaCase,
  highlights,
  journey,
  moments,
  org,
  partners,
  rfp,
  rsvcSpotlight,
  technologies,
} from '../content';
import { Button, Container, Reveal, Section, SectionHeading, Tag, TextLink, cx } from '../ui';

const focusIcons = { zap: FiZap, trending: FiTrendingUp, users: FiUsers, layers: FiLayers, globe: FiGlobe };

/* ---------------------------------------------------------------- */

export const Intro = () => (
  <Section className="!pt-20 sm:!pt-28">
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <Reveal className="lg:col-span-7">
        <p className="eyebrow mb-4">Who we are</p>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-5xl">
          From the lab bench to the factory floor.
        </h2>
        <div className="prose-site mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          {about.intro.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <TextLink to="/about" className="mt-8">
          Vision, mission &amp; objectives
        </TextLink>
      </Reveal>

      <Reveal delay={120} className="lg:col-span-5">
        <div className="rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">Backed by</p>
          <ul className="mt-5 divide-y divide-line">
            {backers.map((b) => (
              <li key={b.name} className="flex items-center gap-5 py-5 first:pt-0 last:pb-0">
                <span className="flex h-16 w-28 shrink-0 items-center justify-center rounded-xl bg-paper p-2 ring-1 ring-line">
                  <img src={b.logo} alt={`${b.name} logo`} className="max-h-full max-w-full object-contain" loading="lazy" />
                </span>
                <span>
                  <span className="block font-semibold text-ink">{b.name}</span>
                  <span className="mt-0.5 block text-sm leading-snug text-ink-soft">{b.role}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </Section>
);

/* ---------------------------------------------------------------- */

export const FocusAreas = () => (
  <Section tone="surface">
    <SectionHeading
      eyebrow="Focus areas"
      title="Five areas of work, one goal — self-reliance."
      lead="Every programme at AARTI maps to one of these areas, aligned with the AtmaNirbhar Bharat mission."
    />
    <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
      {focusAreas.map((area, i) => {
        const Icon = focusIcons[area.icon];
        return (
          <Link
            key={area.slug}
            to={area.to}
            className="group relative flex flex-col bg-surface p-6 transition-colors duration-300 hover:bg-brand-950 sm:p-7 sm:last:col-span-2 lg:last:col-span-1"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-sm font-semibold text-gold-700 dark:text-gold-400 group-hover:text-gold-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors group-hover:bg-white/10 group-hover:text-gold-400 dark:bg-white/5 dark:text-gold-400">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
            </div>
            <h3 className="mt-10 font-display text-xl font-semibold text-ink group-hover:text-white">{area.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft group-hover:text-white/70">{area.summary}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:text-gold-400 dark:text-gold-400">
              Explore <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </Link>
        );
      })}
    </div>
  </Section>
);

/* ---------------------------------------------------------------- */

export const Centres = () => (
  <Section id="centres">
    <SectionHeading
      eyebrow="Centres of excellence"
      title="Three centres. Factory, village and classroom."
      lead="Each centre runs its own programmes, facilities and partners under the AARTI umbrella."
    />
    <div className="grid gap-6 md:grid-cols-3">
      {centres.map((c, i) => (
        <Reveal key={c.code} delay={i * 100}>
          <Link
            to={c.to}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-card transition-shadow duration-300 hover:shadow-lift"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={c.image}
                alt={c.imageAlt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-brand-950/85 px-3 py-1 text-xs font-bold tracking-wider text-gold-400 backdrop-blur">
                {c.code}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <h3 className="font-display text-xl font-semibold text-ink">{c.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{c.summary}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 dark:text-gold-400">
                Visit {c.code}
                <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  </Section>
);

/* ---------------------------------------------------------------- */

const HighlightMeta = ({ item, invert }) => (
  <div className="flex flex-wrap items-center gap-3">
    <Tag className={invert ? '!bg-white/15 !text-gold-300' : undefined}>{item.tag}</Tag>
    {item.date && <span className={cx('text-xs font-medium', invert ? 'text-white/70' : 'text-ink-soft')}>{item.date}</span>}
  </div>
);

export const Highlights = () => {
  const [featured, nse, ...rest] = highlights;
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="Recent highlights"
        title="What’s new at AARTI"
        action={<Button to="/projects" variant="outline" size="sm">All projects &amp; activities</Button>}
      />
      <div className="grid gap-5 lg:grid-cols-3">
        <Reveal className="lg:row-span-2">
          <article className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl bg-brand-950 text-white">
            <img src={featured.image} alt={featured.imageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/60 to-transparent" aria-hidden />
            <div className="relative p-7">
              <HighlightMeta item={featured} invert />
              <h3 className="mt-4 font-display text-2xl font-semibold leading-snug">{featured.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{featured.text}</p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-2">
          <article className="grid h-full overflow-hidden rounded-3xl border border-line bg-surface sm:grid-cols-2">
            <img src={nse.image} alt={nse.imageAlt} loading="lazy" className="h-56 w-full object-cover sm:h-full" />
            <div className="flex flex-col justify-center p-7">
              <HighlightMeta item={nse} />
              <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-ink">{nse.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{nse.text}</p>
              <TextLink to="/Rsvc" className="mt-5">
                About RSVC
              </TextLink>
            </div>
          </article>
        </Reveal>

        {rest.map((item, i) => (
          <Reveal key={item.title} delay={120 + i * 60}>
            <article className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7">
              <HighlightMeta item={item} />
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.text}</p>
            </article>
          </Reveal>
        ))}

        <Reveal delay={360}>
          <Link
            to="/about#recognition"
            className="group flex h-full min-h-[200px] flex-col justify-between rounded-3xl bg-gold-500 p-7 text-brand-950 transition-colors hover:bg-gold-400"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em]">Milestones</p>
            <p className="font-display text-2xl font-semibold leading-snug">
              Every recognition, approval and programme so far
              <FiArrowRight className="ml-2 inline h-6 w-6 transition-transform group-hover:translate-x-1" aria-hidden />
            </p>
          </Link>
        </Reveal>
      </div>
    </Section>
  );
};

/* ---------------------------------------------------------------- */

export const Journey = () => (
  <Section tone="navy" className="relative overflow-hidden">
    <div
      className="pointer-events-none absolute inset-0 opacity-40"
      style={{ backgroundImage: 'radial-gradient(50rem 26rem at 100% 0%, rgba(18,205,244,0.18), transparent 60%)' }}
      aria-hidden
    />
    <div className="relative">
      <SectionHeading
        invert
        eyebrow="Industry Accelerator · Ministry of Heavy Industries"
        title="From a national call to four funded ventures."
        lead="How AARTI selected the start-ups and industries now building indigenous EV technology with MHI support."
      />
      <ol className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
        {journey.map((step, i) => (
          <Reveal as="li" key={step.label} delay={i * 80} className="relative">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-500/60 text-xs font-semibold text-gold-400">
                {i + 1}
              </span>
              {i < journey.length - 1 && <span className="hidden h-px flex-1 bg-gradient-to-r from-gold-500/60 to-white/10 lg:block" aria-hidden />}
            </div>
            <p className="font-display text-4xl font-semibold text-white">{step.value}</p>
            <p className="mt-2 text-sm leading-snug text-white/65">{step.label}</p>
          </Reveal>
        ))}
      </ol>
      <div className="mt-14 flex flex-wrap gap-3">
        <Button to="/focus/economic-growth">See the funded projects</Button>
        <Button to="/about#journey" variant="ghostLight">
          How the accelerator works
        </Button>
      </div>
    </div>
  </Section>
);

/* ---------------------------------------------------------------- */

export const Technologies = () => (
  <Section tone="surface">
    <SectionHeading
      eyebrow="Technologies"
      title="Built by Indian start-ups, accelerated at AARTI."
      action={<Button to="/focus/e-mobility" variant="outline" size="sm">E-Mobility portfolio</Button>}
    />
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {technologies.map((t, i) => (
        <Reveal key={t.slug} delay={i * 80}>
          <Link to={`/technologies/${t.slug}`} className="group flex h-full flex-col rounded-3xl border border-line bg-page p-3 transition-shadow hover:shadow-lift">
            <div className="flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-paper p-6">
              <img src={t.image} alt={t.title} loading="lazy" className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-400">{t.company}</p>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">{t.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{t.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 dark:text-gold-400">
                View technology <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  </Section>
);

/* ---------------------------------------------------------------- */

export const IndustrialRD = () => (
  <Section id="industrial-rd">
    <SectionHeading
      eyebrow="Industrial R&D"
      title="Real problems from industry, solved at IIT Roorkee."
      lead={rfp.intro}
    />
    <div className="grid gap-6 lg:grid-cols-5">
      <Reveal className="lg:col-span-2">
        <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface">
          <div className="bg-paper p-4">
            <img src={hellaCase.image} alt="Hella India LED driver prototype — block diagram, PCB and test modes" loading="lazy" className="mx-auto max-h-72 object-contain" />
          </div>
          <div className="flex flex-1 flex-col p-7">
            <Tag>Case study · {hellaCase.sponsor}</Tag>
            <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-ink">{hellaCase.title}</h3>
            <blockquote className="mt-4 border-l-2 border-gold-500 pl-4 text-sm italic leading-relaxed text-ink-soft">“{hellaCase.brief}”</blockquote>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{hellaCase.detail}</p>
            <p className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden /> {hellaCase.outcome}
            </p>
          </div>
        </article>
      </Reveal>

      <Reveal delay={100} className="lg:col-span-3">
        <div className="h-full rounded-3xl border border-line bg-surface p-7 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">{rfp.title}</p>
          <ul className="mt-6 divide-y divide-line">
            {rfp.items.map((item) => (
              <li key={item.company} className="grid gap-3 py-5 first:pt-0 last:pb-0 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <h3 className="text-sm font-semibold text-ink">{item.company}</h3>
                <ul className="space-y-2">
                  {item.problems.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <TextLink to="/projects" className="mt-8">
            All research projects
          </TextLink>
        </div>
      </Reveal>
    </div>
  </Section>
);

/* ---------------------------------------------------------------- */

export const Programmes = () => (
  <Section tone="surface">
    <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
      <Reveal>
        <p className="eyebrow mb-4">Business accelerator</p>
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">{cohorts.title}</h2>
        <div className="prose-site mt-5 text-base leading-relaxed text-ink-soft">
          {cohorts.text.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3">
          {cohorts.images.map((img) => (
            <div key={img.alt} className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={120}>
        <p className="eyebrow mb-4">RuTAGe Smart Village Centre</p>
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">{rsvcSpotlight.title}</h2>
        <p className="mt-5 text-base leading-relaxed text-ink-soft">{rsvcSpotlight.text}</p>
        <p className="mt-4 text-sm text-ink-soft">
          <span className="font-semibold text-ink">Partners: </span>
          {rsvcSpotlight.partners}
        </p>
        <div className="mt-8 grid grid-cols-3 gap-3">
          {rsvcSpotlight.images.map((img) => (
            <div key={img.alt} className="aspect-square overflow-hidden rounded-2xl bg-muted">
              <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <TextLink to="/Rsvc" className="mt-8">
          Visit the RSVC website
        </TextLink>
      </Reveal>
    </div>
  </Section>
);

/* ---------------------------------------------------------------- */

const Lightbox = ({ items, index, onClose, onStep }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onStep]);

  const item = items[index];
  return (
    <div role="dialog" aria-modal="true" aria-label={item.caption} className="fixed inset-0 z-[120] flex items-center justify-center bg-brand-950/95 p-4" onClick={onClose}>
      <figure className="relative max-h-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.caption} className="max-h-[80vh] w-auto rounded-xl object-contain" />
        <figcaption className="mt-4 text-center text-sm text-white/80">
          {item.caption} <span className="ml-2 text-white/40">{index + 1} / {items.length}</span>
        </figcaption>
      </figure>
      <button type="button" onClick={onClose} className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" aria-label="Close">
        <FiX className="h-5 w-5" />
      </button>
      <button type="button" onClick={(e) => { e.stopPropagation(); onStep(-1); }} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" aria-label="Previous photo">
        <FiChevronLeft className="h-5 w-5" />
      </button>
      <button type="button" onClick={(e) => { e.stopPropagation(); onStep(1); }} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" aria-label="Next photo">
        <FiChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

/** Mosaic photo grid with a full-screen lightbox. Items: { src, caption, wide? } */
export const Gallery = ({ items }) => {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d) => setOpen((i) => (i + d + items.length) % items.length), [items.length]);

  return (
    <>
      <div className="grid grid-flow-dense auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] md:grid-cols-4 lg:auto-rows-[220px]">
        {items.map((m, i) => (
          <button
            key={m.src}
            type="button"
            onClick={() => setOpen(i)}
            className={cx('group relative overflow-hidden rounded-2xl bg-muted text-left', m.wide && 'col-span-2 row-span-2')}
            aria-label={`Open photo: ${m.caption}`}
          >
            <img src={m.src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
            <span className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" aria-hidden />
            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
              <span className="text-xs font-medium leading-snug text-white sm:text-sm">{m.caption}</span>
              <FiMaximize2 className="h-4 w-4 shrink-0 text-white/70 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
            </span>
          </button>
        ))}
      </div>
      {open !== null && <Lightbox items={items} index={open} onClose={close} onStep={step} />}
    </>
  );
};

export const Moments = () => (
  <Section>
    <SectionHeading eyebrow="Moments" title="Life at AARTI" lead="Inaugurations, MoUs, trainings and the people behind them." />
    <Gallery items={moments} />
  </Section>
);

/* ---------------------------------------------------------------- */

export const Partners = () => {
  const loop = [...partners, ...partners];
  return (
    <section className="border-y border-line bg-surface py-14" aria-labelledby="partners-heading">
      <Container>
        <p id="partners-heading" className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
          Programme partners &amp; collaborators
        </p>
      </Container>
      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="flex w-max animate-logo-scroll gap-4 group-hover:[animation-play-state:paused]">
          {loop.map((p, i) => (
            <li
              key={`${p.name}-${i}`}
              aria-hidden={i >= partners.length}
              className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-line bg-paper px-5"
              title={p.name}
            >
              <img src={p.logo} alt={i < partners.length ? p.name : ''} loading="lazy" className="max-h-12 max-w-full object-contain" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

/* ---------------------------------------------------------------- */

export const CallToAction = () => (
  <Section>
    <Reveal>
      <div className="relative overflow-hidden rounded-[2rem] bg-brand-700 px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(36rem 20rem at 100% 100%, rgba(240,175,0,0.35), transparent 60%), radial-gradient(30rem 18rem at 0% 0%, rgba(18,205,244,0.25), transparent 60%)',
          }}
          aria-hidden
        />
        <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 !text-gold-300">Work with us</p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Have an industrial problem worth solving?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
              Share a problem statement, sponsor research, join a cohort or bring your start-up to IIT Roorkee. We’ll
              connect you with the right faculty, labs and partners.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to={`mailto:${org.email}?subject=Partnership%20enquiry`} icon="external">
              Write to us
            </Button>
            <Button to="/careers" variant="ghostLight">
              Careers
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  </Section>
);
