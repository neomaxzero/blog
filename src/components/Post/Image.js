import React from 'react'
import styled from '@emotion/styled'

import Img from 'gatsby-image'
import mq from '../Utils/mq'

import { StaticQuery } from 'gatsby'

const ImgHeader = styled(Img)`
  max-height: ${({ maxHeight = 300 }) => maxHeight}px;

  ${mq.tablet} {
    border-radius: 0 10px;
  }
`

const ImageF = ({ imgFileName, maxHeight, ImgComponent = ImgHeader }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === imgFileName
      )
      if (!image) {
        return null
      }

      return (
        <ImgComponent
          fluid={image.node.fluid}
          maxHeight={maxHeight}
          alt="Header Image post"
        />
      )
    }}
  />
)

export default ImageF
