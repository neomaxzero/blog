import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import ScHeader, { Logo, Title, Author, SubTitle } from './styled'
import styled from '@emotion/styled'
import Flex from '../shared/Flex'
import { ThemeEmotionContext } from '../shared/hooks/useDarkMode'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faSun } from '@fortawesome/free-solid-svg-icons'
import { LayoutSy } from '../styled'
import debounce from 'lodash/debounce'

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

const FixHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
`
const Header = () => {
  useEffect(() => {
    const onScroll = e => {
      requestAnimationFrame(() => {})
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const { theme, toggle } = useContext(ThemeEmotionContext)

  return (
    <FixHeader>
      <LayoutSy>
        <ScHeader>
          <Flex justifyContent="space-between">
            <div>
              <Link to="/">
                <Author>m4x</Author>
                <SubTitle>blog</SubTitle>
              </Link>
            </div>
            <div>
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
            </div>
          </Flex>
        </ScHeader>
      </LayoutSy>
    </FixHeader>
  )
}

export default Header
