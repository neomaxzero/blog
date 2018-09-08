import React from 'react'
import Layout from '../layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
