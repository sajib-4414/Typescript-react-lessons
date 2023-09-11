import React from 'react'
import { Greet } from '../Greet'
//example when you want to use the type from another component, but that component
//does not export the type, so you use React with typeof to borrow that type
export const CustomComponent = (props: React.ComponentProps<typeof Greet>) =>{
    //now if you write props. then vscode will show properties from Greet type
    return (
        <div>
            
            {props.name}
        </div>
    )
}