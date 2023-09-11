type ButtonProps = {
    variant: 'primary' | 'secondary',
    children: string
} & Omit<React.ComponentProps<'button'>,'children'> //colllect all prop definitin for button component,
// but excluding children
export const CustomButton = ({variant, children,...rest}: ButtonProps) =>{
    return <button className={`class-with-${variant}`} {...rest}>{children} </button> // applies a primary class if variant=primary
    //applies a secondary class if variant=secondary
}
