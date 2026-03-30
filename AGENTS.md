# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

Personal blog (blog.m4x.io) built with Astro 5, deployed on Netlify. Supports Markdown posts with MDX integration, RSS feed, sitemap, and dark/light theme toggle.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build locally

## Architecture

- **Content**: Posts live in `src/content/posts/` as `.md` files. Older posts use numbered prefixes (e.g., `001-*.md`), newer ones are organized in year subdirectories (`2020/`, `2021/`, `2022/`, `2026/`).
- **Content schema** (`src/content.config.ts`): Posts use a Zod schema with fields: `title`, `date`, `topic?`, `tags[]`, `description?`, `subtitle?`, `lang?`, `featuredImage?`, `hideImgTitle?`, `lastRevision?`. The glob loader reads `**/*.md` from `src/content/posts`.
- **Routing**: `src/pages/[...slug].astro` generates post pages. Spanish posts (`lang: 'es'`) are routed under `/es/<id>`. Previous/next navigation is computed from date-sorted post list.
- **Layouts**: `BaseLayout.astro` (site shell) and `PostLayout.astro` (post wrapper with reading time, tags, prev/next).
- **Components**: Astro components in `src/components/` — includes `SEO`, `Header`, `Footer`, `ThemeToggle`, `Comments` (Disqus), `TagBadge`, `FeaturedCard`, `NewsletterForm`.
- **Pages**: `index.astro` (home), `about.astro`, `admin.astro`, `404.astro`, `rss.xml.ts`, `tags/` (tag listing and per-tag pages).
- **Static assets**: `public/images/posts/` for post images, `public/fonts/` for web fonts.
- **Styling**: CSS in `src/styles/`, code highlighting via Shiki (github-light/github-dark themes).

## Post Frontmatter

```yaml
title: "Post Title"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
description: "Short description"
lang: "es"  # optional, for Spanish posts
featuredImage: "filename.jpg"  # relative to public/images/posts/
```

## Site Config

- Site URL: `https://blog.m4x.io`
- Admin page excluded from sitemap
- TypeScript strict mode (extends `astro/tsconfigs/strict`)
