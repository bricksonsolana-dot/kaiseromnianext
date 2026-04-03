import { defineType, defineField } from 'sanity'

export const companyPage = defineType({
  name: 'companyPage',
  title: 'Company Page',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'object',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
        { name: 'pageTitle', title: 'Page Title', type: 'localeString' },
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'about',
      title: '01 — About',
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
      ],
    }),
    defineField({
      name: 'timeline',
      title: '02 — Timeline',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'title', title: 'Title', type: 'localeString' },
        {
          name: 'events',
          title: 'Events',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'timelineEvent',
              fields: [
                { name: 'year', title: 'Year', type: 'string' },
                { name: 'title', title: 'Title', type: 'localeString' },
                { name: 'desc', title: 'Description', type: 'localeText' },
              ],
              preview: {
                select: { title: 'year', subtitle: 'title.en' },
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'mvv',
      title: '03 — Mission / Vision / Values',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'title', title: 'Title', type: 'localeString' },
        {
          name: 'mission',
          title: 'Mission',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'localeString' },
            { name: 'content', title: 'Content', type: 'localeText' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
          ],
        },
        {
          name: 'vision',
          title: 'Vision',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'localeString' },
            { name: 'content', title: 'Content', type: 'localeText' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
          ],
        },
        {
          name: 'values',
          title: 'Values',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'localeString' },
            { name: 'content', title: 'Content', type: 'localeText' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Company Page' }
    },
  },
})
