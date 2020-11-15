import React from 'react'
import styled from '@emotion/styled'
import Helmet from 'react-helmet'
import Layout from '../layout'
import markdownParser from '../Utils/markdownParser/markdownParser'
import { DEFAULT_DESCRIPTION_HEADER } from '../Utils/constants'
import Comments from './Comments'
import { getFullPostUrl } from '../Utils/createPathWithLanguagePrefix'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import NewsletterForm from './NewsletterForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ImageF from './Image'
import PostHeader from './PostHeader'

const Social = styled.div`
  padding-bottom: 4rem 0;
`
const Toolbar = styled.div`
  display: flex;
  margin-bottom: 2rem;
  margin-top: 4rem;
`

const EndOfPostQuote = styled.h4`
  font-size: 0.7rem;
  font-weight: normal;
  text-align: center;
`

const OutLink = styled(OutboundLink)`
  color: #ff6aa5;
  font-size: 0.8rem;

  &:hover {
    text-decoration: underline;
  }
`

const TextToolbar = styled.span`
  margin-left: 0.4rem;
`

export default ({ data }) => {
  const post = data.markdownRemark
  const fileName = post.fields.slug.substring(1, post.fields.slug.length - 1)
  const imgFileName = post.frontmatter.featuredImage
  const hideImgTitle = post.frontmatter.hideImgTitle

  return (
    <Layout>
      <Helmet
        title={`${post.frontmatter.title} | M4X`}
        meta={[
          {
            name: 'title',
            content: `${post.frontmatter.title} | M4X`,
          },
          {
            name: 'description',
            content: ` ${post.frontmatter.description || DEFAULT_DESCRIPTION_HEADER}`,
          },
        ]}
      >
        <html lang={post.frontmatter.lang || 'en'} />
      </Helmet>

      <PostHeader
        imgFileName={imgFileName}
        title={post.frontmatter.title}
        hideImgTitle={hideImgTitle}
      />

      {markdownParser(post.htmlAst)}

      <EndOfPostQuote>Stay alert, stay moving</EndOfPostQuote>
      <Toolbar>
        <OutLink
          href={`https://github.com/neomaxzero/blog/edit/master/src/posts/${fileName}.md`}
        >
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          <TextToolbar>suggest changes</TextToolbar>
        </OutLink>
      </Toolbar>

      <NewsletterForm />
      <Social>
        <Comments
          fullUrl={getFullPostUrl(post.frontmatter.lang, post.fields.slug)}
          id={post.fields.slug}
        />
      </Social>
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
        featuredImage
        hideImgTitle
      }
      fields {
        slug
      }
    }
  }
`
