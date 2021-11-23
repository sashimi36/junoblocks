import { ForwardedRef, ReactNode, forwardRef } from 'react'
import type { VariantProps } from '@stitches/react'
import { styled } from '../../stitches.config'
import { GetRenderAsPropsType, RenderAsType } from '../../types'

const resetStyles = {
	border: 'none',
	'-webkit-font-smoothing': 'inherit',
	'-moz-osx-font-smoothing': 'inherit',
	'&:focus': {
		outline: 'none'
	},
	width: 'auto',
	textTransform: 'none',
	'-webkit-appearance': 'button',
	font: 'inherit',
	cursor: 'pointer',
	userSelect: 'none'
}

const StyledButton = styled('button', {
	...resetStyles,

	borderRadius: '$round',
	fontFamily: '$primary',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	fontWeight: '$medium',
	lineHeight: '$medium',
	whiteSpace: 'pre',

	transition: 'background 0.15s ease-out',

	variants: {
		size: {
			large: {
				padding: '9px 16px 10px 16px'
			},
			medium: {
				padding: '5px 16px 6px 16px'
			}
		},
		variant: {
			// @todo add the support for theming
			primary: {
				backgroundColor: '#25292b',
				color: '$white',
				'&:hover': {
					backgroundColor: '#06090B'
				},
				'&:active': {
					backgroundColor: 'rgba(25, 29, 32, 0.85)'
				},
				'&:focus.focus-visible': {
					boxShadow: '0 0 0 2px rgba(25, 29, 32, 0.4)'
				}
			},
			secondary: {
				backgroundColor: '#e8e9e9',
				color: '$textColors.primary',
				'&:hover': {
					backgroundColor: 'rgba(25, 29, 32, 0.2)'
				},
				'&:active': {
					backgroundColor: 'rgba(25, 29, 32, 0.05)'
				},
				'&:focus.focus-visible': {
					boxShadow: '0 0 0 2px rgba(25, 29, 32, 0.3)'
				}
			},
			ghost: {
				backgroundColor: 'transparent',
				color: '#535658',
				'&:hover': {
					backgroundColor: 'rgba(25, 29, 32, 0.1)'
				},
				'&:active': {
					backgroundColor: 'rgba(25, 29, 32, 0.05)'
				},
				'&:focus.focus-visible': {
					boxShadow: '0 0 0 2px rgba(25, 29, 32, 0.3)'
				}
			}
		},
		disabled: {
			true: {
				pointerEvents: 'none',
				cursor: 'not-allowed'
			},
			false: {}
		}
	},

	compoundVariants: [
		{
			variant: 'primary',
			disabled: true,
			css: {
				backgroundColor: 'rgba(25, 29, 32, 0.3)',
				color: 'rgba(243, 246, 248, 0.7)'
			}
		},
		{
			variant: 'secondary',
			disabled: true,
			css: {
				backgroundColor: 'rgba(25, 29, 32, 0.05)',
				color: 'rgba(25, 29, 32, 0.3)'
			}
		},
		{
			variant: 'ghost',
			disabled: true,
			css: {
				color: 'rgba(25, 29, 32, 0.3)'
			}
		}
	],

	defaultVariants: {
		variant: 'primary',
		size: 'medium'
	}
})

type ButtonProps<T extends RenderAsType = 'button'> = GetRenderAsPropsType<T> &
	VariantProps<typeof StyledButton> & {
		as?: T
		children?: ReactNode
		// @todo iconLeft;
		// @todo iconRight;
		// @todo icon;
	}

function ButtonComponent<T extends RenderAsType = 'button'>({ children, as, ...props }: ButtonProps<T>, ref?: ForwardedRef<any>) {
	return (
		<StyledButton ref={ref} {...props} as={as}>
			{children}
		</StyledButton>
	)
}

export const Button = forwardRef(ButtonComponent) as typeof ButtonComponent
