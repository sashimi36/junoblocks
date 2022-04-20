import { useEffect, useMemo } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import {
  themeAtom,
  ThemeConfig,
  darkThemeConfig,
  lightThemeConfig
} from '../themeAtom'

export const useTheme = () => {
  const { theme } = useRecoilValue(themeAtom)
  return theme
}

export const useExtendThemesConfig = (themes: Array<ThemeConfig>) => {
  const [, setTheme] = useRecoilState(themeAtom)

  useEffect(() => {
    setTheme((state) => ({
      ...state,
      themes
    }))
  }, []) // eslint-disable-line
}

export const useSetDefaultThemeConfig = (theme: ThemeConfig) => {
  const [, setTheme] = useRecoilState(themeAtom)

  useEffect(() => {
    setTheme((state) => {
      return state.touched ? state : { ...state, theme }
    })
  }, []) // eslint-disable-line deps
}

export const useControlTheme = () => {
  const [{ theme }, setTheme] = useRecoilState(themeAtom)

  return {
    theme,
    set: (value: ThemeConfig) => {
      setTheme((prev) => ({ ...prev, theme: value, touched: true }))
    },
    setDarkTheme(enabled: boolean) {
      setTheme((prev) => {
        const fallbackTheme =
          prev.theme !== darkThemeConfig ? prev.theme : lightThemeConfig
        return {
          ...prev,
          theme: enabled ? darkThemeConfig : fallbackTheme,
          touched: true
        }
      })
    },
    setLightTheme(enabled: boolean) {
      setTheme((prev) => {
        const fallbackTheme =
          prev.theme !== lightThemeConfig ? prev.theme : darkThemeConfig
        return {
          ...prev,
          theme: enabled ? lightThemeConfig : fallbackTheme,
          touched: true
        }
      })
    },
    /* should be renamed to something like switchTheme */
    toggle() {
      setTheme((state) => {
        const currentTheme = state.theme
        const currentThemeIndex = state.themes.findIndex(
          (t) => t === currentTheme
        )

        const nextThemeIndex = (currentThemeIndex + 1) % state.themes.length

        return {
          ...state,
          theme: state.themes[nextThemeIndex] || state.themes[0],
          touched: true
        }
      })
    }
  }
}

export const useSubscribeDefaultAppTheme = () => {
  const [{ touched }, setTheme] = useRecoilState(themeAtom)

  useEffect(() => {
    function handleChangeTheme(event) {
      if (event.matches) {
        setTheme((prev) => ({
          ...prev,
          theme: darkThemeConfig,
          touched: false
        }))
      } else {
        setTheme((prev) => ({
          ...prev,
          theme: lightThemeConfig,
          touched: false
        }))
      }
    }

    if (!touched) {
      const media = window.matchMedia('(prefers-color-scheme: dark)')
      media.addEventListener('change', handleChangeTheme)

      if (media.matches) {
        setTheme((prev) => ({
          ...prev,
          theme: darkThemeConfig,
          touched: false
        }))
      }

      return () => {
        media.removeEventListener('change', handleChangeTheme)
      }
    }
  }, [touched, setTheme])
}

export const useThemeClassName = () => {
  const { theme } = useRecoilValue(themeAtom)

  return theme?.config?.className
}

export const useInvertedThemeClassName = () => {
  const { theme, themes } = useRecoilValue(themeAtom)

  const { light, dark } = useMemo(() => {
    if (!themes?.length) return {}
    if (themes.length === 1) {
      return {
        light: themes[0],
        dark: themes[0]
      }
    }
    return {
      light: themes.find((t) => t.name === 'light'),
      dark: themes.find((t) => t.name === 'dark')
    }
  }, [themes])

  return theme === light ? dark?.config?.className : light?.config?.className
}
