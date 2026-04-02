// app/HomeClient.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext';
import translations from '@/app/translations/home';
import styles from './HomePage.module.css';
import { AnimatedDivider } from '@/app/components/AnimatedDivider/AnimatedDivider';
import ParallaxImage from '@/app/components/ParallaxImage/ParallaxImage';
import PageCTA from '@/app/components/PageCTA/PageCTA';          // ← from master

// ── Helpers ─────────────────────────────────────────────────────────────────

/** Prefix path with /en when the active language is English (from master) */
function localePath(path: string, language: string) {
  if (language === 'en') {
    return path === '/' ? '/en' : `/en${path}`;
  }
  return path;
}

// ── Types ──────────────────────────────────────────────────────────────────

type Language = 'el' | 'en';

interface Service {
  code: string;
  name: string;
  description: string;
}

interface Project {
  id: string | number;
  nameEl: string;
  nameEn: string;
  locationEl: string;
  locationEn: string;
  year: string;
  image: string;
}

// ── Static Data (master's latest content, used as Sanity fallback) ─────────

const ArrowRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SERVICES: Record<Language, Service[]> = {
  el: [
    {
      code: '001',
      name: 'Στατική Μελέτη',
      description:
        'Μελέτη που προσαρμόζεται από την αρχή στο σύστημα κατασκευής, περιορίζοντας αλλαγές και περιττές δαπάνες.',
    },
    {
      code: '002',
      name: 'Τεχνικός Σχεδιασμός Εφαρμογής',
      description:
        'Αποτελεί τον συνδετικό κρίκο μεταξύ μελέτης και κατασκευής, εξασφαλίζοντας ακρίβεια και σωστή υλοποίηση.',
    },
    {
      code: '003',
      name: 'Κατασκευή',
      description:
        'Εξειδίκευση στο double wall, με αποτέλεσμα ταχύτερη πρόοδο εργασιών και σταθερή ποιότητα.',
    },
    {
      code: '004',
      name: 'Διαχείριση Έργου',
      description:
        'Συνεχής παρακολούθηση χρονοδιαγράμματος και κόστους σε κάθε φάση του έργου.',
    },
  ],
  en: [
    {
      code: '001',
      name: 'Structural Engineering',
      description:
        'Design studies that are adapted from the outset to the construction system, reducing changes and unnecessary costs.',
    },
    {
      code: '002',
      name: 'Technical Design for Execution',
      description:
        'It serves as the link between design and construction, ensuring accuracy and proper implementation.',
    },
    {
      code: '003',
      name: 'Construction',
      description:
        'Specialization in Double Wall, resulting in faster project progress and consistent quality',
    },
    {
      code: '004',
      name: 'Project Management',
      description:
        'Continuous monitoring of schedule and cost at every phase of the project.',
    },
  ],
};

const PROJECTS: Project[] = [
  {
    id: 1,
    nameEl: 'Ιδιωτική Κατοικία',
    nameEn: 'Modern Residence',
    locationEl: 'Αθήνα, Αττική',
    locationEn: 'Athens',
    year: '2022',
    image: '/images/home/erga/villaview1.png',
  },
  {
    id: 2,
    nameEl: 'Ιδιωτική Κατοικία',
    nameEn: 'Modern Residence',
    locationEl: 'Αθήνα, Αττική',
    locationEn: 'Athens',
    year: '2025',
    image: '/images/home/erga/residence1.png',
  },
  {
    id: 3,
    nameEl: 'Ιδιωτική Κατοικία',
    nameEn: 'Private Residence',
    locationEl: 'Ναύπλιο',
    locationEn: 'Nafplion',
    year: '2012',
    image: '/images/home/erga/petrino2.png',
  },
  {
    id: 4,
    nameEl: 'Τουριστικές Κατοικίες',
    nameEn: 'Tourist Residences',
    locationEl: 'Κυκλάδες',
    locationEn: 'Kyklades',
    year: '2015',
    image: '/images/home/erga/kykladespool1.png',
  },
];

// ── Component ──────────────────────────────────────────────────────────────

interface HomeClientProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sanityData?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  featuredProjects?: any[];
}

