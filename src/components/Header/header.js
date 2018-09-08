import React from 'react'
import { Link } from 'gatsby'
import ScHeader, { Logo } from './styled'
import logoSrc from '../../images/nmz-logo-black.png'
const Header = ({ siteTitle }) => (
  <ScHeader>
    <a href="https://z3ro.com.ar">
      <Logo src={logoSrc} />
    </a>
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
