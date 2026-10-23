import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight, FiChevronRight } from 'react-icons/fi';

export const cx = (...classes) => classes.filter(Boolean).join(' ');

export const Container = ({ className, children }) => (
  <div className={cx('mx-auto w-full max-w-site px-4 sm:px-6 lg:px-8', className)}>{children}</div>
);

const tones = {
  page: 'bg-page',
  surface: 'bg-surface',
  muted: 'bg-muted',
  navy: 'bg-brand-950 text-white',
};

export const Section = ({ id, tone = 'page', className, children }) => (
  <section id={id} className={cx('py-16 sm:py-20 lg:py-24', tones[tone], className)}>
    <Container>{children}</Container>
  </section>
);

export const SectionHeading = ({ eyebrow, title, lead, align = 'left', action, invert = false, className }) => (
  <div
    className={cx(
      'mb-10 flex flex-col gap-6 lg:mb-14',
      align === 'center' ? 'items-center text-center' : 'lg:flex-row lg:items-end lg:justify-between',
      className
    )}
  >
    <div className={cx('max-w-2xl', align === 'center' && 'mx-auto')}>
      {eyebrow && <p className={cx('eyebrow mb-4', invert && '!text-gold-400')}>{eyebrow}</p>}
      <h2
        className={cx(
          'font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]',
          invert ? 'text-white' : 'text-ink'
        )}
      >
        {title}
      </h2>
      {lead && (
        <p className={cx('mt-4 text-base leading-relaxed sm:text-lg', invert ? 'text-white/70' : 'text-ink-soft')}>
          {lead}
        </p>
      )}
    </div>
    {action && <div className="shrink-0">{action}</div>}
  </div>
);

const buttonStyles = {
  primary: 'bg-gold-500 text-brand-950 hover:bg-gold-400 shadow-sm',
  navy: 'bg-brand-700 text-white hover:bg-brand-600 dark:bg-gold-500 dark:text-brand-950 dark:hover:bg-gold-400',
  outline: 'border border-line bg-surface text-ink hover:border-brand-300 hover:bg-muted',
  ghostLight: 'border border-white/30 text-white hover:bg-white/10',
};

const isExternal = (to) => /^(https?:|mailto:|tel:)/.test(to) || to.endsWith('.pdf');

export const Button = ({ to, variant = 'primary', size = 'md', icon = 'arrow', className, children, ...rest }) => {
  const classes = cx(
    'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200',
    size === 'sm' ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-[0.95rem]',
    buttonStyles[variant],
    className
  );
  const Icon = icon === 'external' ? FiArrowUpRight : icon === 'arrow' ? FiArrowRight : null;
  const content = (
    <>
      {children}
      {Icon && (
        <Icon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
      )}
    </>
  );
  if (!to) {
    return (
      <button type="button" className={classes} {...rest}>
        {content}
      </button>
    );
  }
  if (isExternal(to)) {
    return (
      <a href={to} className={classes} target={to.startsWith('http') || to.endsWith('.pdf') ? '_blank' : undefined} rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link to={to} className={classes} {...rest}>
      {content}
    </Link>
  );
};

export const TextLink = ({ to, children, className, invert = false }) => {
  const classes = cx(
    'group inline-flex items-center gap-1.5 text-sm font-semibold transition-colors',
    invert ? 'text-gold-400 hover:text-gold-300' : 'text-brand-700 hover:text-brand-500 dark:text-gold-400 dark:hover:text-gold-300',
    className
  );
  const inner = (
    <>
      {children}
      <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
    </>
  );
  return isExternal(to) ? (
    <a href={to} className={classes} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link to={to} className={classes}>
      {inner}
    </Link>
  );
};

export const Tag = ({ children, className }) => (
  <span
    className={cx(
      'inline-flex items-center rounded-full bg-brand-50 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-brand-700 dark:bg-white/10 dark:text-gold-300',
      className
    )}
  >
    {children}
  </span>
);

/** Fades children in once they scroll into view. */
export const Reveal = ({ as: Tag = 'div', delay = 0, className, children, ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cx('reveal', visible && 'is-visible', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
};

/** Animated number that counts up when visible. */
export const CountUp = ({ value, suffix = '', duration = 1400 }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!node || reduce || typeof IntersectionObserver === 'undefined') {
      setDisplay(value);
      return undefined;
    }
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
};

/** Navy banner used at the top of every inner page. */
export const PageHeader = ({ eyebrow, title, lead, crumbs = [], home = { label: 'Home', to: '/' }, children }) => (
  <header className="relative overflow-hidden bg-brand-950 text-white">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage:
          'radial-gradient(60rem 30rem at 85% -10%, rgba(18,205,244,0.25), transparent 60%), radial-gradient(40rem 24rem at 0% 120%, rgba(240,175,0,0.22), transparent 60%)',
      }}
      aria-hidden
    />
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" aria-hidden />
    <Container className="relative py-14 sm:py-20">
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
          <li>
            <Link to={home.to} className="hover:text-white">
              {home.label}
            </Link>
          </li>
          {crumbs.map((c) => (
            <li key={c.label} className="flex items-center gap-1.5">
              <FiChevronRight className="h-3.5 w-3.5" aria-hidden />
              {c.to ? (
                <Link to={c.to} className="hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span>{c.label}</span>
              )}
            </li>
          ))}
          <li className="flex items-center gap-1.5">
            <FiChevronRight className="h-3.5 w-3.5" aria-hidden />
            <span className="text-white" aria-current="page">
              {title}
            </span>
          </li>
        </ol>
      </nav>
      {eyebrow && <p className="eyebrow mb-4 !text-gold-400">{eyebrow}</p>}
      <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{lead}</p>}
      {children}
    </Container>
    <div className="h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-sky-brand" aria-hidden />
  </header>
);

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

export const isPast = (iso) => new Date(`${iso}T23:59:59`) < new Date();
