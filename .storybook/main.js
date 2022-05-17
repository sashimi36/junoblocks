const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config) => {
    /* resolve absolute imports from ../src */
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src')
    ]

    return config
  },
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ]
}
