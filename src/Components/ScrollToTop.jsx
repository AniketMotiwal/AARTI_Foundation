import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToCpmSection } from './cpm/scrollToCpmSection';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = setTimeout(() => scrollToCpmSection(id), 50);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
