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
  background-color: black;
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
      I'm Maxi. Sometimes I have answers but you probably have some questions.
    </p>
    <ImageHover />
    <h2>What do I do?</h2>
    <ul>
      <li>- Frontend & Chill </li>
      <li>- Play games</li>
      <li>- Spend time with people I love </li>
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
        - Netflix &{' '}
        <A href="https://www.github.com/neomaxzero/" target="_blank">
          Code
        </A>
      </li>
    </ul>
    <h2>Where am I from?</h2>
    <p>
      From a place where <i>Mate</i> is "the thing", where <i>Cumbia</i> is our
      jam and where meat is our proudest plate: Argentina 🇦🇷.
    </p>
    <h2>What is this blog about?</h2>
    <p>
      I write mostly about <strong>frontend</strong>. I like writing reviews
      about books and I ocasionally spend some time open sourcing small
      libraries I think you might like.
    </p>
    <p>Everybody have opinions, I like sharing mines here.</p>
    <p>
      Writing somehow is relaxing and I want to keep it that way. I'm sorry, a
      little bit, about sometimes being off and hard to understand.
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
