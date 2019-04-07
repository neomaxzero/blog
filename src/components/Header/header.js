import React from 'react'
import { Link } from 'gatsby'
import ScHeader, { Logo, Title, Author, SubTitle } from './styled'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import logoSrc from '../../images/nmz-logo-black.png'

const Header = () => (
  <ScHeader>
    <OutboundLink href="https://z3ro.com.ar">
      <Logo src={logoSrc} />
    </OutboundLink>
    <Title>
      <Link to="/">
        <Author>Z3RO</Author>
        <SubTitle>blog</SubTitle>
      </Link>
    </Title>
  </ScHeader>
)

export default Header
