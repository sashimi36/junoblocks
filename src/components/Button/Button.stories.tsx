import React, { Children } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'
import { select, text } from '@storybook/addon-knobs'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
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
      </RowWrapper>
    </>
  )
}

export const Playground: ComponentStory<typeof Button> = () => {
  const variant = select(
    'variant',
    ['primary', 'secondary', 'ghost'],
    'primary'
  )
  const size = select('size', ['large', 'medium'], 'large')
  const label = text('text', 'Connect wallet')

  return (
    <Button variant={variant} size={size}>
      {label}
    </Button>
  )
}
