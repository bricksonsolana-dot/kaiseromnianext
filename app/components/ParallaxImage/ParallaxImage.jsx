'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './ParallaxImage.module.css';

export default function ParallaxImage({ src, alt, className = '', sizes = '(max-width: 768px) 100vw, 50vw' }) {
  const wrapRef  = useRef(null);
  const innerRef = useRef(null);

  const revealedRef = useRef(false);
  const scaleRef    = useRef(1.08);

  useEffect(() => {
    const wrap  = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

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
      const rect           = wrap.getBoundingClientRect();
      const distFromCenter = (rect.top + rect.height / 2) - window.innerHeight / 2;
      const translateY     = distFromCenter * PARALLAX;

      const target   = revealedRef.current ? 1 : 1.08;
      scaleRef.current += (target - scaleRef.current) * 0.06;

      // Transform the inner wrapper — outer wrapper (clip-path) stays completely still
      inner.style.transform =
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
      {/*
        The inner div replicates the original img's extra height (130%, top -15%)
        so the Next.js Image has room to translate during the parallax effect.
        The outer .wrap clips any overflow via overflow: hidden.
      */}
      <div
        ref={innerRef}
        style={{
          position: 'absolute',
          top: '-15%',
          left: 0,
          right: 0,
          height: '130%',
          willChange: 'transform',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
