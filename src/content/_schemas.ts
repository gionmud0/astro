import { i } from "astro:content";
import moment from 'moment'

export const blogSchema = i

   object({
    author: string().optional(),
    pubDatetime: date().toISOString(),
    title: string().optional(),
    postSlug: string().optional(),
    featured: boolean().optional(),
    draft: boolean().optional(),
    tags: array(string()).default(["others"]),
    ogImage: string().optional(),
    description: string().optional(),
  })
  .strict();

export type BlogFrontmatter = i.infer<typeof blogSchema>;
