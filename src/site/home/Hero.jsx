import React, { useEffect, useRef, useState } from 'react';
import { FiAward, FiPause, FiPlay, FiSend } from 'react-icons/fi';
import { backers, heroSlides, impactStats } from '../content';
import { Button, Container, CountUp, cx } from '../ui';

const SLIDE_MS = 7000;
const WORD_MS = 2800;

// Last line of the headline cycles through what AARTI turns research into.
const outcomes = ['Indian industry.', 'new start-ups.', 'smart villages.', 'skilled talent.'];

const mhiLogo = backers.find((b) => b.name.startsWith('Ministry'))?.logo;

const floatingCards = [
  {
    key: 'nse',
    icon: <FiAward className="h-5 w-5" aria-hidden />,
    kicker: 'First prize',
    title: 'NSE Social Stock Exchange',
    note: 'RuTAGe Smart Village Centre model',
    pos: 'right-[6%] top-[14%]',
    depth: 18,
    delay: '0s',
  },
  {
    key: 'mhi',
    logo: mhiLogo,
    kicker: 'Industry Accelerator',
    title: 'Ministry of Heavy Industries',
    note: 'Four ventures approved for funding',
    pos: 'right-[24%] top-[44%]',
    depth: 30,
    delay: '-2.5s',
  },
  {
    key: 'dgca',
    icon: <FiSend className="h-5 w-5" aria-hidden />,
    kicker: 'DGCA approved',
    title: 'Remote Pilot Training Organisation',
    note: 'Drone training to national standards',
    pos: 'right-[3%] top-[60%]',
    depth: 12,
    delay: '-5s',
  },
];

const usePrefersReducedMotion = () => {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!mq) return undefined;
    setReduce(mq.matches);
    const onChange = (e) => setReduce(e.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);
  return reduce;
};

const RotatingWord = ({ paused }) => {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(() => setI((n) => (n + 1) % outcomes.length), WORD_MS);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <span className="block">
      <span className="sr-only">{outcomes[0]}</span>
      <span className="grid" aria-hidden>
        {outcomes.map((w, n) => (
          <span
            key={w}
            className={cx(
              'relative w-fit pb-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [grid-area:1/1]',
              n === i ? 'translate-y-0 opacity-100 blur-0' : n === (i - 1 + outcomes.length) % outcomes.length ? '-translate-y-6 opacity-0 blur-sm' : 'translate-y-6 opacity-0 blur-sm'
            )}
          >
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-sky-brand bg-clip-text italic text-transparent">{w}</span>
            {n === i && (
              <svg className="absolute bottom-0 left-0 h-3 w-full text-gold-400" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                <path
                  d="M2 9 C 60 2, 140 2, 298 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray="1"
                  vectorEffect="non-scaling-stroke"
                  className={paused ? undefined : 'animate-draw'}
                  style={paused ? undefined : { strokeDashoffset: 1 }}
                />
              </svg>
            )}
          </span>
        ))}
      </span>
    </span>
  );
};

const GlassCard = ({ card }) => (
  <div className="w-80 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md">
    <div className="flex items-center gap-3">
      {card.logo ? (
        <span className="flex h-11 w-20 shrink-0 items-center justify-center rounded-xl bg-paper px-1.5">
          <img src={card.logo} alt="" className="max-h-full max-w-full object-contain" />
        </span>
      ) : (
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500 text-brand-950">{card.icon}</span>
      )}
      <div className="min-w-0">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold-300">{card.kicker}</p>
        <p className="text-sm font-semibold leading-snug text-white">{card.title}</p>
      </div>
    </div>
    <p className="mt-3 border-t border-white/10 pt-3 text-xs text-white/65">{card.note}</p>
  </div>
);

