const createPathWithLanguagePrefix = (langPrefix, slug) => {
  //ex slug: '/123-time/'

  return langPrefix ? `/${langPrefix}${slug}` : slug
}

module.exports = createPathWithLanguagePrefix
