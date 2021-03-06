import React from 'react'
import { Link } from 'gatsby'
import ScHeader, { Logo, Title, Author, SubTitle } from './styled'
import styled from '@emotion/styled'
import Flex from '../shared/Flex'
import { ThemeEmotionContext } from '../shared/hooks/useDarkMode'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faSun } from '@fortawesome/free-solid-svg-icons'

const NavElement = styled.div`
  display: inline-block;
  margin-right: ${({ theme }) => theme.sizes[1]};
  cursor: pointer;

  &:hover {
    font-size: 18px;
  }
`

const IconNav = styled.div`
  font-size: 0.8rem;
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
          <IconNav>
            {theme === 'light' ? (
              <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
            )}
          </IconNav>
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
