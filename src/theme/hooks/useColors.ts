import { useRecoilValue } from 'recoil'

import { themeAtom } from '../themeAtom'
import { usePersistance } from '../../hooks'

export const useColors = () => {
  const { theme } = useRecoilValue(themeAtom)
  return usePersistance(theme?.colorPalette)
}
