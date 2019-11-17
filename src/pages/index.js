import React from 'react'
import Layout from '../components/layout'
import PostItem from '../components/PostList/PostItem'

export default ({ data }) => {
  return (
    <Layout>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostItem
            key={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            subtitle={node.frontmatter.subtitle}
            topic={node.frontmatter.topic}
            date={node.frontmatter.date}
            lang={node.frontmatter.lang}
          />
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            topic
            subtitle
            lang
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

// Add link to sandbox.
// Add gif de la diferencia.
