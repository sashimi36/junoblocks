import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { darkTheme, lightTheme } from '../theme'
import { ThemeTokens, themeAtom } from '../themeAtom'

export const useTheme = () => {
  const { theme } = useRecoilValue(themeAtom)
  return theme === ThemeTokens.dark ? darkTheme : lightTheme
}

export const useInvertedThemeClassName = () => {
  const theme = useTheme()
  return theme === lightTheme ? darkTheme.className : lightTheme.className
}

export const useControlTheme = () => {
  const [{ theme }, setTheme] = useRecoilState(themeAtom)

  return {
    theme,
    set: (value: ThemeTokens) => {
      setTheme({
        theme: value,
        touched: true
      })
    },
    setDarkTheme(enabled: boolean) {
      setTheme({
        theme: enabled ? ThemeTokens.dark : ThemeTokens.light,
        touched: true
      })
    },
    setLightTheme(enabled: boolean) {
      setTheme({
        theme: enabled ? ThemeTokens.light : ThemeTokens.dark,
        touched: true
      })
    },
    toggle() {
      setTheme({
        theme:
          theme === ThemeTokens.dark ? ThemeTokens.light : ThemeTokens.dark,
        touched: true
      })
    }
  }
}

export const useSubscribeDefaultAppTheme = () => {
  const [{ touched }, setTheme] = useRecoilState(themeAtom)

  useEffect(() => {
    function handleChangeTheme(event) {
      if (event.matches) {
        setTheme({ theme: ThemeTokens.dark, touched: false })
      } else {
        setTheme({ theme: ThemeTokens.light, touched: false })
      }
    }

    if (!touched) {
      const media = window.matchMedia('(prefers-color-scheme: dark)')
      media.addEventListener('change', handleChangeTheme)

      if (media.matches) {
        setTheme({ theme: ThemeTokens.dark, touched: false })
      }

      return () => {
        media.removeEventListener('change', handleChangeTheme)
      }
    }
  }, [touched, setTheme])
}

export const useThemeClassName = () => {
  const { theme } = useRecoilValue(themeAtom)

  if (theme === ThemeTokens.dark) {
    return darkTheme.className
  }

  return lightTheme.className
}
