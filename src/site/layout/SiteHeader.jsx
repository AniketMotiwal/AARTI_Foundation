import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowLeft, FiChevronDown, FiMail, FiMenu, FiMoon, FiPhone, FiSun, FiX } from 'react-icons/fi';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { useDarkMode } from '../../context/DarkModeContext';
import { org } from '../content';
import { Container, cx } from '../ui';
import aartiLogo from '../../assets/site/logo-aarti.webp';
import iitLogo from '../../assets/site/logo-iitr.webp';

const splitTo = (to) => {
  const [path, hash] = to.split('#');
  return { path: path.toLowerCase(), hash };
};

// A link is "current" only for plain page links; in-page #anchors never highlight.
const isCurrent = (to, pathname) => {
  const { path, hash } = splitTo(to);
  return !hash && path === (pathname.toLowerCase().replace(/\/$/, '') || '/');
};

const isGroupActive = (item, pathname) =>
  item.to ? isCurrent(item.to, pathname) : item.children.some((c) => isCurrent(c.to, pathname));

export const ThemeToggle = ({ className }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className={cx('inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors', className)}
      aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
      title={darkMode ? 'Light theme' : 'Dark theme'}
    >
      {darkMode ? <FiSun className="h-[18px] w-[18px]" /> : <FiMoon className="h-[18px] w-[18px]" />}
    </button>
  );
};

const logoTile = (invert) =>
  cx(
    'h-11 w-11 shrink-0 object-contain sm:h-14 sm:w-14 lg:h-[3.75rem] lg:w-[3.75rem]',
    invert ? 'rounded-xl bg-paper p-1' : 'dark:rounded-xl dark:bg-paper dark:p-1'
  );

export const BrandLockup = ({ brand, invert = false, compact = false }) => (
  <Link to={brand.to} className="flex min-w-0 items-center gap-3 sm:gap-4" aria-label={`${brand.title} — home`}>
    <span className="flex shrink-0 items-center gap-2 sm:gap-3">
      <img src={iitLogo} alt="" width="60" height="60" className={logoTile(invert)} />
      <span className={cx('h-10 w-px sm:h-12', invert ? 'bg-white/20' : 'bg-line')} aria-hidden />
      <img src={aartiLogo} alt="" width="60" height="60" className={logoTile(invert)} />
    </span>
    {!compact && (
      <span className="min-w-0 leading-tight">
        <span className={cx('block whitespace-nowrap font-display text-base font-semibold tracking-tight min-[400px]:text-lg sm:text-xl', invert ? 'text-white' : 'text-ink')}>
          {brand.title}
        </span>
        <span className={cx('block truncate text-[0.66rem] font-medium uppercase tracking-[0.12em] sm:text-[0.7rem]', invert ? 'text-white/60' : 'text-ink-soft')}>
          {brand.subtitle}
        </span>
      </span>
    )}
  </Link>
);

