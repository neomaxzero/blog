import React from 'react'
import { Link } from 'gatsby'
import ScHeader, { Logo, Title, Author, SubTitle } from './styled'
import styled from '@emotion/styled'
import Flex from '../shared/Flex'

const NavElement = styled.div`
  display: inline-block;
  margin-right: ${({ theme }) => theme.sizes[1]};

  &:hover {
    font-size: 18px;
  }
`

const Header = () => (
  <ScHeader>
    <Flex justifyContent="flex-end">
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
    </Flex>
  </ScHeader>
)

export default Header
