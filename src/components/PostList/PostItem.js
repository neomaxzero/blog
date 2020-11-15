import React, { useState, useCallback } from 'react'
import Link from 'gatsby-link'
import {
  Item,
  Topic,
  Subtitle,
  Title,
  MainInfo,
  VerticalRow,
  Date,
} from './styled'
import { createPathWithLanguagePrefix } from '../Utils/createPathWithLanguagePrefix'

const PostItem = ({ title, subtitle, date, topic, lang, slug }) => {
  const [hovered, setHovered] = useState(false)

  const link = createPathWithLanguagePrefix(lang, slug)
  const activeHover = useCallback(() => setHovered(true), [])
  const inactivateHover = useCallback(() => setHovered(false), [])

  return (
    <Item>
      <Link
        to={link}
        onMouseOver={activeHover}
        onFocus={activeHover}
        onMouseOut={inactivateHover}
        onBlur={inactivateHover}
      >
        <VerticalRow>
          <MainInfo>
            <Title hovered={hovered}>{title}</Title>
          </MainInfo>
          <div>
            <Date hovered={hovered}>{date}</Date>
            <Subtitle hovered={hovered}>{subtitle}</Subtitle>
          </div>
        </VerticalRow>
      </Link>
      <Topic hovered={hovered}>{topic}</Topic>
      <div></div>
    </Item>
  )
}

export default PostItem
