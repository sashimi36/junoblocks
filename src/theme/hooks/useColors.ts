import { useRecoilValue } from 'recoil'

import { darkThemeColorPalette, lightThemeColorPalette } from '../colors'
import { ThemeTokens, themeAtom } from '../themeAtom'

export const useColors = () => {
  const { theme } = useRecoilValue(themeAtom)
  return theme === ThemeTokens.dark
    ? darkThemeColorPalette
    : lightThemeColorPalette
}
