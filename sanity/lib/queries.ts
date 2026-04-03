import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    hero {
      tag,
      titleLine1,
      titleLine2,
      subtitle,
      "backgroundImage": backgroundImage.asset->url,
      "backgroundImageMobile": backgroundImageMobile.asset->url
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
    "category": select(
      defined(category->slug.current) => category->slug.current,
      category
    ),
    "images": images[].asset->url,
    status,
    year,
    order,
    featured
  }
`

export const projectCategoriesQuery = groq`
  *[_type == "projectCategory"] | order(order asc) {
    _id,
    "slug": slug.current,
    name,
    order
  }
`

export const technologyPageQuery = groq`
  *[_type == "technologyPage"][0] {
    hero { eyebrow, titleLine1, titleLine2 },
    intro {
      badge, title, paragraphs,
      "image": image.asset->url
    },
    introBenefits {
      badge, title, paragraphs,
      "image": image.asset->url
    },
    comparison {
      badge, title, headers,
      rows[] { feature, conventional, doubleWall }
    },
    cta { title, subtitle, btn }
  }
`

export const companyPageQuery = groq`
  *[_type == "companyPage"][0] {
    header {
      eyebrow,
      pageTitle
    },
    "heroImage": heroImage.asset->url,
    about {
      badge,
      title,
      paragraphs[]
    },
    timeline {
      badge,
      title,
      events[] {
        year,
        title,
        desc
      }
    },
    mvv {
      badge,
      title,
      mission {
        title,
        content,
        "image": image.asset->url
      },
      vision {
        title,
        content,
        "image": image.asset->url
      },
      values {
        title,
        content,
        "image": image.asset->url
      }
    }
  }
`

export const servicesPageQuery = groq`
  *[_type == "servicesPage"][0] {
    hero { eyebrow, titleLine1, titleLine2 },
    "heroImage": heroImage.asset->url,
    services[] {
      num, total, title, desc
    },
    process {
      badge, title,
      steps[] { step, title, desc, "image": image.asset->url }
    },
    cta { title, subtitle, btn }
  }
`

export const contactPageQuery = groq`
  *[_type == "contactPage"][0] {
    hero {
      eyebrow,
      title,
      subtitle
    },
    "heroImage": heroImage.asset->url,
    info {
      address {
        title,
        lines[]
      },
      phone {
        title,
        number,
        hours
      },
      email {
        title,
        addresses
      }
    },
    form {
      sectionLabel,
      sectionTitle
    },
    map {
      title,
      src
    },
    faq {
      sectionLabel,
      sectionTitle,
      items[] {
        question,
        answer
      }
    }
  }
`

export const projectsPageQuery = groq`
  *[_type == "projectsPage"][0] {
    header { eyebrow, pageTitle, pageSubtitle },
    allLabel,
    statusLabels { completed, inProgress },
    uiLabels { viewProject, showMore, emptyState },
    cta { title, subtitle, btn }
  }
`

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(featuredOrder asc) {
    _id,
    name,
    location,
    typeName,
    "category": select(
      defined(category->slug.current) => category->slug.current,
      category
    ),
    "images": images[].asset->url,
    status,
    year
  }
`
