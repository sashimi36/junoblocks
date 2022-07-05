import { animated, useTransition } from '@react-spring/web'
import {
  cloneElement,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { mergeRefs } from 'react-merge-refs'
import {
  useFloating,
  arrow,
  offset,
  UseFloatingProps
} from '@floating-ui/react-dom'

import { styled, useInvertedThemeClassName } from '../../theme'
import { Text } from '../Text'
import { Portal } from '../Portal'
import { Inline } from '../Inline'

type TooltipProps = {
  /* reference element. has to be able to receive `ref` */
  children: ReactElement
  /* label to be rendered */
  label?: string | ReactNode
  /* body of the tooltip */
  body?: string | ReactNode
  /* instance of <IconWrapper> or <Icon> */
  icon?: ReactElement
  /*
   * relative position to the reference element
   * note: left or right placement position will not render arrows
   * as it is currently not supported.
   * */
  placement?: UseFloatingProps['placement']
}

export function Tooltip({
  children,
  label,
  placement = 'bottom',
  body,
  icon
}: TooltipProps) {
  const [referenceElement, setReferenceElement] = useState(null)
  const arrowRef = useRef()
  const {
    x,
    y,
    reference,
    floating,
    strategy,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} }
  } = useFloating({
    middleware: [offset(6), arrow({ element: arrowRef })],
    placement
  })

  const referenceMergedRefs = useMemo(
    () => mergeRefs([setReferenceElement, reference]),
    [reference]
  )

  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    const show = () => setIsShowing(true)
    const hide = () => setIsShowing(false)

    const listOfEventHandlers = [
      ['mouseenter', show],
      ['focus', show],
      ['mouseleave', hide],
      ['blur', hide]
    ]

    if (referenceElement) {
      listOfEventHandlers.forEach(([eventName, handler]) => {
        referenceElement.addEventListener(eventName, handler)
      })
      return () => {
        listOfEventHandlers.forEach(([eventName, handler]) => {
          referenceElement.removeEventListener(eventName, handler)
        })
      }
    }
  }, [referenceElement])

  const transitions = useTransition(isShowing, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  const invertedThemeClassName = useInvertedThemeClassName()

  const tooltipContent = (
    <div data-tooltip-content=''>
      <Text
        as='div'
        variant='caption'
        color='black'
        css={icon && body ? { paddingTop: '$1' } : undefined}
      >
        {label}
      </Text>
      {body && (
        <Text
          as='div'
          variant='caption'
          color='tertiary'
          css={icon ? { paddingBottom: '$1' } : undefined}
        >
          {body}
        </Text>
      )}
    </div>
  )

  return (
    <>
      {cloneElement(children, { ref: referenceMergedRefs })}
      <Portal>
        {transitions(
          ({ opacity }, item) =>
            item && (
              <div className={invertedThemeClassName}>
                <StyledTooltip
                  ref={floating}
                  includesIcon={Boolean(icon)}
                  style={{
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                    opacity
                  }}
                >
                  {icon ? (
                    <Inline gap={3} align={body ? 'flex-start' : 'center'}>
                      {cloneElement(icon, {
                        size: 'large',
                        color: icon?.props?.color ?? 'primary'
                      })}
                      {tooltipContent}
                    </Inline>
                  ) : (
                    tooltipContent
                  )}

                  <StyledWrapperForTooltip
                    ref={arrowRef}
                    style={computeArrowStyles(placement, {
                      x: arrowX,
                      y: arrowY
                    })}
                  >
                    <StyledArrowForTooltip />
                  </StyledWrapperForTooltip>
                </StyledTooltip>
              </div>
            )
        )}
      </Portal>
    </>
  )
}

const StyledArrowForTooltip = styled('div', {
  width: '$space$10',
  height: '$space$5',
  backgroundColor: '$backgroundColors$tooltip',
  clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
  border: '1px solid $borderColors$inactive'
})

const StyledWrapperForTooltip = styled('div', {
  clipPath: 'inset(0% 0% 50% 0%)',
  position: 'absolute',
  zIndex: '$1'
})

const StyledTooltip = styled(animated.div, {
  position: 'absolute',
  backgroundColor: '$backgroundColors$tooltip',
  boxShadow:
    '0px 2px 4px rgba(0, 0, 0, 0.16), 0px 4px 8px rgba(0, 0, 0, 0.12), 0px 1px 12px rgba(6, 9, 11, 0.08)',
  border: '1px solid $borderColors$inactive',
  borderRadius: '$1',
  zIndex: 999,
  maxWidth: 'min(90vw, 253px)',
  variants: {
    includesIcon: {
      true: {
        padding: '$2 $6 $2 $3'
      },
      false: {
        padding: '$4 $6'
      }
    }
  },
  ['& [data-tooltip-content]']: {
    position: 'relative',
    zIndex: '$2'
  }
})

function computeArrowStyles(
  placement: UseFloatingProps['placement'] = 'bottom',
  { x, y: _ }
) {
  /* not providing the support for arrow rendered on the side of the tooltip just yet */
  if (placement.includes('right') || placement.includes('left')) {
    return {
      display: 'none'
    }
  } else if (placement.includes('top')) {
    return {
      transform: 'translateY(50%) rotateZ(180deg)',
      bottom: 0,
      left: x ?? 0
    }
  } else if (placement.includes('bottom')) {
    return {
      transform: 'translateY(-50%)',
      top: 0,
      left: x ?? 0
    }
  }
  return {
    display: 'none'
  }
}
