import React, { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FiArrowUp } from 'react-icons/fi';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import { cx } from '../ui';
import { mainSite } from '../sites';

/** Slim loading bar shown while a lazy page chunk downloads. */
export const PageLoading = () => (
  <div className="min-h-screen" role="status" aria-label="Loading page">
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 overflow-hidden bg-transparent">
      <div className="h-full w-1/3 animate-loading-bar bg-gold-500" />
    </div>
  </div>
);

const BackToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={cx(
        'fixed bottom-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-brand-700 text-white shadow-lift transition-all duration-300 hover:bg-brand-600 dark:bg-gold-500 dark:text-brand-950',
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      )}
    >
      <FiArrowUp className="h-5 w-5" />
    </button>
  );
};

const SiteLayout = ({ site = mainSite }) => (
  <div className="flex min-h-screen flex-col">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-gold-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-brand-950"
    >
      Skip to content
    </a>
    <SiteHeader site={site} />
    <main id="main" className="flex-1">
      <Suspense fallback={<PageLoading />}>
        <Outlet />
      </Suspense>
    </main>
    <SiteFooter site={site} />
    <BackToTop />
  </div>
);

export default SiteLayout;
