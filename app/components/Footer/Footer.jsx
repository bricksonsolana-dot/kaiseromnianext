'use client';
import Link from 'next/link';
import styles from './Footer.module.css';
import { AnimatedDivider } from '../AnimatedDivider/AnimatedDivider';
import { useLanguage } from '@/app/context/LanguageContext';
import translations from './translations';

const NAV_LINKS_EL = [
  { label: 'Αρχική',      path: '/' },
  { label: 'Έργα',        path: '/projects' },
  { label: 'Εταιρεία',    path: '/company' },
  { label: 'Υπηρεσίες',   path: '/services' },
  { label: 'Επικοινωνία',  path: '/contact' },
];

const NAV_LINKS_EN = [
  { label: 'Home',     path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Company',  path: '/company' },
  { label: 'Services', path: '/services' },
  { label: 'Contact',  path: '/contact' },
];

function localePath(path, language) {
  if (language === 'en') {
    return path === '/' ? '/en' : `/en${path}`;
  }
  return path;
}

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.el;
  const navLinks = language === 'en' ? NAV_LINKS_EN : NAV_LINKS_EL;

  return (
    <footer data-testid="footer" className={styles.footer}>
      <div className={styles.grid}>

        {/* 1 — Logo */}
        <div className={styles.logoCol}>
          <span className={styles.logoMain}>Kaiser Omnia</span>
          <span className={styles.logoSub}>Construction</span>
        </div>

        {/* 2 — Navigate */}
        <div>
          <p className={styles.colHeading}>{t.links.title}</p>
          <ul className={styles.colLinks}>
            {navLinks.map(l => (
              <li key={l.path}>
                <Link href={localePath(l.path, language)}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3 — Reach us */}
        <div>
          <p className={styles.colHeading}>{t.contact.title}</p>
          <ul className={styles.colLinks}>
            <li><span>Μεγαρίδος 125</span></li>
            <li><span>Ασπρόπυργος, Αττική</span></li>
            <li><a href="tel:+306948209440">+30 694 820 9440</a></li>
          </ul>
        </div>

        {/* 4 — Contact */}
        <div>
          <p className={styles.colHeading}>{t.contact.title}</p>
          <ul className={styles.colLinks}>
            <li><a href="mailto:info@kaiser-omnia.gr">info@kaiser-omnia.gr</a></li>
            <li><Link href={localePath('/contact', language)}>{language === 'el' ? 'Στείλτε μήνυμα' : 'Send a message'}</Link></li>
          </ul>
        </div>
      </div>

      <AnimatedDivider color="#2a2a2a" />

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} {t.bottom.copyright}
        </p>
        <a
          href="https://digitalfootprint.gr"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.credit}
        >
          Made by Digital Footprint
        </a>
        <ul className={styles.legalLinks}>
          <li><Link href={localePath('/privacy-policy', language)}>{t.bottom.privacyPolicy}</Link></li>
          <li><Link href={localePath('/terms-of-use', language)}>{t.bottom.termsOfUse}</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
