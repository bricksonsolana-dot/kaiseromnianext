import { defineType, defineField } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'tag', title: 'Tag Line', type: 'string' },
        { name: 'titleLine1', title: 'Title Line 1', type: 'localeString' },
        { name: 'titleLine2', title: 'Title Line 2', type: 'localeString' },
        { name: 'subtitle', title: 'Subtitle', type: 'localeText' },
        { name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'servicesSection',
      title: 'Services Section Labels',
      type: 'object',
      fields: [
        { name: 'sectionTitle', title: 'Section Title', type: 'localeString' },
        { name: 'viewAll', title: '"View All" Link Text', type: 'localeString' },
      ],
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'service',
          fields: [
            { name: 'code', title: 'Code (e.g. 001)', type: 'string' },
            { name: 'name', title: 'Name', type: 'localeString' },
            { name: 'description', title: 'Description', type: 'localeText' },
          ],
          preview: {
            select: { title: 'code', subtitle: 'name.en' },
          },
        },
      ],
    }),
    defineField({
      name: 'about',
      title: 'About Section',
      type: 'object',
      fields: [
        { name: 'sectionTitle', title: 'Section Title', type: 'localeString' },
        { name: 'heading', title: 'Heading', type: 'localeString' },
        { name: 'body', title: 'Body Text', type: 'localeText' },
        { name: 'cta', title: 'CTA Label', type: 'localeString' },
        { name: 'image', title: 'Company Photo', type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'portfolio',
      title: 'Portfolio Section',
      type: 'object',
      fields: [
        { name: 'sectionTitle', title: 'Section Title', type: 'localeString' },
        { name: 'viewAll', title: '"View All" Label', type: 'localeString' },
      ],
    }),
    defineField({
      name: 'technology',
      title: 'Technology Section',
      type: 'object',
      fields: [
        { name: 'sectionTitle', title: 'Section Title', type: 'localeString' },
        { name: 'body', title: 'Body Text', type: 'localeText' },
        { name: 'cta', title: 'CTA Label', type: 'localeString' },
        { name: 'image', title: 'Section Image', type: 'image', options: { hotspot: true } },
        {
          name: 'benefits',
          title: 'Benefits',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'benefit',
              fields: [
                { name: 'title', title: 'Title', type: 'localeString' },
                { name: 'desc', title: 'Description', type: 'localeText' },
              ],
              preview: { select: { title: 'title.en' } },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA Banner',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'localeString' },
        { name: 'subtitle', title: 'Subtitle', type: 'localeText' },
        { name: 'btn', title: 'Button Label', type: 'localeString' },
        { name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Home Page' }
    },
  },
})
