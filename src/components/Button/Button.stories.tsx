import React, { Children } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ArrowUpIcon, InfoIcon } from '../../icons'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'ghost', 'branded', 'menu'],
      control: { type: 'select' }
    },
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' }
    },
    iconLeft: {
      control: { type: 'boolean' }
    },
    iconRight: {
      control: { type: 'boolean' }
    }
  }
} as ComponentMeta<typeof Button>

const RowWrapper = ({ children }) => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
        {Children.map(children, (child) => (
          <div style={{ paddingRight: 10 }}>{child}</div>
        ))}
      </div>
    </div>
  )
}

export const Story: ComponentStory<typeof Button> = () => {
  const buttonLabel = 'Connect wallet'
  return (
    <>
      <RowWrapper>
        <Button variant='primary' size='large'>
          {buttonLabel}
        </Button>
        <Button variant='secondary' size='large'>
          {buttonLabel}
        </Button>
        <Button variant='ghost' size='large'>
          {buttonLabel}
        </Button>
        <Button variant='menu' size='large'>
          {buttonLabel}
        </Button>
      </RowWrapper>
      <RowWrapper>
        <Button variant='primary' size='medium'>
          {buttonLabel}
        </Button>
        <Button variant='secondary' size='medium'>
          {buttonLabel}
        </Button>
        <Button variant='ghost' size='medium'>
          {buttonLabel}
        </Button>
        <Button variant='menu' size='medium'>
          {buttonLabel}
        </Button>
      </RowWrapper>
    </>
  )
}

export const Playground = ({ variant, size, label, iconLeft, iconRight }) => {
  return (
    <Button
      variant={variant}
      size={size}
      iconLeft={iconLeft && <ArrowUpIcon rotation='-90deg' />}
      iconRight={iconRight && <InfoIcon />}
    >
      {label}
    </Button>
  )
}

Playground.bind({})
Playground.args = {
  iconLeft: true,
  iconRight: false,
  label: 'Connect wallet',
  variant: 'primary',
  size: 'large'
}
