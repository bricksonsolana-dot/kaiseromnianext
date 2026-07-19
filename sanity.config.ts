'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\admin\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool, defineLocations} from 'sanity/presentation'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

const localizedLocations = (path: string, label: string) => ({
  locations: [
    {title: `${label} (EL)`, href: path === '/' ? '/el' : `/el${path}`},
    {title: `${label} (EN)`, href: path === '/' ? '/en' : `/en${path}`},
  ],
})

export default defineConfig({
  basePath: '/admin',
  title: 'Kaiser Omnia',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
      resolve: {
        locations: {
          homePage: defineLocations({
            select: {},
            resolve: () => localizedLocations('/', 'Home'),
          }),
          servicesPage: defineLocations({
            select: {},
            resolve: () => localizedLocations('/services', 'Services'),
          }),
          contactPage: defineLocations({
            select: {},
            resolve: () => localizedLocations('/contact', 'Contact'),
          }),
          projectsPage: defineLocations({
            select: {},
            resolve: () => localizedLocations('/projects', 'Projects'),
          }),
          companyPage: defineLocations({
            select: {},
            resolve: () => localizedLocations('/company', 'Company'),
          }),
          technologyPage: defineLocations({
            select: {},
            resolve: () => localizedLocations('/technology', 'Technology'),
          }),
          project: defineLocations({
            select: {name: 'name.en'},
            resolve: () => localizedLocations('/projects', 'Projects index'),
          }),
        },
      },
    }),
    // Vision is for querying with GROQ from inside the Studio — dev only
    // https://www.sanity.io/docs/the-vision-plugin
    ...(process.env.NODE_ENV === 'development'
      ? [visionTool({defaultApiVersion: apiVersion})]
      : []),
  ],
})
