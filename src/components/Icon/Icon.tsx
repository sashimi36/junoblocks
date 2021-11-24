import { styled } from '../../stitches.config'
import { GetRenderAsProps, RenderAsType } from '../../types'
import { VariantProps } from '@stitches/react'

const StyledIcon = styled('svg', {
  display: 'inline-block',
  boxSizing: 'border-box',
  flexShrink: 0,

  variants: {
    size: {
      small: {
        width: 24,
        height: 24,
        minWidth: 24,
        maxWidth: 24,
        padding: 2
      },
      medium: {
        width: 32,
        height: 32,
        minWidth: 32,
        maxWidth: 32,
        padding: 4
      }
    }
  },
  defaultVariants: {
    size: 'small'
  }
})

type IconProps<T extends RenderAsType = 'svg'> = GetRenderAsProps<T> &
  VariantProps<typeof StyledIcon> &
  ({ as: T; icon?: never } | { as?: never; icon: T })

export function Icon<T extends RenderAsType = 'svg'>(props: IconProps<T>) {
  return <StyledIcon {...props} icon={undefined} as={(props as any).icon || (props as any).as} />
}
