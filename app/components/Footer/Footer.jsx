// src/components/Footer/Footer.tsx
import Link from 'next/link';                          // ← CHANGED
import styles from './Footer.module.css';               // ← IDENTICAL
import { AnimatedDivider } from '../AnimatedDivider/AnimatedDivider';

const NAV_LINKS = [
  { label: 'Home',     path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Company',  path: '/company' },
  { label: 'Services', path: '/services' },
  { label: 'Contact',  path: '/contact' },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn',  href: '#' },
  { label: 'Facebook',  href: '#' },
];

export const Footer = () => (
  <footer data-testid="footer" className={styles.footer}>
    <div className={styles.grid}>

      {/* 1 — Logo */}
      <div className={styles.logoCol}>
        <span className={styles.logoMain}>Kaiser Omnia</span>
        <span className={styles.logoSub}>Construction</span>
      </div>

      {/* 2 — Navigate */}
      <div>
        <p className={styles.colHeading}>Navigate</p>
        <ul className={styles.colLinks}>
          {NAV_LINKS.map(l => (
            <li key={l.path}>
              <Link href={l.path}>{l.label}</Link>       {/* ← to → href */}
            </li>
          ))}
        </ul>
      </div>

      {/* 3 — Social */}
      <div>
        <p className={styles.colHeading}>Social</p>
        <ul className={styles.colLinks}>
          {SOCIAL_LINKS.map(l => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 4 — Reach us */}
      <div>
        <p className={styles.colHeading}>Reach us</p>
        <ul className={styles.colLinks}>
          <li><span>Μεγαρίδος 125</span></li>
          <li><span>Ασπρόπυργος, Αττική</span></li>
          <li><a href="tel:+306948209440">+30 694 820 9440</a></li>
        </ul>
      </div>

      {/* 5 — Contact */}
      <div>
        <p className={styles.colHeading}>Contact</p>
        <ul className={styles.colLinks}>
          <li><a href="mailto:info@kaiser-omnia.gr">info@kaiser-omnia.gr</a></li>
          <li><Link href="/contact">Send a message</Link></li>  {/* ← to → href */}
        </ul>
      </div>
    </div>

    <AnimatedDivider color="#2a2a2a" />

    <div className={styles.bottom}>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Kaiser Omnia Construction. All rights reserved.
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
        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
        <li><Link href="/terms-of-use">Terms of Use</Link></li>
      </ul>
    </div>
  </footer>
);

export default Footer;