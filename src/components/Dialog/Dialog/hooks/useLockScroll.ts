import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import { useEffect } from 'react'

type UseBlockScrollArgs = {
  locked: boolean
}

export const useLockScroll = ({ locked }: UseBlockScrollArgs) => {
  /* lock the scroll */
  useEffect(() => {
    if (locked) {
      const rootNode =
        document.querySelector('#__next') ||
        document.querySelector('#root') ||
        document.querySelector('#app') ||
        document.querySelector('body').firstChild

      disableBodyScroll(rootNode)
      return () => enableBodyScroll(rootNode)
    }
  }, [locked])
}
