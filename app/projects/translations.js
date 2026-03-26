// All project meta (images + category) — static, not translatable
// Each project has an `images` array for the carousel — swap URLs as needed.
export const projectsMeta = [
  { id: 1,  category: 'commercial',  images: ['/images/home/erga/mall-1.png',          '/images/home/erga/mall-2.png',          '/images/home/erga/mall-3.png'],          status: 'completed', year: '2005' },
  { id: 2,  category: 'commercial',  images: ['/images/home/erga/athens-heart-1.png',   '/images/home/erga/athens-heart-2.png',   '/images/home/erga/athens-heart-3.png'],   status: 'completed', year: '2008' },
  { id: 3,  category: 'hotel',       images: ['/images/home/erga/kykladespool1.png',    '/images/home/erga/kykladespool2.png',    '/images/home/erga/kykladespool3.png'],    status: 'completed', year: '2014' },
  { id: 4,  category: 'hotel',       images: ['/images/home/erga/kyklades1.png',        '/images/home/erga/kyklades2.png',        '/images/home/erga/kyklades3.png'],        status: 'completed', year: '2010' },
  { id: 5,  category: 'residential', images: ['/images/home/erga/villapool1.png',       '/images/home/erga/villapool2.png',       '/images/home/erga/villapool3.png'],       status: 'completed', year: '2018' },
  { id: 6,  category: 'residential', images: ['/images/home/erga/villaview1.png',       '/images/home/erga/villaview2.png',       '/images/home/erga/villaview3.png'],       status: 'completed', year: '2022' },
  { id: 7,  category: 'residential', images: ['/images/home/erga/petrino1.png',         '/images/home/erga/petrino2.png',         '/images/home/erga/petrino3.png'],         status: 'completed', year: '2012' },
  { id: 8,  category: 'residential', images: ['/images/home/erga/nayplio1.png',         '/images/home/erga/nayplio2.png',         '/images/home/erga/nayplio3.png'],         status: 'completed', year: '2009' },
  { id: 9,  category: 'residential', images: ['/images/home/erga/house1.png',           '/images/home/erga/house2.png',           '/images/home/erga/house3.png'],           status: 'completed', year: '2023' },
  { id: 10, category: 'residential', images: ['/images/home/erga/sygkrothma2.png',      '/images/home/erga/sygkrothma2.png',      '/images/home/erga/sygkrothma2.png'],      status: 'completed', year: '2025' },
];

const translations = {
  el: {
    eyebrow: '// Έργα',
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
      { id: 'hotel',       name: 'Τουριστικά'    },
      { id: 'commercial',  name: 'Συμμετοχές'      },
    ],

    statusLabels: {
      completed:     'Ολοκληρωμένο',
      'in-progress': 'Σε Εξέλιξη',
    },

    projects: [
      { id: 1,  name: 'The Mall Athens',       location: 'Αθήνα, Αττική',             type: 'Εμπορικό Κέντρο' },
      { id: 2,  name: 'Athens Heart',          location: 'Αθήνα, Αττική',             type: 'Εμπορικό Κέντρο' },
      { id: 3,  name: 'Τουριστικές Κατοικίες', location: 'Κυκλάδες',                  type: 'Συγκρότημα Τουριστικών Κατοικιών' },
      { id: 4,  name: 'Τουριστικές Κατοικίες', location: 'Κυκλάδες',                  type: 'Συγκρότημα Τουριστικών Κατοικιών' },
      { id: 5,  name: 'Τουριστικές Κατοικίες',     location: 'Κυκλάδες',                  type: 'Συγκρότημα Τουριστικών Κατοικιών' },
      { id: 6,  name: 'Σύγχρονη Κατοικία',     location: 'Αθήνα, Αττική',    type: 'Ιδιωτική Κατοικία' },
      { id: 7,  name: 'Σύγχρονη Κατοικία',     location: 'Ναύπλιο, Πελοπόννησος',                  type: 'Ιδιωτική Κατοικία' },
      { id: 8,  name: 'Σύγχρονη Κατοικία',     location: 'Χανιά, Κρήτη',              type: 'Ιδιωτική Κατοικία' },
      { id: 9,  name: 'Σύγχρονη Κατοικία',     location: 'Κορινθία, Πελοπόννησος',    type: 'Ιδιωτική Κατοικία' },
      { id: 10, name: 'Σύγχρονη Κατοικία',     location: 'Αθήνα, Αττική',             type: 'Ιδιωτική Κατοικία' },
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
    eyebrow: '// Projects',
    pageTitle: 'Selected Projects',
    pageSubtitle: 'Projects that represent the way we design and build.',

    stats: [
      { number: '280+',    label: 'Completed Projects', sublabel: 'since 2005' },
      { number: '18',      label: 'Active Projects',    sublabel: 'in progress' },
      { number: '420,000', label: 'sqm Constructed',    sublabel: 'in total' },
      { number: '35+',     label: 'Cities',             sublabel: 'across Greece' },
    ],

    categories: [
      { id: 'all',         name: 'All'          },
      { id: 'residential', name: 'Residences'   },
      { id: 'hotel',       name: 'Touristic'      },
      { id: 'commercial',  name: 'Collaborations'   },
    ],

    statusLabels: {
      completed:     'Completed',
      'in-progress': 'In Progress',
    },

    projects: [
      { id: 1,  name: 'The Mall Athens',       location: 'Athens, Attica',            type: 'Shopping Centre' },
      { id: 2,  name: 'Athens Heart',          location: 'Athens, Attica',            type: 'Shopping Centre' },
      { id: 3,  name: 'Tourist Residences',    location: 'Cyclades',                  type: 'Tourist Residence Complex' },
      { id: 4,  name: 'Tourist Residences',    location: 'Cyclades',                  type: 'Tourist Residence Complex' },
      { id: 5,  name: 'Tourist Residences',    location: 'Cyclades',                  type: 'Tourist Residence Complex' },
      { id: 6,  name: 'Modern Residence',      location: 'Athens, Attica',            type: 'Private Residence' },
      { id: 7,  name: 'Modern Residence',      location: 'Nafplio, Peloponnese',      type: 'Private Residence' },
      { id: 8,  name: 'Modern Residence',      location: 'Chania, Crete',             type: 'Private Residence' },
      { id: 9,  name: 'Modern Residence',      location: 'Corinthia, Peloponnese',    type: 'Private Residence' },
      { id: 10, name: 'Modern Residence',      location: 'Athens, Attica',            type: 'Private Residence' },
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
