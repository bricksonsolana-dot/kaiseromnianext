'use client';

import { useLanguage } from '@/app/context/LanguageContext';
import styles from '@/app/legal/LegalPage.module.css';
import { AnimatedDivider } from '@/app/components/AnimatedDivider/AnimatedDivider';

const t = {
  el: {
    eyebrow: '// Νομικά',
    title: 'Όροι Χρήσης',
    lastUpdated: 'Τελευταία ενημέρωση: Μάρτιος 2026',
    sections: [
      {
        heading: '1. Αποδοχή Όρων',
        body: 'Με την πρόσβαση και τη χρήση του παρόντος ιστότοπου αποδέχεστε ανεπιφύλακτα τους παρόντες Όρους Χρήσης. Εάν δεν συμφωνείτε με οποιονδήποτε από τους όρους αυτούς, παρακαλούμε να μην χρησιμοποιείτε τον ιστότοπο.',
      },
      {
        heading: '2. Χρήση Ιστότοπου',
        body: 'Ο παρών ιστότοπος παρέχεται αποκλειστικά για ενημερωτικούς σκοπούς σχετικά με τις υπηρεσίες και τα έργα της Kaiser Omnia Construction. Απαγορεύεται ρητά:',
        list: [
          'Η χρήση του ιστότοπου για παράνομους ή μη εξουσιοδοτημένους σκοπούς',
          'Η αντιγραφή, αναπαραγωγή ή διανομή περιεχομένου χωρίς γραπτή άδεια',
          'Οποιαδήποτε ενέργεια που θα μπορούσε να βλάψει ή να διαταράξει τη λειτουργία του ιστότοπου',
        ],
      },
      {
        heading: '3. Πνευματική Ιδιοκτησία',
        body: 'Όλο το περιεχόμενο του ιστότοπου — κείμενα, εικόνες, γραφικά, λογότυπα και σχέδια — αποτελεί πνευματική ιδιοκτησία της Kaiser Omnia Construction και προστατεύεται από την ισχύουσα νομοθεσία περί πνευματικής ιδιοκτησίας. Η μερική ή ολική αναπαραγωγή χωρίς γραπτή άδεια απαγορεύεται.',
      },
      {
        heading: '4. Αποποίηση Ευθύνης',
        body: 'Οι πληροφορίες του ιστότοπου παρέχονται «ως έχουν» για γενική ενημέρωση. Η εταιρεία δεν εγγυάται την πληρότητα, ακρίβεια ή επικαιρότητά τους και δεν ευθύνεται για τυχόν ζημίες που προκύπτουν από τη χρήση ή την αδυναμία χρήσης του ιστότοπου.',
      },
      {
        heading: '5. Σύνδεσμοι προς Τρίτους',
        body: 'Ο ιστότοπος ενδέχεται να περιλαμβάνει συνδέσμους προς ιστότοπους τρίτων. Αυτοί παρέχονται αποκλειστικά για διευκόλυνση και η εταιρεία δεν φέρει καμία ευθύνη για το περιεχόμενο ή τις πρακτικές απορρήτου τους.',
      },
      {
        heading: '6. Εφαρμοστέο Δίκαιο',
        body: 'Οι παρόντες Όροι Χρήσης διέπονται από το ελληνικό δίκαιο. Για οποιαδήποτε διαφορά σχετικά με τη χρήση του ιστότοπου αρμόδια είναι τα Δικαστήρια της Αθήνας.',
      },
      {
        heading: '7. Τροποποιήσεις',
        body: 'Η εταιρεία διατηρεί το δικαίωμα να τροποποιεί τους παρόντες Όρους Χρήσης οποιαδήποτε στιγμή. Οι αλλαγές τίθενται σε ισχύ αμέσως μετά τη δημοσίευσή τους στον ιστότοπο. Η συνέχιση χρήσης του ιστότοπου συνιστά αποδοχή των νέων όρων.',
      },
      {
        heading: '8. Επικοινωνία',
        body: 'Για οποιοδήποτε ερώτημα σχετικά με τους παρόντες Όρους Χρήσης επικοινωνήστε μαζί μας στο:',
        contact: { label: 'info@kaiseromnia.gr', href: 'mailto:info@kaiseromnia.gr' },
      },
    ],
  },
  en: {
    eyebrow: '// Legal',
    title: 'Terms of Use',
    lastUpdated: 'Last updated: March 2026',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: 'By accessing and using this website you unconditionally accept these Terms of Use. If you do not agree with any of these terms, please do not use the website.',
      },
      {
        heading: '2. Use of Website',
        body: 'This website is provided solely for informational purposes relating to the services and projects of Kaiser Omnia Construction. The following are strictly prohibited:',
        list: [
          'Use of the website for illegal or unauthorised purposes',
          'Copying, reproducing or distributing content without written permission',
          'Any action that could damage or disrupt the operation of the website',
        ],
      },
      {
        heading: '3. Intellectual Property',
        body: 'All content on this website — texts, images, graphics, logos and designs — is the intellectual property of Kaiser Omnia Construction and is protected by applicable copyright law. Partial or total reproduction without written permission is prohibited.',
      },
      {
        heading: '4. Disclaimer',
        body: 'The information on this website is provided "as is" for general information purposes. The Company makes no warranties as to its completeness, accuracy or currency and accepts no liability for any damages arising from the use of or inability to use the website.',
      },
      {
        heading: '5. Third-Party Links',
        body: 'This website may contain links to third-party websites. These are provided solely for convenience and the Company accepts no responsibility for their content or privacy practices.',
      },
      {
        heading: '6. Governing Law',
        body: 'These Terms of Use are governed by Greek law. The Courts of Athens shall have jurisdiction over any dispute relating to the use of this website.',
      },
      {
        heading: '7. Amendments',
        body: 'The Company reserves the right to amend these Terms of Use at any time. Changes take effect immediately upon publication on the website. Continued use of the website constitutes acceptance of the updated terms.',
      },
      {
        heading: '8. Contact',
        body: 'For any questions regarding these Terms of Use, please contact us at:',
        contact: { label: 'info@kaiseromnia.gr', href: 'mailto:info@kaiseromnia.gr' },
      },
    ],
  },
};

export default function TermsOfUsePage() {
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
