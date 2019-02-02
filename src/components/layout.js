import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { LayoutSy } from './styled'
import Header from './Header'
import './layout.css'
import './blog.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: "z3ro's thoughts, mainly javascript",
            },
            {
              name: 'keywords',
              content: 'javascript, blog, z3ro, react, redux, frontend, css',
            },
            {
              name: 'google-site-verification',
              content: 'FulLBj-z66uFRD2jQhKyIiwKHfpP2jzALOoh4oc60rU',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header
          author={data.site.siteMetadata.author}
          siteTitle={data.site.siteMetadata.title}
        />
        <LayoutSy>{children}</LayoutSy>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
