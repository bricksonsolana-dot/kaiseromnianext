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
      description: 'Top of the Services page — small eyebrow and a two-line headline.',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow', type: 'string', description: 'Small uppercase label above the title, e.g. "// Services". Same in both languages.' },
        { name: 'titleLine1', title: 'Title Line 1', type: 'localeString', description: 'First line of the big headline. 1–3 words.' },
        { name: 'titleLine2', title: 'Title Line 2', type: 'localeString', description: 'Second line of the headline. 1–3 words.' },
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'Full-width hero image. Landscape, ideally ≥ 2400×1400px. Use the hotspot to center the focal point.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'services',
      title: 'Services List',
      type: 'array',
      description: 'The numbered list of services on this page. Order here is the display order. Each item shows its number and title; clicking expands the description.',
      of: [
        {
          type: 'object',
          name: 'serviceItem',
          fields: [
            { name: 'num', title: 'Number', type: 'string', description: 'Two-digit number shown on the left, e.g. "01", "02". Same in both languages.' },
            { name: 'total', title: 'Total', type: 'string', description: 'Total count shown after the slash, e.g. "/04". Should be the same on every item — update all items if you add or remove one.' },
            { name: 'title', title: 'Title', type: 'localeString', description: 'Service name, e.g. "Architectural Design". Keep under ~40 characters.' },
            { name: 'desc', title: 'Description', type: 'localeText', description: '2–4 sentences describing the service. Renders when the row is expanded.' },
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
      description: 'Section that walks visitors through the construction process step-by-step, with a numbered list and an image per step.',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string', description: 'Small label above the section title, e.g. "04". Same in both languages.' },
        { name: 'title', title: 'Title', type: 'localeString', description: 'Section title, e.g. "Our process".' },
        {
          name: 'steps',
          title: 'Steps',
          type: 'array',
          description: 'Each item is one step in the process. Order here is the display order — keep them sequential.',
          of: [
            {
              type: 'object',
              name: 'processStep',
              fields: [
                { name: 'step', title: 'Step Number', type: 'number', description: 'Step number, e.g. 1, 2, 3.' },
                { name: 'title', title: 'Title', type: 'localeString', description: 'Step title, e.g. "Initial consultation". Keep under ~40 characters.' },
                { name: 'desc', title: 'Description', type: 'localeText', description: '2–3 sentences describing what happens in this step.' },
                {
                  name: 'image',
                  title: 'Step Image',
                  type: 'image',
                  options: { hotspot: true },
                  description: 'Photo for this step. Landscape, ideally ≥ 1400×900px.',
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
      description: 'Call-to-action banner at the bottom with title, subtitle and a button.',
      fields: [
        { name: 'title', title: 'Title', type: 'localeString', description: 'Banner headline. ~6 words max.' },
        { name: 'subtitle', title: 'Subtitle', type: 'localeText', description: 'One sentence below the title.' },
        { name: 'btn', title: 'Button Label', type: 'localeString', description: 'Action button text, e.g. "Request a quote".' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Services Page' }
    },
  },
})
