import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>I told you</h1>
    <p>There is nothing to see here</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
