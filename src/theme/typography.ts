import { FontVariantKind } from './utils/createFontVariants'

const product: FontVariantKind = {
  hero: {
    size: '1.625rem',
    height: '1.75rem',
    weight: 600,
    color: 'primary',
    font: 'primary'
  },
  header: {
    size: '1.25rem',
    height: '1.5rem',
    weight: 500,
    color: 'primary',
    font: 'primary'
  },
  title: {
    size: '1rem',
    height: '1.25rem',
    weight: 500,
    color: 'primary',
    font: 'primary'
  },
  primary: {
    size: '0.9375rem',
    height: '1.25rem',
    weight: 500,
    color: 'body',
    font: 'primary'
  },
  body: {
    size: '0.875rem',
    height: '1.25rem',
    weight: 500,
    color: 'body',
    font: 'primary'
  },
  link: {
    size: '0.8125rem',
    height: '1.25rem',
    weight: 500,
    color: 'body',
    font: 'primary'
  },
  secondary: {
    size: '0.75rem',
    height: '1rem',
    weight: 400,
    color: 'secondary',
    font: 'primary'
  },
  legend: {
    size: '0.75rem',
    height: '1rem',
    weight: 400,
    color: 'tertiary',
    font: 'mono'
  },
  caption: {
    size: '0.75rem',
    height: '1rem',
    weight: 400,
    color: 'secondary',
    font: 'primary'
  }
}

const studio: FontVariantKind = {
  header: {
    size: 'clamp(4.5rem, 7vw, 7.5rem)',
    height: 'clamp(5rem, 7.1vw, 8.5rem)',
    weight: 800,
    color: 'primary',
    font: 'primary'
  },
  title: {
    size: 'clamp(2.5rem, 2.5vw, 4.5rem)',
    height: 'clamp(3rem, 2.5vw, 5.25rem)',
    weight: 600,
    color: 'primary',
    font: 'primary'
  },
  primary: {
    size: 'clamp(1.75rem, 2.5vw, 3rem)',
    height: 'clamp(2.25rem, 3.2vw, 3.75rem);',
    weight: 500,
    color: 'primary',
    font: 'primary'
  },
  body: {
    size: 'clamp(1.5rem, 1.05vw, 2.5rem)',
    height: 'clamp(2rem, 2.5vw, 3.5rem)',
    weight: 400,
    color: 'body',
    font: 'primary'
  },
  button: {
    size: 'clamp(1rem, 2.5vw, 1.25rem)',
    height: 'clamp(1.25rem, 1.475vw, 1.75rem)',
    weight: 600,
    color: 'primary',
    font: 'primary'
  },
  link: {
    size: '1rem',
    height: '1.25rem',
    weight: 600,
    color: 'body',
    font: 'primary'
  },
  secondary: {
    size: 'clamp(1.125rem, 0.84vw, 1.5rem)',
    height: 'clamp(1.5rem, 1.7vw, 2rem)',
    weight: 400,
    color: 'secondary',
    font: 'primary'
  },
  caption: {
    size: 'clamp(0.8125rem, 0.85vw, 1rem)',
    spacing: '$space$3',
    height: 'clamp(1rem, 1.05vw, 1.25rem)',
    weight: 500,
    color: 'tertiary',
    font: 'primary'
  }
}

const symbol: FontVariantKind = {
  hero: {
    size: 'clamp(8rem, 10.5vw, 13.5rem)',
    height: 'clamp(9.25rem, 14vw, 16.5rem)',
    weight: 700,
    color: 'primary',
    font: 'mono'
  },
  header: {
    size: 'clamp(3.5rem, 2.5vw, 6rem)',
    height: 'clamp(4.5rem, 2.5vw, 7.5rem)',
    weight: 700,
    color: 'primary',
    font: 'mono'
  },
  title: {
    size: 'clamp(2rem, 2.5vw, 4rem)',
    height: 'clamp(3rem, 2.5vw, 5rem)',
    weight: 700,
    color: 'primary',
    font: 'mono'
  },
  primary: {
    size: 'clamp(1.125rem, 1.36vw, 1.625rem)',
    height: 'clamp(1.5rem, 1.7vw, 2rem)',
    weight: 500,
    color: 'primary',
    font: 'mono'
  },
  body: {
    size: '1rem',
    height: '1.25rem',
    weight: 500,
    color: 'body',
    font: 'mono'
  },
  caption: {
    size: '0.75rem',
    height: '1rem',
    weight: 400,
    color: 'tertiary',
    font: 'mono'
  }
}

export const typography = {
  product,
  studio,
  symbol
}
