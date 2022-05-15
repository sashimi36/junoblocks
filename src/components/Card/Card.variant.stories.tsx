import React, { Fragment } from 'react'
import { styled } from 'theme'

import { Card, CardContent } from './Card'
import { Column } from '../Column'
import { Divider } from '../Divider'
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

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  columnGap: '$8',
})

const DividedContent = () => (
  <Fragment>
    <CardContent>
      <Text color="body" css={{ padding: '$16 0' }} variant="legend">
        Your liquidity
      </Text>
    </CardContent>
    <Divider offsetTop="$8" />
    <CardContent>
      <Text color="body" css={{ padding: '$16 0 $24' }} variant="legend">
        Underlying assets
      </Text>
    </CardContent>
  </Fragment>
)

const VariantContent = () => (
  <CardContent size="small" css={{ justifyContent: 'center' }}>
    <Text variant="body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </CardContent>
)

export const Ghost = () => (
  <div>
    <Text kind="studio" variant="title">
      Ghost
    </Text>
    <Card css={{ marginTop: '$8', padding: '$12' }} variant="ghost">
      <VariantContent />
    </Card>
  </div>
)

export const Primary = () => (
  <div>
    <Text kind="studio" variant="title">
      Primary
    </Text>
    <Card css={{ marginTop: '$8', padding: '$12' }}>
      <VariantContent />
    </Card>
  </div>
)

export const Secondary = () => (
  <div>
    <Text kind="studio" variant="title">
      Secondary
    </Text>
    <Card css={{ marginTop: '$8', padding: '$12' }} variant="secondary">
      <VariantContent />
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
      <VariantContent />
    </Card>
    <Text variant="header">Primary</Text>
    <Card active css={{ marginBottom: '$8', padding: '$12' }}>
      <VariantContent />
    </Card>
    <Text variant="header">Secondary</Text>
    <Card
      active
      css={{ marginBottom: '$8', padding: '$12' }}
      variant="secondary"
    >
      <VariantContent />
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
      <VariantContent />
    </Card>
    <Text variant="header">Primary</Text>
    <Card disabled css={{ marginBottom: '$8', padding: '$12' }}>
      <VariantContent />
    </Card>
    <Text variant="header">Secondary</Text>
    <Card disabled css={{ padding: '$12' }} variant="secondary">
      <VariantContent />
    </Card>
  </Column>
)

export const WithDivider = () => (
  <div>
    <Text kind="studio" variant="title">
      With a divider
    </Text>
    <Grid>
      <Card css={{ marginTop: '$8' }}>
        <DividedContent />
      </Card>
      <Card css={{ marginTop: '$8' }} variant="secondary">
        <DividedContent />
      </Card>
      <Card active css={{ marginTop: '$8' }} variant="secondary">
        <DividedContent />
      </Card>
    </Grid>
  </div>
)
