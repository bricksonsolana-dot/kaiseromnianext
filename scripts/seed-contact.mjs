import { createClient } from '@sanity/client';

if (!process.env.SANITY_WRITE_TOKEN) {
  console.error('Error: SANITY_WRITE_TOKEN environment variable is not set.');
  console.error('Run with: SANITY_WRITE_TOKEN=your_token node scripts/seed-contact.mjs');
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2026-03-26',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

// Inlined from app/contact/translations.js
const el = {
  breadcrumb: { contact: '// Επικοινωνία' },
  hero: {
    title: 'Ας Χτίσουμε Μαζί',
    subtitle: 'Επικοινωνήστε μαζί μας για να συζητήσουμε το επόμενο έργο σας.',
  },
  form: {
    sectionLabel: '// Επικοινωνία',
    sectionTitle: 'Φόρμα Επικοινωνίας',
  },
  info: {
    address: {
      title: 'Έδρα & Χώρος Δραστηριότητας',
      lines: ['Μεγαρίδος 125', 'Ασπρόπυργος, Αττική', 'Ελλάδα'],
    },
    phone: {
      title: 'Τηλεφωνική Επικοινωνία',
      number: '+30 694 820 9440',
      hours: 'Δευτέρα – Παρασκευή, 08:00 – 18:00',
    },
    email: {
      title: 'Email',
      addresses: ['info@kaiser-omnia.gr'],
    },
  },
  map: {
    title: 'Kaiser Omnia - Ασπρόπυργος',
    src: 'https://maps.google.com/maps?q=%CE%9C%CE%B5%CE%B3%CE%B1%CF%81%CE%AF%CE%B4%CE%BF%CF%82+125,+%CE%91%CF%83%CF%80%CF%81%CF%8C%CF%80%CF%85%CF%81%CE%B3%CE%BF%CF%82,+%CE%91%CF%84%CF%84%CE%B9%CE%BA%CE%AE,+%CE%95%CE%BB%CE%BB%CE%AC%CE%B4%CE%B1&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  faq: {
    sectionLabel: 'Απορίες',
    sectionTitle: 'Συχνές Ερωτήσεις',
    items: [
      { question: 'Ποιος είναι ο χρόνος υλοποίησης ενός έργου;', answer: 'Ο χρόνος υλοποίησης καθορίζεται από το μέγεθος, την πολυπλοκότητα και τις ιδιαίτερες απαιτήσεις του έργου. Ενδεικτικά, μια τυπική κατοικία ολοκληρώνεται εντός 6–8 μηνών από την έναρξη των εργασιών.' },
      { question: 'Πώς διαμορφώνεται το συνολικό κόστος κατασκευής;', answer: 'Το κόστος διαμορφώνεται κατόπιν τεχνικής αξιολόγησης, βάσει της μελέτης, των επιλεγμένων υλικών και των ειδικών απαιτήσεων κάθε έργου.' },
      { question: 'Ποιο είναι το εύρος δραστηριοποίησης της εταιρείας;', answer: 'Η εταιρεία αναλαμβάνει έργα σε όλη την Ελλάδα, κατόπιν αξιολόγησης των απαιτήσεων και της τοποθεσίας του έργου.' },
      { question: 'Τι επίπεδο εγγυήσεων παρέχεται;', answer: 'Παρέχονται εγγυήσεις κατασκευής σύμφωνα με τις ισχύουσες τεχνικές προδιαγραφές και τους όρους της σύμβασης.' },
      { question: 'Υπάρχει δυνατότητα εξατομίκευσης του έργου;', answer: 'Κάθε έργο προσαρμόζεται στις ανάγκες του πελάτη, με επιλογές σε υλικά και επιμέρους στοιχεία της κατασκευής, με σταθερή εφαρμογή του συστήματος double wall.' },
      { question: 'Ποιες είναι οι προϋποθέσεις για την έναρξη κατασκευής;', answer: 'Η έναρξη των εργασιών προϋποθέτει την έκδοση των απαιτούμενων αδειών και την ολοκλήρωση των σχετικών μελετών.' },
      { question: 'Ποια είναι η τεχνική προσέγγιση της εταιρείας στην κατασκευή;', answer: 'Η εταιρεία εφαρμόζει την τεχνολογία Διπλών Τοίχων (Double Wall), επιτυγχάνοντας αυξημένη ακρίβεια κατασκευής, ενιαία δομική συμπεριφορά και περιορισμό κατασκευαστικών αποκλίσεων.' },
      { question: 'Μπορώ να επενδύσω στην ανάπτυξη ενός ακινήτου;', answer: 'Η εταιρεία υποστηρίζει επενδυτικά έργα ακινήτων, παρέχοντας ολοκληρωμένη τεχνική καθοδήγηση από τη μελέτη έως την κατασκευή.' },
    ],
  },
};

const en = {
  breadcrumb: { contact: '// Contact' },
  hero: {
    title: "Let's Build Together",
    subtitle: 'Contact us to discuss your upcoming project.',
  },
  form: {
    sectionLabel: '// Contact',
    sectionTitle: 'Contact Form',
  },
  info: {
    address: {
      title: 'Headquarters & Area of Operations',
      lines: ['Megaridos 125', 'Aspropyrgos, Attica', 'Greece'],
    },
    phone: {
      title: 'Phone Contact',
      number: '+30 694 820 9440',
      hours: 'Monday – Friday, 08:00 – 18:00',
    },
    email: {
      title: 'Email',
      addresses: ['info@kaiser-omnia.gr'],
    },
  },
  map: {
    title: 'Kaiser Omnia - Aspropyrgos',
    src: 'https://maps.google.com/maps?q=%CE%9C%CE%B5%CE%B3%CE%B1%CF%81%CE%AF%CE%B4%CE%BF%CF%82+125,+%CE%91%CF%83%CF%80%CF%81%CF%8C%CF%80%CF%85%CF%81%CE%B3%CE%BF%CF%82,+%CE%91%CF%84%CF%84%CE%B9%CE%BA%CE%AE,+%CE%95%CE%BB%CE%BB%CE%AC%CE%B4%CE%B1&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  faq: {
    sectionLabel: 'FAQ',
    sectionTitle: 'Frequently Asked Questions',
    items: [
      { question: 'What is the typical project timeline?', answer: 'The project timeline depends on the size, complexity, and specific requirements of each project. As an indication, a typical residential project is completed within 6–8 months from the start of construction.' },
      { question: 'How is the total construction cost determined?', answer: 'The total cost is determined following a technical evaluation, based on the design, selected materials, and the specific requirements of each project.' },
      { question: "What is the company's area of operation?", answer: 'The company undertakes projects across Greece, subject to evaluation of project requirements and location.' },
      { question: 'What level of warranties is provided?', answer: 'Construction warranties are provided in accordance with applicable technical standards and contractual terms.' },
      { question: 'Is project customization possible?', answer: "Each project is tailored to the client's needs, with flexibility in material selection and construction details, while maintaining the consistent application of the Double Wall system." },
      { question: 'What are the requirements to start construction?', answer: 'The commencement of works requires the issuance of all necessary permits and the completion of the relevant design studies.' },
      { question: "What is the company's technical approach to construction?", answer: 'The company applies Double Wall technology, achieving enhanced construction accuracy, unified structural performance, and reduced construction deviations.' },
      { question: 'Can I invest in a real estate development project?', answer: 'The company supports real estate investment projects, providing comprehensive technical guidance from design through to construction.' },
    ],
  },
};

const doc = {
  _id: 'contactPage',
  _type: 'contactPage',

  hero: {
    eyebrow: el.breadcrumb.contact,
    title: { el: el.hero.title, en: en.hero.title },
    subtitle: { el: el.hero.subtitle, en: en.hero.subtitle },
  },

  info: {
    address: {
      title: { el: el.info.address.title, en: en.info.address.title },
      lines: el.info.address.lines.map((line, i) => ({
        _type: 'localeString',
        _key: `addr-${i}`,
        el: line,
        en: en.info.address.lines[i],
      })),
    },
    phone: {
      title: { el: el.info.phone.title, en: en.info.phone.title },
      number: el.info.phone.number,
      hours: { el: el.info.phone.hours, en: en.info.phone.hours },
    },
    email: {
      title: { el: el.info.email.title, en: en.info.email.title },
      addresses: el.info.email.addresses,
    },
  },

  form: {
    sectionLabel: el.form.sectionLabel,
    sectionTitle: { el: el.form.sectionTitle, en: en.form.sectionTitle },
  },

  map: {
    title: { el: el.map.title, en: en.map.title },
    src: el.map.src,
  },

  faq: {
    sectionLabel: { el: el.faq.sectionLabel, en: en.faq.sectionLabel },
    sectionTitle: { el: el.faq.sectionTitle, en: en.faq.sectionTitle },
    items: el.faq.items.map((item, i) => ({
      _type: 'faqItem',
      _key: `faq-${i}`,
      question: { el: item.question, en: en.faq.items[i].question },
      answer: { el: item.answer, en: en.faq.items[i].answer },
    })),
  },
};

try {
  await client.createOrReplace(doc);
  console.log('✓ contactPage document created/updated');
} catch (err) {
  console.error('Failed to upsert contactPage document:');
  console.error(err.message ?? err);
  process.exit(1);
}
