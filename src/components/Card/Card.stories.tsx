import React, { ComponentPropsWithoutRef } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Card, CardContent, StyledDivForCardWrapper } from './Card'
import { Column } from '../Column'
import { Text } from '../Text'

export default {
  title: 'Components / Card',
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ margin: '0px 108px' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Card>

const CONTENT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const Overview = () => (
  <Column gap={8}>
    <Text kind='studio' variant='title'>
      Overview
    </Text>
    <Text variant='header'>Ghost</Text>
    <Card style={{ marginBottom: 16, padding: 24 }} variant='ghost'>
      <CardContent size='small' style={{ justifyContent: 'center' }}>
        {CONTENT}
      </CardContent>
    </Card>
    <Text variant='header'>Primary</Text>
    <Card style={{ marginBottom: 16, padding: 24 }}>
      <CardContent size='small' style={{ justifyContent: 'center' }}>
        {CONTENT}
      </CardContent>
    </Card>
    <Text variant='header'>Secondary</Text>
    <Card style={{ marginBottom: 24, padding: 24 }} variant='secondary'>
      <CardContent size='small' style={{ justifyContent: 'center' }}>
        {CONTENT}
      </CardContent>
    </Card>
    <Text variant='header'>Secondary active</Text>
    <Card active style={{ marginBottom: 16, padding: 24 }} variant='secondary'>
      <CardContent size='small' style={{ justifyContent: 'center' }}>
        {CONTENT}
      </CardContent>
    </Card>
    <Text variant='header'>Secondary disabled</Text>
    <Card disabled style={{ padding: 24 }} variant='secondary'>
      <CardContent size='small' style={{ justifyContent: 'center' }}>
        {CONTENT}
      </CardContent>
    </Card>
  </Column>
)

export const Playground: ComponentStory<typeof Card> = (
  args: Omit<ComponentPropsWithoutRef<typeof StyledDivForCardWrapper>, 'key'>
) => (
  <div>
    <Text kind='studio' variant='title'>
      Playground
    </Text>
    <Card {...args}>
      <CardContent size='small' style={{ justifyContent: 'center' }}>
        {CONTENT}
      </CardContent>
    </Card>
  </div>
)

Playground.bind({})
Playground.args = {
  active: false,
  css: { marginTop: 16, padding: 24 },
  disabled: false,
  variant: 'secondary'
}
