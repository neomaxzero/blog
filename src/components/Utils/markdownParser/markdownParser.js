import React from 'react'
import rehypeReact from 'rehype-react'
import * as markdownElements from './markdownElements'

export default new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: markdownElements.H1,
    h2: markdownElements.H2,
    a: markdownElements.A,
    blockquote: markdownElements.Blockquote,
    ul: markdownElements.Ul,
    li: markdownElements.Li,
    img: markdownElements.Img,
  },
}).Compiler
