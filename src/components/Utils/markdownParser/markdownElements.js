import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import mq from '../mq'

export const H1 = styled('h1')`
  font-size: 2.9rem;
  margin: 2.9rem 0;
`
export const H2 = styled('h2')`
  margin-top: 3rem;
`

const StyledA = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`

export const A = ({ href, ...rest }) => <StyledA to={href} {...rest} />

export const Blockquote = styled('blockquote')`
  border: 1px solid #e2e2e2;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  margin: 0;
  opacity: 0.9;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary16};

  p {
    color: ${({ theme }) => theme.colors.primaryOverText};
  }
`
export const Ul = styled('ul')`
  list-style-type: circle;
  margin-block-start: 0;
  margin-block-end: 1rem;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 2rem;

  & li:not(:first-child) {
    margin-top: 1.2rem;
  }
`

export const Li = styled('li')`
  list-style-type: inherit;
`

export const Img = styled('img')`
  width: 100%;
  display: block;
  margin: 0 auto;

  ${mq.tablet} {
    width: 80%;
  }

  .raw {
    width: 0;
  }
`
