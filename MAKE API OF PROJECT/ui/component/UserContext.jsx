import React, { createContext, useState } from 'react'

export const usercontext=createContext()

export const UserProvider=({children})=>{
    const [user, setUser] = useState(null);
    const loginuser = (userdata) => {
        console.log("User logged in:", userdata); // Debugging info
        setUser(userdata);
    };
    const logout = () => {
        console.log("User logged out."); // Debugging info
        setUser(null);
    };

    return(
        <usercontext.Provider value={{user,loginuser,logout}}>
        {children}
        </usercontext.Provider>
    )
}