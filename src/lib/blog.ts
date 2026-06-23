import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"
import type { BlogFrontmatter, BlogPost, BlogListItem } from "@/types/blog"

const BLOG_DIR = path.join(process.cwd(), "content", "blog")

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR)
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const source = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(source)
  const frontmatter = data as unknown as BlogFrontmatter
  const stats = readingTime(content)

  return {
    frontmatter,
    content,
    slug,
    readingTime: Math.ceil(stats.minutes),
  }
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getAllSlugs()
  const posts = slugs
    .map((slug) => getBlogPost(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
  return posts
}

export function getBlogListItems(): BlogListItem[] {
  return getAllBlogPosts().map((post) => ({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    slug: post.frontmatter.slug,
    date: post.frontmatter.date,
    category: post.frontmatter.category,
    tags: post.frontmatter.tags,
    featuredImage: post.frontmatter.featuredImage,
    featuredImageAlt: post.frontmatter.featuredImageAlt,
    readingTime: post.readingTime,
  }))
}

export function getPostsByCategory(category: string): BlogListItem[] {
  return getBlogListItems().filter((post) => post.category === category)
}

export function getPostsByTag(tag: string): BlogListItem[] {
  return getBlogListItems().filter((post) => post.tags.includes(tag))
}

export function getCategories(): string[] {
  const posts = getAllBlogPosts()
  return [...new Set(posts.map((p) => p.frontmatter.category))]
}

export function getAllTags(): string[] {
  const posts = getAllBlogPosts()
  const tags = posts.flatMap((p) => p.frontmatter.tags)
  return [...new Set(tags)]
}

const POSTS_PER_PAGE = 10

export function getPaginatedPosts(
  page: number
): { posts: BlogListItem[]; totalPages: number } {
  const allPosts = getBlogListItems()
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)
  const start = (page - 1) * POSTS_PER_PAGE
  const posts = allPosts.slice(start, start + POSTS_PER_PAGE)
  return { posts, totalPages }
}
