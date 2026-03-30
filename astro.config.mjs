import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { getSitemapExcludedTagSlugs } from './src/utils/taxonomy.mjs';

const tagCounts = new Map([
  ['ai', { key: 'ai', slug: 'ai', label: 'AI', count: 2, indexable: true }],
  ['architecture', { key: 'architecture', slug: 'architecture', label: 'architecture', count: 1, indexable: true }],
  ['book-reviews', { key: 'book-reviews', slug: 'book-reviews', label: 'book reviews', count: 1, indexable: false }],
  ['build', { key: 'build', slug: 'build', label: 'build', count: 1, indexable: false }],
  ['career', { key: 'career', slug: 'career', label: 'career', count: 3, indexable: false }],
  ['comments', { key: 'comments', slug: 'comments', label: 'comments', count: 2, indexable: false }],
  ['culture', { key: 'culture', slug: 'culture', label: 'culture', count: 1, indexable: false }],
  ['developer-career', { key: 'developer-career', slug: 'developer-career', label: 'developer career', count: 1, indexable: false }],
  ['developer-thoughts', { key: 'developer-thoughts', slug: 'developer-thoughts', label: 'developer thoughts', count: 13, indexable: false }],
  ['engineering', { key: 'engineering', slug: 'engineering', label: 'engineering', count: 1, indexable: false }],
  ['feedback', { key: 'feedback', slug: 'feedback', label: 'feedback', count: 1, indexable: false }],
  ['fonts', { key: 'fonts', slug: 'fonts', label: 'fonts', count: 1, indexable: false }],
  ['founder', { key: 'founder', slug: 'founder', label: 'founder', count: 1, indexable: false }],
  ['frontend', { key: 'frontend', slug: 'frontend', label: 'frontend', count: 2, indexable: true }],
  ['generalist', { key: 'generalist', slug: 'generalist', label: 'generalist', count: 1, indexable: false }],
  ['hiring', { key: 'hiring', slug: 'hiring', label: 'hiring', count: 1, indexable: true }],
  ['interviews', { key: 'interviews', slug: 'interviews', label: 'interviews', count: 1, indexable: false }],
  ['javascript', { key: 'javascript', slug: 'javascript', label: 'javascript', count: 11, indexable: true }],
  ['open-source', { key: 'open-source', slug: 'open-source', label: 'open source', count: 1, indexable: false }],
  ['performance', { key: 'performance', slug: 'performance', label: 'performance', count: 7, indexable: true }],
  ['react', { key: 'react', slug: 'react', label: 'react', count: 4, indexable: true }],
  ['redux', { key: 'redux', slug: 'redux', label: 'redux', count: 1, indexable: false }],
  ['seo', { key: 'seo', slug: 'seo', label: 'seo', count: 2, indexable: true }],
  ['testing', { key: 'testing', slug: 'testing', label: 'testing', count: 2, indexable: true }],
  ['troubleshooting', { key: 'troubleshooting', slug: 'troubleshooting', label: 'troubleshooting', count: 1, indexable: false }],
  ['writing', { key: 'writing', slug: 'writing', label: 'writing', count: 5, indexable: false }],
]);

const excludedTagPages = new Set(getSitemapExcludedTagSlugs(tagCounts));

export default defineConfig({
  site: 'https://blog.m4x.io',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/admin') && !excludedTagPages.has(page),
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
