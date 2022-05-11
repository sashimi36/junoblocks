import React from 'react'

import { Card, CardContent } from './Card'
import { Column } from '../Column'
import { Text } from '../Text'

export default {
  title: 'Components / Card / Variants',
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ margin: '0px 108px' }}>
        <Story />
      </div>
    ),
  ],
}

const CONTENT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const Ghost = () => (
  <div>
    <Text kind="studio" variant="title">
      Ghost
    </Text>
    <Card css={{ marginTop: '$8', padding: '$12' }} variant="ghost">
      <CardContent size="small" css={{ justifyContent: 'center' }}>
        {CONTENT}
      </CardContent>
    </Card>
  </div>
)

export const Primary = () => (
  <div>
    <Text kind="studio" variant="title">
      Primary
    </Text>
    <Card css={{ marginTop: '$8', padding: '$12' }}>
      <CardContent size="small" css={{ justifyContent: 'center' }}>
        {CONTENT}
      </CardContent>
    </Card>
  </div>
)

export const Secondary = () => (
  <div>
    <Text kind="studio" variant="title">
      Secondary
    </Text>
    <Card css={{ marginTop: '$8', padding: '$12' }} variant="secondary">
      <CardContent size="small" css={{ justifyContent: 'center' }}>
        {CONTENT}
      </CardContent>
    </Card>
  </div>
)

export const Active = () => (
  <Column gap={8}>
    <Text kind="studio" variant="title">
      Active
    </Text>
    <Text variant="header">Ghost</Text>
    <Card active css={{ marginBottom: '$8', padding: '$12' }} variant="ghost">
      <CardContent size="small" css={{ justifyContent: 'center' }}>
        {CONTENT}
      </CardContent>
    </Card>
    <Text variant="header">Primary</Text>
    <Card active css={{ marginBottom: '$8', padding: '$12' }}>
      <CardContent size="small" css={{ justifyContent: 'center' }}>
        {CONTENT}
      </CardContent>
    </Card>
    <Text variant="header">Secondary</Text>
    <Card
      active
      css={{ marginBottom: '$8', padding: '$12' }}
      variant="secondary"
    >
      <CardContent size="small" css={{ justifyContent: 'center' }}>
        {CONTENT}
      </CardContent>
    </Card>
  </Column>
)

export const Disabled = () => (
  <Column gap={8}>
    <Text kind="studio" variant="title">
      Disabled
    </Text>
    <Text variant="header">Ghost</Text>
    <Card disabled css={{ marginBottom: '$8', padding: '$12' }} variant="ghost">
      <CardContent size="small" css={{ justifyContent: 'center' }}>
        {CONTENT}
      </CardContent>
    </Card>
    <Text variant="header">Primary</Text>
    <Card disabled css={{ marginBottom: '$8', padding: '$12' }}>
      <CardContent size="small" css={{ justifyContent: 'center' }}>
        {CONTENT}
      </CardContent>
    </Card>
    <Text variant="header">Secondary</Text>
    <Card disabled css={{ padding: '$12' }} variant="secondary">
      <CardContent size="small" css={{ justifyContent: 'center' }}>
        {CONTENT}
      </CardContent>
    </Card>
  </Column>
)
