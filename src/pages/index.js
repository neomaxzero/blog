import React from 'react'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import PostItem from '../components/PostList/PostItem'
import Filter from '../components/Filter'

const Subtitle = styled.h2`
  font-size: 0.8rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.greys[400]};
  font-weight: 200;
  letter-spacing: -0.2px;
`
export default ({ data }) => {
  return (
    <Layout>
      <Subtitle>Latest articles</Subtitle>
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
            tags
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
