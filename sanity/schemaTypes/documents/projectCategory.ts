import { defineType, defineField } from 'sanity'

export const projectCategory = defineType({
  name: 'projectCategory',
  title: 'Project Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Unique technical identifier used for filtering, e.g. "residential", "hotel". Use lowercase letters and dashes only — never change this on a category that already has projects assigned, or those projects will fall out of their filter.',
      validation: (rule) => rule.required(),
      options: { source: 'name.en', maxLength: 96 },
    }),
    defineField({
      name: 'name',
      title: 'Display Name',
      type: 'localeString',
      description: 'The label shown on the filter button on the Projects page, e.g. "Residences" / "Κατοικίες". Bilingual.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Controls the position in the filter bar. Lower numbers appear first (right after the "All" button). Use 10, 20, 30… to leave room between categories.',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Sort Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name.en',
      subtitle: 'slug.current',
    },
  },
})
