import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Column } from '../../Column'
import { Spinner, SpinnerProps } from '../Spinner'
import { Text } from '../../Text'

export default {
  title: 'Components / Spinner',
  component: Spinner,
  decorators: [
    (Story) => (
      <div style={{ margin: '0px 108px' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Spinner>

export const Overview = () => (
  <Column gap={8}>
    <Text kind='studio' variant='title'>
      Overview
    </Text>
    <Text variant='header'>Primary</Text>
    <Spinner color='primary' css={{ margin: '0 0 $8' }} instant size={32} />
    <Text variant='header'>Secondary</Text>
    <Spinner color='secondary' css={{ margin: '0 0 $8' }} instant size={32} />
    <Text variant='header'>Tertiary</Text>
    <Spinner color='tertiary' css={{ margin: '0 0 $8' }} instant size={32} />
    <Text variant='header'>Brand</Text>
    <Spinner color='brand' css={{ margin: '0 0 $8' }} instant size={32} />
    <Text variant='header'>Error</Text>
    <Spinner color='error' css={{ margin: '0 0 $8' }} instant size={32} />
    <Text variant='header'>Disabled</Text>
    <Spinner color='disabled' css={{ margin: '0 0 $8' }} instant size={32} />
  </Column>
)

export const Playground: ComponentStory<typeof Spinner> = (
  args: SpinnerProps
) => (
  <div>
    <Text kind='studio' variant='title'>
      Playground
    </Text>
    <Spinner {...args} />
  </div>
)

Playground.bind({})
Playground.args = {
  color: 'primary',
  css: { margin: '$8 0 0' },
  instant: true,
  isLoading: true,
  size: 32,
  visible: true
}
