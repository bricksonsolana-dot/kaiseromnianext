'use client'
import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import styles from './Navbar.module.css';

const NAV_ITEMS = {
  el: [
    { num: '01', label: 'Αρχική', path: '/' },
    { num: '02', label: 'Έργα', path: '/projects' },
    { num: '03', label: 'Εταιρεία', path: '/company' },
    { num: '04', label: 'Υπηρεσίες', path: '/services' },
    { num: '05', label: 'Τεχνολογία', path: '/technology' },
    { num: '06', label: 'Επικοινωνία', path: '/contact' },
  ],
  en: [
    { num: '01', label: 'Home', path: '/' },
    { num: '02', label: 'Projects', path: '/projects' },
    { num: '03', label: 'Company', path: '/company' },
    { num: '04', label: 'Services', path: '/services' },
    { num: '05', label: 'Technology', path: '/technology' },
    { num: '06', label: 'Contact', path: '/contact' },
  ],
};

const CONTACT_INFO = {
  el: { label: 'Επικοινωνία', projects: 'Έργα', technology: 'Τεχνολογία' },
  en: { label: 'Contact', projects: 'Projects', technology: 'Technology' },
};

// Prefix path with /en for English, bare path for Greek (default)
function localePath(path, language) {
  if (language === 'en') {
    return path === '/' ? '/en' : `/en${path}`;
  }
  return path;
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();

  const items = NAV_ITEMS[language];
  const labels = CONTACT_INFO[language];

  // Strip locale prefix for route matching
  const barePath = useMemo(() => pathname.replace(/^\/(el|en)/, '') || '/', [pathname]);
  const isProjectsPage = barePath === '/projects';

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 60);
      if (isProjectsPage) {
        if (y > lastY && y > 80) setHidden(true);
        else if (y < lastY) setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isProjectsPage]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleToggleLanguage = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleLanguage();
  }, [toggleLanguage]);

  const handleToggleMenu = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setHidden(false);
    setMenuOpen((v) => !v);
  }, []);

  const isHeroPage = barePath === '/';
  const isTransparent = isHeroPage && !isScrolled && !menuOpen;

  const navClass = [
    styles.nav,
    menuOpen
      ? styles.menuOpen
      : isTransparent
      ? styles.transparent
      : styles.solid,
    isScrolled && !menuOpen ? styles.scrolled : '',
    isProjectsPage && hidden && !menuOpen ? styles.hidden : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <nav data-testid="navbar" className={navClass}>
        <Link href={localePath('/', language)} className={styles.logo} data-testid="logo">
          <span className={styles.logoMain}>Kaiser Omnia</span>
          <span className={styles.logoSub}>Construction</span>
        </Link>

        <div className={styles.desktopLinks}>
          <Link href={localePath('/projects', language)} className={`${styles.navLink} ${barePath === '/projects' ? styles.navLinkActive : ''}`}>
            {labels.projects}
          </Link>
          <Link href={localePath('/technology', language)} className={`${styles.navLink} ${barePath === '/technology' ? styles.navLinkActive : ''}`}>
            {labels.technology}
          </Link>
          <Link href={localePath('/contact', language)} className={`${styles.navLink} ${barePath === '/contact' ? styles.navLinkActive : ''}`}>
            {labels.label}
          </Link>
        </div>

        <div className={styles.navRight}>
          <div
            data-testid="language-switcher"
            role="button"
            tabIndex={0}
            onPointerDown={handleToggleLanguage}
            className={styles.langBtn}
            aria-label="Toggle language"
          >
            <span className={language === 'el' ? styles.langActive : styles.langInactive}>
              ΕΛ
            </span>
            <span className={styles.langSlash}>/</span>
            <span className={language === 'en' ? styles.langActive : styles.langInactive}>
              ΕΝ
            </span>
          </div>

          <div
            data-testid="mobile-menu-toggle"
            role="button"
            tabIndex={0}
            aria-label="Toggle menu"
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onPointerDown={handleToggleMenu}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>

      <div
        data-testid="mobile-menu"
        className={`${styles.overlay} ${menuOpen ? styles.open : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.overlayLeft}>
          <p className={styles.overlayContactLabel}>
            {language === 'el' ? 'Επικοινωνία' : 'Get in touch'}
          </p>
          <span className={styles.overlayContactItem}>Μεγαρίδος 125</span>
          <span className={styles.overlayContactItem}>Ασπρόπυργος, Αττική</span>
          <a
            href="tel:+306948209440"
            className={styles.overlayContactItem}
            style={{ marginTop: '0.75rem' }}
          >
            +30 694 820 9440
          </a>
          <a href="mailto:info@kaiser-omnia.gr" className={styles.overlayContactItem}>
            info@kaiser-omnia.gr
          </a>

          <div
            role="button"
            tabIndex={0}
            onPointerDown={handleToggleLanguage}
            className={styles.overlayLangBtn}
            aria-label="Toggle language"
          >
            {language === 'el' ? 'EN →' : 'ΕΛ →'}
          </div>
        </div>

        <nav className={styles.overlayRight}>
          {items.map((item) => (
            <Link
              key={item.path}
              href={localePath(item.path, language)}
              className={`${styles.overlayNavItem} ${barePath === item.path ? styles.overlayNavItemActive : ''}`}
            >
              <span className={styles.overlayNavNum}>{item.num}</span>
              <span className={styles.overlayNavLabel}>{item.label}</span>
            </Link>
          ))}

        </nav>

        <div
          role="button"
          tabIndex={0}
          onPointerDown={handleToggleLanguage}
          className={styles.overlayLangBtnMobile}
          aria-label="Toggle language"
        >
          <span
            className={
              language === 'el'
                ? styles.overlayLangActive
                : styles.overlayLangInactive
            }
          >
            ΕΛ
          </span>
          <span className={styles.overlayLangSlash}>/</span>
          <span
            className={
              language === 'en'
                ? styles.overlayLangActive
                : styles.overlayLangInactive
            }
          >
            ΕΝ
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
