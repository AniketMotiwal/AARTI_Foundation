import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight, FiCalendar, FiMaximize2, FiX } from 'react-icons/fi';
import { icons } from '../icons';
import { CheckList, MicroHero } from '../micro';
import { Button, Container, PageHeader, Reveal, Section, SectionHeading, Tag, TextLink, cx } from '../ui';
import {
  activities,
  almoraTechnologies,
  approach,
  award,
  backers,
  fieldwork,
  hero,
  intro,
  isvc,
  manthanTechnologies,
  news,
  pillars,
  rsvcHome,
  strategicPartners,
  supporters,
} from './content';

/* ---------------------------------------------------------------- */

const ZoomImage = ({ src, alt }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="group relative block w-full overflow-hidden rounded-2xl border border-line bg-paper" aria-label={`Enlarge: ${alt}`}>
        <img src={src} alt={alt} loading="lazy" className="aspect-[16/10] w-full object-contain p-3" />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-brand-950/85 px-3 py-1.5 text-xs font-semibold text-white opacity-90 group-hover:opacity-100">
          <FiMaximize2 className="h-3.5 w-3.5" aria-hidden /> Enlarge
        </span>
      </button>
      {open && (
        <div role="dialog" aria-modal="true" aria-label={alt} className="fixed inset-0 z-[120] flex items-center justify-center bg-brand-950/95 p-4" onClick={() => setOpen(false)}>
          <img src={src} alt={alt} className="max-h-[88vh] w-auto rounded-xl bg-paper object-contain" />
          <button type="button" className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" aria-label="Close">
            <FiX className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  );
};

const IsvcGallery = () => {
  const [active, setActive] = useState(0);
  const photo = isvc.photos[active];
  return (
    <div>
      <figure className="relative overflow-hidden rounded-3xl bg-brand-950">
        <img src={photo.src} alt={photo.caption} className="aspect-[4/3] w-full object-cover" />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/90 to-transparent p-5 pt-16 text-sm text-white">
          <span className="mr-2 rounded-full bg-gold-500 px-2.5 py-1 text-xs font-bold text-brand-950">{photo.label}</span>
          {photo.caption}
        </figcaption>
      </figure>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {isvc.photos.map((p, i) => (
          <button
            key={p.label}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${p.label}`}
            aria-current={i === active}
            className={cx('overflow-hidden rounded-xl ring-2 transition', i === active ? 'ring-gold-500' : 'opacity-70 ring-transparent hover:opacity-100')}
          >
            <img src={p.src} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

/* ---------------------------------------------------------------- */

export const RsvcOverview = () => (
  <>
    <MicroHero
      image={hero.image}
      imageSm={hero.imageSm}
      imageAlt={hero.imageAlt}
      eyebrow={hero.eyebrow}
      title={hero.title}
      lead={hero.lead}
      actions={
        <>
          <Button to="/Rsvc#approach">Our model</Button>
          <Button to="/Rsvc/activities" variant="ghostLight">
            Field activities
          </Button>
        </>
      }
    >
      <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/65">
        {['First prize · NSE Social Stock Exchange', 'Women-led & community-driven', 'Hub & Spoke model'].map((t) => (
          <li key={t} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden />
            {t}
          </li>
        ))}
      </ul>
    </MicroHero>

    <Container className="relative z-10 -mt-10">
      <div className="grid overflow-hidden rounded-2xl border border-line bg-surface shadow-lift md:grid-cols-[1.4fr_1fr]">
        <div className="flex items-center gap-5 p-5 sm:p-6">
          <img src={award.image} alt="RSVC team receiving the NSE Social Stock Exchange award" className="h-20 w-28 shrink-0 rounded-xl object-cover sm:h-24 sm:w-36" />
          <div>
            <Tag>Recognition</Tag>
            <p className="mt-2 font-display text-lg font-semibold leading-snug text-ink">{award.title}</p>
            <p className="mt-1 hidden text-sm text-ink-soft sm:block">Varanasi · led by AARTI, IIT Roorkee</p>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-px border-t border-line bg-line md:border-l md:border-t-0">
          {backers.map((b) => (
            <li key={b.name} className="flex flex-col justify-center gap-2 bg-surface p-4">
              <span className="flex h-16 items-center justify-center rounded-lg bg-paper px-2">
                <img src={b.logo} alt={`${b.name} logo`} className="max-h-14 max-w-full object-contain" />
              </span>
              <span className="text-xs leading-snug text-ink-soft">{b.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </Container>

    <Section className="!pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4">About RSVC</p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">{intro.title}</h2>
          <div className="prose-site mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            {intro.text.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {intro.partners.map((p) => (
              <Tag key={p} className="!normal-case !tracking-normal">
                {p}
              </Tag>
            ))}
          </div>
        </Reveal>
        <Reveal delay={100} className="grid grid-cols-2 gap-3">
          {intro.images.map((img, i) => (
            <div key={img.alt} className={cx('overflow-hidden rounded-3xl bg-muted', i === 0 ? 'mt-10' : '')}>
              <img src={img.src} alt={img.alt} loading="lazy" className="aspect-[3/4] h-full w-full object-cover" />
            </div>
          ))}
        </Reveal>
      </div>
    </Section>

    <Section tone="surface" id="approach">
      <SectionHeading eyebrow="Our model" title="Hub & Spoke" lead={approach.lead} />
      <div className="grid gap-6 lg:grid-cols-2">
        {[approach.hub, approach.spoke].map((side, i) => (
          <Reveal key={side.title} delay={i * 100} className="flex flex-col rounded-3xl border border-line bg-page p-6 sm:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-3xl font-semibold text-ink">{side.title}</h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-400">{side.subtitle}</span>
            </div>
            <p className="mt-4 leading-relaxed text-ink-soft">{side.text}</p>
            <div className="mt-5">
              <CheckList items={side.points} />
            </div>
            <div className="mt-6">
              <ZoomImage src={side.layout} alt={`Layout — RSVC ${side.title}`} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section tone="navy" id="pillars">
      <SectionHeading invert eyebrow="RSVC framework" title="Five pillars, from first visit to measured impact." />
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {pillars.map((p, i) => (
          <Reveal as="li" key={p.title} delay={i * 70} className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 font-display font-semibold text-brand-950">{i + 1}</span>
            <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-white">{p.title}</h3>
            <ul className="mt-4 space-y-2">
              {p.items.map((t) => (
                <li key={t} className="flex gap-2.5 text-sm leading-snug text-white/65">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-400" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>

    <Section id="isvc">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Tag>{isvc.badge}</Tag>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">{isvc.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">{isvc.text}</p>
          <div className="mt-6">
            <CheckList items={isvc.points} />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <IsvcGallery />
        </Reveal>
      </div>
    </Section>

    <Section tone="surface">
      <SectionHeading eyebrow="In the field" title="Water, land and livelihoods" />
      <div className="space-y-6">
        {fieldwork.map((f, i) => (
          <Reveal key={f.title} className={cx('grid items-center gap-8 overflow-hidden rounded-3xl border border-line bg-page lg:grid-cols-2', i % 2 === 1 && 'lg:[&>*:first-child]:order-2')}>
            <img src={f.image} alt={f.title} loading="lazy" className="h-full max-h-[420px] w-full object-cover" />
            <div className="p-7 sm:p-10 lg:pl-2">
              <Tag>{f.tag}</Tag>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-ink">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{f.text}</p>
              <div className="mt-5">
                <CheckList items={f.points} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section>
      <SectionHeading eyebrow="News" title="Recent updates" action={<Button to="/Rsvc/activities" variant="outline" size="sm">All activities</Button>} />
      <div className="grid gap-6 md:grid-cols-2">
        {news.map((n) => {
          const external = n.to.startsWith('http');
          const Card = external ? 'a' : Link;
          const props = external ? { href: n.to, target: '_blank', rel: 'noopener noreferrer' } : { to: n.to };
          return (
            <Reveal key={n.title}>
              <Card {...props} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-shadow hover:shadow-lift">
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img src={n.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <Tag>{n.tag}</Tag>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink">{n.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{n.text}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 dark:text-gold-400">
                    {external ? 'Read the article' : 'Read more'}
                    {external ? <FiArrowUpRight className="h-4 w-4" aria-hidden /> : <FiArrowRight className="h-4 w-4" aria-hidden />}
                  </span>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  </>
);

export const RsvcActivities = () => (
  <>
    <PageHeader
      eyebrow="Activities"
      title="On the ground with RSVC"
      lead="Seminars, farmer meets and watershed programmes across the Himalayan villages RSVC serves."
      home={rsvcHome}
    />
    <Section>
      <div className="space-y-6">
        {activities.map((a, i) => (
          <Reveal key={a.title} className={cx('grid items-center overflow-hidden rounded-3xl border border-line bg-surface lg:grid-cols-2', i % 2 === 1 && 'lg:[&>*:first-child]:order-2')}>
            <img src={a.image} alt={a.title} loading="lazy" className="h-full max-h-[440px] w-full object-cover" />
            <div className="p-7 sm:p-10">
              {a.date && (
                <p className="inline-flex items-center gap-2 text-sm font-medium text-gold-700 dark:text-gold-400">
                  <FiCalendar className="h-4 w-4" aria-hidden /> {a.date}
                </p>
              )}
              <h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">{a.title}</h2>
              <p className="mt-4 leading-relaxed text-ink-soft">{a.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  </>
);

export const RsvcTechnologies = () => (
  <>
    <PageHeader
      eyebrow="Technologies"
      title="Rural technologies, field-tested"
      lead="RuTAG technologies deployed at RSVC Almora, and solutions from entities registered on the RuTAG Manthan platform."
      home={rsvcHome}
    />
    <Section>
      <SectionHeading eyebrow="RuTAG" title="Technologies at RSVC Almora" lead="Innovative solutions for sustainable development and livelihood enhancement." />
      <div className="grid gap-6 md:grid-cols-3">
        {almoraTechnologies.map((t, i) => (
          <Reveal key={t.title} delay={i * 80} className="overflow-hidden rounded-3xl border border-line bg-surface">
            <div className="flex aspect-square items-center justify-center bg-paper p-4">
              <img src={t.image} alt={t.title} loading="lazy" className="max-h-full max-w-full rounded-2xl object-contain" />
            </div>
            <h3 className="p-6 font-display text-lg font-semibold leading-snug text-ink">{t.title}</h3>
          </Reveal>
        ))}
      </div>
    </Section>
    <Section tone="surface" id="manthan">
      <SectionHeading eyebrow="RuTAG Manthan" title="Technologies from entities registered on Manthan" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {manthanTechnologies.map((g, i) => {
          const Icon = icons[g.icon];
          return (
            <Reveal key={g.title} delay={i * 60} className="rounded-3xl border border-line bg-page p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-white/5 dark:text-gold-400">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{g.title}</h3>
              <div className="mt-4">
                <CheckList items={g.items} />
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  </>
);

const LogoGrid = ({ items }) => (
  <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
    {items.map((p, i) => (
      <Reveal as="li" key={p.name} delay={i * 50} className="flex flex-col rounded-3xl border border-line bg-surface p-4">
        <span className="flex h-28 items-center justify-center rounded-2xl bg-paper p-4">
          <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
        </span>
        <span className="mt-4 px-1 font-semibold leading-snug text-ink">{p.name}</span>
        {p.role && <span className="mt-1 px-1 text-xs leading-snug text-ink-soft">{p.role}</span>}
      </Reveal>
    ))}
  </ul>
);

export const RsvcPartners = () => (
  <>
    <PageHeader
      eyebrow="Partners"
      title="Strategic partners & supporters"
      lead="RSVC collaborations include Nehir Himalayan Foundation, the Sericulture Department, SETU, AARTI@IITR and community partners — supporting measurable impact in farming, livelihoods and women’s empowerment."
      home={rsvcHome}
    />
    <Section>
      <SectionHeading eyebrow="Strategic partners" title="Building RSVC together" />
      <LogoGrid items={strategicPartners} />
    </Section>
    <Section tone="surface">
      <SectionHeading eyebrow="Supported by" title="Organisations backing the work" />
      <LogoGrid items={supporters} />
      <div className="mt-12 text-center">
        <TextLink to="/contact">Become a partner</TextLink>
      </div>
    </Section>
  </>
);
