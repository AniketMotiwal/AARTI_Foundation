export function scrollToCpmSection(sectionId) {
  const tryScroll = (attempt = 0) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `/cpm#${sectionId}`);
      return;
    }
    if (attempt < 15) {
      setTimeout(() => tryScroll(attempt + 1), 120);
    }
  };

  tryScroll();
}
