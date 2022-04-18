import { atom } from 'recoil'

import { localStorageEffect } from 'util'

export enum ThemeTokens {
  dark = 'dark',
  light = 'light'
}

export const themeAtom = atom<{ theme: ThemeTokens; touched: boolean }>({
  key: '@theme',
  default: {
    theme: ThemeTokens.light,
    touched: false
  },
  effects_UNSTABLE: [localStorageEffect('@theme')]
})
