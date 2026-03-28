// app/company/page.tsx
'use client';

import { useLanguage } from '@/app/context/LanguageContext';
import translations from './translations';
import styles from './CompanyPage.module.css';
import { AnimatedDivider } from '@/app/components/AnimatedDivider/AnimatedDivider';
import ParallaxImage from '@/app/components/ParallaxImage/ParallaxImage';
import PageCTA from '@/app/components/PageCTA/PageCTA';

export default function CompanyClient() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className={styles.page} data-testid="company-page">

      {/* ── Header ──────────────────────────────────────────── */}
      <div className={styles.header}>
        <span className={styles.eyebrow}>{t.eyebrow}</span>
        <h1 className={styles.pageTitle}>
          <em>{t.pageTitle}</em>
        </h1>
      </div>

      <AnimatedDivider />

      {/* ── Hero Image ──────────────────────────────────────── */}
      <div className={styles.heroImageWrap}>
        <ParallaxImage
          src="/company/company3.png"
          alt="Kaiser Omnia Construction"
        />
      </div>

      {/* ── 01 About ────────────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <span className={styles.sectionBadge}>{t.about.badge}</span>
        <h2 className={styles.sectionTitle}>{t.about.title}</h2>
        <div className={styles.aboutGrid}>
          {t.about.paragraphs.map((p, i) => (
            <p key={i} className={styles.aboutPara}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* ── 02 Timeline ─────────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <span className={styles.sectionBadge}>{t.timeline.badge}</span>
        <h2 className={styles.sectionTitle}>{t.timeline.title}</h2>
        <div className={styles.timeline}>
          <AnimatedDivider />
          {t.timeline.events.map((ev, i) => (
            <div key={ev.year}>
              <div className={styles.timelineItem}>
                <span className={styles.timelineYear}>{ev.year}</span>
                <div>
                  <h3 className={styles.timelineTitle}>{ev.title}</h3>
                  <p className={styles.timelineDesc}>{ev.desc}</p>
                </div>
              </div>
              <AnimatedDivider delay={i * 60} />
            </div>
          ))}
        </div>
      </section>

      {/* ── 03 Mission / Vision / Values ────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <span className={styles.sectionBadge}>{t.mvv.badge}</span>
        <h2 className={styles.sectionTitle}>{t.mvv.title}</h2>

        <div className={styles.mvvRows}>

          <div className={styles.mvvRow}>
            <div>
              <h3 className={styles.mvvRowHeading}>{t.mvv.mission.title}</h3>
              <p className={styles.mvvRowBody}>{t.mvv.mission.content}</p>
            </div>
            <div className={styles.mvvImageWrap}>
              <ParallaxImage src="/images/home/philosophy.png" alt="Mission" />
            </div>
          </div>

          <AnimatedDivider />
          <div className={styles.mvvRow}>
            <div>
              <h3 className={styles.mvvRowHeading}>{t.mvv.vision.title}</h3>
              <p className={styles.mvvRowBody}>{t.mvv.vision.content}</p>
            </div>
            <div className={styles.mvvImageWrap}>
              <ParallaxImage src="/images/home/eksidikeysh.png" alt="Vision" />
            </div>
          </div>

          <AnimatedDivider />
          <div className={styles.mvvRow}>
            <div>
              <h3 className={styles.mvvRowHeading}>{t.mvv.values.title}</h3>
              <p className={styles.mvvRowBody}>{t.mvv.values.content}</p>
            </div>
            <div className={styles.mvvImageWrap}>
              <ParallaxImage src="/images/About/desmeysh.png" alt="Values" />
            </div>
          </div>
        </div>
      </section>

      <PageCTA />

    </div>
  );
}
