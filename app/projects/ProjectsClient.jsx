'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLanguage } from '@/app/context/LanguageContext';
import translations, { projectsMeta } from './translations';
import styles from './ProjectsPage.module.css';
import ParallaxImage from '@/app/components/ParallaxImage/ParallaxImage';

// ── ProjectDivider ────────────────────────────────────────────────
const ProjectDivider = ({ delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => {
      if (delay > 0) {
        setTimeout(() => el.classList.add(styles.dividerVisible), delay);
      } else {
        el.classList.add(styles.dividerVisible);
      }
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add(styles.dividerVisible);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return <div ref={ref} className={styles.divider} aria-hidden="true" />;
};

// ── ProjectCard ───────────────────────────────────────────────────
const ProjectCard = ({ project, statusLabels }) => {
  const images = project.images || [project.image];

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImageWrap}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={images.length > 1}
          className={styles.swiperInstance}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <ParallaxImage src={src} alt={`${project.name} ${i + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.projectInfo}>
        <span className={styles.projectCategory}>{project.typeName}</span>
        <h2 className={styles.projectTitle}>{project.name}</h2>
        <p className={styles.projectMeta}>
          {project.location.toUpperCase()} / {project.year}
        </p>
        {project.status && (
          <span className={styles.projectStatus}>
            {statusLabels[project.status]}
          </span>
        )}
        <span className={styles.projectArrow} aria-hidden="true">→</span>
      </div>
    </div>
  );
};

// ── ProjectPair ───────────────────────────────────────────────────
const ProjectPair = ({ projects, statusLabels }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add(styles.rowVisible);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add(styles.rowVisible), 120);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={rowRef} className={styles.projectPair}>
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} statusLabels={statusLabels} />
      ))}
    </div>
  );
};

// ── Page ──────────────────────────────────────────────────────────
export default function ProjectsClient() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeFilter, setActiveFilter] = useState('all');

  const allProjects = projectsMeta.map((meta) => {
    const text = t.projects.find((p) => p.id === meta.id) || {};
    return {
      ...meta,
      name: text.name || '',
      location: text.location || '',
      typeName: text.type || '',
    };
  });

  const filtered =
    activeFilter === 'all'
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  const pairs = [];
  for (let i = 0; i < filtered.length; i += 2) {
    pairs.push(filtered.slice(i, i + 2));
  }

  return (
    <div className={styles.page} data-testid="projects-page">

      {/* ── SECTION 1 — Page header ─────────────────────────── */}
      <header className={styles.header}>
        <span className={styles.eyebrow}>{t.eyebrow}</span>
        <div className={styles.titleRow}>
          <h1 className={styles.pageTitle}>{t.pageTitle}</h1>
        </div>
        {t.pageSubtitle && (
          <p className={styles.pageSubtitle}>{t.pageSubtitle}</p>
        )}
      </header>

      <ProjectDivider delay={300} />

      {/* ── SECTION 2 — Filter bar ──────────────────────────── */}
      <div className={styles.filterBar}>
        {t.categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`${styles.filterBtn} ${activeFilter === cat.id ? styles.active : ''}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <ProjectDivider />

      {/* ── SECTION 3 — Project pairs ─────────────────────────── */}
      {pairs.length === 0 ? (
        <p className={styles.emptyState}>{t.emptyState}</p>
      ) : (
        pairs.map((pair, index) => (
          <div key={index}>
            <ProjectPair projects={pair} statusLabels={t.statusLabels} />
            <ProjectDivider />
          </div>
        ))
      )}

    </div>
  );
}