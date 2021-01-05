import { useEffect, useState, createContext } from 'react'

export const ThemeEmotionContext = createContext({
  theme: '',
  toggle: () => {},
})

export const useDarkMode = () => {
  const currentTheme = window.localStorage.getItem('theme')
  const [theme, setTheme] = useState(currentTheme || 'light')
  const [componentMounted, setComponentMounted] = useState(false)

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localTheme
      ? setMode('dark')
      : localTheme
      ? setTheme(localTheme)
      : setMode('light')
    setComponentMounted(true)
  }, [])

  return [theme, toggleTheme, componentMounted]
}
