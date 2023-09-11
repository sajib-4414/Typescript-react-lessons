import { useRef,useEffect } from "react";
export const DomRef = ()=>{
    const inputRef = useRef<HTMLInputElement>(null!) //for dom references use html input element type
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return (
        <div>
            <input type='text' ref={inputRef}/>
        </div>
    )
}