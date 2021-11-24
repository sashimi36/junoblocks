import 'focus-visible'
import React, { Children } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LinkIcon, ChevronDownIcon } from '../../icons/solid'
import { Button } from './Button'
import { Text } from '../Text'

import { boolean, select, text } from '@storybook/addon-knobs'
import { Icon } from '../Icon'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const RowWrapper = ({ children }) => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '8px 0' }}>
        {Children.map(children, (child) => (
          <div style={{ paddingRight: 8 }}>{child}</div>
        ))}
      </div>
    </div>
  )
}

const DisplayButtonVariant = ({ variantName, renderedButton }) => {
  return (
    <div>
      <Text css={{ padding: '10px 0' }} variant='title'>
        {variantName}
      </Text>
      <div style={{ paddingRight: 8, display: 'flex' }}>
        <div style={{ paddingRight: 8 }}>{renderedButton}</div>
        <div>{React.cloneElement(renderedButton, { disabled: true })}</div>
      </div>
    </div>
  )
}

export const Story: ComponentStory<typeof Button> = () => {
  const buttonLabel = 'Connect wallet'
  const sizes = ['large', 'medium'] as const

  const additionalProps = {} as any

  const iconLeftEnabled = boolean('Render icon on the left', true)
  const iconRightEnabled = boolean('Render icon on the right', false)

  if (iconLeftEnabled) {
    additionalProps.iconLeft = <Icon icon={LinkIcon} />
  }

  if (iconRightEnabled) {
    additionalProps.iconRight = <Icon icon={ChevronDownIcon} />
  }

  return (
    <>
      {sizes.map((size) => (
        <React.Fragment key={size}>
          <Text css={{ textTransform: 'capitalize', padding: '16px 0 4px' }} variant='hero'>
            {size}
          </Text>
          <RowWrapper>
            <DisplayButtonVariant
              variantName='Primary'
              renderedButton={
                <Button variant='primary' size={size} {...additionalProps}>
                  {buttonLabel}
                </Button>
              }
            />
            <DisplayButtonVariant
              variantName='Secondary'
              renderedButton={
                <Button variant='secondary' size={size} {...additionalProps}>
                  {buttonLabel}
                </Button>
              }
            />
            <DisplayButtonVariant
              variantName='Ghost'
              renderedButton={
                <Button variant='ghost' size={size} {...additionalProps}>
                  {buttonLabel}
                </Button>
              }
            />
          </RowWrapper>
        </React.Fragment>
      ))}
    </>
  )
}

export const Playground: ComponentStory<typeof Button> = () => {
  const variant = select('variant', ['primary', 'secondary', 'ghost'], 'primary')
  const size = select('size', ['large', 'medium'], 'large')
  const label = text('text', 'Connect wallet')
  const disabled = boolean('disabled', false)

  const iconLeftEnabled = boolean('Render icon on the left', true)
  const iconRightEnabled = boolean('Render icon on the right', false)

  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      iconLeft={iconLeftEnabled && <Icon icon={LinkIcon} />}
      iconRight={iconRightEnabled && <Icon icon={ChevronDownIcon} />}
    >
      {label}
    </Button>
  )
}
