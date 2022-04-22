import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text } from './Text'
import { Column } from '../Column'

export default {
  title: 'Components/Text',
  component: Text
} as ComponentMeta<typeof Text>

export const Story: ComponentStory<typeof Text> = () => {
  return (
    <Column
      gap={8}
      css={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr'
      }}
    >
      <Column gap={8}>
        <Text variant='hero' css={{ paddingBottom: '$10' }}>
          Symbol variants:
        </Text>

        <Text kind='symbol' variant='hero'>
          Hero
        </Text>
        <Text kind='symbol' variant='header'>
          Header
        </Text>
        <Text kind='symbol' variant='title'>
          Title
        </Text>
        <Text kind='symbol' variant='primary'>
          Primary
        </Text>
        <Text kind='symbol' variant='body'>
          Body
        </Text>
        <Text kind='studio' variant='caption'>
          Caption
        </Text>
      </Column>
      <Column gap={8}>
        <Text variant='hero' css={{ paddingBottom: '$10' }}>
          Studio variants:
        </Text>

        <Text kind='studio' variant='header'>
          Hero
        </Text>
        <Text kind='studio' variant='title'>
          Title
        </Text>
        <Text kind='studio' variant='primary'>
          Primary
        </Text>
        <Text kind='studio' variant='body'>
          Body
        </Text>
        <Text kind='studio' variant='link'>
          Link
        </Text>
        <Text kind='studio' variant='secondary'>
          Secondary
        </Text>

        <Text kind='studio' variant='caption'>
          Caption
        </Text>
      </Column>
      <Column gap={8}>
        <Text variant='hero' css={{ paddingBottom: '$10' }}>
          Product variants:
        </Text>

        <Text variant='hero'>Hero</Text>
        <Text variant='header'>Header</Text>
        <Text variant='title'>Title</Text>
        <Text variant='primary'>Primary</Text>
        <Text variant='body'>Body</Text>
        <Text variant='link'>Link</Text>
        <Text variant='secondary'>Secondary</Text>
        <Text variant='legend'>Legend</Text>
        <Text variant='caption'>Caption</Text>
      </Column>
    </Column>
  )
}
