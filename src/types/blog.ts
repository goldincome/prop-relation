export interface BlogFrontmatter {
  title: string
  description: string
  slug: string
  date: string
  category: string
  tags: string[]
  featuredImage: string
  featuredImageAlt: string
  author: string
  keywords: string[]
  canonical: string
  relatedTools: string[]
  relatedArticles: string[]
  relatedWorksheets: string[]
}

export interface BlogPost {
  frontmatter: BlogFrontmatter
  content: string
  slug: string
  readingTime: number
}

export interface BlogListItem {
  title: string
  description: string
  slug: string
  date: string
  category: string
  tags: string[]
  featuredImage: string
  featuredImageAlt: string
  readingTime: number
}
