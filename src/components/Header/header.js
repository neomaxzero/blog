import React from 'react'
import { Link } from 'gatsby'
import ScHeader, { Logo, Title, Author, SubTitle } from './styled'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import logoSrc from '../../images/nmz-logo-black.png'

const Header = () => (
  <ScHeader>
    <OutboundLink href="https://m4x.io">
      <Logo src={logoSrc} />
    </OutboundLink>
    <Title>
      <Link to="/">
        <Author>m4x</Author>
        <SubTitle>blog</SubTitle>
      </Link>
    </Title>
  </ScHeader>
)

export default Header
