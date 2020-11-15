import React, { useEffect } from 'react'

const Comments = () => {
  useEffect(() => {
    const s = document.createElement('script')
    s.src = 'https://utteranc.es/client.js'
    s.setAttribute('repo', 'neomaxzero/blog-comments')
    s.setAttribute('issue-term', 'pathname')
    s.setAttribute('theme', 'github-light')
    s.crossOrigin = 'anonymous'
    s.async = true

    document.body.appendChild(s)

    return () => {
      document.body.removeChild(document.getElementsByClassName('utterances')[0])
    };
  }, [])
  return null;
}

export default Comments
