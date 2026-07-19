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
      description: 'Top of the Company page — small eyebrow line and the page title.',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow', type: 'string', description: 'Small uppercase label above the page title, e.g. "// Company". Same in both languages.' },
        { name: 'pageTitle', title: 'Page Title', type: 'localeString', description: 'The big page title, e.g. "About us" / "Σχετικά με εμάς".' },
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'Full-width hero image at the top of the Company page. Landscape, ideally ≥ 2400×1400px. Use the hotspot to center the focal point.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'about',
      title: '01 — About',
      type: 'object',
      description: 'First section: an "About" block with a small badge, a section title, and a list of paragraphs.',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string', description: 'Small label above the section title, e.g. "01" or "About". Same in both languages.' },
        { name: 'title', title: 'Title', type: 'localeString', description: 'Section title, e.g. "Who we are".' },
        {
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          description: 'One paragraph per item. Add or remove items to control how many paragraphs render. Each item is bilingual (EL / EN).',
          of: [{ type: 'localeText' }],
        },
      ],
    }),
    defineField({
      name: 'timeline',
      title: '02 — Timeline',
      type: 'object',
      description: 'Second section: a chronological list of company milestones rendered as a timeline.',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string', description: 'Small label above the section title, e.g. "02" or "Timeline".' },
        { name: 'title', title: 'Title', type: 'localeString', description: 'Section title, e.g. "Our journey" / "Η πορεία μας".' },
        {
          name: 'events',
          title: 'Events',
          type: 'array',
          description: 'Each item is one milestone. Order here is the display order — keep them chronological (earliest first).',
          of: [
            {
              type: 'object',
              name: 'timelineEvent',
              fields: [
                { name: 'year', title: 'Year', type: 'string', description: 'Just the year, e.g. "1984". Same in both languages.' },
                { name: 'title', title: 'Title', type: 'localeString', description: 'Short milestone title, e.g. "Company founded".' },
                { name: 'desc', title: 'Description', type: 'localeText', description: '1–2 sentences expanding on the milestone.' },
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
      description: 'Third section: three side-by-side cards for the company\'s Mission, Vision, and Values. Each card has its own title, body and image.',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string', description: 'Small label above the section title, e.g. "03".' },
        { name: 'title', title: 'Title', type: 'localeString', description: 'Section title that introduces all three cards.' },
        {
          name: 'mission',
          title: 'Mission',
          type: 'object',
          description: 'First card. Use the same structure for all three cards.',
          fields: [
            { name: 'title', title: 'Title', type: 'localeString', description: 'Card title, e.g. "Mission" / "Αποστολή".' },
            { name: 'content', title: 'Content', type: 'localeText', description: 'Body text on the card. 1–3 sentences. Keep similar in length across the three cards for visual balance.' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, description: 'Square or 4:3 image for the card. Ideally ≥ 1000×1000px.' },
          ],
        },
        {
          name: 'vision',
          title: 'Vision',
          type: 'object',
          description: 'Second card.',
          fields: [
            { name: 'title', title: 'Title', type: 'localeString', description: 'Card title, e.g. "Vision" / "Όραμα".' },
            { name: 'content', title: 'Content', type: 'localeText', description: 'Body text on the card. 1–3 sentences.' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, description: 'Square or 4:3 image. Ideally ≥ 1000×1000px.' },
          ],
        },
        {
          name: 'values',
          title: 'Values',
          type: 'object',
          description: 'Third card.',
          fields: [
            { name: 'title', title: 'Title', type: 'localeString', description: 'Card title, e.g. "Values" / "Αξίες".' },
            { name: 'content', title: 'Content', type: 'localeText', description: 'Body text on the card. 1–3 sentences.' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, description: 'Square or 4:3 image. Ideally ≥ 1000×1000px.' },
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
