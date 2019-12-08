import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

import { InvertedMargin } from '../styled'

import ImageF from './Image'
import mq from '../Utils/mq'
import useViewport from '../Utils/hooks/useViewport'
import { H1 } from '../Utils/markdownParser/markdownElements'

const ImgContainer = styled.div`
  ${InvertedMargin}
  position: relative;
  margin-bottom: 3rem;
`
const Title = styled.h1`
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
  font-size: 2.9rem;
  font-weight: normal;
  margin-left: 2.9rem;
  margin-right: 2.9rem;
`

const ImgHeader = styled(Img)`
  max-height: 25px;

  ${mq.tablet} {
    border-radius: 0 10px;
    max-height: 400px;
  }
`
const PostHeader = ({ imgFileName, title }) => {
  const { isMobile } = useViewport()
  return (
    imgFileName && (
      <>
        <ImgContainer>
          <ImageF imgFileName={imgFileName} ImgComponent={ImgHeader} />
          {!isMobile && <Title>{title}</Title>}
        </ImgContainer>
        {isMobile && <H1>{title}</H1>}
      </>
    )
  )
}

export default PostHeader
