import { createTheme } from '@stitches/react'
import { atom } from 'recoil'

import { localStorageEffect } from '../util/localStorageEffect'
import { darkTheme, lightTheme } from './theme'
import { darkThemeColorPalette, lightThemeColorPalette } from './colors'

export type ThemeConfig = {
  name: string
  config: ReturnType<typeof createTheme>
  colorPalette: typeof darkThemeColorPalette
}

type ThemeAtomType = {
  theme: ThemeConfig
  themes: Array<ThemeConfig>
  touched: boolean
}

export const lightThemeConfig = {
  name: 'light',
  config: lightTheme,
  colorPalette: lightThemeColorPalette
}

export const darkThemeConfig = {
  name: 'dark',
  config: darkTheme,
  colorPalette: darkThemeColorPalette
}

export const defaultThemes = [lightThemeConfig, darkThemeConfig]

export const themeAtom = atom<ThemeAtomType>({
  key: '@theme',
  default: {
    theme: lightThemeConfig,
    themes: defaultThemes,
    touched: false
  },
  effects_UNSTABLE: [
    localStorageEffect<ThemeAtomType>('@theme', (state, defaultState) => {
      const theme = defaultState.themes.find(
        (t) => t.name === state?.theme?.name
      )

      if (theme) {
        return {
          ...defaultState,
          theme
        }
      }

      return defaultState
    })
  ]
})
