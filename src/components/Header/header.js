import React from 'react'
import { Link } from 'gatsby'
import ScHeader, { Logo } from './styled'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import logoSrc from '../../images/nmz-logo-black.png'
const Header = ({ siteTitle }) => (
  <ScHeader>
    <OutboundLink href="https://z3ro.com.ar">
      <Logo src={logoSrc} />
    </OutboundLink>
    <h1>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </ScHeader>
)

export default Header
