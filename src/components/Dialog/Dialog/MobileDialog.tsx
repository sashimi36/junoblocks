import gsap from 'gsap'
import Portal from '@reach/portal'
import { ReactNode, useEffect, useRef } from 'react'
import { styled, useThemeClassName } from 'theme'

import { DialogContextProvider } from '../DialogContext'
import { useLockScroll } from './hooks/useLockScroll'
import { useDeferredDialogIsShowing } from './hooks/useDeferredDialogIsShowing'

export type MobileDialogProps = {
  children?: ReactNode
  isShowing: boolean
  onRequestClose: () => void
}

export const MobileDialog = ({
  children,
  isShowing,
  onRequestClose,
  ...props
}: MobileDialogProps) => {
  const [isRenderingDialog, setIsRenderingDialog] = useDeferredDialogIsShowing({
    isShowing
  })

  const themeClassName = useThemeClassName()

  const modalRef = useRef<HTMLDivElement>()

  /* animate the dialog */
  useEffect(() => {
    if (isRenderingDialog) {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.25,
          ease: 'power.easeOut'
        }
      })

      const initialOffsetY = Math.ceil(window.innerHeight / 3)

      if (isShowing) {
        tl.fromTo(
          modalRef.current,
          {
            y: initialOffsetY,
            opacity: 0
          },
          { y: 0, opacity: 1 },
          0.1
        )
      } else {
        tl.to(
          modalRef.current,
          {
            y: initialOffsetY,
            opacity: 0,
            onComplete() {
              setIsRenderingDialog(false)
            }
          },
          0.1
        )
      }
    }
  }, [isRenderingDialog, isShowing])

  useLockScroll({
    locked: isShowing
  })

  return (
    <Portal>
      {(isShowing || isRenderingDialog) && (
        <DialogContextProvider
          onRequestClose={onRequestClose}
          isShowing={isShowing}
        >
          <StyledDivForModal
            className={themeClassName}
            ref={modalRef}
            {...props}
          >
            <StyledDivForScrollArea>{children}</StyledDivForScrollArea>
          </StyledDivForModal>
        </DialogContextProvider>
      )}
    </Portal>
  )
}

const StyledDivForModal = styled('div', {
  backgroundColor: '$backgroundColors$base',
  zIndex: '$2',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  position: 'fixed',
  overflowY: 'auto',
  left: 0,
  top: 0,
  opacity: 0
})

const StyledDivForScrollArea = styled('div', {})
