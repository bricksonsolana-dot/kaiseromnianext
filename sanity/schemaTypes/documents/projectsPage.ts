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
      fields: [
        { name: 'eyebrow', title: 'Eyebrow', type: 'localeString' },
        { name: 'pageTitle', title: 'Page Title', type: 'localeString' },
        { name: 'pageSubtitle', title: 'Page Subtitle', type: 'localeText' },
      ],
    }),
    defineField({
      name: 'allLabel',
      title: '"All" Filter Label',
      type: 'localeString',
      description: 'Label for the "All" filter button (e.g. "All" / "Όλα")',
    }),
    defineField({
      name: 'statusLabels',
      title: 'Status Labels',
      type: 'object',
      fields: [
        { name: 'completed', title: 'Completed', type: 'localeString' },
        { name: 'inProgress', title: 'In Progress', type: 'localeString' },
      ],
    }),
    defineField({
      name: 'uiLabels',
      title: 'UI Labels',
      type: 'object',
      fields: [
        { name: 'viewProject', title: 'View Project', type: 'localeString' },
        { name: 'showMore', title: 'Show More', type: 'localeString' },
        { name: 'emptyState', title: 'Empty State', type: 'localeString' },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'localeString' },
        { name: 'subtitle', title: 'Subtitle', type: 'localeText' },
        { name: 'btn', title: 'Button Label', type: 'localeString' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Projects Page' }
    },
  },
})
