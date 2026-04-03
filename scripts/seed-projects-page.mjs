import { createClient } from '@sanity/client';

if (!process.env.SANITY_WRITE_TOKEN) {
  console.error('Error: SANITY_WRITE_TOKEN environment variable is not set.');
  console.error('Run with: SANITY_WRITE_TOKEN=your_token node scripts/seed-projects-page.mjs');
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2026-03-26',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

// ── 1. Seed projectCategory documents ────────────────────────────
const categories = [
  { slug: 'residential', el: 'Κατοικίες',   en: 'Residences',     order: 1 },
  { slug: 'hotel',       el: 'Τουριστικά',   en: 'Touristic',      order: 2 },
  { slug: 'commercial',  el: 'Συμμετοχές',   en: 'Collaborations', order: 3 },
];

for (const cat of categories) {
  try {
    await client.createOrReplace({
      _id: `projectCategory-${cat.slug}`,
      _type: 'projectCategory',
      slug: { _type: 'slug', current: cat.slug },
      name: { el: cat.el, en: cat.en },
      order: cat.order,
    });
    console.log(`✓ projectCategory "${cat.slug}" created/updated`);
  } catch (err) {
    console.error(`✗ Failed to upsert projectCategory "${cat.slug}":`, err.message ?? err);
  }
}

// ── 2. Migrate existing project documents to use category references ──
try {
  const projects = await client.fetch('*[_type == "project" && defined(category) && !is_reference(category)]');
  for (const proj of projects) {
    const slug = proj.category;
    const catId = `projectCategory-${slug}`;
    await client.patch(proj._id).set({
      category: { _type: 'reference', _ref: catId },
    }).commit();
    console.log(`✓ project "${proj._id}" migrated to category ref "${catId}"`);
  }
  if (projects.length === 0) {
    console.log('ℹ No projects need category migration (already refs or none exist)');
  }
} catch (err) {
  console.error('✗ Failed to migrate project categories:', err.message ?? err);
}

// ── 3. Seed projectsPage document ────────────────────────────────
const doc = {
  _id: 'projectsPage',
  _type: 'projectsPage',

  header: {
    eyebrow:      { el: '// Έργα', en: '// Projects' },
    pageTitle:    { el: 'Επιλεγμένα Έργα', en: 'Selected Projects' },
    pageSubtitle: { el: 'Έργα που αντιπροσωπεύουν τον τρόπο που σχεδιάζουμε και κατασκευάζουμε.', en: 'Projects that represent the way we design and build.' },
  },

  allLabel: { el: 'Όλα', en: 'All' },

  statusLabels: {
    completed:  { el: 'Ολοκληρωμένο', en: 'Completed' },
    inProgress: { el: 'Σε Εξέλιξη',   en: 'In Progress' },
  },

  uiLabels: {
    viewProject: { el: 'Δείτε το Έργο',                                  en: 'View Project' },
    showMore:    { el: 'Περισσότερα Έργα',                                en: 'Load More Projects' },
    emptyState:  { el: 'Δεν βρέθηκαν έργα σε αυτή την κατηγορία.',       en: 'No projects found in this category.' },
  },

  cta: {
    title:    { el: 'Έχετε ένα κατασκευαστικό έργο στο μυαλό σας;',                                      en: 'Do you have a construction project in mind?' },
    subtitle: { el: 'Μιλήστε μας για το project σας και θα σας στείλουμε μια πρώτη εκτίμηση δωρεάν.',     en: 'Tell us about your project and we will send you a free initial estimate.' },
    btn:      { el: 'Ζητήστε Προσφορά',                                                                   en: 'Request a Quote' },
  },
};

try {
  await client.createOrReplace(doc);
  console.log('✓ projectsPage document created/updated');
} catch (err) {
  console.error('✗ Failed to upsert projectsPage document:', err.message ?? err);
  process.exit(1);
}
