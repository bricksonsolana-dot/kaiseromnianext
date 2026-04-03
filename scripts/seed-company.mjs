import { createClient } from '@sanity/client';

if (!process.env.SANITY_WRITE_TOKEN) {
  console.error('Error: SANITY_WRITE_TOKEN environment variable is not set.');
  console.error('Run with: SANITY_WRITE_TOKEN=your_token node scripts/seed-company.mjs');
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2026-03-26',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

// Inlined from app/company/translations.js
const translations = {
  el: {
    eyebrow: '// Εταιρεία',
    pageTitle: '1979 – Σήμερα',

    about: {
      badge: '01',
      title: 'Η KaiserOmnia',
      paragraphs: [
        'Από το 1979, η Kaiser Omnia δραστηριοποιείται στον σχεδιασμό και την υλοποίηση έργων οπλισμένου σκυροδέματος, με συνεχή παρουσία στον κατασκευαστικό κλάδο και σταθερή προσήλωση στην ποιότητα και τη δομική αξιοπιστία. ',
        'Η εξειδίκευση στην τεχνολογία Double Wall δεν αποτελεί απλώς μια επιμέρους εφαρμογή, αλλά βασικό αντικείμενο δραστηριότητας. Η εμπειρία και η τεχνική εξειδίκευση στο σύστημα αυτό εξασφαλίζουν την υλοποίηση έργων με ακρίβεια, συνέπεια και υψηλές κατασκευαστικές προδιαγραφές. ',
        'Το αντικείμενο της εταιρείας περιλαμβάνει οικιστικά, επαγγελματικά και εμπορικά έργα, με έμφαση στον σύγχρονο αρχιτεκτονικό σχεδιασμό, τη δομική αντοχή και τη δημιουργία κατασκευών με διαχρονική αξία. Κάθε έργο προσεγγίζεται με οργανωμένη μεθοδολογία και συνεχή τεχνικό έλεγχο, από τη μελέτη έως την πλήρη υλοποίηση. ',
      ],
    },

    timeline: {
      badge: '02',
      title: 'Η Πορεία μας στον Χρόνο',
      events: [
        { year: '1979', title: 'Ίδρυση της εταιρείας', desc: 'Έναρξη δραστηριότητας στον κατασκευαστικό τομέα.' },
        { year: '2000', title: 'Έργα μεγάλης κλίμακας ', desc: 'Πρώτη συμμετοχή σε εμπορικά έργα μεγάλης κλίμακας με εφαρμογή του συστήματος double wall' },
        { year: '2010', title: 'Έργα υψηλών απαιτήσεων', desc: 'Συμμετοχή σε έργα αυξημένης πολυπλοκότητας και υψηλών προδιαγραφών.' },
        { year: '2015', title: 'Διεύρυνση δραστηριότητας', desc: 'Ανάληψη έργων σε όλη την Ελλάδα και έναρξη διεθνούς παρουσίας με δραστηριότητα στη Τζέντα. ' },
        { year: 'Σήμερα', title: 'Εξέλιξη της Κατασκευής', desc: 'Η Kaiser Omnia συνεχίζει δυναμικά, με αποκλειστική εξειδίκευση στο σύστημα double wall' },
      ],
    },

    mvv: {
      badge: '03',
      title: 'Τεχνική Προσέγγιση & Αρχές Υλοποίησης',
      mission: {
        title: 'Η φιλοσοφία μας ',
        content: 'Η υλοποίηση κάθε έργου βασίζεται σε σαφή οργάνωση, τεχνικό σχεδιασμό και συνεπή διαχείριση όλων των σταδίων της κατασκευής. Η προσέγγιση δίνει έμφαση στον συντονισμό των εργασιών, στην ακρίβεια εφαρμογής και στη λειτουργική ολοκλήρωση του έργου ',
      },
      vision: {
        title: 'Η εξειδίκευσή μας ',
        content: 'Η Kaiser Omnia εξειδικεύεται στην τεχνολογία Double Wall, ένα σύγχρονο σύστημα κατασκευής που συνδυάζει την ακρίβεια βιομηχανικής παραγωγής με την αντοχή μονολιθικού σκυροδέματος επί τόπου. Η μέθοδος αυτή εξασφαλίζει απόλυτη γεωμετρική ακρίβεια, σταθερή ποιότητα κατασκευής και σημαντικά μειωμένο χρόνο υλοποίησης, χωρίς συμβιβασμούς στη στατική επάρκεια.',
      },
      values: {
        title: 'Η δέσμευσή μας ',
        content: 'Κάθε έργο αντιμετωπίζεται με υπευθυνότητα, συνέπεια και πλήρη έλεγχο σε κάθε στάδιο της κατασκευής. Στόχος μας είναι η άρτια υλοποίηση, η τήρηση των χρονοδιαγραμμάτων και η δημιουργία κατασκευών που ανταποκρίνονται απόλυτα στις απαιτήσεις του πελάτη, τόσο σε ποιότητα όσο και σε λειτουργικότητα.',
      },
    },
  },

  en: {
    eyebrow: '// Company',
    pageTitle: '1979-Today',

    about: {
      badge: '01',
      title: 'KaiserOmnia',
      paragraphs: [
        'Since 1979, Kaiser Omnia has been engaged in the design and construction of reinforced concrete projects, maintaining a strong presence in the construction sector and a consistent commitment to quality and structural reliability.',
        'Double Wall technology is not treated as a secondary application, but as a core area of expertise. The company\'s experience and technical specialization in this system ensure the delivery of projects with precision, consistency, and high construction standards.',
        'The company\'s scope includes residential, commercial, and professional projects, with a focus on contemporary architectural design, structural integrity, and long-term value. Each project is approached through a structured methodology and continuous technical oversight, from initial design to final execution.',
      ],
    },

    timeline: {
      badge: '02',
      title: 'Our Journey Through Time',
      events: [
        { year: '1979', title: 'Company Foundation', desc: 'Entry into the construction sector.' },
        { year: '2000', title: 'Large-Scale Projects', desc: 'First involvement in large-scale commercial projects with the application of the Double Wall system.' },
        { year: '2010', title: 'High-Demand Projects', desc: 'Participation in complex, high-specification projects.' },
        { year: '2015', title: 'Expansion of Activities', desc: 'Undertaking projects across Greece and establishing an international presence with activity in Jeddah. ' },
        { year: 'Today', title: 'Advancing Construction', desc: 'Kaiser Omnia continues to grow, with exclusive specialization in the Double Wall system' },
      ],
    },

    mvv: {
      badge: '03',
      title: 'Technical Approach & Principles of Execution',
      mission: {
        title: 'Our Philosophy',
        content: 'The execution of each project is based on clear organization, technical planning, and consistent management across all stages of construction. The approach emphasizes coordination, precision in execution, and the functional completion of the project.',
      },
      vision: {
        title: 'Our Expertise',
        content: 'Kaiser Omnia specializes in Double Wall technology, a modern construction system that combines the precision of industrial production with the strength of in-situ monolithic concrete. This method ensures absolute geometric accuracy, consistent construction quality, and significantly reduced project timelines, without compromising structural performance.',
      },
      values: {
        title: 'Our Commitment',
        content: 'Each project is handled with responsibility, consistency, and full control at every stage of construction. The objective is the proper execution of each project, adherence to timelines, and the delivery of constructions that fully meet client requirements, both in quality and functionality.',
      },
    },
  },
};

// Use Math.max for paragraph count to handle different array lengths per locale
const aboutParagraphCount = Math.max(
  translations.el.about.paragraphs.length,
  translations.en.about.paragraphs.length,
);

const doc = {
  _id: 'companyPage',
  _type: 'companyPage',

  header: {
    eyebrow: translations.el.eyebrow,
    pageTitle: { el: translations.el.pageTitle, en: translations.en.pageTitle },
  },

  about: {
    badge: translations.el.about.badge,
    title: { el: translations.el.about.title, en: translations.en.about.title },
    paragraphs: Array.from({ length: aboutParagraphCount }, (_, i) => ({
      _type: 'localeText',
      _key: `about-p-${i}`,
      el: translations.el.about.paragraphs[i] ?? '',
      en: translations.en.about.paragraphs[i] ?? '',
    })),
  },

  timeline: {
    badge: translations.el.timeline.badge,
    title: { el: translations.el.timeline.title, en: translations.en.timeline.title },
    events: translations.el.timeline.events.map((_, i) => ({
      _type: 'timelineEvent',
      _key: `event-${i}`,
      year: translations.el.timeline.events[i].year,
      title: { el: translations.el.timeline.events[i].title, en: translations.en.timeline.events[i].title },
      desc:  { el: translations.el.timeline.events[i].desc,  en: translations.en.timeline.events[i].desc },
    })),
  },

  mvv: {
    badge: translations.el.mvv.badge,
    title: { el: translations.el.mvv.title, en: translations.en.mvv.title },
    mission: {
      title:   { el: translations.el.mvv.mission.title,   en: translations.en.mvv.mission.title },
      content: { el: translations.el.mvv.mission.content, en: translations.en.mvv.mission.content },
    },
    vision: {
      title:   { el: translations.el.mvv.vision.title,   en: translations.en.mvv.vision.title },
      content: { el: translations.el.mvv.vision.content, en: translations.en.mvv.vision.content },
    },
    values: {
      title:   { el: translations.el.mvv.values.title,   en: translations.en.mvv.values.title },
      content: { el: translations.el.mvv.values.content, en: translations.en.mvv.values.content },
    },
  },
};

try {
  await client.createOrReplace(doc);
  console.log('✓ companyPage document created/updated');
} catch (err) {
  console.error('Failed to upsert companyPage document:');
  console.error(err.message ?? err);
  process.exit(1);
}
