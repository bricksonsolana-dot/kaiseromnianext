'use client';

import { useLanguage } from '@/app/context/LanguageContext';
import translations from './translations';
import styles from '@/app/services/ServicesPage.module.css';
import techStyles from './TechnologyPage.module.css';
import { AnimatedDivider } from '@/app/components/AnimatedDivider/AnimatedDivider';
import ParallaxImage from '@/app/components/ParallaxImage/ParallaxImage';
import PageCTA from '@/app/components/PageCTA/PageCTA';

export default function TechnologyClient({ sanityData }) {
  const { language } = useLanguage();
  const t = translations[language];

  // Helper: pick Sanity locale field or fall back to static translation
  const pick = (sanityField, fallback) =>
    sanityField?.[language] ?? fallback;

  // ── Hero ──
  const eyebrow = pick(sanityData?.hero?.eyebrow, t.eyebrow);
  const titleLine1 = pick(sanityData?.hero?.titleLine1, t.titleLine1);
  const titleLine2 = pick(sanityData?.hero?.titleLine2, t.titleLine2);

  // ── Intro ──
  const introBadge = sanityData?.intro?.badge ?? t.intro.badge;
  const introTitle = pick(sanityData?.intro?.title, t.intro.title);
  const introImage = sanityData?.intro?.image ?? '/images/home/concrete.png';
  const introParagraphs = sanityData?.intro?.paragraphs
    ? sanityData.intro.paragraphs.map((p) => p?.[language] ?? '')
    : t.intro.paragraphs;

  // ── Benefits intro ──
  const benefitsBadge = sanityData?.introBenefits?.badge ?? t.introBenefits.badge;
  const benefitsTitle = pick(sanityData?.introBenefits?.title, t.introBenefits.title);
  const benefitsImage = sanityData?.introBenefits?.image ?? '/images/home/panel1.png';
  const benefitsParagraphs = sanityData?.introBenefits?.paragraphs
    ? sanityData.introBenefits.paragraphs.map((p) => p?.[language] ?? '')
    : t.introBenefits.paragraphs;

  // ── Comparison ──
  const compBadge = sanityData?.comparison?.badge ?? t.comparison.badge;
  const compTitle = pick(sanityData?.comparison?.title, t.comparison.title);
  const compHeaderConventional = pick(sanityData?.comparison?.headers?.conventional, t.comparison.headers.conventional);
  const compHeaderDoubleWall = pick(sanityData?.comparison?.headers?.doubleWall, t.comparison.headers.doubleWall);
  const compRows = sanityData?.comparison?.rows
    ? sanityData.comparison.rows.map((row) => ({
        feature: row.feature?.[language] ?? '',
        conventional: row.conventional?.[language] ?? '',
        doubleWall: row.doubleWall?.[language] ?? '',
      }))
    : t.comparison.rows;

  return (
    <div className={styles.page} data-testid="technology-page">

      {/* ── Page header ──────────────────────────────────────── */}
      <div className={styles.hero}>
        <span className={styles.heroEyebrow}>{eyebrow}</span>
        <h1 className={styles.heroTitle}>
          {titleLine1}<br />
          {titleLine2}
        </h1>
      </div>

      <AnimatedDivider />

      {/* ── Hero image ───────────────────────────────────────── */}
      <div className={`${styles.heroImageWrap} ${techStyles.heroImage}`}>
        <ParallaxImage src="/images/home/ipo_kataskevi_me_thea.png" alt="Double Wall Technology" objectPosition="center 75%" />
      </div>

      {/* ── Technology intro ─────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <span className={styles.sectionBadge}>{introBadge}</span>
        <div className={`${styles.introGrid} ${techStyles.introGridMobile}`}>
          <div className={techStyles.introTitle}>
            <h2 className={styles.sectionTitle}>{introTitle}</h2>
          </div>
          <div className={`${styles.introImageWrap} ${techStyles.introImage}`}>
            <ParallaxImage src={introImage} alt="Nafplio Construction" />
          </div>
          <div className={techStyles.introText}>
            {introParagraphs.map((p, i) => (
              <p key={i} className={`${styles.introPara} ${techStyles.introPara}`}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits intro ───────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <span className={styles.sectionBadge}>{benefitsBadge}</span>
        <div className={`${styles.introGrid} ${techStyles.introGridMobile}`}>
          <div className={techStyles.introTitle}>
            <h2 className={styles.sectionTitle}>{benefitsTitle}</h2>
          </div>
          <div className={`${styles.introImageWrap} ${techStyles.introImage}`}>
            <ParallaxImage src={benefitsImage} alt="Panel at Sunset" />
          </div>
          <div className={techStyles.introText}>
            {benefitsParagraphs.map((p, i) => (
              <p key={i} className={`${styles.introPara} ${techStyles.introPara}`}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison grid ──────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <span className={styles.sectionBadge}>{compBadge}</span>
        <h2 className={styles.sectionTitle}>{compTitle}</h2>

        <div className={styles.compGrid}>
          <div className={styles.compHeaderRow}>
            <span />
            <span className={styles.compHeaderConv}>{compHeaderConventional}</span>
            <span className={styles.compHeaderDouble}>{compHeaderDoubleWall}</span>
          </div>

          {compRows.map((row, i) => (
            <div key={i} className={styles.compRow}>
              <span className={styles.compFeature}>{row.feature}</span>
              <span
                className={styles.compConv}
                data-label={compHeaderConventional}
              >
                {row.conventional}
              </span>
              <span
                className={styles.compDouble}
                data-label={compHeaderDoubleWall}
              >
                {row.doubleWall}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <PageCTA />

    </div>
  );
}
