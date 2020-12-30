import styled from '@emotion/styled'

export const Item = styled('li')`
  display: flex;
  flex: 1 1 100%;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.greys[900]};
  font-size: 1.2rem;
  font-weight: 600;

  &:not(:first-child) {
    margin-top: 1.5rem;
  }
`
export const VerticalRow = styled('span')`
  display: flex;
  flex-direction: column;
`

export const MainInfo = styled('span')`
  display: flex;
  align-items: center;
`
export const Topic = styled('span')`
  color: ${({ theme }) => theme.colors.greys['500']};
  font-weight: normal;
  font-size: 0.8rem;
  display: none;

  @media (min-width: 420px) {
    display: inline-block;
    opacity: ${({ hovered }) => (hovered ? 1 : 0)};
  }
`

export const Date = styled('span')`
  color: ${({ theme, hovered }) =>
    hovered ? theme.colors.greys['900'] : theme.colors.greys['600']};
  font-size: ${({ theme }) => theme.sizes['1']};
  font-weight: 300;
  margin: 0.2rem 0.4rem 0 0;
`

export const Title = styled('span')`
  margin-right: 0.4rem;
  font-size: ${({ theme, hovered }) =>
    hovered ? theme.sizes['5'] : theme.sizes['4']};
`
export const Subtitle = styled('span')`
  color: ${({ theme }) => theme.colors.greys['500']};
  font-size: 0.8rem;
  font-weight: 400;
  flex-shrink: 0;
  opacity: ${({ hovered }) => (hovered ? 1 : 0)};
`
