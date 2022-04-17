import { useDelayedAppearanceFlag } from 'hooks/useDelayedAppearanceFlag'
import React, { ComponentPropsWithoutRef } from 'react'

import { keyframes, styled, createColorVariants } from '../theme'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

const StyledSvgForSpinner = styled('svg', {
  animation: `${spin} 1s linear infinite, opacity 0.15s ease-out`,
  willChange: 'transform',
  margin: 'auto',
  background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0%',
  display: 'block',
  shapeRendering: 'auto',

  $$iconColor: 'white',
  color: '$$iconColor',

  variants: {
    color: createColorVariants('iconColors', (colorToken) => ({
      $$iconColor: `$iconColors$${colorToken}`
    })),

    visible: {
      true: {
        opacity: 1
      },
      false: {
        opacity: 0
      }
    }
  }
})

type SpinnerProps = ComponentPropsWithoutRef<typeof StyledSvgForSpinner> & {
  isLoading?: boolean
  size?: number
  instant?: boolean
}

export const Spinner = ({
  size = 24,
  instant = false,
  isLoading = true,
  ...props
}: SpinnerProps) => {
  const isVisible = useDelayedAppearanceFlag(isLoading)
  return (
    <StyledSvgForSpinner
      {...props}
      visible={instant || isVisible}
      width={size}
      height={size}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
    >
      <circle
        cx='50'
        cy='50'
        fill='none'
        stroke='currentColor'
        strokeWidth='5'
        r='23'
        strokeDasharray='108.38494654884786 38.12831551628262'
      >
        <animateTransform
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='1.0526315789473684s'
          values='0 50 50;360 50 50'
          keyTimes='0;1'
        />
      </circle>
    </StyledSvgForSpinner>
  )
}
