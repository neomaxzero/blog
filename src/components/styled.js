import styled from '@emotion/styled'

export const LayoutSy = styled('div')`
  margin: 0 auto;
  max-width: 720px;
  padding: 0px 1.2rem;
  padding-top: 0;

  a {
    text-decoration: none;
    color: inherit;
  }

  a:visited {
    color: inherit;
  }

  * {
    font-family: Inter, sans-serif;
    transition: all 0.2s ease-in-out;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: Inter, sans-serif;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.greys[900]};
  }

  h1 {
    text-align: center;
  }

  p {
    color: #3d4852;
    font-size: 18px;
    font-weight: 300;
    line-height: 26px;
    padding-bottom: 16px;
  }

  li {
    font-size: 18px;
    list-style-type: none;
  }

  li:not(first-child) {
    margin-top: 0.8rem;
  }

  ul {
    padding: 0;
    font-size: 18px;
  }
`

export const InvertedMargin = `
  margin-left: -1.2rem;
  margin-right: -1.2rem;
`

export const CompensateInvertedMargin = `
  margin-left: 1.2rem;
  margin-right: 1.2rem;
`
