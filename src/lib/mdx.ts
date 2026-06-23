import { compileMDX } from "next-mdx-remote/rsc"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import type { BlogFrontmatter } from "@/types/blog"

import { TutoringCTA } from "@/components/ctas/TutoringCTA"
import { WorksheetCTA } from "@/components/ctas/WorksheetCTA"
import { NewsletterSignup } from "@/components/ctas/NewsletterSignup"

const components = {
  TutoringCTA,
  WorksheetCTA,
  NewsletterSignup,
}

export async function compileBlogMdx(
  content: string
): Promise<{
  content: React.ReactNode
  frontmatter: BlogFrontmatter
}> {
  const { content: compiledContent, frontmatter } = await compileMDX<BlogFrontmatter>({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
      parseFrontmatter: true,
    },
    components,
  })

  return {
    content: compiledContent,
    frontmatter,
  }
}
