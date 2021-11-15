// @ts-nocheck
import { createStitches } from '@stitches/react'

export const { theme, styled, css } = createStitches({
  theme: {
    colors: {
      black: '#06090B',
      dark: '#191D20',
      light: '#F3F6F8',
      white: '#FFFFFF',
      brand: '#7E5DFF',
      secondary: '#FBBAA4',
      error: '#ED5276',
      valid: '#53D0C9',

      text: {
        primary: '#06090B',
        body: '#25282b',
        secondary: '#525558',
        tertiary: '#757779',
        disabled: '#babbbc',
        brand: '#8b6dff',
        error: '#ef6384',
        valid: '#64d5ce'
      },

      icon: {
        primary: '#191D20',
        secondary: '#24292E',
        tertiary: '#7C7F82',
        disabled: '#7C7F82',
        brand: '#7C7F82',
        error: '#f06c8b',
        valid: '#6dd7d1'
      },

      background: {
        base: '#FFFFFF',
        primary: '#e8e8e9',
        secondary: '#d1d2d2',
        tertiary: '#babbbc',
        toast: '#3c3f42',
        tooltip: '#25282b',
        tint: '#fef1ed',
        error: '#fef1ed',
        confirm: '#ddf6f4'
      },

      border: {
        inactive: '#e8e8e9',
        default: '#ddddde',
        focus: '#babbbc',
        selected: '#525558',
        error: '#f17d98'
      }
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px'
    },
    fonts: {
      primary:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    fontSizes: {
      1: '26px',
      2: '20px',
      3: '16px',
      4: '15px',
      5: '14px',
      6: '13px',
      7: '12px'
    },
    fontWeights: {
      bold: 700,
      semiBold: 600,
      medium: 500,
      normal: 400
    },
    lineHeights: {
      1: '28px',
      2: '24px',
      3: '20px',
      4: '16px'
    },
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      round: '6px'
    },
    shadows: {},
    zIndices: {},
    transitions: {},
    media: {
      mobile: '(min-width: 640px)',
      tablet: '(min-width: 768px)',
      desktop: '(min-width: 1024px)'
    }
  }
})
