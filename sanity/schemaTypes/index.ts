import { type SchemaTypeDefinition } from 'sanity'
import { localeString } from './objects/localeString'
import { localeText } from './objects/localeText'
import { project } from './documents/project'
import { homePage } from './documents/homePage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [localeString, localeText, project, homePage],
}
