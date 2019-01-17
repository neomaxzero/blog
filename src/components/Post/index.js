import React from 'react'
import Layout from '../layout'
import markdownParser from '../Utils/markdownParser/markdownParser'

export default ({ data }) => {
  const post = data.markdownRemark

  return <Layout>{markdownParser(post.htmlAst)}</Layout>
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`
