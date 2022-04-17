import { atom } from 'recoil'

import { localStorageEffect } from '../util/localStorageEffect'

export enum AppTheme {
  dark = 'dark',
  light = 'light',
}

export const themeAtom = atom<{ theme: AppTheme; touched: boolean }>({
  key: '@theme',
  default: {
    theme: AppTheme.light,
    touched: false,
  },
  effects_UNSTABLE: [localStorageEffect('@theme')],
})
