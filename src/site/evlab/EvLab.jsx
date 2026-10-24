import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { CheckList, IconCard, LazyVideo, MicroHero } from '../micro';
import { Button, Container, CountUp, Reveal, Section, SectionHeading, Tag, cx } from '../ui';
import { Gallery } from '../home/HomeSections';
import { evAbout, evFacilities, evGallery, evHero, evObjectives, evOutcomes, evPillars, evStats, evVideo, sponsor } from './content';

const EvLab = () => (
  <>
    <MicroHero
      image={evHero.image}
      imageSm={evHero.imageSm}
      imageAlt={evHero.imageAlt}
      eyebrow={evHero.eyebrow}
      title={evHero.title}
      lead={evHero.lead}
      actions={
        <>
          <Button to="#facilities">Explore the lab</Button>
          <Button to="/contact" variant="ghostLight">
            Train with us
          </Button>
        </>
      }
    />

    <Container className="relative z-10 -mt-10">
      <div className="grid overflow-hidden rounded-2xl border border-line bg-surface shadow-lift lg:grid-cols-[1fr_auto]">
        <dl className="grid grid-cols-2 sm:grid-cols-4">
          {evStats.map((s, i) => (
            <div key={s.label} className={cx('flex flex-col gap-1 p-5 sm:p-6', i > 0 && 'sm:border-l', i % 2 === 1 && 'border-l', i > 1 && 'border-t sm:border-t-0', 'border-line')}>
              <dt className="order-2 text-sm text-ink-soft">{s.label}</dt>
              <dd className="order-1 font-display text-4xl font-semibold text-brand-700 dark:text-gold-400">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
        <div className="flex items-center gap-4 border-t border-line p-5 lg:border-l lg:border-t-0">
          <span className="flex h-14 w-36 items-center justify-center rounded-xl bg-paper px-3 ring-1 ring-line">
            <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="max-h-8 max-w-full object-contain" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">{sponsor.role}</span>
        </div>
      </div>
    </Container>

    <Section className="!pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4">About the lab</p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">{evAbout.title}</h2>
          <div className="prose-site mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            {evAbout.text.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {evAbout.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <figure className="overflow-hidden rounded-3xl border border-line bg-black">
            <LazyVideo className="block aspect-video w-full object-cover" src={evVideo} poster={evGallery[0].src} />
            <figcaption className="bg-surface px-5 py-4 text-sm text-ink-soft">EV Lab walkthrough — facilities, training set-ups and research spaces.</figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>

    <Section tone="surface">
      <SectionHeading eyebrow="Our mission" title="Four pillars powering India’s EV transition." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {evPillars.map((p, i) => (
          <IconCard key={p.title} {...p} index={i} delay={i * 60} className="bg-page" />
        ))}
      </div>
    </Section>

    <Section tone="navy">
      <div className="grid gap-10 lg:grid-cols-2">
        {[
          { title: 'Objectives', items: evObjectives },
          { title: 'Expected outcomes', items: evOutcomes },
        ].map((col) => (
          <Reveal key={col.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <p className="eyebrow mb-6 !text-gold-400">{col.title}</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {col.items.map((t) => (
                <li key={t} className="flex items-center gap-3 text-white">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500 text-brand-950">
                    <FiCheck className="h-4 w-4" aria-hidden />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section id="facilities">
      <SectionHeading eyebrow="Infrastructure" title="Industry-grade facilities" lead="End-to-end set-ups for EV education and research." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {evFacilities.map((f, i) => (
          <IconCard key={f.title} {...f} delay={i * 50} />
        ))}
      </div>
    </Section>

    <Section tone="surface">
      <SectionHeading eyebrow="Photo gallery" title="Inside the EV Lab" lead="Tap any photo to view it full screen." />
      <Gallery items={evGallery} />
      <div className="mt-12">
        <CheckList items={['Training for students, researchers and industry professionals — write to us to schedule a batch or a lab visit.']} />
        <Button to="/contact" variant="navy" className="mt-6">
          Enquire about training
        </Button>
      </div>
    </Section>
  </>
);

export default EvLab;
