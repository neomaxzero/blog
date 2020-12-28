import React from 'react'

// Components
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../layout'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `Tag: ${tag} (${totalCount}) `

  return (
    <Layout>
      <Helmet
        meta={[
          {
            name: 'title',
            content: `${tag} | M4X`,
          },
          {
            name: 'description',
            content: `Find all the content related to ${tag}`,
          },
        ]}
      />

      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
