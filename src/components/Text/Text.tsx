import { styled } from '../../stitches.config'
import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react'

const StyledText = styled('p', {
  fontFamily: '$primary',
  margin: 0,
  padding: 0,

  variants: {
    variant: {
      hero: {
        fontSize: '$1',
        lineHeight: '$1',
        fontWeight: '$bold',
        color: '$text.primary'
      },
      header: {
        fontSize: '$2',
        lineHeight: '$2',
        fontWeight: '$semiBold',
        color: '$text.primary'
      },
      title: {
        fontSize: '$3',
        lineHeight: '$3',
        fontWeight: '$semiBold',
        color: '$text.primary'
      },
      primary: {
        fontSize: '$4',
        lineHeight: '$3',
        fontWeight: '$medium',
        color: '$text.body'
      },
      body: {
        fontSize: '$5',
        lineHeight: '$3',
        fontWeight: '$normal',
        color: '$text.body'
      },
      link: {
        fontSize: '$6',
        lineHeight: '$3',
        fontWeight: '$normal',
        color: '$text.body'
      },
      secondary: {
        fontSize: '$6',
        lineHeight: '$4',
        fontWeight: '$normal',
        color: '$text.secondary'
      },
      legend: {
        fontSize: '$7',
        lineHeight: '$4',
        fontWeight: '$normal',
        color: '$text.secondary'
      },
      caption: {
        fontSize: '$7',
        lineHeight: '$4',
        fontWeight: '$normal',
        color: '$text.tertiary'
      }
    }
  },

  defaultVariants: {
    variant: 'body'
  }
})

type TextProps = ComponentPropsWithRef<typeof StyledText> & {
  // @todo add color tokens
}

const TextComponent = (
  { children, ...props }: TextProps,
  ref?: ForwardedRef<any>
) => {
  return (
    <StyledText ref={ref} {...props}>
      {children}
    </StyledText>
  )
}

export const Text = forwardRef(TextComponent) as typeof TextComponent
