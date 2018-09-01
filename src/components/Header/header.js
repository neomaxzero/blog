import React from 'react'
import { Link } from 'gatsby'
import ScHeader from './styled'

const Header = ({ siteTitle }) => (
  <ScHeader>
    <h1>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </ScHeader>
)

export default Header