const Hero = () => {
  const reduce = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const playing = !userPaused && !reduce;
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!playing) return undefined;
    const t = setTimeout(() => setIndex((i) => (i + 1) % heroSlides.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [index, playing]);

  // Only download the visible slide and the next one; the first preload waits until the page has settled.
  const [mounted, setMounted] = useState(() => new Set([0]));
  useEffect(() => {
    const t = setTimeout(
      () => setMounted((s) => new Set([...s, index, (index + 1) % heroSlides.length])),
      index === 0 ? 2500 : 0
    );
    return () => clearTimeout(t);
  }, [index]);

  // Pointer parallax for the floating cards — written to CSS variables, so no re-renders.
  const onPointerMove = (e) => {
    if (reduce || e.pointerType !== 'mouse') return;
    const el = sectionRef.current;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    el.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };

  return (
    <>
      <section
        ref={sectionRef}
        onPointerMove={onPointerMove}
        className="relative isolate overflow-hidden bg-brand-950 text-white [--mx:0] [--my:0]"
        aria-label="Introduction"
      >
        {heroSlides.map((slide, i) =>
          mounted.has(i) ? (
            <img
              key={slide.src}
              src={slide.src}
              srcSet={`${slide.srcSm} 828w, ${slide.src} 1920w`}
              sizes="100vw"
              alt=""
              aria-hidden
              // React 18 doesn't know fetchPriority yet; the lowercase attribute passes through to the DOM
              // eslint-disable-next-line react/no-unknown-property
              fetchpriority={i === 0 ? 'high' : 'low'}
              decoding={i === 0 ? 'sync' : 'async'}
              className={cx(
                'absolute inset-0 -z-30 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out',
                i === index ? 'opacity-100' : 'opacity-0',
                i === index && playing && 'animate-hero-zoom'
              )}
            />
          ) : null
        )}

        {/* Colour wash, glow and grid layers */}
        <div
          className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,rgba(3,8,52,0.97)_0%,rgba(3,8,52,0.86)_40%,rgba(3,8,52,0.5)_72%,rgba(3,8,52,0.35)_100%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[34rem] w-[34rem] animate-drift rounded-full bg-gold-500/20 blur-[120px]" aria-hidden />
        <div className="pointer-events-none absolute -bottom-48 right-0 -z-10 h-[38rem] w-[38rem] animate-drift rounded-full bg-sky-brand/20 blur-[130px] [animation-delay:-11s]" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_30%_40%,black,transparent)]"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-brand-950 to-transparent" aria-hidden />

        {/* Floating highlight cards (large screens) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] xl:block" aria-hidden>
          {floatingCards.map((c) => (
            <div
              key={c.key}
              className={cx('absolute transition-transform duration-300 ease-out', c.pos)}
              style={{ transform: `translate3d(calc(var(--mx) * ${-c.depth}px), calc(var(--my) * ${-c.depth}px), 0)` }}
            >
              <div className={cx('animate-fade-in', !reduce && 'animate-float')} style={{ animationDelay: c.delay }}>
                <GlassCard card={c} />
              </div>
            </div>
          ))}
        </div>

        <Container className="flex min-h-[660px] flex-col justify-center pb-40 pt-16 sm:min-h-[720px] lg:min-h-[min(90vh,860px)] lg:pb-44">
          <p className="mb-7 inline-flex w-fit animate-fade-in items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] py-1.5 pl-2 pr-4 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-gold-300 sm:text-xs sm:tracking-[0.16em] backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-400" />
            </span>
            Industry Accelerator of IIT Roorkee
          </p>

          <h1 className="max-w-3xl animate-fade-in font-display text-[2.55rem] font-semibold leading-[1.05] tracking-tight [animation-delay:80ms] sm:text-6xl lg:text-7xl xl:max-w-[48rem]">
            Where IIT Roorkee research becomes
            <RotatingWord paused={reduce} />
          </h1>

          <p className="mt-6 max-w-xl animate-fade-in text-base leading-relaxed text-white/80 [animation-delay:160ms] sm:text-lg">
            AARTI — Automotive and Allied Research and Technology Innovation — takes deep-tech from lab to market:
            accelerating start-ups, solving industry problems and building the skills behind a self-reliant India.
          </p>

          <div className="mt-9 flex animate-fade-in flex-wrap gap-3 [animation-delay:240ms]">
            <Button to="/about" className="shadow-[0_10px_40px_-10px_rgba(240,175,0,0.7)]">
              Discover AARTI
            </Button>
            <Button to="/contact" variant="ghostLight" className="backdrop-blur-sm">
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

        {/* Slide caption, progress and scroll cue */}
        <Container className="absolute inset-x-0 bottom-24 flex items-center justify-between gap-4 lg:bottom-28">
          <p className="hidden items-center gap-2 text-xs text-white/60 sm:flex" aria-live="polite">
            <span className="h-px w-6 bg-white/40" aria-hidden />
            {heroSlides[index].caption}
          </p>
          <div className="hidden flex-col items-center gap-1 text-[0.65rem] uppercase tracking-[0.2em] text-white/50 lg:flex" aria-hidden>
            <span className="flex h-8 w-5 justify-center rounded-full border border-white/30 pt-1.5">
              <span className="h-1.5 w-1 animate-scroll-cue rounded-full bg-gold-400 motion-reduce:animate-none" />
            </span>
            Scroll
          </div>
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
              onClick={() => setUserPaused((p) => !p)}
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
                'group relative flex flex-col gap-2 p-5 transition-colors sm:p-7',
                i % 2 === 1 && 'border-l border-line',
                i > 1 && 'border-t border-line lg:border-t-0',
                i === 2 && 'lg:border-l'
              )}
            >
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-sky-brand transition-transform duration-500 group-hover:scale-x-100" aria-hidden />
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
