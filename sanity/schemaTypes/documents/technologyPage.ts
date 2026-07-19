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
      description: 'Top of the Technology page — eyebrow, two-line headline and a hero image.',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow', type: 'localeString', description: 'Small uppercase label above the title, e.g. "// Technology".' },
        { name: 'titleLine1', title: 'Title Line 1', type: 'localeString', description: 'First line of the big headline. 1–3 words.' },
        { name: 'titleLine2', title: 'Title Line 2', type: 'localeString', description: 'Second line of the headline. 1–3 words.' },
        { name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true }, description: 'Hero photo, ideally landscape ≥ 2400×1400px. Set the hotspot so the focal point stays visible across screen sizes.' },
      ],
    }),
    defineField({
      name: 'intro',
      title: 'Intro Section',
      type: 'object',
      description: 'First section after the hero — introduces the construction technology with a badge, title, paragraphs and an image.',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string', description: 'Small label above the section title, e.g. "01".' },
        { name: 'title', title: 'Title', type: 'localeString', description: 'Section title, e.g. "What is the Double-Wall System?".' },
        {
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          description: 'One paragraph per item. Bilingual (EL / EN).',
          of: [{ type: 'localeText' }],
        },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, description: 'Photo or diagram next to the paragraphs. Landscape, ≥ 1400×900px.' },
      ],
    }),
    defineField({
      name: 'introBenefits',
      title: 'Benefits Intro Section',
      type: 'object',
      description: 'Second section — explains the benefits of the technology with the same structure as the Intro section.',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string', description: 'Small label, e.g. "02".' },
        { name: 'title', title: 'Title', type: 'localeString', description: 'Section title, e.g. "Why it matters".' },
        {
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          description: 'One paragraph per item. Bilingual.',
          of: [{ type: 'localeText' }],
        },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, description: 'Photo or diagram. Landscape, ≥ 1400×900px.' },
      ],
    }),
    defineField({
      name: 'comparison',
      title: 'Comparison Section',
      type: 'object',
      description: 'Side-by-side comparison table: Conventional construction vs. Double-Wall System, one row per feature.',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string', description: 'Small label, e.g. "03".' },
        { name: 'title', title: 'Title', type: 'localeString', description: 'Section title, e.g. "Comparison".' },
        {
          name: 'headers',
          title: 'Table Headers',
          type: 'object',
          description: 'Column headers shown above the comparison rows.',
          fields: [
            { name: 'conventional', title: 'Conventional Header', type: 'localeString', description: 'Left-column label, e.g. "Conventional" / "Συμβατικό".' },
            { name: 'doubleWall', title: 'Double Wall Header', type: 'localeString', description: 'Right-column label, e.g. "Double-Wall" / "Διπλό Τοίχο".' },
          ],
        },
        {
          name: 'rows',
          title: 'Table Rows',
          type: 'array',
          description: 'Each item is one comparison row. Order here is the display order. Keep cell text short — long values wrap awkwardly on mobile.',
          of: [
            {
              type: 'object',
              name: 'comparisonRow',
              fields: [
                { name: 'feature', title: 'Feature', type: 'localeString', description: 'Row label on the left, e.g. "Energy efficiency".' },
                { name: 'conventional', title: 'Conventional', type: 'localeString', description: 'Value for the conventional column. Keep under ~30 characters.' },
                { name: 'doubleWall', title: 'Double Wall', type: 'localeString', description: 'Value for the Double-Wall column. Keep under ~30 characters.' },
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
      description: 'Call-to-action banner at the bottom of the page with a title, subtitle and button.',
      fields: [
        { name: 'title', title: 'Title', type: 'localeString', description: 'Banner headline. ~6 words max.' },
        { name: 'subtitle', title: 'Subtitle', type: 'localeText', description: 'One sentence below the title.' },
        { name: 'btn', title: 'Button Label', type: 'localeString', description: 'Action button text, e.g. "Get in touch".' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Technology Page' }
    },
  },
})
