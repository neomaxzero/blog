import React from 'react'
import { Link } from 'gatsby'
import ScHeader, { Logo, Title, Author, SubTitle } from './styled'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import logoSrc from '../../images/nmz-logo-black.png'
import styled from '@emotion/styled'

const NavElement = styled.div`
  display: inline-block;
  margin-right: ${({ theme }) => theme.sizes[1]};
  padding-bottom: ${({ theme }) => theme.sizes[0]};

  &:hover {
    font-size: 16px;
  }
`
const Header = () => (
  <ScHeader>
    <OutboundLink href="https://m4x.io">
      <Logo
        src={logoSrc}
        alt="M4X blog logo: The logo its not a big deal. It's a black triangle with white stripes in the middle."
      />
    </OutboundLink>
    <Title>
      <Link to="/tags">
        <NavElement>Tags</NavElement>
      </Link>
      <Link to="/about">
        <NavElement>About</NavElement>
      </Link>
      <Link to="/">
        <Author>m4x</Author>
        <SubTitle>blog</SubTitle>
      </Link>
    </Title>
  </ScHeader>
)

export default Header
