import { useEffect, useMemo } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { themeAtom, ThemeConfig } from '../themeAtom'

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

const getDarkTheme = (themes) =>
  themes.find((t) => t.name === 'dark') || themes[0]
const getLightTheme = (themes) =>
  themes.find((t) => t.name === 'light') || themes[0]

export const useControlTheme = () => {
  const [{ theme, touched }, setTheme] = useRecoilState(themeAtom)

  // Effects for system theme option
  useEffect(() => {
    function handleChangeTheme(event) {
      if (event.matches) {
        setTheme((prev) => ({
          ...prev,
          theme: getDarkTheme(prev.themes),
          touched: false
        }))
      } else {
        setTheme((prev) => ({
          ...prev,
          theme: getLightTheme(prev.themes),
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
          theme: getDarkTheme(prev.themes),
          touched: false
        }))
      }

      return () => {
        media.removeEventListener('change', handleChangeTheme)
      }
    }
  }, [touched, setTheme])

  return {
    theme,
    set: (value: ThemeConfig) => {
      setTheme((prev) => ({ ...prev, theme: value, touched: true }))
    },
    setDarkTheme(enabled: boolean) {
      setTheme((prev) => {
        const fallbackTheme =
          prev.theme !== getDarkTheme(prev.themes)
            ? prev.theme
            : getLightTheme(prev.themes)
        return {
          ...prev,
          theme: enabled ? getDarkTheme(prev.themes) : fallbackTheme,
          touched: true
        }
      })
    },
    setLightTheme(enabled: boolean) {
      setTheme((prev) => {
        const fallbackTheme =
          prev.theme !== getLightTheme(prev.themes)
            ? prev.theme
            : getDarkTheme(prev.themes)
        return {
          ...prev,
          theme: enabled ? getLightTheme(prev.themes) : fallbackTheme,
          touched: true
        }
      })
    },
    /* should be renamed to something like switchTheme */
    switchTheme(option: string) {
      if (option != 'auto')
        setTheme((state) => {
          const themeChoice = state.themes.find((t) => t.name == option)
          return {
            ...state,
            theme: themeChoice,
            touched: true
          }
        })
      else setTheme((state) => ({ ...state, touched: false }))
    },
    get themeOption(): string {
      return touched ? 'auto' : theme.name
    }
  }
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
