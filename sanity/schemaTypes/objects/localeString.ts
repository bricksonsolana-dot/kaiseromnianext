import { defineType } from 'sanity'

export const localeString = defineType({
  name: 'localeString',
  title: 'Localized String',
  type: 'object',
  fields: [
    {
      name: 'el',
      title: 'Greek',
      type: 'string',
    },
    {
      name: 'en',
      title: 'English',
      type: 'string',
    },
  ],
})
