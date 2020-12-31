import styled from '@emotion/styled'

export const LayoutSy = styled('div')`
  margin: 0 auto;
  max-width: 720px;
  padding: 0px 1.2rem;
  padding-top: 0;

  * {
    color: ${({ theme }) => theme.colors.text};
  }

  h1,
  h2,
  h3,
  h4,
  strong {
    color: ${({ theme }) => theme.colors.greys[900]};
  }
  strong {
    font-weight: 500;
  }

  h1 {
    text-align: center;
  }

  p {
    color: ${({ theme }) => theme.colors.greys[700]};
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
