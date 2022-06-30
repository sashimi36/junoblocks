import { animated, useTransition } from '@react-spring/web'
import {
  cloneElement,
  ReactElement,
  ReactNode,
  useEffect,
  useState
} from 'react'
import { usePopper } from 'react-popper'

import { styled } from '../../theme'
import { Text } from '../Text'
import { Portal } from '../Portal'
import { Options } from '@popperjs/core'

type TooltipProps = {
  children: ReactElement
  label: string | ReactNode
  placement: Options['placement']
}

export function Tooltip({ children, label, ...options }: TooltipProps) {
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const { styles, attributes } = usePopper(
    referenceElement,
    popperElement,
    options
  )

  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    const show = () => setIsShowing(true)
    const hide = () => setIsShowing(false)

    if (referenceElement) {
      referenceElement.addEventListener('mouseenter', show)
      referenceElement.addEventListener('mouseleave', hide)
      return () => {
        referenceElement.removeEventListener('mouseenter', show)
        referenceElement.removeEventListener('mouseleave', hide)
      }
    }
  }, [referenceElement])

  const transitions = useTransition(isShowing, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return (
    <>
      {cloneElement(children, { ref: setReferenceElement })}
      <Portal>
        {transitions(
          ({ opacity }, item) =>
            item && (
              <StyledTooltip
                ref={setPopperElement}
                style={{
                  ...styles.popper,
                  opacity
                }}
                {...attributes.popper}
              >
                <Text as='div' variant='caption' color='white'>
                  {label}
                </Text>
              </StyledTooltip>
            )
        )}
      </Portal>
    </>
  )
}

const StyledTooltip = styled(animated.div, {
  position: 'absolute',
  backgroundColor: '$backgroundColors$tooltip',
  boxShadow: '0px 4px 10px 0px $colors$dark15, 0 0 0 1px $colors$dark20',
  padding: '$4 $6',
  borderRadius: '$1',
  zIndex: 999
})
