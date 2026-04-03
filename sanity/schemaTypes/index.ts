import { type SchemaTypeDefinition } from 'sanity'
import { localeString } from './objects/localeString'
import { localeText } from './objects/localeText'
import { project } from './documents/project'
import { homePage } from './documents/homePage'
import { technologyPage } from './documents/technologyPage'
import { companyPage } from './documents/companyPage'
import { servicesPage } from './documents/servicesPage'
import { contactPage } from './documents/contactPage'
import { projectsPage } from './documents/projectsPage'
import { projectCategory } from './documents/projectCategory'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [localeString, localeText, project, projectCategory, homePage, technologyPage, companyPage, servicesPage, contactPage, projectsPage],
}
