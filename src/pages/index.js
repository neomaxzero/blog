import React from 'react'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import PostItem from '../components/PostList/PostItem'
import Filter from '../components/Filter'
import { keyframes } from 'emotion'

const Subtitle = styled.h2`
  font-size: 0.8rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-weight: 400 !important;
  letter-spacing: -0.2px;
  margin-top: ${({ theme }) => theme.sizes[6]};
`

const borderAnimation = keyframes`
0% {
  background: linear-gradient(to bottom, #ab2ff7, #D6303A);
}
50% {
  background: linear-gradient(to bottom, #D6303A, #ab2ff7);
}
100% {
  background: linear-gradient(to bottom, #ab2ff7, #D6303A);
}
`

const List = styled.ul`
  padding-left: ${({ theme }) => theme.sizes[5]};
  background-clip: padding-box;
  border: solid 5px transparent;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};

  &:before {
    content: '';
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 0;
    z-index: -1;
    margin: -5px;
    border-radius: inherit;
    background: ${({ theme }) =>
      `linear-gradient(to bottom, ${theme.colors.primary}, orange)`};

    animation: ${borderAnimation} 20s linear infinite;
  }
`
export default ({ data }) => {
  return (
    <Layout>
      <Subtitle>Latest articles</Subtitle>
      <List>
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
      </List>
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
