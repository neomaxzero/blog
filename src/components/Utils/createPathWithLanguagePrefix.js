const createPathWithLanguagePrefix = (langPrefix, slug) => {
  //ex slug: '/123-time/'

  return langPrefix ? `/${langPrefix}${slug}` : slug
}

// export const getFullPostUrl = (langPrefix, slug) => {
//   if (!location) {

//   }
//   const fullSlug = createPathWithLanguagePrefix(langPrefix, slug)

//   return `${location.origin}/${fullSlug}`
// }

module.exports = createPathWithLanguagePrefix
