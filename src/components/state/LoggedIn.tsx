import { useState } from "react"

export const LoggedIn = () =>{
    const handleLogin = () =>{
        setIsLoggedIn(true)
    }
    const handleLogOut = ()=>{
        setIsLoggedIn(false)
    }
    const [isLoggedIn, setIsLoggedIn] = useState(false)//typescript is inferring the isloggedin state's type as boolean
    return (
        <div>
            <button onClick={handleLogin}></button>
            <button onClick={handleLogOut}></button>
            <div> User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}