export default function HomeClient({
  sanityData = null,
  featuredProjects = [],
}: HomeClientProps) {
  const { language } = useLanguage() as {
    language: Language;
    toggleLanguage: () => void;
  };
  const t = translations[language];
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const [openService, setOpenService] = useState<number | null>(null);

  // ── Sanity helper ────────────────────────────────────────────
  const pick = (
    sanityField: { el?: string; en?: string } | null | undefined,
    fallback: string
  ): string => sanityField?.[language] || fallback;

  // ── Services — Sanity → static fallback ──────────────────────
  const services: Service[] =
    sanityData?.services?.length > 0
      ? sanityData.services.map(
          (s: {
            code: string;
            name: { el: string; en: string };
            description: { el: string; en: string };
          }) => ({
            code: s.code,
            name: s.name?.[language] || '',
            description: s.description?.[language] || '',
          })
        )
      : SERVICES[language];

  // ── Projects — Sanity → static fallback ──────────────────────
  const displayProjects: Project[] =
    featuredProjects.length > 0
      ? featuredProjects.slice(0, 4).map(
          (p: {
            _id: string;
            name?: { el: string; en: string };
            location?: { el: string; en: string };
            year?: string;
            images?: string[];
          }) => ({
            id: p._id,
            nameEl: p.name?.el || '',
            nameEn: p.name?.en || '',
            locationEl: p.location?.el || '',
            locationEn: p.location?.en || '',
            year: p.year || '',
            image: p.images?.[0] || '',
          })
        )
      : PROJECTS;

  const projectPairs: Project[][] = [];
  for (let i = 0; i < displayProjects.length; i += 2) {
    projectPairs.push(displayProjects.slice(i, i + 2));
  }

  const handleServiceToggle = (index: number) => {
    setOpenService(openService === index ? null : index);
  };

  // ── Parallax scroll ──────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translateY(${sy * 0.15}px)`;
      }
      if (heroContentRef.current) {
        heroContentRef.current.style.transform = `translateY(${sy * 0.25}px)`;
        heroContentRef.current.style.opacity = String(
          Math.max(0, 1 - sy / 600)
        );
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ─────────────────────────────────────────────────────────────
  return (
    <div data-testid="home-page">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className={styles.hero} data-testid="hero-section">
        <div ref={heroBgRef} className={styles.heroBg}>
          {/* Desktop hero – from master (with Sanity override) */}
          <Image
            src={
              sanityData?.hero?.backgroundImage ||
              '/images/home/homehero.png'
            }
            alt="Kaiser Omnia Construction"
            fill
            priority
            sizes="100vw"
            className={`${styles.heroBgImg} ${styles.heroDesktop}`}
          />
          {/* Mobile hero – from master (with Sanity override) */}
          <Image
            src={
              sanityData?.hero?.backgroundImageMobile ||
              '/og_vertical.png'
            }
            alt="Kaiser Omnia Construction"
            fill
            priority
            sizes="100vw"
            className={`${styles.heroBgImg} ${styles.heroMobile}`}
          />
        </div>
        <div className={styles.heroOverlay} />

        <div ref={heroContentRef} className={styles.heroContent}>
          <span className={styles.heroTag}>
            {sanityData?.hero?.tag || t.hero.tag}
          </span>
          <h1>
            <span className={styles.heroHeadSpan}>
              {pick(sanityData?.hero?.titleLine1, t.hero.titleLine1)}
            </span>
            <span className={`${styles.heroHeadSpan} ${styles.italic}`}>
              {pick(sanityData?.hero?.titleLine2, t.hero.titleLine2)}
            </span>
          </h1>
          <p className={styles.heroSubtitle}>
            {pick(sanityData?.hero?.subtitle, t.hero.subtitle)}
          </p>
        </div>
      </section>

      {/* ── 01 Services ───────────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section} data-testid="services-section">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>01</span>
          <h2 className={styles.sectionTitle}>
            {pick(
              sanityData?.servicesSection?.sectionTitle,
              language === 'el' ? 'Οι Υπηρεσίες μας' : 'Our Services'
            )}
          </h2>
        </div>

        <div className={styles.servicesList}>
          <AnimatedDivider />
          {services.map((s, i) => (
            <div key={s.code} className={styles.serviceItem}>
              <button
                className={`${styles.serviceRow} ${
                  openService === i ? styles.serviceRowOpen : ''
                }`}
                onClick={() => handleServiceToggle(i)}
                aria-expanded={openService === i}
              >
                <span className={styles.serviceCode}>{s.code}</span>
                <h3 className={styles.serviceName}>{s.name}</h3>
                <span className={styles.serviceIcon}>+</span>
              </button>

              <div
                className={`${styles.serviceContent} ${
                  openService === i ? styles.serviceContentOpen : ''
                }`}
                aria-hidden={openService !== i}
              >
                <div className={styles.serviceContentInner}>
                  <p className={styles.serviceDescription}>{s.description}</p>
                </div>
              </div>

              <AnimatedDivider delay={(i + 1) * 80} />
            </div>
          ))}
        </div>

        <div className={styles.servicesFooter}>
          <Link
            href={localePath('/services', language)}
            className="arrow-link"
          >
            {pick(
              sanityData?.servicesSection?.viewAll,
              language === 'el' ? 'Όλες οι υπηρεσίες' : 'All services'
            )}{' '}
            <ArrowRight />
          </Link>
        </div>
      </section>

      {/* ── 02 Company ────────────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section} data-testid="about-preview">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>02</span>
          <h2 className={styles.sectionTitle}>
            {pick(sanityData?.about?.sectionTitle, t.about.sectionTitle)}
          </h2>
        </div>

        {/* Master's 3-slot grid layout */}
        <div className={styles.companyGrid}>
          <div className={styles.companyTitle}>
            <h3 className={styles.companyHeading}>
              {pick(sanityData?.about?.heading, t.about.abouttitleline)}
            </h3>
          </div>
          <div className={styles.companyImageWrap}>
            <ParallaxImage
              src={sanityData?.about?.image || '/images/home/info.png'}
              alt="Kaiser Omnia construction"
            />
          </div>
          <div className={styles.companyText}>
            <p className={styles.companyBody}>
              {pick(sanityData?.about?.body, t.about.body)}
            </p>
            <Link
              href={localePath('/company', language)}
              className="arrow-link"
            >
              {pick(sanityData?.about?.cta, t.about.cta)} <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 03 Recent Projects ────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section} data-testid="projects-section">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>03</span>
          <h2 className={styles.sectionTitle}>
            {pick(
              sanityData?.portfolio?.sectionTitle,
              t.portfolio.sectionTitle
            )}
          </h2>
        </div>

        <div className={styles.projectsRows}>
          {projectPairs.map((pair, idx) => (
            <div key={idx}>
              {idx > 0 && <AnimatedDivider />}
              <div className={styles.projectPair}>
                {pair.map((p) => (
                  <Link
                    key={p.id}
                    href={localePath('/projects', language)}
                    className={styles.projectCard}
                  >
                    <div className={styles.projectImageWrap}>
                      <ParallaxImage
                        src={p.image}
                        alt={language === 'el' ? p.nameEl : p.nameEn}
                      />
                    </div>
                    <div className={styles.projectInfoBar}>
                      <h3 className={styles.projectName}>
                        {language === 'el' ? p.nameEl : p.nameEn}
                      </h3>
                      <div className={styles.projectMeta}>
                        <span>
                          {language === 'el' ? p.locationEl : p.locationEn}
                        </span>
                        <br />
                        <span>{p.year}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <Link
            href={localePath('/projects', language)}
            className="arrow-link"
          >
            {pick(sanityData?.portfolio?.viewAll, t.portfolio.viewAll)}{' '}
            <ArrowRight />
          </Link>
        </div>
      </section>

      {/* ── 04 Technology ─────────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.techSection} data-testid="tech-preview">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>04</span>
          <h2 className={styles.sectionTitle}>
            {pick(
              sanityData?.technology?.sectionTitle,
              t.technology.sectionTitle
            )}
          </h2>
        </div>

        <div className={styles.techGrid}>
          <div>
            <p className={styles.techBody}>
              {pick(sanityData?.technology?.body, t.technology.body)}
            </p>
            <div className={styles.techBenefits}>
              {(sanityData?.technology?.benefits?.length > 0
                ? sanityData.technology.benefits.map(
                    (b: {
                      title?: { el: string; en: string };
                      desc?: { el: string; en: string };
                    }) => ({
                      title: b.title?.[language] || '',
                      desc: b.desc?.[language] || '',
                    })
                  )
                : t.technology.benefits
              ).map((b: { title: string; desc: string }, i: number) => (
                <div key={i} className={styles.techBenefit}>
                  <span className={styles.techBenefitTitle}>{b.title}</span>
                  <p className={styles.techBenefitDesc}>{b.desc}</p>
                </div>
              ))}
            </div>
            <Link
              href={localePath('/services', language)}
              className="arrow-link"
            >
              {pick(sanityData?.technology?.cta, t.technology.cta)}{' '}
              <ArrowRight />
            </Link>
          </div>

          <div className={styles.techImageWrap}>
            <ParallaxImage
              src={
                sanityData?.technology?.image ||
                '/images/home/geranosmepanel.png'
              }
              alt="Double Wall Technology"
            />
          </div>
        </div>
      </section>

      {/* ── CTA — using master's PageCTA component ────────────── */}
      <PageCTA />
    </div>
  );
}