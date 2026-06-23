interface ArticleSchemaProps {
  headline: string
  description: string
  datePublished: string
  author: string
  image: string
  url: string
}

export function articleSchema({
  headline,
  description,
  datePublished,
  author,
  image,
  url,
}: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
    image,
    url,
    publisher: {
      "@type": "Organization",
      name: "Proportional Relationship",
      url: "https://proportionalrelationship.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function blogListingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Proportional Relationships Blog",
    description:
      "Learn proportional relationships with step-by-step guides, examples, and practice problems.",
    publisher: {
      "@type": "Organization",
      name: "Proportional Relationship",
      url: "https://proportionalrelationship.com",
    },
  }
}

export function webApplicationSchema({
  name,
  description,
  url,
  applicationCategory = "EducationalApplication",
  operatingSystem = "Web",
}: {
  name: string
  description: string
  url: string
  applicationCategory?: string
  operatingSystem?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    browserRequirements: "Requires JavaScript",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }
}

export function faqPageSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}
