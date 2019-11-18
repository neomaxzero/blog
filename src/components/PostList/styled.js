import styled from '@emotion/styled'

export const Item = styled('li')`
  display: flex;
  flex: 1 1 100%;
  justify-content: space-between;
  color: black;
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
  color: #ababab;
  font-weight: normal;
  font-size: 0.8rem;
  display: none;

  @media (min-width: 420px) {
    display: inline-block;
  }
`

export const Date = styled('span')`
  color: #cdcccc;
  font-size: 0.6rem;
  font-weight: 300;
  margin: 0.2rem 0 0 0.4rem;
`

export const Title = styled('span')`
  margin-right: 0.4rem;
`
export const Subtitle = styled('span')`
  color: #ababab;
  font-size: 0.8rem;
  font-weight: 400;
  flex-shrink: 0;
`
