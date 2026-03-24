// app/company/page.tsx
'use client';

import { useLanguage } from '@/app/context/LanguageContext';
import translations from './translations';
import styles from './CompanyPage.module.css';
import { AnimatedDivider } from '@/app/components/AnimatedDivider/AnimatedDivider';
import ParallaxImage from '@/app/components/ParallaxImage/ParallaxImage';

export default function CompanyPage() {
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
          src="/images/About/crane.jpg"
          alt="Kaiser Omnia Construction"
        />
      </div>

      {/* ── 01 About ────────────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <div className={styles.aboutGrid}>
          <div>
            <span className={styles.sectionBadge}>{t.about.badge}</span>
          </div>
          <div>
            {t.about.paragraphs.map((p, i) => (
              <p key={i} className={styles.aboutPara}>
                {p}
              </p>
            ))}
          </div>
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
        <div className={styles.mvvGrid}>
          <div className={styles.mvvCell}>
            <span className={styles.mvvCellTitle}>{t.mvv.mission.title}</span>
            <p className={styles.mvvCellBody}>{t.mvv.mission.content}</p>
          </div>
          <div className={styles.mvvCell}>
            <span className={styles.mvvCellTitle}>{t.mvv.vision.title}</span>
            <p className={styles.mvvCellBody}>{t.mvv.vision.content}</p>
          </div>
          <div className={styles.mvvCell}>
            <span className={styles.mvvCellTitle}>{t.mvv.values.title}</span>
            <p className={styles.mvvCellBody}>{t.mvv.values.content}</p>
          </div>
        </div>
      </section>

      {/* ── 04 Stats ────────────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <span className={styles.sectionBadge}>{t.stats.badge}</span>
        <h2 className={styles.sectionTitle}>{t.stats.title}</h2>
        <div className={styles.statsGrid}>
          {t.stats.items.map((s) => (
            <div key={s.label} className={styles.statCell}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 05 Certifications ───────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <span className={styles.sectionBadge}>{t.certifications.badge}</span>
        <h2 className={styles.sectionTitle}>{t.certifications.title}</h2>
        <div className={styles.borderedGrid}>
          {t.certifications.items.map((c) => (
            <div key={c.name} className={styles.certCell}>
              <span className={styles.certName}>{c.name}</span>
              <p className={styles.certDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 06 Team ─────────────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <span className={styles.sectionBadge}>{t.team.badge}</span>
        <div className={styles.teamIntro}>
          <span className={styles.bigNum}>{t.team.bigNum}</span>
          <h2 className={styles.bigNumLabel}>{t.team.title}</h2>
        </div>
        <div className={styles.teamGrid}>
          {t.team.members.map((m) => (
            <div key={m.name} className={styles.teamCell}>
              <div className={styles.teamPhoto}>
                <div className={styles.teamPhotoPlaceholder} />
              </div>
              <div className={styles.teamInfo}>
                <h3 className={styles.teamName}>{m.name}</h3>
                <span className={styles.teamRole}>{m.role}</span>
                <p className={styles.teamBio}>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 07 Values ───────────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section}>
        <span className={styles.sectionBadge}>{t.values.badge}</span>
        <div className={styles.teamIntro}>
          <span className={styles.bigNum}>{t.values.bigNum}</span>
          <h2 className={styles.bigNumLabel}>{t.values.title}</h2>
        </div>
        <div className={styles.valuesGrid}>
          {t.values.items.map((v) => (
            <div key={v.num} className={styles.valueCell}>
              <span className={styles.valueNum}>{v.num}</span>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}