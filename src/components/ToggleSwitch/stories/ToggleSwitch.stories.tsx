import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ToggleSwitch, ToggleSwitchProps } from '../ToggleSwitch'

export default {
  title: 'Components / ToggleSwitch',
  component: ToggleSwitch,
} as ComponentMeta<typeof ToggleSwitch>

export const Overview = () => {
  const [checked, setChecked] = useState(false)

  return (
    <ToggleSwitch
      checked={checked}
      id="overview-toggle"
      name="switch"
      onChange={setChecked}
      optionLabels={['On', 'Off']}
    />
  )
}

export const Disabled = () => (
  <ToggleSwitch
    disabled
    id="disabled-toggle"
    name="switch"
    optionLabels={['On', 'Off']}
  />
)

export const Playground: ComponentStory<typeof ToggleSwitch> = (
  args: ToggleSwitchProps
) => <ToggleSwitch {...args} />

Playground.bind({})
Playground.args = {
  checked: false,
  disabled: false,
  id: 'playground-toggle',
  name: 'switch',
  optionLabels: ['On', 'Off'],
}
