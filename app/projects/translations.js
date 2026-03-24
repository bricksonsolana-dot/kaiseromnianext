// All project meta (images + category) — static, not translatable
// Each project has an `images` array for the carousel — swap URLs as needed.
export const projectsMeta = [
    { id: 1,  category: 'apartment',   images: ['/images/home/erga/mall-1.png',    '/images/home/erga/mall-2.png',    '/images/home/erga/mall-3.png'],    status: 'completed',   year: '2023' },
    { id: 2,  category: 'hotel',       images: ['/images/home/erga/athens-heart-1.png',       '/images/home/erga/athens-heart-2.png',       '/images/home/erga/athens-heart-3.png'],       status: 'completed',   year: '2022' },
    { id: 3,  category: 'commercial',  images: ['/images/home/erga/kykladespool1.png', '/images/home/erga/kykladespool2.png', '/images/home/erga/kykladespool3.png'], status: 'completed',   year: '2021' },
    { id: 4,  category: 'residential', images: ['/images/home/erga/kyklades1.png',       '/images/home/erga/kyklades2.png',       '/images/home/erga/kyklades3.png'],       status: 'completed',   year: '2020' },
    { id: 5,  category: 'public',      images: ['/images/home/erga/villaview1.png',             '/images/home/erga/villaview2.png',             '/images/home/erga/villaview3.png'],             status: 'completed',   year: '2019' },
    { id: 6,  category: 'industrial',  images: ['/images/home/erga/petrino1.png',     '/images/home/erga/petrino2.png',     '/images/home/erga/petrino3.png'],     status: 'completed',   year: '2021' },
    { id: 7,  category: 'apartment',   images: ['/images/home/erga/villapool1.png',  '/images/home/erga/villapool2.png',  '/images/home/erga/villapool3.png'],  status: 'completed',   year: '2023' },
    { id: 8,  category: 'hotel',       images: ['/images/home/erga/nayplio1.png', '/images/home/erga/nayplio2.png', '/images/home/erga/nayplio3.png'], status: 'completed',   year: '2022' },
    { id: 9,  category: 'residential', images: ['/images/home/erga/zakynthos.png',   '/images/home/erga/zakynthos.png',   '/images/home/erga/zakynthos.png'],   status: 'completed',   year: '2020' },
    { id: 10, category: 'apartment',   images: ['/images/home/erga/sygkrothma2.png', '/images/home/erga/sygkrothma2.png', '/images/home/erga/sygkrothma2.png'], status: 'in-progress', year: '2024' },
  ];
  
  const translations = {
    el: {
      eyebrow: '',
      pageTitle: 'Επιλεγμένα Έργα',
      pageSubtitle: 'Έργα που αντιπροσωπεύουν τον τρόπο που σχεδιάζουμε και κατασκευάζουμε.',
  
      stats: [
        { number: '280+',    label: 'Ολοκληρωμένα Έργα', sublabel: 'από το 2005' },
        { number: '18',      label: 'Τρέχοντα Έργα',      sublabel: 'σε εξέλιξη' },
        { number: '420.000', label: 'Τ.Μ. Κατασκευών',    sublabel: 'συνολικά' },
        { number: '35+',     label: 'Πόλεις',              sublabel: 'σε όλη την Ελλάδα' },
      ],
  
      categories: [
        { id: 'all',         name: 'Όλα'           },
        { id: 'residential', name: 'Κατοικίες'     },
        { id: 'apartment',   name: 'Πολυκατοικίες' },
        { id: 'commercial',  name: 'Εμπορικά'      },
        { id: 'hotel',       name: 'Ξενοδοχεία'    },
      ],
  
      statusLabels: {
        completed:     'Ολοκληρωμένο',
        'in-progress': 'Σε Εξέλιξη',
      },
  
      projects: [
        { id: 1,  name: 'Athens Mall',          location: 'Αθήνα, Αττική',      type: 'Εμπορικό Κέντρο' },
        { id: 2,  name: 'Athens Heart',          location: 'Αθήνα, Αττική',    type: 'Εμπορικό Κέντρο' },
        { id: 3,  name: 'Ξενοδοχειακές Μονάδες',        location: 'Κυκλάδες',       type: 'Συγκρότημα Τουριστικών Διαμερισμάτων ' },
        { id: 4,  name: 'Ξενοδοχειακές Μονάδες',          location: 'Κυκλάδες',       type: 'Συγκρότημα Τουριστικών Κατοικιών' },
        { id: 5,  name: 'Τουριστική Κατοικία',      location: 'Κυκλάδες',      type: 'Ιδιωτική Τουριστική Κατοικία ' },
        { id: 6,  name: 'Ιδιωτική Κατοικία',     location: 'Ναύπλιο, Πελοπόνησσος',   type: 'ΚΑΤΟΙΚΙΑ ΥΨΗΛΩΝ ΠΡΟΔΙΑΓΡΑΦΩΝ' },
        { id: 7,  name: 'Σύγχρονη Πολυκατοικία',           location: 'Αθήνα', type: 'Πολυκατοικία 4 Ορόφων' },
        { id: 8,  name: 'Ξενοδοχείο "Κρητικόν"',             location: 'Χανιά, Κρήτη',          type: 'Ξενοδοχείο 3★' },
        { id: 9,  name: 'Κατοικία Παπαδημητρίου',            location: 'Βούλα, Αττική',          type: 'Μονοκατοικία με Πισίνα' },
        { id: 10, name: 'Πολυκατοικία Οδός Πατησίων',        location: 'Αθήνα, Κέντρο',          type: 'Πολυκατοικία 6 Ορόφων' },
        { id: 11, name: 'Εμπορικό Κατάστημα MediaHub',        location: 'Πειραιάς, Αττική',       type: 'Εμπορικό Κτίριο' },
        { id: 12, name: 'Εξοχική Κατοικία Σταυρίδη',         location: 'Πόρτο Ράφτη, Αττική',    type: 'Εξοχική Κατοικία' },
      ],
  
      viewProject: 'Δείτε το Έργο',
      showMore: 'Περισσότερα Έργα',
      emptyState: 'Δεν βρέθηκαν έργα σε αυτή την κατηγορία.',
  
      cta: {
        title: 'Έχετε ένα κατασκευαστικό έργο στο μυαλό σας;',
        subtitle: 'Μιλήστε μας για το project σας και θα σας στείλουμε μια πρώτη εκτίμηση δωρεάν.',
        btn: 'Ζητήστε Προσφορά',
      },
    },
  
    // ════════════════════════════════════════════════════════════════
    en: {
      eyebrow: '',
      pageTitle: 'Selected Projects',
      pageSubtitle: 'Projects that represent the way we design and build.',
  
      stats: [
        { number: '280+',    label: 'Completed Projects', sublabel: 'since 2005' },
        { number: '18',      label: 'Active Projects',    sublabel: 'in progress' },
        { number: '420,000', label: 'sqm Constructed',    sublabel: 'in total' },
        { number: '35+',     label: 'Cities',             sublabel: 'across Greece' },
      ],
  
      categories: [
        { id: 'all',         name: 'All'             },
        { id: 'residential', name: 'Residences'      },
        { id: 'apartment',   name: 'Apartment Blocks' },
        { id: 'commercial',  name: 'Commercial'      },
        { id: 'hotel',       name: 'Hotels'          },
      ],
  
      statusLabels: {
        completed:     'Completed',
        'in-progress': 'In Progress',
      },
  
     projects: [
        { id: 1,  name: 'Athens Mall',                  location: 'Athens, Attica',        type: 'Shopping Centre' },
        { id: 2,  name: 'Athens Heart',                 location: 'Athens, Attica',        type: 'Shopping Centre' },
        { id: 3,  name: 'Hotel Units',                  location: 'Cyclades',              type: 'Tourist Apartment Complex' },
        { id: 4,  name: 'Hotel Units',                  location: 'Cyclades',              type: 'Tourist Residence Complex' },
        { id: 5,  name: 'Tourist Residence',            location: 'Cyclades',              type: 'Private Holiday Home' },
        { id: 6,  name: 'Private Residence',            location: 'Athens, Attica',        type: 'High-End Residence' },
        { id: 7,  name: 'Modern Apartment Building',    location: 'Athens',                type: '4-Storey Apartment Building' },
        { id: 8,  name: 'Hotel "Kritikon"',             location: 'Chania, Crete',         type: '3★ Hotel' },
        { id: 9,  name: 'Papadimitriou Residence',      location: 'Voula, Attica',         type: 'Detached House with Pool' },
        { id: 10, name: 'Patission Street Apartments',  location: 'Athens, City Centre',   type: '6-Storey Apartment Building' },
        { id: 11, name: 'MediaHub Commercial Store',    location: 'Piraeus, Attica',       type: 'Commercial Building' },
        { id: 12, name: 'Stavridis Holiday Home',       location: 'Porto Rafti, Attica',   type: 'Holiday Residence' },
      ],
  
      viewProject: 'View Project',
      showMore: 'Load More Projects',
      emptyState: 'No projects found in this category.',
  
      cta: {
        title: 'Do you have a construction project in mind?',
        subtitle: 'Tell us about your project and we will send you a free initial estimate.',
        btn: 'Request a Quote',
      },
    },
  };
  
  export default translations;
  