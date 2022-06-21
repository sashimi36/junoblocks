import { animated, useSpring } from '@react-spring/web'
import { Union } from 'icons'
import { Children, cloneElement, ReactElement, ReactNode } from 'react'
import { media, styled, useInvertedThemeClassName } from 'theme'

import { Button } from '../Button'
import { IconWrapper } from '../IconWrapper'
import { Text } from '../Text'

type ToastProps = {
  icon: ReactElement
  title: ReactNode
  body?: ReactNode
  buttons?: ReactNode
  onClose: () => void
}

export const Toast = ({ title, body, buttons, onClose, icon }: ToastProps) => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  const themeClassName = useInvertedThemeClassName()

  return (
    <StyledToast
      className={themeClassName}
      style={styles}
      containsBody={Boolean(body)}
    >
      {icon &&
        cloneElement(Children.only(icon), {
          size: 'large'
        })}
      <StyledBodyContent>
        <Text variant='primary'>{title}</Text>
        {body && (
          <Text
            variant='secondary'
            css={{ paddingTop: '$2', overflowWrap: 'break-word' }}
          >
            {body}
          </Text>
        )}
        {buttons && <StyledDivForButtons>{buttons}</StyledDivForButtons>}
      </StyledBodyContent>
      <StyledButtonForCloseButton
        variant='ghost'
        icon={<IconWrapper icon={<Union />} />}
        onClick={onClose}
      />
    </StyledToast>
  )
}

const StyledToast = styled(animated.div, {
  display: 'flex',
  position: 'relative',
  backgroundColor: '$colors$white',
  alignItems: 'center',
  boxShadow: '0px 4px 10px 0px $colors$dark15, 0 0 0 1px $colors$dark20',
  padding: '$9 $6',
  columnGap: '$space$10',
  borderRadius: '$1',
  width: '95%',
  maxWidth: '22rem',
  [media.sm]: {
    maxWidth: '100%'
  },
  variants: {
    containsBody: {
      true: {
        padding: '$9 $6 $11',
        alignItems: 'flex-start'
      }
    }
  }
})

const StyledBodyContent = styled('div', {
  paddingRight: 'calc(24px + $space$4)',
  width: '100%'
})

const StyledButtonForCloseButton = styled(Button, {
  position: 'absolute',
  right: '$space$4',
  top: '$space$4',
  '& svg': { color: '$iconColors$default' }
})

const StyledDivForButtons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  columnGap: '$space$2',
  paddingTop: '$5',
  [media.sm]: {
    justifyContent: 'center',
    paddingTop: '$6'
  }
})
