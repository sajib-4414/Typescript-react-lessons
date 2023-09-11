//types or interfaces?
//types for projects, interfaces for libraries
type GreetProps = {
    name: string,
    messageCount?:number,
    isLoggedIn: boolean
}
export const Greet = (props: GreetProps) =>{
    const {messageCount=0} = props //if message count is passed in use that value or use 0 as default
    return(
        <div>
            <h2>
            {
                props.isLoggedIn?
                `Welcome ${props.name}! you have ${messageCount} unread messages`
                :
                `Welcome guest`
            }
            </h2>
        </div>
    )
}