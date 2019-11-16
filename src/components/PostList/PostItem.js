import React from 'react'
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
import createPathWithLanguagePrefix from '../Utils/createPathWithLanguagePrefix'

export default class PostItem extends React.Component {
  link = createPathWithLanguagePrefix(this.props.lang, this.props.slug)
  render() {
    return (
      <Item>
        <Link to={this.link}>
          <VerticalRow>
            <MainInfo>
              <Title>{this.props.title}</Title>
              <Subtitle>{this.props.subtitle}</Subtitle>
            </MainInfo>
            <Date>{this.props.date}</Date>
          </VerticalRow>
        </Link>
        <Topic>{this.props.topic}</Topic>
      </Item>
    )
  }
}