const UtilityBar = ({ site }) => (
  <div className={cx('bg-brand-950 text-[0.8rem] text-white/70', !site.parent && 'hidden lg:block')}>
    <Container className="flex h-9 items-center justify-between gap-4">
      {site.parent ? (
        <Link to="/" className="inline-flex items-center gap-2 font-medium text-white/85 hover:text-gold-400">
          <FiArrowLeft className="h-3.5 w-3.5" aria-hidden />
          <span>
            AARTI Foundation<span className="hidden sm:inline"> · Industry Accelerator of IIT Roorkee</span>
          </span>
        </Link>
      ) : (
        <p>
          {org.tagline} <span className="mx-2 text-white/30">·</span> {org.legal}
        </p>
      )}
      <div className="hidden items-center gap-5 lg:flex">
        <a href={`mailto:${org.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
          <FiMail className="h-3.5 w-3.5" aria-hidden /> {org.email}
        </a>
        <a href={`tel:${org.phoneHref}`} className="inline-flex items-center gap-1.5 hover:text-white">
          <FiPhone className="h-3.5 w-3.5" aria-hidden /> {org.phone}
        </a>
        <span className="h-4 w-px bg-white/20" aria-hidden />
        <a href={org.social.x} target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="AARTI on X">
          <FaXTwitter className="h-3.5 w-3.5" />
        </a>
        <a href={org.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="AARTI on LinkedIn">
          <FaLinkedinIn className="h-3.5 w-3.5" />
        </a>
      </div>
    </Container>
  </div>
);

const navItemClass = (active) =>
  cx(
    'inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.92rem] font-medium transition-colors',
    active ? 'text-brand-700 dark:text-gold-400' : 'text-ink hover:bg-muted'
  );

const DesktopDropdown = ({ item, active }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const closeTimer = useRef(null);
  const { pathname, hash } = useLocation();

  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onClick = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  const enter = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div ref={ref} className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className={navItemClass(active)}>
        {item.label}
        <FiChevronDown className={cx('h-4 w-4 transition-transform', open && 'rotate-180')} aria-hidden />
      </button>
      <div
        className={cx(
          'absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 transition duration-150',
          open ? 'visible opacity-100' : 'invisible -translate-y-1 opacity-0'
        )}
      >
        <ul className="rounded-2xl border border-line bg-surface p-2 shadow-lift">
          {item.children.map((c) => (
            <li key={c.to}>
              <Link to={c.to} className="block rounded-xl px-4 py-3 transition-colors hover:bg-muted">
                <span className="block text-sm font-semibold text-ink">{c.label}</span>
                {c.note && <span className="mt-0.5 block text-[0.8rem] text-ink-soft">{c.note}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MobileMenu = ({ site, open, onClose }) => {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const rowClass = 'block rounded-xl px-3 py-3 font-medium text-ink hover:bg-muted';

  return createPortal(
    <div className={cx('fixed inset-0 z-[100] lg:hidden', !open && 'pointer-events-none')} aria-hidden={!open}>
      <div
        className={cx('absolute inset-0 bg-brand-950/60 backdrop-blur-sm transition-opacity', open ? 'opacity-100' : 'opacity-0')}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cx(
          'absolute inset-y-0 right-0 flex w-[min(22rem,100vw)] flex-col bg-surface shadow-lift transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <BrandLockup brand={site.brand} compact />
          <button type="button" onClick={onClose} className="rounded-full p-2 text-ink hover:bg-muted" aria-label="Close menu">
            <FiX className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {!site.parent && (
            <Link to="/" onClick={onClose} className={rowClass}>
              Home
            </Link>
          )}
          {site.nav.map((item) =>
            item.to ? (
              <Link key={item.label} to={item.to} onClick={onClose} className={rowClass}>
                {item.label}
              </Link>
            ) : (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => setExpanded((e) => (e === item.label ? null : item.label))}
                  aria-expanded={expanded === item.label}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 font-medium text-ink hover:bg-muted"
                >
                  {item.label}
                  <FiChevronDown className={cx('h-4 w-4 transition-transform', expanded === item.label && 'rotate-180')} />
                </button>
                {expanded === item.label && (
                  <ul className="mb-2 ml-3 border-l border-line pl-3">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <Link to={c.to} onClick={onClose} className="block rounded-lg px-3 py-2.5 text-[0.95rem] text-ink-soft hover:bg-muted hover:text-ink">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          )}
          <Link to={site.cta.to} onClick={onClose} className={rowClass}>
            {site.cta.label}
          </Link>
          {site.parent && (
            <Link to="/" onClick={onClose} className="mt-4 flex items-center gap-2 rounded-xl border border-line px-3 py-3 font-medium text-ink hover:bg-muted">
              <FiArrowLeft className="h-4 w-4" /> AARTI Foundation home
            </Link>
          )}
        </nav>
        <div className="space-y-2 border-t border-line px-5 py-5 text-sm text-ink-soft">
          <a href={`mailto:${org.email}`} className="flex items-center gap-2 hover:text-ink">
            <FiMail className="h-4 w-4" /> {org.email}
          </a>
          <a href={`tel:${org.phoneHref}`} className="flex items-center gap-2 hover:text-ink">
            <FiPhone className="h-4 w-4" /> {org.phone}
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

const SiteHeader = ({ site }) => {
  const { pathname, hash } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => setMenuOpen(false), [pathname, hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <UtilityBar site={site} />
      <header
        className={cx(
          'sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-300',
          scrolled ? 'border-line bg-surface/90 shadow-card backdrop-blur-md' : 'border-transparent bg-surface'
        )}
      >
        <Container className="flex h-[4.25rem] items-center justify-between gap-4 sm:h-20 lg:h-[5.5rem]">
          <BrandLockup brand={site.brand} />

          <nav aria-label="Main" className="hidden items-center gap-0.5 lg:flex">
            {site.nav.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} active={isGroupActive(item, pathname)} />
              ) : (
                <Link key={item.label} to={item.to} className={navItemClass(isGroupActive(item, pathname))}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle className="text-ink hover:bg-muted" />
            <Link
              to={site.cta.to}
              className="hidden whitespace-nowrap rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 dark:bg-gold-500 dark:text-brand-950 dark:hover:bg-gold-400 xl:inline-flex"
            >
              {site.cta.label}
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-muted lg:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <FiMenu className="h-5 w-5" />
            </button>
          </div>
        </Container>
      </header>
      <MobileMenu site={site} open={menuOpen} onClose={closeMenu} />
    </>
  );
};

export default SiteHeader;
