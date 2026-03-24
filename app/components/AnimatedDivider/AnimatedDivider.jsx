import { useRef, useEffect } from 'react';
import styles from './AnimatedDivider.module.css';

/**
 * AnimatedDivider — a 1 px line that draws left-to-right when it enters the
 * viewport, and retracts right-to-left when it leaves (scroll up restores it).
 *
 * Props:
 *   delay  {number} ms transition-delay added on the "draw" direction (default 0)
 *   color  {string} CSS colour string; defaults to var(--color-rule)
 */
export const AnimatedDivider = ({ delay = 0, color = undefined }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion: skip animation, show line immediately
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      el.classList.add(styles.visible);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add(styles.visible);
        } else {
          // Retract instantly when leaving the viewport (no delay)
          el.style.transitionDelay = '0ms';
          el.classList.remove(styles.visible);
        }
      },
      { threshold: 0.5, rootMargin: '0px 0px -80px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={styles.divider}
      role="separator"
      aria-hidden="true"
      style={color ? { '--divider-color': color } : undefined}
    />
  );
};

export default AnimatedDivider;
