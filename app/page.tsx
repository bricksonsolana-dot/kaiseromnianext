// app/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext';
import translations from '@/app/translations/home'; // adjust path to match yours
import styles from './HomePage.module.css';
import { AnimatedDivider } from '@/app/components/AnimatedDivider/AnimatedDivider';
import ParallaxImage from '@/app/components/ParallaxImage/ParallaxImage';
import PageCTA from '@/app/components/PageCTA/PageCTA';

// ── Types ──────────────────────────────────────────────────────────────────

type Language = 'el' | 'en';

interface Service {
  code: string;
  name: string;
  description: string;
}

interface Project {
  id: number;
  nameEl: string;
  nameEn: string;
  locationEl: string;
  locationEn: string;
  year: string;
  image: string;
}

// ── Static Data ────────────────────────────────────────────────────────────

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
      name: 'Σχεδιασμός & Μηχανική',
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
      name: 'Design & Engineering',
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

export default function HomePage() {
  const { language } = useLanguage() as { language: Language; toggleLanguage: () => void };
  const t = translations[language];
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const [openService, setOpenService] = useState<number | null>(null);

  const services = SERVICES[language];

  const handleServiceToggle = (index: number) => {
    setOpenService(openService === index ? null : index);
  };

  // Parallax scroll effect on hero
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

  // Pair up projects for the two-column row layout
  const projectPairs: Project[][] = [
    [PROJECTS[0], PROJECTS[1]],
    [PROJECTS[2], PROJECTS[3]],
  ];

  return (
    <div data-testid="home-page">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className={styles.hero} data-testid="hero-section">
        <div ref={heroBgRef} className={styles.heroBg}>
          {/*
           * next/image requires explicit width + height (or fill).
           * Use fill + object-cover when the parent is position:relative
           * with a fixed height — which your hero almost certainly is.
           */}
          <Image
            src="/images/home/landingphoto.png"
            alt="Kaiser Omnia Construction"
            fill
            priority          // LCP image — load immediately
            sizes="100vw"
            className={styles.heroBgImg} // add object-fit:cover here in CSS
          />
        </div>
        <div className={styles.heroOverlay} />

        <div ref={heroContentRef} className={styles.heroContent}>
          <span className={styles.heroTag}>{t.hero.tag}</span>
          <h1>
            <span className={styles.heroHeadSpan}>{t.hero.titleLine1}</span>
            <span className={`${styles.heroHeadSpan} ${styles.italic}`}>
              {t.hero.titleLine2}
            </span>
          </h1>
          <p className={styles.heroSubtitle}>{t.hero.subtitle}</p>
        </div>
      </section>

      {/* ── 01 Services ───────────────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section} data-testid="services-section">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>01</span>
          <h2 className={styles.sectionTitle}>
            {language === 'el' ? 'Υπηρεσίες μας' : 'Our Services'}
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
          <Link href="/services" className="arrow-link">
            {language === 'el' ? 'Όλες οι υπηρεσίες' : 'All services'}{' '}
            <ArrowRight />
          </Link>
        </div>
      </section>

      {/* ── 02 Company ────────────────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section} data-testid="about-preview">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>02</span>
          <h2 className={styles.sectionTitle}>{t.about.sectionTitle}</h2>
        </div>

        <div className={styles.companyGrid}>
          <div>
            <h3 className={styles.companyHeading}>{t.about.abouttitleline}</h3>
            <p className={styles.companyBody}>{t.about.body}</p>
            <Link href="/company" className="arrow-link">
              {t.about.cta} <ArrowRight />
            </Link>
          </div>

          <div className={styles.companyImageWrap}>
            <ParallaxImage
              src="/images/home/whoweare.jpg"
              alt="Kaiser Omnia construction"
            />
          </div>
        </div>
      </section>

      {/* ── 03 Recent Projects ────────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.section} data-testid="projects-section">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>03</span>
          <h2 className={styles.sectionTitle}>{t.portfolio.sectionTitle}</h2>
        </div>

        <div className={styles.projectsRows}>
          {projectPairs.map((pair, idx) => (
            <div key={idx}>
              {idx > 0 && <AnimatedDivider />}
              <div className={styles.projectPair}>
                {pair.map((p) => (
                  <Link key={p.id} href="/projects" className={styles.projectCard}>
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
          <Link href="/projects" className="arrow-link">
            {t.portfolio.viewAll} <ArrowRight />
          </Link>
        </div>
      </section>

      {/* ── 04 Technology ─────────────────────────────────────────── */}
      <AnimatedDivider />
      <section className={styles.techSection} data-testid="tech-preview">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>04</span>
          <h2 className={styles.sectionTitle}>{t.technology.sectionTitle}</h2>
        </div>

        <div className={styles.techGrid}>
          <div>
            <p className={styles.techBody}>{t.technology.body}</p>
            <div className={styles.techBenefits}>
              {t.technology.benefits.map((b, i) => (
                <div key={i} className={styles.techBenefit}>
                  <span className={styles.techBenefitTitle}>{b.title}</span>
                  <p className={styles.techBenefitDesc}>{b.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/services" className="arrow-link">
              {t.technology.cta} <ArrowRight />
            </Link>
          </div>

          <div className={styles.techImageWrap}>
            <ParallaxImage
              src="/images/home/geranosmepanel.png"
              alt="Double Wall Technology"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <PageCTA />

    </div>
  );
}