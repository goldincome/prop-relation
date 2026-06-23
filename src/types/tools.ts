export interface ToolDefinition {
  slug: string
  type: "calculator" | "checker"
  title: string
  description: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  category: string
  howToUse: string
  mathClassContext: string
  examples: WorkedExample[]
  faq: FaqItem[]
  relatedTools: string[]
  relatedArticles: string[]
  relatedWorksheet: string
  formula: string
  formulaExplanation: string
  inputLabel: string
  inputPlaceholder: string
  resultLabel: string
  computeFn?: string
}

export interface WorkedExample {
  title: string
  input: string
  steps: string[]
  answer: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface PillarDefinition {
  slug: string
  title: string
  description: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  sections: PillarSection[]
  relatedTools: string[]
  relatedArticles: string[]
  faq: FaqItem[]
}

export interface PillarSection {
  heading: string
  content: string
  subsections?: { heading: string; content: string }[]
}
