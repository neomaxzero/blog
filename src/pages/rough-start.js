import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>002 - Rough start</h1>
    <p>
      Building a blog is easy? Maybe if you know nothing about programming you
      can even use a blogging platorm such as Wordpress, blogspot, etc. The
      chances are that you will pretty much be done in a couple of minutes with
      a much more than enough tool to accomplish your goal and start focusing on
      the content. The problem of being a *Software developer* is that we tend
      to overengineer most of the simple tasks we tackle just because we have
      the ability to. Sometimes more often that we think about.
    </p>
    <p>
      Now I'm being guilty of this same thought.I want to build a blog and
      instead of going for a straight forward solution, I decided to dive into
      the redicoulus task of reinventing the wheel, and also try a new
      technology while doing this. Let me start again, building a blog is easy,
      building a good, sublime, top notch quality content blog is *hard*. It is
      extremely hard.
    </p>
    <p>
      If focusing in the content was what we were talking about, let's also add
      the fact that I want to have control of the platform. Well, I think the
      subject got out of hands pretty easily.
    </p>
    <p>
      Currently I'm basically coding the content, this is shitty, unscalable and
      awful. I will investigate a little bit on how to pull content from
      markdown and try to build a little more of a scalable architecture (again,
      overengineering??). Will see.
    </p>
    <Link to="/first-post">previous post - 001</Link>
  </Layout>
)

export default IndexPage
