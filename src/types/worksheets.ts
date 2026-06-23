export interface WorksheetDefinition {
  slug: string
  title: string
  description: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  gradeLevel: string
  standards: string[]
  pages: number
  format: string
  includesAnswerKey: boolean
  includesDigitalVersion: boolean
  price: string
  sections: WorksheetSection[]
  sampleProblems: WorksheetSampleProblem[]
  faq: WorksheetFaqItem[]
  relatedTools: string[]
  relatedArticles: string[]
}

export interface WorksheetSection {
  heading: string
  content: string
}

export interface WorksheetSampleProblem {
  title: string
  problem: string
  answer: string
}

export interface WorksheetFaqItem {
  question: string
  answer: string
}
