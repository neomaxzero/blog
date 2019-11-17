const createPathWithLanguagePrefix = (langPrefix, slug) => {
  //ex slug: '/123-time/'

  return langPrefix ? `/${langPrefix}${slug}` : slug
}

const getFullPostUrl = (langPrefix, slug) => {
  const fullSlug = createPathWithLanguagePrefix(langPrefix, slug)
  return `https://blog.m4x.io${fullSlug}`
}

module.exports = {
  createPathWithLanguagePrefix,
  getFullPostUrl,
}
