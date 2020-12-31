import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'
import Flex, { Section } from '../shared/Flex'
import { createPathWithLanguagePrefix } from '../Utils/createPathWithLanguagePrefix'

const Colored = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`
const PreviousNextPost = ({ previous, next }) => (
  <Section size={6}>
    <Flex justifyContent="space-between">
      {previous ? (
        <Colored>
          <Link
            to={createPathWithLanguagePrefix(
              previous.frontmatter.lang,
              previous.fields.slug
            )}
          >
            {' '}
            {'<-'} Previous article
          </Link>
        </Colored>
      ) : (
        <div />
      )}
      {next ? (
        <Colored>
          <Link
            to={createPathWithLanguagePrefix(
              next.frontmatter.lang,
              next.fields.slug
            )}
          >
            Next article{' ->'}{' '}
          </Link>
        </Colored>
      ) : (
        <div />
      )}
    </Flex>
  </Section>
)

export default PreviousNextPost
