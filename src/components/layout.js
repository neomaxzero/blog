import GlobalStyles from './globalStyles';

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { LayoutSy } from './styled'
import Header from './Header'
import './layout.css'
import './blog.css'
import { DEFAULT_DESCRIPTION_HEADER } from './Utils/constants'
import { ThemeProvider } from 'emotion-theming'
import theme from './theme'

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
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: DEFAULT_DESCRIPTION_HEADER,
            },
            {
              name: 'keywords',
              content: 'javascript, blog, m4x, react, redux, frontend, css',
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
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
