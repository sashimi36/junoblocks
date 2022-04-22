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

This is for parallel development for your app and junoblocks. It will automatically reload the page when you change the code in your local clone of the repo.

Currently, the dev mode is only available for the nextjs apps. You'll need to install a plugin for nextjs and clone this repo to the same root directory of your app.

To get started, run this in your nextjs app folder:

```bash
yarn add next-bundle-junoblocks
```

In `next.config.js`, add the following:
```js 
// next.config.js
const withBundleJunoblocks = require('next-bundle-junoblocks')

const config = {} // nextjs config

module.exports =
    process.env.BUILD_JUNOBLOCKS === 'true' ? 
        withBundleJunoblocks(config) : config
```

Clone the repo in the same root directory of your nextjs app and run `yarn install`.

Here's how your file tree should look like:
```
└── your_project
└────── package.json
└────── index.js
└────── ...
└── junoblocks
└────── package.json
└────── index.js
└────── ...
```

Once modules are installed:
- Run `yarn dev` to start the dev bundler in junoblocks folder.
- Run `BUILD_JUNOBLOCKS=true yarn dev` to start a dev server in your nextjs app.

Done! Now junoblocks will be bundled up together with your nextjs app supporting fast reload.

_Note, your local junoblocks version will not be included into production bundles._

## Contributing

Please submit your suggestions, feature requests or bugs reports to the [GitHub Issues](https://github.com/sashimi36/junoblocks/issues).

## License

MIT © [sashimi36](https://github.com/sashimi36)
