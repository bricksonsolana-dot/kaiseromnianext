import { createClient } from '@sanity/client';

if (!process.env.SANITY_WRITE_TOKEN) {
  console.error('Error: SANITY_WRITE_TOKEN environment variable is not set.');
  console.error('Run with: SANITY_WRITE_TOKEN=your_token node scripts/seed-services.mjs');
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2026-03-26',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

// Inlined from app/services/translations.js
const el = {
  eyebrow: '// Υπηρεσίες',
  titleLine1: 'Από τη Μελέτη έως την Υλοποίηση',
  titleLine2: '',

  intro: {
    badge: 'Πατενταρισμένη Τεχνολογία',
    title: 'Τεχνολογία Διπλών Τοιχωμάτων',
    subtitle: 'Σύγχρονη κατασκευή από οπλισμένο σκυρόδεμα με εργοστασιακή ακρίβεια και επιτόπια ευελιξία.',
    paragraphs: [
      'Η τεχνολογία Διπλών Τοιχωμάτων αποτελεί μια σύγχρονη μέθοδο κατασκευής φερόντων στοιχείων από οπλισμένο σκυρόδεμα.',
      'Η βασική αρχή της μεθόδου είναι η δημιουργία διπλού τοιχώματος σκυροδέματος, το οποίο μετά τη σκυροδέτηση λειτουργεί ως ενιαίο δομικό στοιχείο.',
      'Τα στοιχεία τοποθετούνται στο εργοτάξιο και στη συνέχεια το σκυρόδεμα χύνεται επιτόπου, δημιουργώντας έναν πλήρως μονολιθικό φέροντα οργανισμό από οπλισμένο σκυρόδεμα.',
    ],
    statValue: '40%',
    statLabel: 'ταχύτερη εξέλιξη έργου',
    badges: ['Ακρίβεια Δομικών Στοιχείων', 'Πλήρως Μονολιθική Κατασκευή', 'Ελεγχόμενη Διαδικασία'],
  },

  services: [
    { num: '01', total: '04', title: 'Στατική Μελέτη', desc: 'Η στατική μελέτη αποτελεί τη βάση κάθε έργου, καθορίζοντας τη συμπεριφορά και την ασφάλεια του φέροντα οργανισμού.Σχεδιάζουμε με ακρίβεια βάσει του συστήματος double wall, εξασφαλίζοντας μονολιθική λειτουργία και ορθολογική κατανομή φορτίων.' },
    { num: '02', total: '04', title: 'Τεχνικός Σχεδιασμός Εφαρμογής', desc: 'Ο τεχνικός σχεδιασμός αποτελεί το κρίσιμο στάδιο όπου η μελέτη μετατρέπεται σε υλοποιήσιμη κατασκευή. Με ακρίβεια και πλήρη συντονισμό, διασφαλίζεται η σωστή εφαρμογή κάθε λεπτομέρειας, μειώνοντας αστοχίες και εξαλείφοντας αποκλίσεις κατά την εκτέλεση του έργου.' },
    { num: '03', total: '04', title: 'Κατασκευή', desc: 'Η εξειδίκευση στο σύστημα double wall γερμανικής προέλευσης αποτελεί τη βάση της κατασκευαστικής μας φιλοσοφίας, προσφέροντας βιομηχανική ακρίβεια και αυξημένη αντισεισμική θωράκιση. Ένα σύστημα που αναβαθμίζει το επίπεδο ποιότητας και αξιοπιστίας της σύγχρονης κατασκευής.' },
    { num: '04', total: '04', title: 'Διαχείριση Έργου', desc: 'Η διαχείριση έργου εξασφαλίζει τον πλήρη συντονισμό και έλεγχο κάθε φάσης της κατασκευής, με στόχο την ομαλή εξέλιξη του έργου χωρίς καθυστερήσεις ή αποκλίσεις. Μέσα από συνεχή επίβλεψη, σωστή οργάνωση συνεργείων και αυστηρό ποιοτικό έλεγχο, διασφαλίζεται η συνέπεια στο χρονοδιάγραμμα, ο έλεγχος κόστους και η υψηλή ποιότητα στο τελικό αποτέλεσμα.' },
  ],

  advantages: {
    badge: '02',
    title: 'Τεχνικά Πλεονεκτήματα',
    items: [
      { title: 'Αντισεισμική Θωράκιση', desc: 'Η κατασκευή βασίζεται σε πλήρως μονολιθικό φέροντα οργανισμό από οπλισμένο σκυρόδεμα. Η συνεχής σύνδεση των δομικών στοιχείων εξασφαλίζει υψηλή δομική αντοχή και πλήρη συμμόρφωση με τους σύγχρονους αντισεισμικούς κανονισμούς.' },
      { title: 'Μονολιθική Δομή Σκυροδέματος', desc: 'Το σκυρόδεμα του φέροντος οργανισμού χύνεται επιτόπου, δημιουργώντας μια ενιαία και συμπαγή δομή από οπλισμένο σκυρόδεμα χωρίς ασυνέχειες.' },
      { title: 'Θερμική και Ηχητική Απόδοση', desc: 'Η σύνθεση των διπλών τοιχωμάτων συμβάλλει στη βελτίωση της θερμομονωτικής και ηχομονωτικής συμπεριφοράς του κτιρίου, δημιουργώντας πιο άνετους και ενεργειακά αποδοτικούς εσωτερικούς χώρους.' },
      { title: 'Ταχύτερη Εξέλιξη Έργου', desc: 'Η οργανωμένη διαδικασία κατασκευής επιτρέπει σημαντική επιτάχυνση του χρονοδιαγράμματος, οδηγώντας σε έως 40% ταχύτερη εξέλιξη του έργου σε σχέση με συμβατικές μεθόδους κατασκευής.' },
      { title: 'Υψηλή Κατασκευαστική Ακρίβεια', desc: 'Η υψηλή γεωμετρική ακρίβεια των δομικών στοιχείων εξασφαλίζει σωστή ευθυγράμμιση των τοιχωμάτων και καθαρή γεωμετρία της κατασκευής. Με τον τρόπο αυτό αποφεύγονται διορθωτικές παρεμβάσεις στα επόμενα στάδια.' },
      { title: 'Οικολογικό Αποτύπωμα', desc: '30% λιγότερα απόβλητα κατασκευής, χρήση ανακυκλώσιμων υλικών και μειωμένη ενεργειακή κατανάλωση κατά την παραγωγή.' },
    ],
  },

  comparison: {
    badge: '03',
    title: 'Γιατί Διπλοί Τοίχοι;',
    headers: { feature: 'Χαρακτηριστικό', conventional: 'Συμβατική Κατασκευή', doubleWall: 'Διπλοί Τοίχοι Kaiser Omnia' },
    rows: [
      { feature: 'Χρόνος Κατασκευής', conventional: '9–12 μήνες', doubleWall: '6–9 μήνες' },
      { feature: 'Αντισεισμική Συμπεριφορά', conventional: 'Σύμφωνα με Ευρωκώδικα 8', doubleWall: 'Πλήρης συμμόρφωση με Ευρωκώδικα 8' },
      { feature: 'Θερμική Απόδοση', conventional: 'Εξαρτάται από τη μελέτη', doubleWall: 'Βελτιωμένη θερμική συμπεριφορά' },
      { feature: 'Ακρίβεια Κατασκευής', conventional: 'Πιθανές αποκλίσεις στοιχείων', doubleWall: 'Υψηλή γεωμετρική ακρίβεια' },
      { feature: 'Κατασκευαστικές Διορθώσεις', conventional: 'Συχνές διορθώσεις', doubleWall: 'Καθαρή κατασκευή χωρίς μερεμέτια' },
      { feature: 'Κόστος Κατασκευής', conventional: 'Μεταβλητό', doubleWall: 'Ανταγωνιστικό' },
    ],
  },

  process: {
    badge: '04',
    title: 'Η Διαδικασία Κατασκευής',
    steps: [
      { step: 1, title: 'Αρχιτεκτονική Μελέτη & Στατική Ανάλυση', desc: 'Συνεργασία με τον αρχιτέκτονα για τον σχεδιασμό και στατική μελέτη.' },
      { step: 2, title: 'Σχεδιασμός Παραγωγής (BIM Modeling)', desc: 'Τρισδιάστατος σχεδιασμός με BIM για βελτιστοποίηση της παραγωγής.' },
      { step: 3, title: 'Εργοστασιακή Κατασκευή Πάνελ', desc: 'Παραγωγή προκατασκευασμένων στοιχείων σε ελεγχόμενο περιβάλλον.' },
      { step: 4, title: 'Ποιοτικός Έλεγχος & Πιστοποίηση', desc: 'Αυστηρός έλεγχος κάθε στοιχείου πριν την αποστολή.' },
      { step: 5, title: 'Μεταφορά στο Εργοτάξιο', desc: 'Ασφαλής μεταφορά με ειδικά οχήματα στον τόπο κατασκευής.' },
      { step: 6, title: 'Τοποθέτηση & Συναρμολόγηση', desc: 'Ακριβής τοποθέτηση των στοιχείων με γερανούς.' },
      { step: 7, title: 'Σκυροδέτηση & Μονολιθοποίηση', desc: 'Πλήρωση με σκυρόδεμα για δημιουργία μονολιθικής δομής.' },
      { step: 8, title: 'Αποπεράτωση & Παράδοση', desc: 'Ολοκλήρωση φινιρισμάτων και παράδοση κλειδί στο χέρι.' },
    ],
  },

  cta: {
    title: 'Αναθέστε το Έργο σας στους Ειδικούς',
    subtitle: 'Από τον σχεδιασμό έως την ολοκλήρωση, αναλαμβάνουμε κάθε φάση με τεχνογνωσία και υπευθυνότητα.',
    btn: 'Ζητήστε Προσφορά',
  },
};

const en = {
  eyebrow: '// Services',
  titleLine1: 'From Design to Execution',
  titleLine2: '',

  intro: {
    badge: 'Patented Technology',
    title: 'Double Wall Technology',
    subtitle: 'Modern reinforced concrete construction with factory precision and on-site flexibility.',
    paragraphs: [
      'Double Wall technology is a modern method for constructing load-bearing reinforced concrete elements.',
      'The fundamental principle of the method is the creation of a double concrete wall, which after concreting functions as a unified structural element.',
      'The elements are placed on-site and then concrete is poured in situ, creating a fully monolithic load-bearing structure of reinforced concrete.',
    ],
    statValue: '40%',
    statLabel: 'Faster project progress',
    badges: ['Structural Element Precision', 'Fully Monolithic Construction', 'Controlled Process'],
  },

  services: [
    { num: '01', total: '04', title: 'Structural Engineering', desc: 'Structural engineering forms the foundation of every project, defining the performance and safety of the load-bearing structure.Our designs are developed with precision, based on the double wall system, ensuring monolithic structural behavior and optimal load distribution.' },
    { num: '02', total: '04', title: 'Technical Design for Execution', desc: 'Technical design is the critical stage where study is translated into a buildable solution. Through precision and full coordination, the correct implementation of every detail is ensured, reducing errors and eliminating deviations during construction' },
    { num: '03', total: '04', title: 'Construction', desc: 'Specialization in the German-origin Double Wall system forms the foundation of our construction approach, offering industrial-level precision and enhanced seismic performance. A system that elevates the quality and reliability of modern construction.' },
    { num: '04', total: '04', title: 'Project Management', desc: 'Project management ensures full coordination and control at every stage of construction, enabling smooth project progression without delays or deviations. Through continuous supervision, proper coordination of teams, and strict quality control, consistency in scheduling, cost control, and high-quality outcomes are achieved.' },
  ],

  advantages: {
    badge: '02',
    title: 'Technical Advantages',
    items: [
      { title: 'Seismic Protection', desc: 'The construction is based on a fully monolithic load-bearing structure of reinforced concrete. The continuous connection of structural elements ensures high structural strength and full compliance with modern seismic regulations.' },
      { title: 'Monolithic Concrete Structure', desc: 'The concrete of the load-bearing structure is poured in situ, creating a unified and solid reinforced concrete structure without discontinuities.' },
      { title: 'Thermal & Acoustic Performance', desc: 'The composition of the double walls contributes to improved thermal insulation and soundproofing performance of the building, creating more comfortable and energy-efficient interior spaces.' },
      { title: 'Faster Project Progress', desc: 'The organised construction process allows significant acceleration of the schedule, leading to up to 40% faster project progress compared to conventional construction methods.' },
      { title: 'High Construction Precision', desc: 'The high geometric precision of structural elements ensures correct alignment of walls and clean construction geometry. This eliminates corrective interventions and construction patch-ups in subsequent stages.' },
      { title: 'Ecological Footprint', desc: '30% less construction waste, use of recyclable materials and reduced energy consumption during production.' },
    ],
  },

  comparison: {
    badge: '03',
    title: 'Why Double Walls?',
    headers: { feature: 'Feature', conventional: 'Conventional Construction', doubleWall: 'Kaiser Omnia Double Walls' },
    rows: [
      { feature: 'Construction Time', conventional: '9–12 months', doubleWall: '6–9 months' },
      { feature: 'Seismic Performance', conventional: 'Eurocode 8 compliant', doubleWall: 'Full Eurocode 8 compliance' },
      { feature: 'Thermal Performance', conventional: 'Depends on design', doubleWall: 'Improved thermal performance' },
      { feature: 'Construction Precision', conventional: 'Possible element deviations', doubleWall: 'High geometric precision' },
      { feature: 'Construction Corrections', conventional: 'Frequent corrections', doubleWall: 'Clean construction without patch-ups' },
      { feature: 'Construction Cost', conventional: 'Variable', doubleWall: 'Competitive' },
    ],
  },

  process: {
    badge: '04',
    title: 'The Construction Process',
    steps: [
      { step: 1, title: 'Architectural Study & Structural Analysis', desc: 'Collaboration with the architect for design and structural study.' },
      { step: 2, title: 'Production Design (BIM Modeling)', desc: '3D design with BIM for production optimisation.' },
      { step: 3, title: 'Factory Panel Manufacturing', desc: 'Production of prefabricated elements in a controlled environment.' },
      { step: 4, title: 'Quality Control & Certification', desc: 'Strict inspection of each element before shipment.' },
      { step: 5, title: 'Transport to Construction Site', desc: 'Safe transport with special vehicles to the construction site.' },
      { step: 6, title: 'Placement & Assembly', desc: 'Precise placement of elements with cranes.' },
      { step: 7, title: 'Concreting & Monolithisation', desc: 'Filling with concrete to create a monolithic structure.' },
      { step: 8, title: 'Finishing & Delivery', desc: 'Completion of finishes and turnkey delivery.' },
    ],
  },

  cta: {
    title: 'Entrust Your Project to the Experts',
    subtitle: 'From design through to completion, we take on every phase with expertise and accountability.',
    btn: 'Request a Quote',
  },
};

const doc = {
  _id: 'servicesPage',
  _type: 'servicesPage',

  hero: {
    eyebrow: el.eyebrow,
    titleLine1: { el: el.titleLine1, en: en.titleLine1 },
    titleLine2: { el: el.titleLine2, en: en.titleLine2 },
  },

  services: el.services.map((s, i) => ({
    _type: 'serviceItem',
    _key: `service-${i}`,
    num: s.num,
    total: s.total,
    title: { el: s.title, en: en.services[i].title },
    desc: { el: s.desc, en: en.services[i].desc },
  })),

  intro: {
    badge: el.intro.badge,
    title: { el: el.intro.title, en: en.intro.title },
    subtitle: { el: el.intro.subtitle, en: en.intro.subtitle },
    paragraphs: el.intro.paragraphs.map((p, i) => ({
      _type: 'localeText',
      _key: `intro-p-${i}`,
      el: p,
      en: en.intro.paragraphs[i] ?? '',
    })),
    statValue: el.intro.statValue,
    statLabel: { el: el.intro.statLabel, en: en.intro.statLabel },
    badges: el.intro.badges.map((b, i) => ({
      _type: 'localeString',
      _key: `intro-badge-${i}`,
      el: b,
      en: en.intro.badges[i] ?? '',
    })),
  },

  advantages: {
    badge: el.advantages.badge,
    title: { el: el.advantages.title, en: en.advantages.title },
    items: el.advantages.items.map((item, i) => ({
      _type: 'advantageItem',
      _key: `adv-${i}`,
      title: { el: item.title, en: en.advantages.items[i].title },
      desc: { el: item.desc, en: en.advantages.items[i].desc },
    })),
  },

  comparison: {
    badge: el.comparison.badge,
    title: { el: el.comparison.title, en: en.comparison.title },
    headers: {
      feature: { el: el.comparison.headers.feature, en: en.comparison.headers.feature },
      conventional: { el: el.comparison.headers.conventional, en: en.comparison.headers.conventional },
      doubleWall: { el: el.comparison.headers.doubleWall, en: en.comparison.headers.doubleWall },
    },
    rows: el.comparison.rows.map((row, i) => ({
      _type: 'comparisonRow',
      _key: `row-${i}`,
      feature: { el: row.feature, en: en.comparison.rows[i].feature },
      conventional: { el: row.conventional, en: en.comparison.rows[i].conventional },
      doubleWall: { el: row.doubleWall, en: en.comparison.rows[i].doubleWall },
    })),
  },

  process: {
    badge: el.process.badge,
    title: { el: el.process.title, en: en.process.title },
    steps: el.process.steps.map((step, i) => ({
      _type: 'processStep',
      _key: `step-${i}`,
      step: step.step,
      title: { el: step.title, en: en.process.steps[i].title },
      desc: { el: step.desc, en: en.process.steps[i].desc },
    })),
  },

  cta: {
    title: { el: el.cta.title, en: en.cta.title },
    subtitle: { el: el.cta.subtitle, en: en.cta.subtitle },
    btn: { el: el.cta.btn, en: en.cta.btn },
  },
};

try {
  await client.createOrReplace(doc);
  console.log('✓ servicesPage document created/updated');
} catch (err) {
  console.error('Failed to upsert servicesPage document:');
  console.error(err.message ?? err);
  process.exit(1);
}
