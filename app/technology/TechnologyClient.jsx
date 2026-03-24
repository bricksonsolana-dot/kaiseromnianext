'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/context/LanguageContext';
import translations from './translations';
import styles from '@/app/services/ServicesPage.module.css';
import { AnimatedDivider } from '@/app/components/AnimatedDivider/AnimatedDivider';
import ParallaxImage from '@/app/components/ParallaxImage/ParallaxImage';

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function TechnologyClient() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className={styles.page} data-testid="technology-page">

      {/* ── Page header ──────────────────────────────────────── */}
      <div className={styles.hero}>
        <span className={styles.heroEyebrow}>{t.eyebrow}</span>
        <h1 className={styles.heroTitle}>
          {t.titleLine1}<br />
          {t.titleLine2}
        </h1>
      </div>

      <AnimatedDivider />

      {/* ── Hero image ───────────────────────────────────────── */}
      <div className={styles.heroImageWrap}>
        <ParallaxImage src="/images/home/ipo_kataskevi_me_thea.png" alt="Double Wall Technology" />
      </div>

      {/* ── Technology intro ─────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <span className={styles.sectionBadge}>{t.intro.badge}</span>
        <h2 className={styles.sectionTitle}>{t.intro.title}</h2>
        <div className={styles.introGrid}>
          <div>
            {t.intro.paragraphs.map((p, i) => (
              <p key={i} className={styles.introPara}>{p}</p>
            ))}
          </div>
          <div className={styles.introImageWrap}>
            <ParallaxImage src="/images/home/nafplio_kataskeyh.png" alt="Nafplio Construction" />
          </div>
        </div>
      </section>

      {/* ── Benefits intro ───────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <span className={styles.sectionBadge}>{t.introBenefits.badge}</span>
        <h2 className={styles.sectionTitle}>{t.introBenefits.title}</h2>
        <div className={styles.introGrid}>
          <div>
            {t.introBenefits.paragraphs.map((p, i) => (
              <p key={i} className={styles.introPara}>{p}</p>
            ))}
          </div>
          <div className={styles.introImageWrap}>
            <ParallaxImage src="/images/home/panel_se_iliovasilema.png" alt="Panel at Sunset" />
          </div>
        </div>
      </section>

      {/* ── Comparison table ─────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <span className={styles.sectionBadge}>{t.comparison.badge}</span>
        <h2 className={styles.sectionTitle}>{t.comparison.title}</h2>

        <div style={{ overflowX: 'auto' }}>
          <table className={styles.compTable}>
            <thead>
              <tr>
                <th>{t.comparison.headers.feature}</th>
                <th>{t.comparison.headers.conventional}</th>
                <th className={styles.colDoubleHead}>{t.comparison.headers.doubleWall}</th>
              </tr>
            </thead>
            <tbody>
              {t.comparison.rows.map((row) => (
                <tr key={row.feature}>
                  <td><strong style={{ fontWeight: 400 }}>{row.feature}</strong></td>
                  <td style={{ color: 'var(--color-ink-muted)' }}>{row.conventional}</td>
                  <td className={styles.colDouble}>{row.doubleWall}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>{t.cta.title}</h2>
        <p className={styles.ctaSubtitle}>{t.cta.subtitle}</p>
        <Link href="/contact" className="arrow-link" style={{ color: '#888', borderColor: '#444' }}>
          {t.cta.btn} <ArrowRight />
        </Link>
      </section>

    </div>
  );
}