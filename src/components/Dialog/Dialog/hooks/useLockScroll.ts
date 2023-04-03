import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import { RefObject, useEffect } from 'react'

type UseBlockScrollArgs = {
  locked: boolean
  scrollerRef?: RefObject<HTMLElement | Element>
}

export const useLockScroll = ({ locked, scrollerRef }: UseBlockScrollArgs) => {
  /* lock the scroll */
  useEffect(() => {
    if (locked) {
      const targetElement = scrollerRef
        ? scrollerRef.current
        : document.querySelector('#__next') ||
          document.querySelector('#root') ||
          document.querySelector('#app') ||
          document.querySelector('body').firstChild

      disableBodyScroll(targetElement)
      return () => enableBodyScroll(targetElement)
    }
  }, [locked, scrollerRef])
}
