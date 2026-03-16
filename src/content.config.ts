import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    topic: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    description: z.string().optional().default(''),
    subtitle: z.string().optional(),
    lang: z.string().optional(),
    featuredImage: z.string().optional(),
    hideImgTitle: z.boolean().optional(),
    lastRevision: z.string().optional(),
  }),
});

export const collections = { posts };
