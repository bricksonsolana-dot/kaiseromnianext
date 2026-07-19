import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'localeString',
      description: 'Headline name shown above each project card and on the detail. Bilingual (EL / EN). Required.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'localeString',
      description: 'Where the project is, e.g. "Athens, Attica" / "Αθήνα, Αττική". Shown in uppercase under the name.',
    }),
    defineField({
      name: 'typeName',
      title: 'Project Type',
      type: 'localeString',
      description: 'Short type label, e.g. "Private Residence" / "Ιδιωτική Κατοικία". Shown above the project name.',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'projectCategory' }],
      description: 'Pick from the Project Categories list. Categories drive the filter bar on the Projects page (e.g. "Residences", "Tourism", "Collaborations"). To add a new category, create a new Project Category document.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      description: 'One or more project photos. The first image is the main card image; the rest become a swipeable gallery. Use landscape images, ideally ≥ 1600×1100px. Set the hotspot on each so the focal point stays visible when cropped.',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'localeString',
      description: 'Custom status text shown on the project card, e.g. "Completed", "In Progress", or "Completed | Participation in foundations". Leave both languages blank to hide the status badge entirely.',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'Project year, e.g. "2024". Shown next to the location. Same in both languages.',
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Controls the position on the Projects page. Lower numbers appear first. Use 10, 20, 30… so you can insert new projects between existing ones without re-numbering everything.',
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Home Page',
      type: 'boolean',
      description: 'Turn on to show this project in the portfolio strip on the home page. Aim for 3–6 featured projects total.',
      initialValue: false,
    }),
    defineField({
      name: 'featuredOrder',
      title: 'Homepage Sort Order',
      type: 'number',
      description: 'Position in the home-page portfolio strip. Lower numbers appear first. Only relevant when "Featured on Home Page" is on.',
      hidden: ({ document }) => !document?.featured,
    }),
  ],
  orderings: [
    {
      title: 'Sort Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name.en',
      subtitle: 'category.name.en',
      media: 'images.0',
    },
  },
})
