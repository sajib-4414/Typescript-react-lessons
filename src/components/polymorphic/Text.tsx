import React from 'react'
type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    as?:E// getting the type of html from the as parameter
}
// the goal is when h1 is passed, only accept parameters that are acceptable for html h1 tag
// and same goes for the other html tags as wel
type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>,keyof TextOwnProps<E>> //using omit to prevent div and other
//tag children collision

export const Text = <E extends React.ElementType='div'>({ size, color, children, as}:TextProps<E>) =>{
    const Component  = as || 'div' //if as is Null, then take the default value of div
    return <Component className={`class-with-${size}-${color}`}>{children}</Component>
}