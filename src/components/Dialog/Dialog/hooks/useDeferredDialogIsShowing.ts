import { useEffect, useState } from 'react'

export const useDeferredDialogIsShowing = ({ isShowing }) => {
  const [isRenderingDialog, setIsRenderingDialog] = useState(false)

  // render the dialog
  useEffect(() => {
    if (isShowing) {
      setIsRenderingDialog(true)
    }
  }, [isShowing])

  return [isRenderingDialog, setIsRenderingDialog] as const
}
