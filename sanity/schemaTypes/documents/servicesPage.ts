import { defineType, defineField } from 'sanity'

export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
        { name: 'titleLine1', title: 'Title Line 1', type: 'localeString' },
        { name: 'titleLine2', title: 'Title Line 2', type: 'localeString' },
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'services',
      title: 'Services List',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'serviceItem',
          fields: [
            { name: 'num', title: 'Number', type: 'string' },
            { name: 'total', title: 'Total', type: 'string' },
            { name: 'title', title: 'Title', type: 'localeString' },
            { name: 'desc', title: 'Description', type: 'localeText' },
          ],
          preview: {
            select: { title: 'title.en', subtitle: 'num' },
          },
        },
      ],
    }),
    defineField({
      name: 'process',
      title: '04 — Construction Process',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'title', title: 'Title', type: 'localeString' },
        {
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'processStep',
              fields: [
                { name: 'step', title: 'Step Number', type: 'number' },
                { name: 'title', title: 'Title', type: 'localeString' },
                { name: 'desc', title: 'Description', type: 'localeText' },
                {
                  name: 'image',
                  title: 'Step Image',
                  type: 'image',
                  options: { hotspot: true },
                },
              ],
              preview: {
                select: { title: 'title.en', subtitle: 'step' },
              },
            },
          ],
        },
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
      return { title: 'Services Page' }
    },
  },
})
