import { ValidIcon } from 'icons'
import { ReactElement, useEffect, useState } from 'react'

import { Tooltip } from './Tooltip'

type CopyTextTooltipProps = {
  label: string
  ariaLabel: string
  successLabel: string
  value: string
  children: (bind: {
    onClick: () => void
    onMouseLeave: () => void
    copied: boolean
  }) => ReactElement
  successStateShowingTimeMs?: number
}

export const CopyTextTooltip = ({
  label,
  ariaLabel,
  successLabel,
  value,
  children,
  successStateShowingTimeMs = 1500
}: CopyTextTooltipProps) => {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(value)
    setCopied(true)
  }

  function handleDismiss() {
    setTimeout(() => {
      setCopied(false)
    }, 1200)
  }

  useDismissCopiedState({
    copied,
    setCopied,
    timeoutMs: successStateShowingTimeMs
  })

  return (
    <Tooltip
      label={copied ? successLabel : label}
      icon={copied ? <ValidIcon color='valid' /> : undefined}
      aria-label={ariaLabel}
    >
      {children({ onClick: handleCopy, onMouseLeave: handleDismiss, copied })}
    </Tooltip>
  )
}

const useDismissCopiedState = ({ copied, setCopied, timeoutMs }) => {
  useEffect(() => {
    if (copied) {
      let timeout = setTimeout(() => {
        setCopied(false)
      }, timeoutMs)

      return () => clearTimeout(timeout)
    }
  }, [copied, setCopied, timeoutMs])
}
