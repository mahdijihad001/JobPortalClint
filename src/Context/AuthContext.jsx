import React, { createContext, useEffect, useState } from 'react'
import { CreateAuthContext } from './CreateAuthContext';



const AuthContextProvider = ({children}) => {
    const [user , setUser] = useState(null);
    
    const AuthUser = () =>{
        const getUser = localStorage.getItem("user");
        try {
            if(getUser){
                setUser(JSON.parse(getUser));
            }else{
                setUser(null);
            }
        } catch (error) {
            setUser(null)
        }
    };

    useEffect(() =>{
        AuthUser();
    } , []);

    const logOut = () =>{
        localStorage.removeItem("user");
        setUser(null);
    };

   

  return (
    <CreateAuthContext.Provider value={{user , setUser , logOut}}>
        {children}
    </CreateAuthContext.Provider>
  )
}

export default AuthContextProvider