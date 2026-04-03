'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';                                    // ← from master
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLanguage } from '@/app/context/LanguageContext';
import translations, { projectsMeta } from './translations';
import styles from './ProjectsPage.module.css';
import ParallaxImage from '@/app/components/ParallaxImage/ParallaxImage';
import PageCTA from '@/app/components/PageCTA/PageCTA';            // ← from master

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
          {/* Master's optimisation: first slide = ParallaxImage, rest = plain Image */}
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              {i === 0 ? (
                <ParallaxImage src={src} alt={`${project.name} 1`} />
              ) : (
                <div className={styles.plainSlide}>
                  <Image
                    src={src}
                    alt={`${project.name} ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
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
            {/* Master's statusLabel override, then generic lookup */}
            {project.statusLabel || statusLabels[project.status]}
          </span>
        )}
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
export default function ProjectsClient({ sanityProjects = [], sanityPageData = null, sanityCategories = [] }) {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeFilter, setActiveFilter] = useState('all');

  const pick = (sanityField, fallback) =>
    sanityField?.[language] ?? fallback;

  // Build filter buttons: "All" + dynamic categories from Sanity
  const filterCategories = sanityCategories.length > 0
    ? [
        { id: 'all', name: pick(sanityPageData?.allLabel, t.categories[0]?.name ?? 'All') },
        ...sanityCategories.map((c) => ({ id: c.slug, name: pick(c.name, c.slug) })),
      ]
    : t.categories;

  // Sanity data → static fallback (from Sanity branch + master's statusLabel)
  const allProjects =
    sanityProjects.length > 0
      ? sanityProjects.map((p) => ({
          id: p._id,
          category: p.category,
          images: p.images || [],
          status: p.status,
          year: p.year,
          name: p.name?.[language] || '',
          location: p.location?.[language] || '',
          typeName: p.typeName?.[language] || '',
          statusLabel: null,             // Sanity projects use statusLabels lookup
        }))
      : projectsMeta.map((meta) => {
          const text = t.projects.find((p) => p.id === meta.id) || {};
          return {
            ...meta,
            name: text.name || '',
            location: text.location || '',
            typeName: text.type || '',
            statusLabel: text.statusLabel || null,   // ← from master
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
        <span className={styles.eyebrow}>{pick(sanityPageData?.header?.eyebrow, t.eyebrow)}</span>
        <div className={styles.titleRow}>
          <h1 className={styles.pageTitle}>{pick(sanityPageData?.header?.pageTitle, t.pageTitle)}</h1>
        </div>
        {pick(sanityPageData?.header?.pageSubtitle, t.pageSubtitle) && (
          <p className={styles.pageSubtitle}>{pick(sanityPageData?.header?.pageSubtitle, t.pageSubtitle)}</p>
        )}
      </header>

      <ProjectDivider delay={300} />

      {/* ── SECTION 2 — Filter bar ──────────────────────────── */}
      <div className={styles.filterBar}>
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`${styles.filterBtn} ${
              activeFilter === cat.id ? styles.active : ''
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <ProjectDivider />

      {/* ── SECTION 3 — Project pairs ─────────────────────────── */}
      {pairs.length === 0 ? (
        <p className={styles.emptyState}>{pick(sanityPageData?.uiLabels?.emptyState, t.emptyState)}</p>
      ) : (
        pairs.map((pair, index) => (
          <div key={index}>
            <ProjectPair projects={pair} statusLabels={{
              completed: pick(sanityPageData?.statusLabels?.completed, t.statusLabels.completed),
              'in-progress': pick(sanityPageData?.statusLabels?.inProgress, t.statusLabels['in-progress']),
            }} />
            <ProjectDivider />
          </div>
        ))
      )}

      {/* ── CTA — from master ─────────────────────────────────── */}
      <div className={styles.fullBleed}>
        <PageCTA />
      </div>
    </div>
  );
}