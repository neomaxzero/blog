import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import { Link } from 'gatsby'
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

const ImageHover = () => {
  const [hovered, setHovered] = useState(false)

  const activeHover = useCallback(() => setHovered(true), [])
  const inactivateHover = useCallback(() => setHovered(false), [])

  return (
    <div onMouseOver={activeHover} onMouseOut={inactivateHover}>
      <ImageF
        imgFileName={hovered ? 'maxi-alt.jpg' : 'maxi.jpg'}
        ImgComponent={ImgAbout}
      />
    </div>
  )
}
const About = () => (
  <Layout>
    <h1>About</h1>
    I'm Maxi, a...
    <p>
      It's incredible hard for me to say things about myself. This part is about
      exposing yourself, it's about saying things to the world that you want
      them to know. This is a public declaration of, what I think I "am" at this
      specific moment of time.
    </p>
    <p>
      The question is, <strong>what really define you?</strong>
    </p>
    <h2>What do I do?</h2>
    <ul>
      <li>- Frontend & Chill </li>
      <li>- Play games</li>
      <li>- Spent time with the people I love </li>
      <li>
        -{' '}
        <A href="https://500px.com/neomaxzero" target="_blank">
          Photograpy
        </A>
      </li>
      <li>- Build products </li>
      <li>- Read books</li>
      <li>
        - Netflix &{' '}
        <A href="https://www.github.com/neomaxzero/" target="_blank">
          Code
        </A>
      </li>
    </ul>
    <h2>Where am I from?</h2>
    <p>
      From a place where Mate is "the thing", where Cumbia is what the folks
      hear and where meat is our proudest plate.
    </p>
    <h2>What is this blog about?</h2>
    <p>
      In this blog I write about <strong>frontend</strong> and some other topics
      around it. I like reviewing books and ocasionally spent some time open
      sourcing stuff I think you might like.
    </p>
    <p>
      Everybody have opinions, I like sometimes sharing those here. One thing
      you probably already noticed is that I'm not a great writer. I'm not an
      English native speaker so I try my best to avoid having a lot of grammar
      mistakes. I rather "deliver" something and rely a little bit on your end
      to help me interpret my articles than not publishing because It's not
      "ready" yet.
    </p>
    <p>
      Writing somehow is relaxing to me and I want to keep it that way. I'm
      sorry, but not that much, when something is a little bit off and hard to
      understand but ultimately I know small improvements will come if I publish
      more frequently.
    </p>
    <ImageHover />
    <h2>Contact me</h2>
    <p>
      I have a 100% reply ratio if you want to know more about me...You can send
      me a message in any of this mediums:
    </p>
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
