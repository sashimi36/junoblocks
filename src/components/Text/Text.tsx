import { styled } from '../../stitches.config'
import { ForwardedRef, forwardRef, ReactNode } from 'react'
import { VariantProps } from '@stitches/react'

const StyledText = styled('p', {
	fontFamily: '$primary',
	margin: 0,
	padding: 0,

	variants: {
		variant: {
			hero: {
				fontSize: '$1',
				lineHeight: '$1',
				fontWeight: '$bold',
				color: '$textColors.primary'
			},
			header: {
				fontSize: '$2',
				lineHeight: '$2',
				fontWeight: '$semiBold',
				color: '$textColors.primary'
			},
			title: {
				fontSize: '$3',
				lineHeight: '$3',
				fontWeight: '$semiBold',
				color: '$textColors.primary'
			},
			primary: {
				fontSize: '$4',
				lineHeight: '$3',
				fontWeight: '$medium',
				color: '$textColors.body'
			},
			body: {
				fontSize: '$5',
				lineHeight: '$3',
				fontWeight: '$normal',
				color: '$textColors.body'
			},
			link: {
				fontSize: '$6',
				lineHeight: '$3',
				fontWeight: '$normal',
				color: '$textColors.body'
			},
			secondary: {
				fontSize: '$6',
				lineHeight: '$4',
				fontWeight: '$normal',
				color: '$textColors.secondary'
			},
			legend: {
				fontSize: '$7',
				lineHeight: '$4',
				fontWeight: '$normal',
				color: '$textColors.secondary'
			},
			caption: {
				fontSize: '$7',
				lineHeight: '$4',
				fontWeight: '$normal',
				color: '$textColors.tertiary'
			}
		}
	},

	defaultVariants: {
		variant: 'body'
	}
})

type TextProps = VariantProps<typeof StyledText> & {
	// @todo add color tokens
	children?: ReactNode
}

const TextComponent = ({ children, ...props }: TextProps, ref?: ForwardedRef<any>) => {
	return (
		<StyledText ref={ref} {...props}>
			{children}
		</StyledText>
	)
}

export const Text = forwardRef(TextComponent) as typeof TextComponent
