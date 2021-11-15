# junoblocks

> Juno verse UI library

[![NPM](https://img.shields.io/npm/v/junoblocks.svg)](https://www.npmjs.com/package/junoblocks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add https://github.com/sashimi36/junoblocks
```

## Usage

```tsx
import React, { Component } from 'react'
import { Button, Text, styled } from 'junoblocks'

const StyledText = styled(Text, {
  textTransform: 'uppercase',
  // Access internal theme variables using tokens
  padding: '$1 0',
  // read more https://stitches.dev/docs/tokens
  color: '$textColor.success'
})

const Example = () => {
  return (
    <>
      <StyledText variant="hero">Welcome to Junoblocks!</StyledText>
      <Button variant="primary" onClick={() => redirectToTheMoon()}>Join our team here</Button>
    </>
  )
}
```

## License

MIT © [sashimi36](https://github.com/sashimi36)
