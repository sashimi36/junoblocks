import { themeColorTokens } from '../colors'

export type FontVariantKind = {
  [variantName: string]: {
    size: string
    height: string
    weight: number
    color: keyof typeof themeColorTokens['textColors']
    spacing?: string
    font: 'mono' | 'primary'
  }
}

export type FontGridArgs = {
  [fontClassType: string]: FontVariantKind
}

function createAssignVariantValue(variantKindName, variantName) {
  return (object, value) => {
    object[`${variantKindName}-${variantName}`] = value
  }
}

export const createFontVariants = (grid: FontGridArgs) => {
  const fontSizes = {}
  const lineHeight = {}
  const fontWeight = {}
  const fontFamily = {}
  const fontColors = {}
  const letterSpacing = {}

  for (const variantKindName in grid) {
    const variants = grid[variantKindName]

    for (const variantName in variants) {
      const variant = variants[variantName]
      const assigner = createAssignVariantValue(variantKindName, variantName)

      assigner(fontSizes, variant.size)
      assigner(lineHeight, variant.height)
      assigner(fontWeight, variant.weight)
      assigner(fontFamily, variant.font ?? 'primary')
      assigner(fontColors, `$textColors$${variant.color}`)
      assigner(letterSpacing, variant.spacing)
    }
  }

  return {
    fontSizes,
    lineHeight,
    fontWeight,
    fontColors,
    fontFamily,
    letterSpacing,
  }
}
