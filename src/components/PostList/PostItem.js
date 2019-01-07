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

export default class PostItem extends React.Component {
  render() {
    return (
      <Item>
        <Link to={this.props.slug}>
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
