import React, { useEffect, useState } from 'react';
import { FiPause, FiPlay } from 'react-icons/fi';
import { heroSlides, impactStats } from '../content';
import { Button, Container, CountUp, cx } from '../ui';

const SLIDE_MS = 7000;

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!playing) return undefined;
    const t = setTimeout(() => setIndex((i) => (i + 1) % heroSlides.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [index, playing]);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-950 text-white" aria-label="Introduction">
        {heroSlides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt=""
            aria-hidden
            // React 18 doesn't know fetchPriority yet; the lowercase attribute passes through to the DOM
            // eslint-disable-next-line react/no-unknown-property
            fetchpriority={i === 0 ? 'high' : 'low'}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className={cx(
              'absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out',
              i === index ? 'opacity-100' : 'opacity-0',
              i === index && playing && 'animate-hero-zoom'
            )}
          />
        ))}
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(3,8,52,0.96)_0%,rgba(3,8,52,0.82)_38%,rgba(3,8,52,0.35)_75%,rgba(3,8,52,0.15)_100%)]"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-brand-950 to-transparent" aria-hidden />

        <Container className="flex min-h-[640px] flex-col justify-center pb-36 pt-16 sm:min-h-[700px] lg:min-h-[min(88vh,820px)] lg:pb-40">
          <p className="eyebrow mb-6 animate-fade-in !text-gold-400">Industry Accelerator of IIT Roorkee</p>
          <h1 className="max-w-3xl animate-fade-in font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight [animation-delay:80ms] sm:text-6xl lg:text-7xl">
            Where IIT Roorkee research{' '}
            <span className="italic text-gold-400">becomes</span> Indian industry.
          </h1>
          <p className="mt-6 max-w-xl animate-fade-in text-base leading-relaxed text-white/80 [animation-delay:160ms] sm:text-lg">
            AARTI — Automotive and Allied Research and Technology Innovation — takes deep-tech from lab to market:
            accelerating start-ups, solving industry problems and building the skills behind a self-reliant India.
          </p>
          <div className="mt-9 flex animate-fade-in flex-wrap gap-3 [animation-delay:240ms]">
            <Button to="/about">Discover AARTI</Button>
            <Button to="/contact" variant="ghostLight">
              Partner with us
            </Button>
          </div>
          <ul className="mt-10 flex animate-fade-in flex-wrap gap-x-6 gap-y-2 text-sm text-white/65 [animation-delay:320ms]">
            {['Supported by the Ministry of Heavy Industries', 'Co-hosted with ICAT', 'Section 8 not-for-profit'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </Container>

        <Container className="absolute inset-x-0 bottom-24 flex items-center justify-between gap-4 lg:bottom-28">
          <p className="hidden text-xs text-white/60 sm:block" aria-live="polite">
            {heroSlides[index].caption}
          </p>
          <div className="flex items-center gap-3">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show photo ${i + 1}: ${slide.caption}`}
                aria-current={i === index}
                className="group relative h-1 w-10 overflow-hidden rounded-full bg-white/25"
              >
                <span
                  className={cx('absolute inset-y-0 left-0 rounded-full bg-gold-400', i === index ? 'w-full' : i < index ? 'w-full opacity-50' : 'w-0')}
                  style={i === index && playing ? { animation: `loading-progress ${SLIDE_MS}ms linear` } : undefined}
                />
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              className="ml-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white/80 hover:bg-white/10"
              aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
            >
              {playing ? <FiPause className="h-3.5 w-3.5" /> : <FiPlay className="h-3.5 w-3.5" />}
            </button>
          </div>
        </Container>
      </section>

      <Container className="relative z-10 -mt-16 lg:-mt-20">
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-surface shadow-lift lg:grid-cols-4">
          {impactStats.map((s, i) => (
            <div
              key={s.label}
              className={cx(
                'flex flex-col gap-2 p-5 sm:p-7',
                i % 2 === 1 && 'border-l border-line',
                i > 1 && 'border-t border-line lg:border-t-0',
                i === 2 && 'lg:border-l'
              )}
            >
              <dt className="order-2 text-[0.82rem] leading-snug text-ink-soft sm:text-sm">{s.label}</dt>
              <dd className="order-1 font-display text-4xl font-semibold text-brand-700 dark:text-gold-400 sm:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </>
  );
};

export default Hero;
