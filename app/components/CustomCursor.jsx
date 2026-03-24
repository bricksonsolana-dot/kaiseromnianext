import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    /* skip on touch devices */
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX  = -100, ringY  = -100;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top  = mouseY + 'px';
    };

    const lerp = (a, b, f) => a + (b - a) * f;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => ring.classList.add('is-hovering');
    const onLeave = () => ring.classList.remove('is-hovering');

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    addHoverListeners();
    rafId = requestAnimationFrame(animate);

    /* re-bind whenever DOM changes (simple polling fallback) */
    const interval = setInterval(addHoverListeners, 2000);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="custom-cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
