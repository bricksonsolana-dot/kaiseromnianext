import { defineType, defineField } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
        { name: 'title', title: 'Title', type: 'localeString' },
        { name: 'subtitle', title: 'Subtitle', type: 'localeString' },
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'info',
      title: 'Contact Info',
      type: 'object',
      fields: [
        {
          name: 'address',
          title: 'Address',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'localeString' },
            {
              name: 'lines',
              title: 'Lines',
              type: 'array',
              of: [{ type: 'localeString' }],
            },
          ],
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'localeString' },
            { name: 'number', title: 'Number', type: 'string' },
            { name: 'hours', title: 'Hours', type: 'localeString' },
          ],
        },
        {
          name: 'email',
          title: 'Email',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'localeString' },
            {
              name: 'addresses',
              title: 'Addresses',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'form',
      title: 'Form Section',
      type: 'object',
      fields: [
        { name: 'sectionLabel', title: 'Section Label', type: 'string' },
        { name: 'sectionTitle', title: 'Section Title', type: 'localeString' },
      ],
    }),
    defineField({
      name: 'map',
      title: 'Map',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'localeString' },
        { name: 'src', title: 'Embed URL', type: 'url' },
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'object',
      fields: [
        { name: 'sectionLabel', title: 'Section Label', type: 'localeString' },
        { name: 'sectionTitle', title: 'Section Title', type: 'localeString' },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'faqItem',
              fields: [
                { name: 'question', title: 'Question', type: 'localeString' },
                { name: 'answer', title: 'Answer', type: 'localeText' },
              ],
              preview: {
                select: { title: 'question.en' },
              },
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Contact Page' }
    },
  },
})
