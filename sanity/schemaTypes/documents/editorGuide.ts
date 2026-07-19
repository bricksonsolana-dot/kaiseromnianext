import { defineType, defineField } from 'sanity'

export const editorGuide = defineType({
  name: 'editorGuide',
  title: 'Editor Guide',
  type: 'document',
  fields: [
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'array',
      description:
        'Welcome message and overall workflow notes shown at the top of the guide. Editors see this first when they open the guide.',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      description:
        'Add one section per topic. Suggested sections: "Editing the home page", "Adding a project", "Image guidelines", "Languages (EL / EN)", "Backups", "What to avoid".',
      of: [
        {
          type: 'object',
          name: 'guideSection',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
              description: 'Short, descriptive — e.g. "Adding a project" or "Image guidelines".',
            }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'array',
              description:
                'Rich text. Use the image button to drop in screenshots of the studio so editors can see what to click. Use code blocks for shell commands.',
              of: [
                { type: 'block' },
                { type: 'image', options: { hotspot: true } },
              ],
            }),
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: '📖 Editor Guide' }
    },
  },
})
