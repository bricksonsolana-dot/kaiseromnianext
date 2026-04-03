// app/company/page.tsx
'use client';

import { useLanguage } from '@/app/context/LanguageContext';
import translations from './translations';
import styles from './CompanyPage.module.css';
import { AnimatedDivider } from '@/app/components/AnimatedDivider/AnimatedDivider';
import ParallaxImage from '@/app/components/ParallaxImage/ParallaxImage';
import PageCTA from '@/app/components/PageCTA/PageCTA';

export default function CompanyClient({ sanityData = null }) {
  const { language } = useLanguage();
  const t = translations[language];

  // Sanity helper — pick locale value or fall back to static string
  const pick = (sanityField, fallback) =>
    sanityField?.[language] || fallback;

  return (
    <div className={styles.page} data-testid="company-page">

      {/* ── Header ──────────────────────────────────────────── */}
      <div className={styles.header}>
        <span className={styles.eyebrow}>{sanityData?.header?.eyebrow || t.eyebrow}</span>
        <h1 className={styles.pageTitle}>
          <em>{pick(sanityData?.header?.pageTitle, t.pageTitle)}</em>
        </h1>
      </div>

      <AnimatedDivider />

      {/* ── Hero Image ──────────────────────────────────────── */}
      <div className={styles.heroImageWrap}>
        <ParallaxImage
          src={sanityData?.heroImage || '/company/company.png'}
          alt="Kaiser Omnia Construction"
          objectPosition="center 75%"
        />
      </div>

      {/* ── 01 About ────────────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <span className={styles.sectionBadge}>{sanityData?.about?.badge || t.about.badge}</span>
        <h2 className={styles.sectionTitle}>{pick(sanityData?.about?.title, t.about.title)}</h2>
        <div className={styles.aboutGrid}>
          {(sanityData?.about?.paragraphs?.length > 0
            ? sanityData.about.paragraphs.map((p) => p?.[language] || '')
            : t.about.paragraphs
          ).map((p, i) => (
            <p key={i} className={styles.aboutPara}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* ── 02 Timeline ─────────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <span className={styles.sectionBadge}>{sanityData?.timeline?.badge || t.timeline.badge}</span>
        <h2 className={styles.sectionTitle}>{pick(sanityData?.timeline?.title, t.timeline.title)}</h2>
        <div className={styles.timeline}>
          <AnimatedDivider />
          {(sanityData?.timeline?.events?.length > 0
            ? sanityData.timeline.events.map((ev) => ({
                year: ev.year,
                title: ev.title?.[language] || '',
                desc: ev.desc?.[language] || '',
              }))
            : t.timeline.events
          ).map((ev, i) => (
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
        <span className={styles.sectionBadge}>{sanityData?.mvv?.badge || t.mvv.badge}</span>
        <h2 className={styles.sectionTitle}>{pick(sanityData?.mvv?.title, t.mvv.title)}</h2>

        <div className={styles.mvvRows}>

          <div className={styles.mvvRow}>
            <div>
              <h3 className={styles.mvvRowHeading}>{pick(sanityData?.mvv?.mission?.title, t.mvv.mission.title)}</h3>
              <p className={styles.mvvRowBody}>{pick(sanityData?.mvv?.mission?.content, t.mvv.mission.content)}</p>
            </div>
            <div className={styles.mvvImageWrap}>
              <ParallaxImage src={sanityData?.mvv?.mission?.image || '/images/home/philosophy.png'} alt="Mission" />
            </div>
          </div>

          <AnimatedDivider />
          <div className={styles.mvvRow}>
            <div>
              <h3 className={styles.mvvRowHeading}>{pick(sanityData?.mvv?.vision?.title, t.mvv.vision.title)}</h3>
              <p className={styles.mvvRowBody}>{pick(sanityData?.mvv?.vision?.content, t.mvv.vision.content)}</p>
            </div>
            <div className={styles.mvvImageWrap}>
              <ParallaxImage src={sanityData?.mvv?.vision?.image || '/images/home/eksidikeysh.png'} alt="Vision" />
            </div>
          </div>

          <AnimatedDivider />
          <div className={styles.mvvRow}>
            <div>
              <h3 className={styles.mvvRowHeading}>{pick(sanityData?.mvv?.values?.title, t.mvv.values.title)}</h3>
              <p className={styles.mvvRowBody}>{pick(sanityData?.mvv?.values?.content, t.mvv.values.content)}</p>
            </div>
            <div className={styles.mvvImageWrap}>
              <ParallaxImage src={sanityData?.mvv?.values?.image || '/images/About/desmeysh.png'} alt="Values" />
            </div>
          </div>
        </div>
      </section>

      <PageCTA />

    </div>
  );
}
