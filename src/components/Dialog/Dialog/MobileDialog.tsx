import gsap from 'gsap'
import { ReactNode, useEffect, useRef } from 'react'
import { styled, useThemeClassName } from 'theme'

import { Portal } from '../../Portal'
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
    locked: isShowing,
    scrollerRef: modalRef
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
            <StyledDivForContent>{children}</StyledDivForContent>
          </StyledDivForModal>
        </DialogContextProvider>
      )}
    </Portal>
  )
}

const StyledDivForModal = styled('div', {
  opacity: 0,
  backgroundColor: '$backgroundColors$base',
  position: 'fixed',
  zIndex: '$4',
  left: 0,
  top: 0,
  width: '100%',
  height: '100vh',
  overflow: 'scroll',
  '-webkit-overflow-scrolling': 'touch',
  overscrollBehavior: 'contain'
})

const StyledDivForContent = styled('div', {
  minHeight: '100vh'
})
