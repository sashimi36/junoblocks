import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text } from './Text'
import { select, text } from '@storybook/addon-knobs'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>

const RowWrapper = ({ children }) => {
  return <div style={{ display: 'grid', rowGap: '10px' }}>{children}</div>
}

export const Story: ComponentStory<typeof Text> = () => {
  return (
    <>
      <RowWrapper>
        <Text variant='hero'>Hero 1</Text>
        <Text variant='hero'>Hero 2</Text>
        <Text variant='header'>Header</Text>
        <Text variant='title'>Title</Text>
        <Text variant='primary'>Primary</Text>
        <Text variant='body'>Body</Text>
        <Text variant='link'>Link</Text>
        <Text variant='secondary'>Secondary</Text>
        <Text variant='legend'>Legend</Text>
        <Text variant='caption'>Caption</Text>
      </RowWrapper>
    </>
  )
}

export const Playground: ComponentStory<typeof Text> = () => {
  const variant = select(
    'variant',
    ['hero', 'header', 'title', 'primary', 'body', 'link', 'secondary', 'legend', 'caption'],
    'hero'
  )
  const as = select('as', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'], 'h1')
  const textLabel = text('text', 'Junoverse is on the rise!')
  return (
    <Text as={as} variant={variant}>
      {textLabel}
    </Text>
  )
}
