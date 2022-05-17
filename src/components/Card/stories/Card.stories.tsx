import React, { ComponentPropsWithoutRef, Fragment } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Card, CardContent, StyledDivForCardWrapper } from '../Card'
import { Column } from '../../Column'
import { Text } from '../../Text'

export default {
  title: 'Components / Card',
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ margin: '0px 108px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Card>

const VariantContent = () => (
  <CardContent size="small" css={{ justifyContent: 'center' }}>
    <Text variant="body">
      the city dumps fill. the junkyards fill. the madhouses fill. the hospitals
      fill. the graveyards fill. nothing else fills.
    </Text>
  </CardContent>
)

export const Overview = () => (
  <Column gap={8}>
    <Text kind="studio" variant="title">
      Overview
    </Text>
    <Text variant="header">Ghost</Text>
    <Card css={{ marginBottom: '$8', padding: '$12' }} variant="ghost">
      <VariantContent />
    </Card>
    <Text variant="header">Primary</Text>
    <Card css={{ marginBottom: '$8', padding: '$12' }}>
      <VariantContent />
    </Card>
    <Text variant="header">Secondary</Text>
    <Card css={{ marginBottom: '$8', padding: '$12' }} variant="secondary">
      <VariantContent />
    </Card>
    <Text variant="header">Secondary active</Text>
    <Card
      active
      css={{ marginBottom: '$8', padding: '$12' }}
      variant="secondary"
    >
      <VariantContent />
    </Card>
    <Text variant="header">Secondary disabled</Text>
    <Card disabled css={{ padding: '$12' }} variant="secondary">
      <VariantContent />
    </Card>
  </Column>
)

export const Playground: ComponentStory<typeof Card> = (
  args: Omit<ComponentPropsWithoutRef<typeof StyledDivForCardWrapper>, 'key'>
) => (
  <div>
    <Text kind="studio" variant="title">
      Playground
    </Text>
    <Card {...args}>
      <VariantContent />
    </Card>
  </div>
)

Playground.bind({})
Playground.args = {
  active: false,
  css: { marginTop: '$8', padding: '$12' },
  disabled: false,
  variant: 'secondary',
}
