# junoblocks

> Juno verse UI library

[![NPM](https://img.shields.io/npm/v/junoblocks.svg)](https://www.npmjs.com/package/junoblocks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add junoblocks
```

## Usage

```tsx
import React, { Component } from 'react'
import { Button, Text, styled } from 'junoblocks'

const StyledText = styled(Text, {
  textTransform: 'uppercase',
  // Access internal theme variables using tokens
  padding: '$2 0',
  // read more https://stitches.dev/docs/tokens
  color: '$textColor$success'
})

const Example = () => {
  return (
    <>
      <StyledText variant="hero">Welcome to Junoblocks!</StyledText>
      <Button
        variant="primary"
        onClick={() => require('juno').navigateToTheMoon()}
        css={{ marginTop: "$12" }}
      >
          Join our team here
      </Button>
    </>
  )
}
```

## Storybook

Build library locally and preview documented components using storybook.

```bash
yarn storybook
```

## Dev mode

Dev mode is for parallel development purposes on both your app and junoblocks sides. It will automatically reload the page when you change the code.

Currently, the dev mode is only available for the nextjs apps. You'll need to install an additional plugin for nextjs and clone this repo to the same root directory of your app.

Follow these 3 simple steps to get started:

```bash
yarn add next-bundle-junoblocks
```

In your `next.config.js` file, add the following:
```js 
// next.config.js
const withBundleJunoblocks = require('next-bundle-junoblocks')

const config = {} // nextjs config

module.exports = process.env.BUILD_JUNOBLOCKS === 'true' ? 
    withBundleJunoblocks(config) : config
```
Clone the repo and run `yarn install` to build the library.
```bash
git clone https://github.com/sashimi36/junoblocks
```

Run `yarn dev` to start the dev bundler. Run `BUILD_JUNOBLOCKS=true yarn dev` to start your dev server.

Done! Now junoblocks will be bundled up together with your nextjs app supporting fast reload.

_Note, your local junoblocks version will not be included into production bundles._

## Contributing

Please submit your suggestions, feature requests or bugs reports to the [GitHub Issues](https://github.com/sashimi36/junoblocks/issues).

## License

MIT © [sashimi36](https://github.com/sashimi36)
