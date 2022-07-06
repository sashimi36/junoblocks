import { UseFloatingProps } from '@floating-ui/react-dom'

export function computeArrowStyles(
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
