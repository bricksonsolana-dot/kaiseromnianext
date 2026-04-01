'use client';

import { useLanguage } from '@/app/context/LanguageContext';
import translations from './translations';
import styles from '@/app/services/ServicesPage.module.css';
import techStyles from './TechnologyPage.module.css';
import { AnimatedDivider } from '@/app/components/AnimatedDivider/AnimatedDivider';
import ParallaxImage from '@/app/components/ParallaxImage/ParallaxImage';
import PageCTA from '@/app/components/PageCTA/PageCTA';

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
      <div className={`${styles.heroImageWrap} ${techStyles.heroImage}`}>
        <ParallaxImage src="/images/home/ipo_kataskevi_me_thea.png" alt="Double Wall Technology" objectPosition="center 75%" />
      </div>

      {/* ── Technology intro ─────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <span className={styles.sectionBadge}>{t.intro.badge}</span>
        <div className={`${styles.introGrid} ${techStyles.introGridMobile}`}>
          <div className={techStyles.introTitle}>
            <h2 className={styles.sectionTitle}>{t.intro.title}</h2>
          </div>
          <div className={`${styles.introImageWrap} ${techStyles.introImage}`}>
            <ParallaxImage src="/images/home/concrete_3_2_2.png" alt="Nafplio Construction" />
          </div>
          <div className={techStyles.introText}>
            {t.intro.paragraphs.map((p, i) => (
              <p key={i} className={`${styles.introPara} ${techStyles.introPara}`}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits intro ───────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <div className={`${styles.introGrid} ${techStyles.introGridMobile}`}>
          <div className={techStyles.introTitle}>
            <span className={styles.sectionBadge}>{t.introBenefits.badge}</span>
            <h2 className={styles.sectionTitle}>{t.introBenefits.title}</h2>
          </div>
          <div className={`${styles.introImageWrap} ${techStyles.introImage}`}>
            <ParallaxImage src="/images/home/panel_se_iliovasilema.png" alt="Panel at Sunset" />
          </div>
          <div className={techStyles.introText}>
            {t.introBenefits.paragraphs.map((p, i) => (
              <p key={i} className={`${styles.introPara} ${techStyles.introPara}`}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison grid ──────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <span className={styles.sectionBadge}>{t.comparison.badge}</span>
        <h2 className={styles.sectionTitle}>{t.comparison.title}</h2>

        <div className={styles.compGrid}>
          <div className={styles.compHeaderRow}>
            <span />
            <span className={styles.compHeaderConv}>{t.comparison.headers.conventional}</span>
            <span className={styles.compHeaderDouble}>{t.comparison.headers.doubleWall}</span>
          </div>

          {t.comparison.rows.map((row, i) => (
            <div key={i} className={styles.compRow}>
              <span className={styles.compFeature}>{row.feature}</span>
              <span
                className={styles.compConv}
                data-label={t.comparison.headers.conventional}
              >
                {row.conventional}
              </span>
              <span
                className={styles.compDouble}
                data-label={t.comparison.headers.doubleWall}
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