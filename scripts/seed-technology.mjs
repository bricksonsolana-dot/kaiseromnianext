import { createClient } from '@sanity/client';

if (!process.env.SANITY_WRITE_TOKEN) {
  console.error('Error: SANITY_WRITE_TOKEN environment variable is not set.');
  console.error('Run with: SANITY_WRITE_TOKEN=your_token node scripts/seed-technology.mjs');
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2026-03-26',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

// Inlined from app/technology/translations.js
const translations = {
  el: {
    eyebrow: '// Τεχνολογία',
    titleLine1: 'Τεχνολογία',
    titleLine2: 'Διπλών Τοιχωμάτων',

    intro: {
      badge: '01',
      title: 'Τι είναι η Τεχνολογία Διπλών Τοιχωμάτων;',
      paragraphs: [
        'Η σύγχρονη κατασκευή κατοικιών εξελίσσεται μέσα από μεθόδους που βελτιώνουν την ποιότητα, την οργάνωση του έργου και τη συνολική αποδοτικότητα της κατασκευής. Η τεχνολογία διπλών τοιχωμάτων βασίζεται στη δημιουργία διπλών στοιχείων σκυροδέματος, τα οποία τοποθετούνται στο έργο και συνδέονται μεταξύ τους με ειδικούς μεταλλικούς συνδέσμους, διασφαλίζοντας την ακρίβεια, τη σταθερότητα και τη γεωμετρική συνέπεια της κατασκευής. Στη συνέχεια, το κενό μεταξύ τους πληρώνεται με σκυρόδεμα, δημιουργώντας έναν ενιαίο φέροντα οργανισμό. ',
        'Το αποτέλεσμα είναι μια μονολιθική, βαρέως τύπου κατασκευή από οπλισμένο σκυρόδεμα, που συνδυάζει τεχνολογική ακρίβεια με διαχρονική αντοχή και υψηλές ενεργειακές επιδόσεις, επιτρέποντας την ταχύτερη υλοποίηση έργων υψηλών προδιαγραφών. ',
      ],
    },

    introBenefits: {
      badge: '02',
      title: 'Μακροχρόνια Συμπεριφορά Κατασκευής',
      paragraphs: [
        'Η ποιότητα μιας κατασκευής αποτυπώνεται κυρίως στη συμπεριφορά της στον χρόνο. Η εφαρμογή ελεγχόμενων και επαναλαμβανόμενων συνθηκών παραγωγής οδηγεί σε σκυρόδεμα υψηλής πυκνότητας και ομοιομορφίας, με αυξημένη ανθεκτικότητα και σταθερότητα στα μηχανικά του χαρακτηριστικά. ',
        'Η ακρίβεια στην τοποθέτηση του οπλισμού και η σταθερότητα στη διαδικασία διάστρωσης και ωρίμανσης περιορίζουν τις εσωτερικές τάσεις και τις κατασκευαστικές ασυνέχειες που σχετίζονται με την εμφάνιση ρωγμών. Με τον τρόπο αυτό, η κατασκευή διατηρεί τη συνοχή και την ακεραιότητά της σε βάθος χρόνου. ',
        'Το αποτέλεσμα είναι ένας φέρων οργανισμός με διαχρονική αξιοπιστία, υψηλή ανθεκτικότητα σε φθορά και περιβαλλοντικές επιδράσεις, που διατηρεί τα χαρακτηριστικά του χωρίς την ανάγκη παρεμβάσεων συντήρησης που προκύπτουν συνήθως σε συμβατικές κατασκευές. ',
      ],
    },

    comparison: {
      badge: '03',
      title: 'Γιατί Διπλοί Τοίχοι;',
      headers: {
        conventional: 'Συμβατική Κατασκευή',
        doubleWall: 'Διπλοί Τοίχοι',
      },
      rows: [
        { feature: 'Χρόνος Κατασκευής',         conventional: '9–12 μήνες',                    doubleWall: '6–9 μήνες' },
        { feature: 'Αντισεισμική Συμπεριφορά',   conventional: 'Σύμφωνα με Ευρωκώδικα 8',      doubleWall: 'Πλήρης συμμόρφωση με Ευρωκώδικα 8' },
        { feature: 'Θερμική Απόδοση',            conventional: 'Εξαρτάται από τη μελέτη',      doubleWall: 'Βελτιωμένη θερμική συμπεριφορά' },
        { feature: 'Ακρίβεια Κατασκευής',        conventional: 'Πιθανές αποκλίσεις στοιχείων', doubleWall: 'Υψηλή γεωμετρική ακρίβεια' },
        { feature: 'Κατασκευαστικές Διορθώσεις', conventional: 'Συχνές διορθώσεις',            doubleWall: 'Καθαρή κατασκευή χωρίς μερεμέτια' },
        { feature: 'Κόστος Κατασκευής',          conventional: 'Μεταβλητό',                    doubleWall: 'Ανταγωνιστικό' },
      ],
    },

    cta: {
      title: 'Έτοιμοι να Εφαρμόσετε την Τεχνολογία Διπλών Τοίχων;',
      subtitle: 'Επικοινωνήστε μαζί μας για να μάθετε πώς η τεχνολογία μας μπορεί να μετατρέψει το επόμενο κατασκευαστικό σας έργο.',
      btn: 'Ζητήστε Προσφορά',
    },
  },

  en: {
    eyebrow: '// Technology',
    titleLine1: 'Double Wall',
    titleLine2: 'Technology',

    intro: {
      badge: '01',
      title: 'Benefits in Practice',
      paragraphs: [
        'Double Wall technology is a modern method for constructing load-bearing reinforced concrete elements, combining factory-level quality with the monolithic integrity of in-situ concreting.',
        'The fundamental principle of the method is the creation of a double concrete wall — two prefabricated panels connected by transverse lattice girders — which after concreting functions as a single, fully monolithic structural element. In-situ concrete pouring eliminates all discontinuities and ensures complete continuity of the load-bearing structure.',
        'The result is a construction of high geometric precision, with correct wall alignment and clean geometry, without the need for corrective interventions in subsequent stages. At the same time, the continuous connection of structural elements ensures high structural strength and full compliance with modern seismic regulations (Eurocode 8), making the method the ideal choice for buildings requiring high seismic protection.',
      ],
    },

    introBenefits: {
      badge: '02',
      title: 'Operational & Environmental Benefits',
      paragraphs: [
        'Double Wall technology delivers substantial benefits both in project management and sustainability.',
        'The organised and controlled construction process allows significant acceleration of the schedule, with project progress up to 40% faster compared to conventional methods. At the same time, the composition of the double walls improves the thermal insulation and soundproofing performance of the building, contributing to more comfortable and energy-efficient interior spaces.',
        'Finally, the method is distinguished by its low ecological footprint: it produces 30% less construction waste, relies on recyclable materials, and involves reduced energy consumption during production — factors that place it among the most sustainable choices in modern construction.',
      ],
    },

    comparison: {
      badge: '03',
      title: 'Why Double Walls?',
      headers: {
        conventional: 'Conventional Construction',
        doubleWall: 'Double Wall System',
      },
      rows: [
        { feature: 'Construction Time',        conventional: '9–12 months',                 doubleWall: '6–9 months' },
        { feature: 'Seismic Performance',      conventional: 'Eurocode 8 compliant',        doubleWall: 'Full Eurocode 8 compliance' },
        { feature: 'Thermal Performance',      conventional: 'Depends on design',           doubleWall: 'Improved thermal performance' },
        { feature: 'Construction Precision',   conventional: 'Possible element deviations', doubleWall: 'High geometric precision' },
        { feature: 'Construction Corrections', conventional: 'Frequent corrections',        doubleWall: 'Clean construction without patch-ups' },
        { feature: 'Construction Cost',        conventional: 'Variable',                    doubleWall: 'Competitive' },
      ],
    },

    cta: {
      title: 'Ready to Apply Double Wall Technology?',
      subtitle: 'Contact us to learn how our technology can transform your next construction project.',
      btn: 'Request a Quote',
    },
  },
};

// The el intro has 2 paragraphs, en has 3. Use the longer array length and fall back to empty string.
const introParagraphCount = Math.max(
  translations.el.intro.paragraphs.length,
  translations.en.intro.paragraphs.length,
);

const introBenefitsParagraphCount = Math.max(
  translations.el.introBenefits.paragraphs.length,
  translations.en.introBenefits.paragraphs.length,
);

const doc = {
  _id: 'technologyPage',
  _type: 'technologyPage',

  hero: {
    eyebrow:    { el: translations.el.eyebrow,    en: translations.en.eyebrow },
    titleLine1: { el: translations.el.titleLine1, en: translations.en.titleLine1 },
    titleLine2: { el: translations.el.titleLine2, en: translations.en.titleLine2 },
  },

  intro: {
    badge: translations.el.intro.badge,
    title: { el: translations.el.intro.title, en: translations.en.intro.title },
    paragraphs: Array.from({ length: introParagraphCount }, (_, i) => ({
      _type: 'localeText',
      _key: `intro-p-${i}`,
      el: translations.el.intro.paragraphs[i] ?? '',
      en: translations.en.intro.paragraphs[i] ?? '',
    })),
  },

  introBenefits: {
    badge: translations.el.introBenefits.badge,
    title: { el: translations.el.introBenefits.title, en: translations.en.introBenefits.title },
    paragraphs: Array.from({ length: introBenefitsParagraphCount }, (_, i) => ({
      _type: 'localeText',
      _key: `benefits-p-${i}`,
      el: translations.el.introBenefits.paragraphs[i] ?? '',
      en: translations.en.introBenefits.paragraphs[i] ?? '',
    })),
  },

  comparison: {
    badge: translations.el.comparison.badge,
    title: { el: translations.el.comparison.title, en: translations.en.comparison.title },
    headers: {
      conventional: {
        el: translations.el.comparison.headers.conventional,
        en: translations.en.comparison.headers.conventional,
      },
      doubleWall: {
        el: translations.el.comparison.headers.doubleWall,
        en: translations.en.comparison.headers.doubleWall,
      },
    },
    rows: translations.el.comparison.rows.map((_, i) => ({
      _type: 'comparisonRow',
      _key: `row-${i}`,
      feature:      { el: translations.el.comparison.rows[i].feature,      en: translations.en.comparison.rows[i].feature },
      conventional: { el: translations.el.comparison.rows[i].conventional, en: translations.en.comparison.rows[i].conventional },
      doubleWall:   { el: translations.el.comparison.rows[i].doubleWall,   en: translations.en.comparison.rows[i].doubleWall },
    })),
  },

  cta: {
    title:    { el: translations.el.cta.title, en: translations.en.cta.title },
    subtitle: { el: translations.el.cta.subtitle, en: translations.en.cta.subtitle },
    btn:      { el: translations.el.cta.btn, en: translations.en.cta.btn },
  },
};

try {
  await client.createOrReplace(doc);
  console.log('✓ technologyPage document created/updated');
} catch (err) {
  console.error('Failed to upsert technologyPage document:');
  console.error(err.message ?? err);
  process.exit(1);
}
