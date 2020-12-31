const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const {
  createPathWithLanguagePrefix,
} = require('./src/components/Utils/createPathWithLanguagePrefix')
const kebabCase = require('./src/utils')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('./src/components/Post/index.js')
  const tagTemplate = path.resolve('./src/components/Tags/index.js')

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: ASC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
              lang
            }
          }
          next {
            frontmatter {
              title
              featuredImage
              lang
            }
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
              featuredImage
              lang
            }
            fields {
              slug
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.postsRemark.edges

  posts.forEach(({ node, next, previous }) => {
    const langPrefix = node.frontmatter.lang

    createPage({
      path: createPathWithLanguagePrefix(langPrefix, node.fields.slug),
      component: path.resolve(`./src/components/Post/index.js`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug: node.fields.slug,
        next,
        previous,
      },
    })
  })

  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
