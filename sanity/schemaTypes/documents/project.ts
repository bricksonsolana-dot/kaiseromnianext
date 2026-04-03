import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'localeString',
    }),
    defineField({
      name: 'typeName',
      title: 'Project Type',
      type: 'localeString',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'projectCategory' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Completed', value: 'completed' },
          { title: 'In Progress', value: 'in-progress' },
        ],
      },
      initialValue: 'completed',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Home Page',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'featuredOrder',
      title: 'Homepage Sort Order',
      type: 'number',
      description: 'Order for featured projects on the homepage (lower numbers appear first)',
      hidden: ({ document }) => !document?.featured,
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
      subtitle: 'category.name.en',
      media: 'images.0',
    },
  },
})
