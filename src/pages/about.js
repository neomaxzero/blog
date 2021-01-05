import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import A from '../components/shared/A'
import ImageF from '../components/Post/Image'
import { useState, useCallback } from 'react'
import mq from '../components/Utils/mq'

const ImgAbout = styled(Img)`
  margin: 0 auto;
  width: 70%;
  margin-bottom: 3rem;

  ${mq.tablet} {
    width: 35%;
  }
`

const ImageWrapper = styled('div')`
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
`
const ImageHover = () => {
  const [hovered, setHovered] = useState(false)

  const activeHover = useCallback(() => setHovered(true), [])
  const inactivateHover = useCallback(() => setHovered(false), [])

  return (
    <ImageWrapper
      onMouseOver={activeHover}
      onFocus={activeHover}
      onMouseOut={inactivateHover}
      onBlur={inactivateHover}
      role="image"
    >
      <ImageF
        imgFileName={hovered ? 'maxi-alt.jpg' : 'maxi.jpg'}
        ImgComponent={ImgAbout}
      />
    </ImageWrapper>
  )
}
const About = () => (
  <Layout>
    <h1>About</h1>
    <p>
      I'm Maxi. A friend, writer, reader. In that order. I spend the majority of
      my day thinking about frontend and a little bit of it actually
      frontending. I'm from Argentina and currently living in the Netherlands.
    </p>
    <ImageHover />
    <h2>What do I do?</h2>
    <ul>
      <li>- Spend time with people I love </li>
      <li>- Frontend & Chill </li>
      <li>- Video-games</li>
      <li>
        -{' '}
        <A href="https://500px.com/neomaxzero" target="_blank">
          Photograpy
        </A>
      </li>
      <li>- Read books</li>
      <li>
        - Building an IT community for readers:
        <A href="https://pugmark.io/?ref=blog-maxi" target="_blank">
          {' pugmark'}
        </A>
      </li>{' '}
      <li>
        <A href="https://www.github.com/neomaxzero/" target="_blank">
          - Open source
        </A>
      </li>
    </ul>
    <h2>What is this blog about?</h2>
    <p>
      I write mostly about <strong>frontend</strong>. Sometimes you will also
      encounter some reviews about books and I ocasionally spend some time open
      sourcing small libraries I think you might like.
    </p>
    <p>
      I like reflecting on things while writing. I feel sharing It's a risk I'm
      willing to take. It is thrilling and at the same time rewarding to put
      things live when you always feel like it's not good enough. I hope that
      while refining my thoughts, we can help each other become a better version
      of ourselves.
    </p>
    <p>
      Writing is relaxing when you decide not to pay too much attention to
      details that could prevent you from sharing some content. I'm sorry, a
      little bit, about sometimes being off and hard to understand. I would love
      you to message me if you feel like it.
    </p>
    <h2>What if I have more questions?</h2>
    <p>I have a 100% reply ratio if you want to know more.</p>
    <ul>
      <li>
        <A href="https://www.linkedin.com/in/neomaxzero/" target="_blank">
          Linkedin
        </A>
      </li>
      <li>
        <A href="https://www.github.com/neomaxzero/" target="_blank">
          github
        </A>
      </li>
      <li>
        <A href="mailto:maxicespedes7@hotmail.com" target="_blank">
          maxicespedes7@hotmail.com
        </A>
      </li>
    </ul>
  </Layout>
)

export default About
