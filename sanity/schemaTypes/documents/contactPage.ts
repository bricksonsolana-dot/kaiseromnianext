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
      description: 'Top of the Contact page — eyebrow, title, subtitle.',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow', type: 'string', description: 'Small uppercase label above the title, e.g. "// Contact". Same in both languages.' },
        { name: 'title', title: 'Title', type: 'localeString', description: 'Big page title, e.g. "Get in touch".' },
        { name: 'subtitle', title: 'Subtitle', type: 'localeString', description: 'Short tagline below the title. ~80 characters.' },
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'Full-width hero image at the top of the page. Landscape, ideally ≥ 2400×1400px.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'info',
      title: 'Contact Info',
      type: 'object',
      description: 'The "address / phone / email" block shown above the form.',
      fields: [
        {
          name: 'address',
          title: 'Address',
          type: 'object',
          description: 'Postal address card. The "Lines" array renders each line on its own row.',
          fields: [
            { name: 'title', title: 'Title', type: 'localeString', description: 'Card title, e.g. "Address" / "Διεύθυνση".' },
            {
              name: 'lines',
              title: 'Lines',
              type: 'array',
              description: 'One address line per item, e.g. street, city + postcode, country. Each item is bilingual.',
              of: [{ type: 'localeString' }],
            },
          ],
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'object',
          description: 'Phone number card.',
          fields: [
            { name: 'title', title: 'Title', type: 'localeString', description: 'Card title, e.g. "Phone" / "Τηλέφωνο".' },
            { name: 'number', title: 'Number', type: 'string', description: 'Full international phone number, e.g. "+30 6948 209440". Same in both languages.' },
            { name: 'hours', title: 'Hours', type: 'localeString', description: 'Office hours, e.g. "Mon–Fri 09:00–18:00".' },
          ],
        },
        {
          name: 'email',
          title: 'Email',
          type: 'object',
          description: 'Email card. Multiple addresses are stacked vertically.',
          fields: [
            { name: 'title', title: 'Title', type: 'localeString', description: 'Card title, e.g. "Email".' },
            {
              name: 'addresses',
              title: 'Addresses',
              type: 'array',
              description: 'One email address per item. Same address in both languages — these are not translated.',
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
      description: 'Header above the contact form. The form fields themselves are coded in the page, not editable here.',
      fields: [
        { name: 'sectionLabel', title: 'Section Label', type: 'string', description: 'Small uppercase label above the form title, e.g. "// Form". Same in both languages.' },
        { name: 'sectionTitle', title: 'Section Title', type: 'localeString', description: 'The form section title, e.g. "Tell us about your project".' },
      ],
    }),
    defineField({
      name: 'map',
      title: 'Map',
      type: 'object',
      description: 'Embedded Google Map of the office location.',
      fields: [
        { name: 'title', title: 'Title', type: 'localeString', description: 'Section title above the map, e.g. "Find us".' },
        { name: 'src', title: 'Embed URL', type: 'url', description: 'Google Maps embed URL. To get this: open Google Maps → search the address → Share → Embed a map → copy the URL inside src="...".' },
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'object',
      description: 'Frequently-asked-questions accordion at the bottom of the page.',
      fields: [
        { name: 'sectionLabel', title: 'Section Label', type: 'localeString', description: 'Small label above the FAQ title, e.g. "// FAQ".' },
        { name: 'sectionTitle', title: 'Section Title', type: 'localeString', description: 'Section title, e.g. "Frequently asked questions".' },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          description: 'Each item is one collapsible FAQ row. Order here is the display order.',
          of: [
            {
              type: 'object',
              name: 'faqItem',
              fields: [
                { name: 'question', title: 'Question', type: 'localeString', description: 'The question, ending in a question mark.' },
                { name: 'answer', title: 'Answer', type: 'localeText', description: '1–4 sentences answering the question. Bilingual.' },
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
