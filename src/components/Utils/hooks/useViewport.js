import { useState, useEffect } from 'react'
import debounce from 'lodash/debounce'
import { breakpoints } from '../mq'

const getViewportSemaphore = () => {
  let isMobile = false,
    isTablet = false,
    isDesktop = false,
    isFullHD = false

  if (typeof window === `undefined`) {
    return { isTablet, isMobile, isDesktop, isFullHD }
  }

  const width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  )

  console.log(width)

  if (width < breakpoints.tablet) {
    isMobile = true
  } else if (width < breakpoints.desktop) {
    isTablet = true
  } else if (width < breakpoints.fullhd) {
    isDesktop = true
  } else {
    isFullHD = true
  }

  return { isTablet, isMobile, isDesktop, isFullHD }
}
const useViewport = () => {
  const [currentViewport, setCurrentViewport] = useState(getViewportSemaphore())

  useEffect(() => {
    const viewPortChangeListener = window.addEventListener(
      'resize',
      debounce(() => {
        setCurrentViewport(getViewportSemaphore())
      }),
      200
    )

    return () => window.removeEventListener('resize', viewPortChangeListener)
  }, [])

  return currentViewport
}

export default useViewport
