module.exports = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: 'images',
      path: `src/images/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `src/posts/`,
    },
  },
]
