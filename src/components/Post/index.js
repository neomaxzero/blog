import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import markdownParser from '../Utils/markdownParser/markdownParser'
import { DEFAULT_DESCRIPTION_HEADER } from '../Utils/constants'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Helmet
        title={`${post.frontmatter.title} - m4x blog`}
        meta={[
          {
            name: 'title',
            content: `${post.frontmatter.title} - m4x blog`,
          },
          {
            name: 'description',
            content: ` ${
              post.frontmatter.description
            } - ${DEFAULT_DESCRIPTION_HEADER}`,
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
        description
      }
    }
  }
`
