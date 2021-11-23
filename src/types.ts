import { ComponentPropsWithRef, ElementType, HTMLProps } from 'react'

export type RenderAsType = JSX.IntrinsicElements | ElementType

export type GetRenderAsPropsType<T extends RenderAsType> = T extends JSX.IntrinsicElements ? HTMLProps<T> : T extends ElementType ? ComponentPropsWithRef<T> : {}
