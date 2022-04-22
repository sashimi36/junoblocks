import {
  ForwardedRef,
  forwardRef,
  ReactNode,
  ComponentPropsWithoutRef
} from 'react'

import { styled, createColorVariants } from '../theme'

const StyledIcon = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fill: 'currentColor',

  $$iconColor: 'primary',
  color: '$$iconColor',

  variants: {
    color: createColorVariants('iconColors', (colorToken) => ({
      $$iconColor: `$iconColors$${colorToken}`
    })),

    size: {
      medium: {
        width: '1rem',
        height: '1rem',
        minWidth: '1rem',
        minHeight: '1rem'
      },
      large: {
        width: '1.5rem',
        height: '1.5rem',
        minWidth: '1.5rem',
        minHeight: '1.5rem'
      },
      big: {
        width: '2rem',
        height: '2rem',
        minWidth: '2rem',
        minHeight: '2rem'
      }
    },
    rotation: {
      '-90deg': {
        transform: 'rotateZ(-90deg)'
      },
      '90deg': {
        transform: 'rotateZ(90deg)'
      },
      '-45deg': {
        transform: 'rotateZ(-45deg)'
      },
      '45deg': {
        transform: 'rotateZ(45deg)'
      },
      '180deg': {
        transform: 'rotateZ(180deg)'
      }
    },
    visible: {
      true: {
        opacity: 1
      },
      false: {
        opacity: 0
      }
    }
  },
  defaultVariants: {
    size: 'large'
  }
})

export type IconWrapperProps = ComponentPropsWithoutRef<typeof StyledIcon> & {
  icon: ReactNode
}

const IconWrapperComponent = (
  { icon, ...props }: IconWrapperProps,
  ref: ForwardedRef<any>
) => {
  return (
    <StyledIcon {...props} ref={ref}>
      {icon}
    </StyledIcon>
  )
}

export const IconWrapper = forwardRef(IconWrapperComponent)
