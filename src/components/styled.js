import styled from '@emotion/styled'

export const LayoutSy = styled('div')`
  margin: 0 auto;
  max-width: 720px;
  padding: 0px 1.2rem;
  padding-top: ${({ pt }) => pt || 0};

  strong {
    font-weight: 500;
  }

  h1 {
    text-align: center;
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
