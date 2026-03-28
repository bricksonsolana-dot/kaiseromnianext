'use client';

import { useLanguage } from '@/app/context/LanguageContext';
import styles from '@/app/legal/LegalPage.module.css';
import { AnimatedDivider } from '@/app/components/AnimatedDivider/AnimatedDivider';

const t = {
  el: {
    eyebrow: '// Νομικά',
    title: 'Πολιτική Απορρήτου',
    lastUpdated: 'Τελευταία ενημέρωση: Μάρτιος 2026',
    sections: [
      {
        heading: '1. Υπεύθυνος Επεξεργασίας',
        body: 'Η Kaiser Omnia Construction (εφεξής «εταιρεία»), με έδρα στη Λεωφόρο Κηφισίας 44, Αθήνα 15125, είναι υπεύθυνη για την επεξεργασία των προσωπικών σας δεδομένων σύμφωνα με τον Κανονισμό (ΕΕ) 2016/679 (GDPR) και την ισχύουσα ελληνική νομοθεσία.',
      },
      {
        heading: '2. Δεδομένα που Συλλέγουμε',
        body: 'Μέσω της φόρμας επικοινωνίας του ιστότοπου συλλέγουμε τα ακόλουθα δεδομένα, αποκλειστικά κατόπιν εκούσιας υποβολής τους από εσάς:',
        list: [
          'Ονοματεπώνυμο',
          'Διεύθυνση ηλεκτρονικού ταχυδρομείου',
          'Τηλέφωνο επικοινωνίας',
          'Πληροφορίες σχετικά με το έργο σας (τύπος, τ.μ., τοποθεσία)',
          'Μήνυμα ελεύθερου κειμένου',
        ],
      },
      {
        heading: '3. Σκοπός και Νομική Βάση Επεξεργασίας',
        body: 'Τα δεδομένα σας χρησιμοποιούνται αποκλειστικά για την απάντηση στο αίτημά σας και την παροχή πληροφοριών για τις υπηρεσίες μας. Η νομική βάση επεξεργασίας είναι η εκτέλεση προσυμβατικών ενεργειών (άρθρο 6 παρ. 1β GDPR) ή η συγκατάθεσή σας (άρθρο 6 παρ. 1α GDPR).',
      },
      {
        heading: '4. Διατήρηση Δεδομένων',
        body: 'Τα δεδομένα σας διατηρούνται για χρονικό διάστημα που δεν υπερβαίνει τα 3 χρόνια από την τελευταία επικοινωνία, εκτός εάν απαιτείται μεγαλύτερο διάστημα από την ισχύουσα νομοθεσία ή για την υπεράσπιση νομικών αξιώσεων.',
      },
      {
        heading: '5. Τα Δικαιώματά σας',
        body: 'Σύμφωνα με τον GDPR, έχετε τα εξής δικαιώματα:',
        list: [
          'Δικαίωμα πρόσβασης στα δεδομένα σας',
          'Δικαίωμα διόρθωσης ανακριβών δεδομένων',
          'Δικαίωμα διαγραφής («δικαίωμα στη λήθη»)',
          'Δικαίωμα περιορισμού της επεξεργασίας',
          'Δικαίωμα φορητότητας δεδομένων',
          'Δικαίωμα εναντίωσης στην επεξεργασία',
        ],
      },
      {
        heading: '6. Cookies',
        body: 'Ο ιστότοπος χρησιμοποιεί μόνο τεχνικά αναγκαία cookies για τη λειτουργία του. Δεν χρησιμοποιούνται cookies παρακολούθησης ή διαφημιστικά cookies χωρίς τη ρητή συγκατάθεσή σας.',
      },
      {
        heading: '7. Επικοινωνία',
        body: 'Για οποιοδήποτε ερώτημα σχετικά με την επεξεργασία των δεδομένων σας ή για την άσκηση των δικαιωμάτων σας, μπορείτε να επικοινωνήσετε μαζί μας στο:',
        contact: { label: 'info@kaiseromnia.gr', href: 'mailto:info@kaiseromnia.gr' },
      },
    ],
  },
  en: {
    eyebrow: '// Legal',
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: March 2026',
    sections: [
      {
        heading: '1. Data Controller',
        body: 'Kaiser Omnia Construction (hereinafter «the Company»), headquartered at Μεγαρίδος 125, Ασπρόπυργος, Greece, is responsible for the processing of your personal data in accordance with Regulation (EU) 2016/679 (GDPR) and applicable Greek law.',
      },
      {
        heading: '2. Data We Collect',
        body: 'Through the contact form on this website, we collect the following data, solely upon voluntary submission by you:',
        list: [
          'Full name',
          'Email address',
          'Phone number',
          'Project details (type, sq.m., location)',
          'Free-text message',
        ],
      },
      {
        heading: '3. Purpose and Legal Basis',
        body: 'Your data is used exclusively to respond to your enquiry and provide information about our services. The legal basis for processing is the performance of pre-contractual steps (Article 6(1)(b) GDPR) or your consent (Article 6(1)(a) GDPR).',
      },
      {
        heading: '4. Data Retention',
        body: 'Your data is retained for no longer than 3 years from the last communication, unless a longer period is required by applicable law or for the defence of legal claims.',
      },
      {
        heading: '5. Your Rights',
        body: 'Under the GDPR, you have the following rights:',
        list: [
          'Right of access to your data',
          'Right to rectification of inaccurate data',
          'Right to erasure ("right to be forgotten")',
          'Right to restriction of processing',
          'Right to data portability',
          'Right to object to processing',
        ],
      },
      {
        heading: '6. Cookies',
        body: 'This website uses only technically necessary cookies required for its operation. No tracking or advertising cookies are used without your explicit consent.',
      },
      {
        heading: '7. Contact',
        body: 'For any questions regarding the processing of your data or to exercise your rights, please contact us at:',
        contact: { label: 'info@kaiseromnia.gr', href: 'mailto:info@kaiseromnia.gr' },
      },
    ],
  },
};

export default function PrivacyPolicyClient() {
  const { language } = useLanguage();
  const content = t[language];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>{content.eyebrow}</span>
        <h1 className={styles.pageTitle}>{content.title}</h1>
        <p className={styles.lastUpdated}>{content.lastUpdated}</p>
      </header>

      <AnimatedDivider />

      <div className={styles.content}>
        {content.sections.map((s, i) => (
          <section key={i} className={styles.section}>
            <h2 className={styles.sectionTitle}>{s.heading}</h2>
            <p className={styles.body}>{s.body}</p>
            {s.list && (
              <ul className={styles.list}>
                {s.list.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            )}
            {s.contact && (
              <a href={s.contact.href} className={styles.contactLink}>
                {s.contact.label}
              </a>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
