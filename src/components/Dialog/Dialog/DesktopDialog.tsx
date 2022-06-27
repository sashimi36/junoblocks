import gsap from 'gsap'
import { ReactNode, useEffect, useRef } from 'react'
import { styled, useThemeClassName } from 'theme'

import { Portal } from '../../Portal'
import { DialogContextProvider } from '../DialogContext'
import { useLockScroll } from './hooks/useLockScroll'
import { useDeferredDialogIsShowing } from './hooks/useDeferredDialogIsShowing'

export type DesktopDialogProps = {
  children?: ReactNode
  isShowing: boolean
  onRequestClose: () => void
}

export const DesktopDialog = ({
  children,
  isShowing,
  onRequestClose,
  ...props
}: DesktopDialogProps) => {
  const [isRenderingDialog, setIsRenderingDialog] = useDeferredDialogIsShowing({
    isShowing
  })

  const themeClassName = useThemeClassName()

  const modalRef = useRef<HTMLDivElement>()
  const overlayRef = useRef<HTMLDivElement>()

  /* animate the dialog */
  useEffect(() => {
    function updateDialogAlignment() {
      const getShouldCenterDialog = () =>
        modalRef.current.getBoundingClientRect().height <=
        window.innerHeight * 0.95

      gsap.set(modalRef.current, {
        alignSelf: getShouldCenterDialog() ? 'center' : 'flex-start'
      })
    }

    const shouldAnimateCloseOut = !isShowing && isRenderingDialog

    const tl = gsap.timeline({
      duration: 0.35,
      ease: 'power.easeOut'
    })

    if (shouldAnimateCloseOut) {
      tl.to(modalRef.current, { opacity: 0 }, 0)
      tl.to(
        overlayRef.current,
        {
          opacity: 0,
          onComplete() {
            // unmount the dialog
            setIsRenderingDialog(false)
          }
        },
        0
      )
    }

    if (isShowing && isRenderingDialog) {
      updateDialogAlignment()

      tl.to(overlayRef.current, { opacity: 0.75 }, 0)
      tl.to(modalRef.current, { opacity: 1 }, 0.1)

      window.addEventListener('resize', updateDialogAlignment)
      return () => {
        window.removeEventListener('resize', updateDialogAlignment)
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
          <StyledDivForScroller>
            <StyledDivForModal
              className={themeClassName}
              ref={modalRef}
              {...props}
            >
              {children}
            </StyledDivForModal>
            <StyledDivForOverlay
              className={themeClassName}
              role='presentation'
              onClick={onRequestClose}
              ref={overlayRef}
            />
          </StyledDivForScroller>
        </DialogContextProvider>
      )}
    </Portal>
  )
}

const StyledDivForScroller = styled('div', {
  padding: '$12',
  height: '100vh',
  width: '100%',
  overflowY: 'scroll',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  zIndex: 99,
  position: 'fixed',
  left: 0,
  top: 0
})

const StyledDivForModal = styled('div', {
  opacity: 0,
  width: '28rem',
  maxWidth: '95%',
  backgroundColor: '$backgroundColors$base',
  borderRadius: '$1',
  border: '1px solid $borderColors$default',
  position: 'relative',
  zIndex: '$2'
})

const StyledDivForOverlay = styled('div', {
  opacity: 0,
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  zIndex: '$1',
  left: 0,
  top: 0,
  backgroundColor: '$colors$light'
})
