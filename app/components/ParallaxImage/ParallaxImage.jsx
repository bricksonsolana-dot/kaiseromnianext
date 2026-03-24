'use client';

import { useRef, useEffect } from 'react';
import styles from './ParallaxImage.module.css';

export default function ParallaxImage({ src, alt, className = '' }) {
  const wrapRef = useRef(null);
  const imgRef  = useRef(null);

  const revealedRef = useRef(false);
  const scaleRef    = useRef(1.08);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img  = imgRef.current;
    if (!wrap || !img) return;

    wrap.style.clipPath = 'inset(100% 0% 0% 0%)';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          wrap.style.clipPath = 'inset(0% 0% 0% 0%)';
          revealedRef.current = true;
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    observer.observe(wrap);

    const PARALLAX = 0.06;
    let rafId;

    const loop = () => {
      // Use the wrapper's position for calculation, but only move the image
      const rect           = wrap.getBoundingClientRect();
      const distFromCenter = (rect.top + rect.height / 2) - window.innerHeight / 2;
      const translateY     = distFromCenter * PARALLAX;

      const target   = revealedRef.current ? 1 : 1.08;
      scaleRef.current += (target - scaleRef.current) * 0.06;

      // Only transform the image — wrapper stays completely still
      img.style.transform =
        `translateY(${translateY.toFixed(2)}px) scale(${scaleRef.current.toFixed(4)})`;

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} className={`${styles.wrap}${className ? ` ${className}` : ''}`}>
      <img ref={imgRef} src={src} alt={alt} className={styles.img} />
    </div>
  );
}