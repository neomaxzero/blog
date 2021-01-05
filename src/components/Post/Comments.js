import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ThemeEmotionContext } from '../shared/hooks/useDarkMode'

const Comments = () => {
  const { theme } = useContext(ThemeEmotionContext)
  useEffect(() => {
    const s = document.createElement('script')
    s.src = 'https://utteranc.es/client.js'
    s.setAttribute('repo', 'neomaxzero/blog-comments')
    s.setAttribute('issue-term', 'pathname')
    s.setAttribute('theme', theme === 'light' ? 'github-light' : 'dark-blue')
    s.crossOrigin = 'anonymous'
    s.async = true

    document.body.appendChild(s)

    return () => {
      document.body.removeChild(
        document.getElementsByClassName('utterances')[0]
      )
    }
  }, [])
  return null
}

export default Comments
