import { Link } from 'gatsby'
import React from 'react'
import Flex, { Section } from '../shared/Flex'

const PreviousNextPost = ({ previous, next }) => (
  <Section size={2}>
    <Flex justifyContent="space-between">
      {previous ? (
        <Link to={previous.fields.slug}> {'<-'} Previous</Link>
      ) : (
        <div />
      )}
      {next ? <Link to={next.fields.slug}>Next {'->'} </Link> : <div />}
    </Flex>
  </Section>
)

export default PreviousNextPost
