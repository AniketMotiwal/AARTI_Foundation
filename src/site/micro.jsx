// Building blocks shared by the CPM and RSVC microsites.
import React from 'react';
import { icons } from './icons';
import { Container, Reveal, cx } from './ui';

export const MicroHero = ({ image, imageAlt, eyebrow, title, lead, actions, children }) => (
  <section className="relative isolate overflow-hidden bg-brand-950 text-white">
    <img
      src={image}
      alt={imageAlt}
      className="absolute inset-0 -z-20 h-full w-full animate-hero-zoom object-cover"
      // eslint-disable-next-line react/no-unknown-property
      fetchpriority="high"
    />
    <div
      className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(3,8,52,0.96)_0%,rgba(3,8,52,0.85)_42%,rgba(3,8,52,0.45)_80%,rgba(3,8,52,0.3)_100%)]"
      aria-hidden
    />
    <Container className="flex min-h-[560px] flex-col justify-center py-20 lg:min-h-[620px]">
      <p className="eyebrow mb-6 animate-fade-in !text-gold-400">{eyebrow}</p>
      <h1 className="max-w-3xl animate-fade-in font-display text-[2.5rem] font-semibold leading-[1.06] tracking-tight [animation-delay:80ms] sm:text-6xl lg:text-[4.25rem]">
        {title}
      </h1>
      <p className="mt-6 max-w-xl animate-fade-in text-base leading-relaxed text-white/80 [animation-delay:160ms] sm:text-lg">{lead}</p>
      {actions && <div className="mt-9 flex animate-fade-in flex-wrap gap-3 [animation-delay:240ms]">{actions}</div>}
      {children}
    </Container>
    <div className="h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-sky-brand" aria-hidden />
  </section>
);

export const IconCard = ({ icon, title, text, tag, index, delay = 0, className }) => {
  const Icon = icons[icon];
  return (
    <Reveal delay={delay} className={cx('flex h-full flex-col rounded-3xl border border-line bg-surface p-6 sm:p-7', className)}>
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-white/5 dark:text-gold-400">
          {Icon && <Icon className="h-5 w-5" aria-hidden />}
        </span>
        {index !== undefined && (
          <span className="font-display text-sm font-semibold text-gold-600">{String(index + 1).padStart(2, '0')}</span>
        )}
      </div>
      {tag && <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-400">{tag}</p>}
      <h3 className={cx('font-display text-lg font-semibold leading-snug text-ink', tag ? 'mt-1.5' : 'mt-6')}>{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
    </Reveal>
  );
};

/** Row of organisation logos on white tiles with name + role. */
export const LogoStrip = ({ items, className }) => (
  <Container className={cx('relative z-10', className)}>
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-lift lg:grid-cols-4">
      {items.map((item) => (
        <li key={item.name} className="flex items-center gap-4 bg-surface p-4 sm:p-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-paper p-1.5 ring-1 ring-line sm:h-16 sm:w-20">
            <img src={item.logo} alt={`${item.name} logo`} className="max-h-full max-w-full object-contain" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold leading-snug text-ink">{item.name}</span>
            <span className="mt-0.5 block text-xs leading-snug text-ink-soft">{item.role}</span>
          </span>
        </li>
      ))}
    </ul>
  </Container>
);

export const CheckList = ({ items, invert = false }) => (
  <ul className="space-y-3">
    {items.map((t) => (
      <li key={t} className={cx('flex gap-3 text-[0.95rem] leading-relaxed', invert ? 'text-white/80' : 'text-ink-soft')}>
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
        {t}
      </li>
    ))}
  </ul>
);
