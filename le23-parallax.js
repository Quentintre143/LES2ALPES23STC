(() => {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let frame = 0;
  const update = () => {
    if (reducedMotion || frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const offset = Math.min(64, Math.round(Math.max(0, window.scrollY || 0) * 0.035));
      root.style.setProperty('--page-bg-offset', `${-offset}px`);
    });
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
})();
