import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import markdownParser from '../Utils/markdownParser/markdownParser'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Helmet
        title={`${post.frontmatter.title} - z3ro blog`}
        meta={[
          {
            name: 'title',
            content: `${post.frontmatter.title} - z3ro blog`,
          },
        ]}
      />

      {markdownParser(post.htmlAst)}
    </Layout>
  )
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
