import { Login } from "./Login"
import { ProfileProps } from "./Profile"
type PrivateProps = {
    isLoggedIn: boolean,
    component: React.ComponentType<ProfileProps>
}
//we are passing a component as a prop, not just a value
//props are desctructed with split operator
export const Private = ({isLoggedIn, component:Component}:PrivateProps) => {
    if(isLoggedIn){
        return <Component name='visaws'/>
    } else{
        return <Login/>
    }
}