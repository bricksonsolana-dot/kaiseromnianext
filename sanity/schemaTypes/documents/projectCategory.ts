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
      description: 'Unique identifier used for filtering (e.g. "residential", "hotel")',
      validation: (rule) => rule.required(),
      options: { source: 'name.en', maxLength: 96 },
    }),
    defineField({
      name: 'name',
      title: 'Display Name',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Controls the order in the filter bar. Lower numbers appear first.',
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
