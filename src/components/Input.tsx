type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
//props is destructured into individual values
export const Input = ({value, handleChange}: InputProps) =>{
    return <input type='text' value={value} onChange={handleChange}/>
}