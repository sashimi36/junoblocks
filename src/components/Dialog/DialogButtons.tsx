import { ReactNode } from 'react'

import { styled } from '../../theme'
import { DialogContent } from './DialogContent'
import { useMedia } from '../../hooks'

type DialogButtonsProps = {
  alignment?: 'flex-end' | 'center' | 'flex-start'
  children?: ReactNode
  cancellationButton?: ReactNode
  confirmationButton?: ReactNode
}

export const DialogButtons = ({
  alignment,
  children,
  cancellationButton,
  confirmationButton
}: DialogButtonsProps) => {
  const isMobile = useMedia('sm')
  return (
    <DialogContent>
      <StyledDivForFooter
        direction={isMobile ? 'column' : 'row'}
        css={alignment ? { justifyContent: alignment } : undefined}
      >
        {isMobile ? (
          <>
            {confirmationButton}
            {cancellationButton}
          </>
        ) : (
          <>
            {cancellationButton}
            {confirmationButton}
          </>
        )}
        {children}
      </StyledDivForFooter>
    </DialogContent>
  )
}

const StyledDivForFooter = styled('div', {
  padding: '$8 0',
  variants: {
    direction: {
      column: {
        display: 'grid',
        rowGap: '$4',
        gridTemplateColumns: '1fr'
      },
      row: {
        display: 'flex',
        justifyContent: 'flex-end',
        columnGap: '$space$6'
      }
    }
  }
})
