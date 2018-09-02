import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const FirstPost = () => (
  <Layout>
    <h1>001</h1>
    <p>Everything has a start...</p>
    <p>
      This is my first blog post. The first "iteration". I constraint myself to
      build a blog in less than 2 hours, now It's 93 min and I need to publish
      this. Again, it looks awful I need to add an screenshot so we can
      perpetrate this and check how much itchange in the future. When I decided
      to do something most of the time, I decay in about 20 days, hopefully this
      is not hte case for this blog, Wish me luck.
    </p>
    <Link to="/page-2/">don't click</Link>
  </Layout>
)

export default FirstPost
