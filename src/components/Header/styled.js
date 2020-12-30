import styled from '@emotion/styled'

const Header = styled('header')`
  height: 38px;
`

export const Logo = styled('img')`
  position: fixed;
  bottom: 0;
  padding: 20px;
  right: 0;
  height: 20px;
  opacity: 0.3;
`

export const MenuItem = styled('div')`
  font-weight: 300;
  font-size: 0.9rem;
  text-align: right;
  margin-right: 0.6rem;
`

export const SubTitle = styled(`span`)`
  color: ${({ theme }) => theme.colors.greys[900]};
`

export const Author = styled('span')`
  margin-right: 0.1rem;

  color: ${({ theme }) => theme.colors.greys[900]};
  font-weight: bold;
`

export default Header
