const INDEXABLE_TAG_KEYS = new Set([
  'frontend',
  'react',
  'performance',
  'architecture',
  'testing',
  'seo',
  'ai',
  'hiring',
  'javascript',
]);

const CANONICAL_TAGS = {
  ai: { key: 'ai', label: 'AI', slug: 'ai' },
  architecture: { key: 'architecture', label: 'architecture', slug: 'architecture' },
  'book-reviews': { key: 'book-reviews', label: 'book reviews', slug: 'book-reviews' },
  build: { key: 'build', label: 'build', slug: 'build' },
  career: { key: 'career', label: 'career', slug: 'career' },
  comments: { key: 'comments', label: 'comments', slug: 'comments' },
  culture: { key: 'culture', label: 'culture', slug: 'culture' },
  'developer-career': { key: 'developer-career', label: 'developer career', slug: 'developer-career' },
  'developer-thoughts': { key: 'developer-thoughts', label: 'developer thoughts', slug: 'developer-thoughts' },
  engineering: { key: 'engineering', label: 'engineering', slug: 'engineering' },
  feedback: { key: 'feedback', label: 'feedback', slug: 'feedback' },
  fonts: { key: 'fonts', label: 'fonts', slug: 'fonts' },
  founder: { key: 'founder', label: 'founder', slug: 'founder' },
  frontend: { key: 'frontend', label: 'frontend', slug: 'frontend' },
  generalist: { key: 'generalist', label: 'generalist', slug: 'generalist' },
  hiring: { key: 'hiring', label: 'hiring', slug: 'hiring' },
  interviews: { key: 'interviews', label: 'interviews', slug: 'interviews' },
  javascript: { key: 'javascript', label: 'javascript', slug: 'javascript' },
  'open-source': { key: 'open-source', label: 'open source', slug: 'open-source' },
  performance: { key: 'performance', label: 'performance', slug: 'performance' },
  react: { key: 'react', label: 'react', slug: 'react' },
  redux: { key: 'redux', label: 'redux', slug: 'redux' },
  seo: { key: 'seo', label: 'seo', slug: 'seo' },
  testing: { key: 'testing', label: 'testing', slug: 'testing' },
  troubleshooting: { key: 'troubleshooting', label: 'troubleshooting', slug: 'troubleshooting' },
  writing: { key: 'writing', label: 'writing', slug: 'writing' },
};

const TAG_ALIASES = {
  'a i': 'ai',
  ai: 'ai',
  architecture: 'architecture',
  'book review': 'book-reviews',
  'book reviews': 'book-reviews',
  build: 'build',
  career: 'career',
  comments: 'comments',
  culture: 'culture',
  'dev thoughts': 'developer-thoughts',
  'dev-thoughts': 'developer-thoughts',
  'developer career': 'developer-career',
  engineering: 'engineering',
  feedback: 'feedback',
  fonts: 'fonts',
  founder: 'founder',
  frontend: 'frontend',
  generalist: 'generalist',
  hiring: 'hiring',
  interviews: 'interviews',
  javascript: 'javascript',
  'open source': 'open-source',
  performance: 'performance',
  react: 'react',
  redux: 'redux',
  seo: 'seo',
  testing: 'testing',
  troubleshooting: 'troubleshooting',
  writing: 'writing',
};

export function normalizeTagKey(tag = '') {
  return tag
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, ' ')
    .toLowerCase()
    .trim()
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ');
}

export function slugifyTag(tag = '') {
  const normalized = normalizeTagKey(tag);
  return normalized.replace(/\s+/g, '-');
}

export function getCanonicalTag(tag = '') {
  const normalized = normalizeTagKey(tag);
  const canonicalKey = TAG_ALIASES[normalized] || normalized;
  const canonical = CANONICAL_TAGS[canonicalKey];

  if (canonical) {
    return {
      ...canonical,
      indexable: INDEXABLE_TAG_KEYS.has(canonical.key),
    };
  }

  return {
    key: canonicalKey,
    label: normalized,
    slug: slugifyTag(normalized),
    indexable: false,
  };
}

export function getCanonicalTags(tags = []) {
  const unique = new Map();

  for (const tag of tags) {
    const canonical = getCanonicalTag(tag);
    if (!canonical.label || unique.has(canonical.slug)) continue;
    unique.set(canonical.slug, canonical);
  }

  return [...unique.values()];
}

export function isIndexableTagArchive(tag, count) {
  const canonical = typeof tag === 'string' ? getCanonicalTag(tag) : tag;
  return canonical.indexable && count >= 2;
}

export function getSitemapExcludedTagSlugs(tagCounts = new Map()) {
  const excluded = [];

  for (const [slug, entry] of tagCounts.entries()) {
    if (!isIndexableTagArchive(entry, entry.count)) {
      excluded.push(`/tags/${slug}`);
      excluded.push(`/tags/${slug}/`);
    }
  }

  return excluded;
}
