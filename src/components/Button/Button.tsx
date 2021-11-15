import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react'
import { styled } from '../../stitches.config'

const resetStyles = {
  border: 'none',
  '-webkit-font-smoothing': 'inherit',
  '-moz-osx-font-smoothing': 'inherit',
  '&:focus:not(&:focus-visible)': {
    outline: 'none'
  },
  '&:focus:not(&:moz-focusing)': {
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
  fontWeight: '$medium',
  lineHeight: '$medium',

  variants: {
    size: {
      large: {
        padding: '9px 16px 10px 16px'
      },
      medium: {
        padding: '5px 16px 6px 16px'
      }
    },
    variant: {
      // @todo add the support for theming
      primary: {
        backgroundColor: '#25292b',
        color: '$white'
      },
      secondary: {
        backgroundColor: '#e8e9e9',
        color: '$text.primary'
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '#535658'
      }
    }
  }
})

type ButtonProps = ComponentPropsWithRef<typeof StyledButton> & {
  // @todo iconLeft;
  // @todo iconRight;
  // @todo icon;
}

const ButtonComponent = (
  { children, ...props }: ButtonProps,
  ref?: ForwardedRef<any>
) => {
  return (
    <StyledButton ref={ref} {...props}>
      {children}
    </StyledButton>
  )
}

export const Button = forwardRef(ButtonComponent) as typeof ButtonComponent
