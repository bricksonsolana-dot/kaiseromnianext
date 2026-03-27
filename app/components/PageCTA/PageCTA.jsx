'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';
import { AnimatedDivider } from '@/app/components/AnimatedDivider/AnimatedDivider';
import styles from './PageCTA.module.css';

const translations = {
  el: {
    title: 'Από το Όραμα στην Κατασκευή',
    subtitle:
      'Κάθε έργο ξεκινά από μια ιδέα. Η ομάδα μας αναλαμβάνει να μετατρέψει το όραμά σας σε μια σύγχρονη και αξιόπιστη κατασκευή, με σωστό σχεδιασμό, οργάνωση και υψηλές προδιαγραφές υλοποίησης.',
    btn: 'Επικοινωνήστε Μαζί μας',
  },
  en: {
    title: 'From Vision to Construction',
    subtitle:
      'Every project begins with an idea. Our team takes on the task of turning your vision into a modern, reliable construction — with proper planning, organisation and high delivery standards.',
    btn: 'Contact Us',
  },
};

export default function PageCTA() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <AnimatedDivider />
      <section className={styles.ctaSection} data-testid="cta-banner">
        <div className={styles.ctaBg}>
          <Image
            src="/images/home/land3.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className={styles.ctaBgImg}
          />
        </div>
        <div className={styles.ctaOverlay} />
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>{t.title}</h2>
          <p className={styles.ctaSubtitle}>{t.subtitle}</p>
          <Link href="/contact" className={styles.ctaBtn}>
            {t.btn} <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
