import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    hero {
      tag,
      titleLine1,
      titleLine2,
      subtitle,
      "backgroundImage": backgroundImage.asset->url
    },
    servicesSection,
    services[] {
      code,
      name,
      description
    },
    about {
      sectionTitle,
      heading,
      body,
      cta,
      "image": image.asset->url
    },
    portfolio,
    technology {
      sectionTitle,
      body,
      cta,
      "image": image.asset->url,
      benefits[] {
        title,
        desc
      }
    },
    cta {
      title,
      subtitle,
      btn,
      "backgroundImage": backgroundImage.asset->url
    }
  }
`

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    name,
    location,
    typeName,
    category,
    "images": images[].asset->url,
    status,
    year,
    order,
    featured
  }
`

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(order asc) {
    _id,
    name,
    location,
    typeName,
    category,
    "images": images[].asset->url,
    status,
    year
  }
`
