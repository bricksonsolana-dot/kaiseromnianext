'use client';

import { useLanguage } from '@/app/context/LanguageContext';
import translations from './translations';
import homeTranslations from '@/app/translations/home';
import styles from '@/app/services/ServicesPage.module.css';
import homeStyles from '@/app/HomePage.module.css';
import { AnimatedDivider } from '@/app/components/AnimatedDivider/AnimatedDivider';
import ParallaxImage from '@/app/components/ParallaxImage/ParallaxImage';
import PageCTA from '@/app/components/PageCTA/PageCTA';


const STAGE_IMAGES = [
  '/images/home/stages/1.png',
  '/images/home/stages/2.png',
  '/images/home/stages/3.png',
  '/images/home/stages/4.png',
  '/images/home/stages/5.png',
  '/images/home/stages/6.png',
  '/images/home/stages/7.jpg',
  '/images/home/stages/8.jpg',
];

const STAGE_PAIRS = [[0, 1], [2, 3], [4, 5], [6, 7]];

export default function ServicesClient() {
  const { language } = useLanguage();
  const t = translations[language];
  const ht = homeTranslations[language];

  return (
    <div className={styles.page} data-testid="services-page">

      {/* ── Page hero ─────────────────────────────────────────── */}
      <div className={styles.hero}>
        <span className={styles.heroEyebrow}>{t.eyebrow}</span>
        <h1 className={styles.heroTitle}>
          {t.titleLine1}<br />
          <em>{t.titleLine2}</em>
        </h1>
      </div>
      <div className={styles.heroImageWrap}>
        <ParallaxImage src="/images/services/services.png" alt="Double Wall Technology" />
      </div>

      {/* ── 01 Services list ──────────────────────────────────── */}
      <AnimatedDivider />
      <div className={styles.servicesList}>
        {t.services.map((s, i) => (
          <div key={s.num}>
            <div className={styles.serviceRow}>
              <div>
                <span className={styles.sectionBadge}>{s.num}</span>
                <h2 className={styles.sectionTitle}>{s.title}</h2>
              </div>
              <div>
                <p className={styles.serviceDesc}>{s.desc}</p>
              </div>
            </div>
            <AnimatedDivider delay={(i + 1) * 80} />
          </div>
        ))}
      </div>

      {/* ── 05 Construction Stages ────────────────────────────── */}
      <section className={homeStyles.stagesSection} data-testid="construction-stages">
        <span className={styles.sectionBadge}>05</span>
        <h2 className={styles.sectionTitle}>{ht.constructionStages.sectionTitle}</h2>
        <p className={homeStyles.stagesSubtitle} style={{ maxWidth: 'none' }}>
          {ht.constructionStages.subtitle}
        </p>

        <div className={homeStyles.stagesRows}>
          {STAGE_PAIRS.map((pair, pairIdx) => {
            const stages = pair
              .map((imgIdx) => ({ stage: ht.constructionStages.stages[imgIdx], imgIdx }))
              .filter(({ stage }) => Boolean(stage));

            return (
              <div key={pairIdx}>
                {pairIdx > 0 && <AnimatedDivider />}
                <div className={homeStyles.stagePairGrid}>
                  {stages.map(({ stage, imgIdx }) => (
                    <div key={stage.stage} className={homeStyles.stageCard}>
                      <div className={homeStyles.stageImageWrap}>
                        <ParallaxImage src={STAGE_IMAGES[imgIdx]} alt={stage.title} />
                      </div>
                      <div className={homeStyles.stageInfo}>
                        <div className={homeStyles.stageLabel}>
                          <span className={homeStyles.stageLabelLine} />
                          {ht.constructionStages.stageLabel} {stage.stage}
                        </div>
                        <h3 className={homeStyles.stageTitle}>{stage.title}</h3>
                        <p className={homeStyles.stageDesc}>{stage.desc}</p>
                        <div className={homeStyles.stageDetails}>
                          {stage.details.map((d, i) => (
                            <span key={i} className={homeStyles.stageDetail}>
                              <span className={homeStyles.stageDetailDot} />
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <PageCTA />

    </div>
  );
}