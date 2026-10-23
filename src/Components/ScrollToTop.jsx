import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToCpmSection } from './cpm/scrollToCpmSection';

// Scrolls to the #hash target once it has rendered (lazy pages mount late).
const scrollToId = (id, attempt = 0) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (attempt < 15) {
    setTimeout(() => scrollToId(id, attempt + 1), 120);
  }
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const timer = setTimeout(() => (pathname.startsWith('/cpm') ? scrollToCpmSection(id) : scrollToId(id)), 50);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    return undefined;
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
