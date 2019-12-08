import styled from '@emotion/styled'

export const H1 = styled('h1')`
  font-size: 2.9rem;
  margin: 2.9rem 0;
`
export const H2 = styled('h2')`
  margin-top: 3rem;
`
export const A = styled('a')`
  color: #ff6aa5;
`

export const Blockquote = styled('blockquote')`
  border: 1px solid #e2e2e2;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  margin: 0;
  opacity: 0.9;
`
export const Ul = styled('ul')`
  list-style-type: square;
  margin-block-start: 0;
  margin-block-end: 1rem;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 2rem;

  & li:not(:first-child) {
    margin-top: 0.6rem;
  }
`

export const Li = styled('li')`
  list-style-type: inherit;
`
