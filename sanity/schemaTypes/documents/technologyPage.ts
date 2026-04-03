import { defineType, defineField } from 'sanity'

export const technologyPage = defineType({
  name: 'technologyPage',
  title: 'Technology Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow', type: 'localeString' },
        { name: 'titleLine1', title: 'Title Line 1', type: 'localeString' },
        { name: 'titleLine2', title: 'Title Line 2', type: 'localeString' },
        { name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'intro',
      title: 'Intro Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'title', title: 'Title', type: 'localeString' },
        {
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [{ type: 'localeText' }],
        },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'introBenefits',
      title: 'Benefits Intro Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'title', title: 'Title', type: 'localeString' },
        {
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [{ type: 'localeText' }],
        },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'comparison',
      title: 'Comparison Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'title', title: 'Title', type: 'localeString' },
        {
          name: 'headers',
          title: 'Table Headers',
          type: 'object',
          fields: [
            { name: 'conventional', title: 'Conventional Header', type: 'localeString' },
            { name: 'doubleWall', title: 'Double Wall Header', type: 'localeString' },
          ],
        },
        {
          name: 'rows',
          title: 'Table Rows',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'comparisonRow',
              fields: [
                { name: 'feature', title: 'Feature', type: 'localeString' },
                { name: 'conventional', title: 'Conventional', type: 'localeString' },
                { name: 'doubleWall', title: 'Double Wall', type: 'localeString' },
              ],
              preview: {
                select: { title: 'feature.en' },
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
      return { title: 'Technology Page' }
    },
  },
})
