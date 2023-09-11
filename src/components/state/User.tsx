import { useState } from "react";

type AuthUser = {
    name:string
    email: string
}

export const User = ()=>{
    //usestate hook with a type to be used for future
    const [user, setUser] = useState<AuthUser | null>(null)
    const handleLogin = ()=>{
        setUser({
            name: 'visawas',
            email: 'a@a.com'
        })
    }
    const handleLogOut = ()=>{
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}>Logout</button>
            <div> user name is {user?.name} </div>
            <div> user email is {user?.email}</div>
        </div>
    )

    //lets say you know that user will be always valid for example, a fixed user, or the component will alwasy have user
    //in that case you can do type assertion, you can set the user state to a {} typecasted to AuthUser
    //and remove the null type from union declaration. Then you can use user.name without ?
    // const [user, setUser] = useState<AuthUser >({} as AuthUser)
    // const handleLogin = ()=>{
    //     setUser({
    //         name: 'visawas',
    //         email: 'a@a.com'
    //     })
    // }
    
    // return (
    //     <div>
    //         <button onClick={handleLogin}>Login</button>
    //         <div> user name is {user.name} </div>
    //         <div> user email is {user.email}</div>
    //     </div>
    // )

}