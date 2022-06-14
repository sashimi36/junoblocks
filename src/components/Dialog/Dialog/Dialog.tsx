import { DesktopDialog, DesktopDialogProps } from './DesktopDialog'
import { MobileDialog, MobileDialogProps } from './MobileDialog'

import { useMedia } from 'hooks'

export const Dialog = (props: DesktopDialogProps | MobileDialogProps) => {
  const isMobile = useMedia('sm')

  if (isMobile) {
    return <MobileDialog {...props} />
  }

  return <DesktopDialog {...props} />
}
