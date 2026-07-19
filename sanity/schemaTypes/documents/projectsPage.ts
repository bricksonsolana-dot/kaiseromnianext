import { defineType, defineField } from 'sanity'

export const projectsPage = defineType({
  name: 'projectsPage',
  title: 'Projects Page',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'object',
      description: 'Top of the Projects page — eyebrow, title, subtitle. The actual project cards come from individual Project documents, not from this page.',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow', type: 'localeString', description: 'Small uppercase label above the title, e.g. "// Projects".' },
        { name: 'pageTitle', title: 'Page Title', type: 'localeString', description: 'Big page title, e.g. "Selected projects".' },
        { name: 'pageSubtitle', title: 'Page Subtitle', type: 'localeText', description: 'One sentence below the title. ~120 characters max.' },
      ],
    }),
    defineField({
      name: 'allLabel',
      title: '"All" Filter Label',
      type: 'localeString',
      description: 'Label for the "All" filter button on the left of the filter bar (e.g. "All" / "Όλα"). Other filter buttons come from Project Categories.',
    }),
    defineField({
      name: 'statusLabels',
      title: 'Status Labels (legacy)',
      type: 'object',
      description: 'Legacy fallback labels. Most projects now have their own custom Status text written directly on the Project document — these labels are only used for old projects that haven\'t been updated yet.',
      fields: [
        { name: 'completed', title: 'Completed', type: 'localeString', description: 'Fallback label for "completed" status, e.g. "Completed" / "Ολοκληρωμένο".' },
        { name: 'inProgress', title: 'In Progress', type: 'localeString', description: 'Fallback label for "in-progress" status, e.g. "In Progress" / "Σε Εξέλιξη".' },
      ],
    }),
    defineField({
      name: 'uiLabels',
      title: 'UI Labels',
      type: 'object',
      description: 'Small bits of UI text used on this page.',
      fields: [
        { name: 'viewProject', title: 'View Project', type: 'localeString', description: 'Hover label on each project card, e.g. "View project".' },
        { name: 'showMore', title: 'Show More', type: 'localeString', description: 'Label for the "Show more" / "Load more" button if more projects can be loaded.' },
        { name: 'emptyState', title: 'Empty State', type: 'localeString', description: 'Message shown when no projects match the current filter, e.g. "No projects in this category yet".' },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA Section',
      type: 'object',
      description: 'Call-to-action banner at the bottom of the page with title, subtitle and button.',
      fields: [
        { name: 'title', title: 'Title', type: 'localeString', description: 'Banner headline. ~6 words max.' },
        { name: 'subtitle', title: 'Subtitle', type: 'localeText', description: 'One sentence below the title.' },
        { name: 'btn', title: 'Button Label', type: 'localeString', description: 'Action button text, e.g. "Get in touch".' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Projects Page' }
    },
  },
})
