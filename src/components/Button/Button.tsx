import { ForwardedRef, ReactNode, forwardRef } from 'react'
import type { VariantProps } from '@stitches/react'
import { styled } from '../../stitches.config'
import { GetRenderAsProps, RenderAsType } from '../../types'

const resetStyles = {
  border: 'none',
  '-webkit-font-smoothing': 'inherit',
  '-moz-osx-font-smoothing': 'inherit',
  '&:focus': {
    outline: 'none'
  },
  width: 'auto',
  textTransform: 'none',
  '-webkit-appearance': 'button',
  font: 'inherit',
  cursor: 'pointer',
  userSelect: 'none'
}

const StyledButton = styled('button', {
  ...resetStyles,

  borderRadius: '$round',
  fontFamily: '$primary',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'pre',

  fontSize: '$6',
  lineHeight: '$3',
  fontWeight: '$medium',
  color: '$textColors$body',

  transition: 'background 0.15s ease-out',

  variants: {
    icon: {
      left: {
        display: 'grid',
        gridTemplateAreas: '"a b"',
        columnGap: '2px'
      },
      right: {
        display: 'grid',
        columnGap: '2px',
        gridTemplateAreas: '"a b"'
      },
      both: {
        display: 'grid',
        columnGap: '2px',
        gridTemplateAreas: '"a b c"'
      }
    },
    size: {
      large: {
        padding: '11px 16px'
      },
      medium: {
        padding: '7px 16px'
      }
    },
    variant: {
      // @todo add the support for theming
      primary: {
        backgroundColor: '#25292b',
        color: '$white',
        '&:hover': {
          backgroundColor: '#06090B'
        },
        '&:active': {
          backgroundColor: 'rgba(25, 29, 32, 0.85)'
        },
        '&:focus.focus-visible': {
          boxShadow: '0 0 0 2px rgba(25, 29, 32, 0.4)'
        }
      },
      secondary: {
        backgroundColor: '#e8e9e9',
        color: '$textColors$primary',
        '&:hover': {
          backgroundColor: 'rgba(25, 29, 32, 0.2)'
        },
        '&:active': {
          backgroundColor: 'rgba(25, 29, 32, 0.05)'
        },
        '&:focus.focus-visible': {
          boxShadow: '0 0 0 2px rgba(25, 29, 32, 0.3)'
        }
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '#535658',
        '&:hover': {
          backgroundColor: 'rgba(25, 29, 32, 0.1)'
        },
        '&:active': {
          backgroundColor: 'rgba(25, 29, 32, 0.05)'
        },
        '&:focus.focus-visible': {
          boxShadow: '0 0 0 2px rgba(25, 29, 32, 0.3)'
        }
      }
    },
    disabled: {
      true: {
        pointerEvents: 'none',
        cursor: 'not-allowed'
      },
      false: {}
    }
  },

  compoundVariants: [
    {
      variant: 'primary',
      disabled: true,
      css: {
        backgroundColor: 'rgba(25, 29, 32, 0.3)',
        color: 'rgba(243, 246, 248, 0.7)'
      }
    },
    {
      variant: 'secondary',
      disabled: true,
      css: {
        backgroundColor: 'rgba(25, 29, 32, 0.05)',
        color: 'rgba(25, 29, 32, 0.3)'
      }
    },
    {
      variant: 'ghost',
      disabled: true,
      css: {
        color: 'rgba(25, 29, 32, 0.3)'
      }
    },
    {
      size: 'medium',
      icon: 'left',
      css: {
        paddingLeft: 6,
        paddingTop: 4,
        paddingBottom: 4
      }
    },
    {
      size: 'medium',
      icon: 'right',
      css: {
        paddingRight: 6,
        paddingTop: 4,
        paddingBottom: 4
      }
    },
    {
      size: 'medium',
      icon: 'both',
      css: {
        padding: '4px 6px'
      }
    },
    {
      size: 'large',
      icon: 'left',
      css: {
        paddingLeft: 6,
        paddingTop: 8,
        paddingBottom: 8
      }
    },
    {
      size: 'large',
      icon: 'right',
      css: {
        paddingRight: 6,
        paddingTop: 8,
        paddingBottom: 8
      }
    },
    {
      size: 'large',
      icon: 'both',
      css: {
        padding: '8px 6px'
      }
    }
  ],

  defaultVariants: {
    variant: 'primary',
    size: 'medium'
  }
})

type ButtonProps<T extends RenderAsType = 'button'> = GetRenderAsProps<T> &
  Omit<VariantProps<typeof StyledButton>, 'icon'> & {
    as?: T
    children?: ReactNode
    iconLeft?: ReactNode
    iconRight?: ReactNode
    // @todo icon;
  }

function ButtonComponent<T extends RenderAsType = 'button'>(
  { children, as, iconLeft, iconRight, ...props }: ButtonProps<T>,
  ref?: ForwardedRef<any>
) {
  const getIconVariant = () => {
    if (iconLeft && iconRight) return 'both'
    if (iconLeft) return 'left'
    if (iconRight) return 'right'
    return undefined
  }

  return (
    <StyledButton icon={getIconVariant()} ref={ref} {...props} as={as}>
      {iconLeft}
      {children}
      {iconRight}
    </StyledButton>
  )
}

export const Button = forwardRef(ButtonComponent) as typeof ButtonComponent
