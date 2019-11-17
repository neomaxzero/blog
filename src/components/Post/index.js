import React from 'react'
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import Layout from '../layout'
import markdownParser from '../Utils/markdownParser/markdownParser'
import { DEFAULT_DESCRIPTION_HEADER } from '../Utils/constants'
import Comments from './Comments'

const Social = styled.div`
  padding: 2rem 0;
`

const A = styled.a`
  color: #ff6aa5;
  font-size: 0.8rem;
`

const EndOfPostQuote = styled.h4`
  font-size: 0.7rem;
  font-weight: normal;
  text-align: center;
`
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
      >
        <html lang={post.frontmatter.lang || 'en'} />
      </Helmet>

      {markdownParser(post.htmlAst)}

      <EndOfPostQuote>Stay alert, stay moving</EndOfPostQuote>

      <Social>
        <A
          href="https://twitter.com/share"
          className="twitter-share-button"
          data-show-count="false"
          target="_blank"
        >
          Share via twitter
        </A>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        />
      </Social>
      <Comments />
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
        lang
      }
      fields {
        slug
      }
    }
  }
`
