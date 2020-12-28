import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const TagList = styled('ul')`
  display: flex;
  flex-wrap: wrap;
`
const Badge = styled('li')`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.sizes[1]};
  padding: ${({ theme }) => theme.sizes[0]} ${({ theme }) => theme.sizes[2]};
  border-radius: 3px;
  margin-right: ${({ theme }) => theme.sizes[0]};
  margin-top: 0;

  &:hover {
    border: 1px solid transparent;
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`
const Tags = ({ tags }) => (
  <TagList>
    {tags.map(tag => (
      <Link to={`/tags/${tag}`}>
        <Badge>{tag}</Badge>
      </Link>
    ))}
  </TagList>
)

export default Tags
