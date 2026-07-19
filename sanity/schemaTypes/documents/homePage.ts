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
      description:
        'The first thing visitors see at the top of the home page — full-screen image with a tagline and the two-line title overlaid.',
      fields: [
        {
          name: 'tag',
          title: 'Tag Line',
          type: 'string',
          description: 'Small label above the title, e.g. "// Construction since 1984". Same in both languages — keep it short.',
        },
        {
          name: 'titleLine1',
          title: 'Title Line 1',
          type: 'localeString',
          description: 'First line of the big hero headline. Aim for 1–3 words. Renders in italic.',
        },
        {
          name: 'titleLine2',
          title: 'Title Line 2',
          type: 'localeString',
          description: 'Second line of the headline. Aim for 1–3 words. Together with line 1 it forms the full title.',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'localeText',
          description: 'One sentence under the title. Keep under ~120 characters or it wraps awkwardly on mobile.',
        },
        {
          name: 'backgroundImage',
          title: 'Background Image (Desktop)',
          type: 'image',
          options: { hotspot: true },
          description: 'Full-bleed hero background on desktop and tablet. Use a wide landscape image, ideally ≥ 2400×1400px. Set the hotspot so the focal point stays visible across screen sizes.',
        },
        {
          name: 'backgroundImageMobile',
          title: 'Hero Background (Mobile)',
          type: 'image',
          description: 'Vertical image shown on mobile devices. Use a portrait crop, ideally ≥ 1200×1600px. Falls back to /og_vertical.png if not set.',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'servicesSection',
      title: 'Services Section Labels',
      type: 'object',
      description: 'Labels around the services list — section title above and the "View All" link below.',
      fields: [
        { name: 'sectionTitle', title: 'Section Title', type: 'localeString', description: 'E.g. "What we do" / "Τι κάνουμε".' },
        { name: 'viewAll', title: '"View All" Link Text', type: 'localeString', description: 'Bottom-right link, e.g. "View all services" / "Όλες οι υπηρεσίες".' },
      ],
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      description: 'The 4 service cards under the hero on the home page. Order here is the display order. Stick to exactly 4 for the layout to balance — fewer leaves gaps, more wraps to a second row.',
      of: [
        {
          type: 'object',
          name: 'service',
          fields: [
            {
              name: 'code',
              title: 'Code',
              type: 'string',
              description: 'Three-digit code shown above the service name (e.g. 001, 002, 003, 004). Same in both languages.',
            },
            {
              name: 'name',
              title: 'Name',
              type: 'localeString',
              description: 'Short service title, e.g. "Architectural Design". Keep under ~30 characters or the card breaks.',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'localeText',
              description: '1–2 sentences describing the service. Keep under ~200 characters in each language to avoid overflow on mobile.',
            },
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
      description: 'The "About" block on the home page — section title, headline, body paragraph, CTA button label, and a company photo.',
      fields: [
        { name: 'sectionTitle', title: 'Section Title', type: 'localeString', description: 'Eyebrow above the heading, e.g. "// About us".' },
        { name: 'heading', title: 'Heading', type: 'localeString', description: 'The big bold line, e.g. "40 years of building trust".' },
        { name: 'body', title: 'Body Text', type: 'localeText', description: '2–4 sentences. Renders to the right of the company photo on desktop, below it on mobile.' },
        { name: 'cta', title: 'CTA Label', type: 'localeString', description: 'Button label that links to the Company page, e.g. "Read more".' },
        { name: 'image', title: 'Company Photo', type: 'image', options: { hotspot: true }, description: 'Photograph of the team / office / a finished project. Landscape orientation, ideally ≥ 1600×1100px.' },
      ],
    }),
    defineField({
      name: 'portfolio',
      title: 'Portfolio Section',
      type: 'object',
      description: 'Header for the portfolio strip on the home page. The actual project cards come from individual Project documents marked "Featured on Home Page".',
      fields: [
        { name: 'sectionTitle', title: 'Section Title', type: 'localeString', description: 'Eyebrow above the project cards, e.g. "// Selected projects".' },
        { name: 'viewAll', title: '"View All" Label', type: 'localeString', description: 'Link label that takes visitors to the full Projects page, e.g. "All projects".' },
      ],
    }),
    defineField({
      name: 'technology',
      title: 'Technology Section',
      type: 'object',
      description: 'The Double-Wall System block on the home page — section title, body, image and a list of bullet benefits to the right.',
      fields: [
        { name: 'sectionTitle', title: 'Section Title', type: 'localeString', description: 'Eyebrow above the heading, e.g. "// Technology".' },
        { name: 'body', title: 'Body Text', type: 'localeText', description: 'Short pitch about the building system. 2–3 sentences.' },
        { name: 'cta', title: 'CTA Label', type: 'localeString', description: 'Button label that links to the Technology page, e.g. "Learn more".' },
        { name: 'image', title: 'Section Image', type: 'image', options: { hotspot: true }, description: 'Photo of a build that shows the technology, e.g. wall section under construction. Landscape, ≥ 1400×900px.' },
        {
          name: 'benefits',
          title: 'Benefits',
          type: 'array',
          description: 'Bullet list of 3–5 benefits shown to the right of the section image. Keep titles short and consistent in style.',
          of: [
            {
              type: 'object',
              name: 'benefit',
              fields: [
                { name: 'title', title: 'Title', type: 'localeString', description: '2–4 word bullet title, e.g. "Energy efficiency".' },
                { name: 'desc', title: 'Description', type: 'localeText', description: 'One line under the bullet title. ~80 characters max.' },
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
      description: 'Full-width call-to-action banner shown near the bottom of the home page, with a background image and a button.',
      fields: [
        { name: 'title', title: 'Title', type: 'localeString', description: 'Big headline on the banner. ~6 words max.' },
        { name: 'subtitle', title: 'Subtitle', type: 'localeText', description: 'One sentence below the title.' },
        { name: 'btn', title: 'Button Label', type: 'localeString', description: 'Action button text, e.g. "Get in touch".' },
        { name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true }, description: 'Wide landscape image used as the banner background. Will be darkened automatically for text legibility. Ideally ≥ 2400×900px.' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Home Page' }
    },
  },
})
