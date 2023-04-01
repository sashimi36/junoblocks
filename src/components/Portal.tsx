import { ReactNode, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  /**
   * Regular React children.
   */
  children: ReactNode
  /**
   * The DOM element type to render.
   */
  type?: string
}

export function Portal({ children, type = 'junoblocks-portal' }: PortalProps) {
  const mountNode = useRef<HTMLDivElement | null>(null)
  const portalNode = useRef<HTMLElement | null>(null)

  const [isRenderingPortal, setIsRenderingPortal] = useState(false)

  useLayoutEffect(() => {
    // This ref may be null when a hot-loader replaces components on the page
    if (!mountNode.current) return
    // It's possible that the content of the portal has, itself, been portaled.
    // In that case, it's important to append to the correct document element.
    const ownerDocument = mountNode.current!.ownerDocument
    const body = ownerDocument.body
    portalNode.current = ownerDocument?.createElement(type)
    body.appendChild(portalNode.current)
    portalNode.current.style.display = 'block'
    setIsRenderingPortal(true)
    return () => {
      if (portalNode.current && body) {
        body.removeChild(portalNode.current)
      }
    }
  }, [type])

  return isRenderingPortal ? (
    createPortal(children, portalNode.current)
  ) : (
    <span ref={mountNode} />
  )
}
