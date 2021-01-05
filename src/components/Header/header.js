import React from 'react'
import { Link } from 'gatsby'
import ScHeader, { Logo, Title, Author, SubTitle } from './styled'
import styled from '@emotion/styled'
import Flex from '../shared/Flex'
import { ThemeEmotionContext } from '../shared/hooks/useDarkMode'
import { useContext } from 'react'

const NavElement = styled.div`
  display: inline-block;
  margin-right: ${({ theme }) => theme.sizes[1]};
  cursor: pointer;

  &:hover {
    font-size: 18px;
  }
`

const Header = () => {
  const { theme, toggle } = useContext(ThemeEmotionContext)
  return (
    <ScHeader>
      <Flex justifyContent="flex-end">
        <Link to="/tags">
          <NavElement>Tags</NavElement>
        </Link>
        <Link to="/about">
          <NavElement>About</NavElement>
        </Link>
        <NavElement onClick={toggle}>
          {theme === 'light' ? 'Dark' : 'Light'}
        </NavElement>
        <Link to="/">
          <Author>m4x</Author>
          <SubTitle>blog</SubTitle>
        </Link>
      </Flex>
    </ScHeader>
  )
}

export default Header
