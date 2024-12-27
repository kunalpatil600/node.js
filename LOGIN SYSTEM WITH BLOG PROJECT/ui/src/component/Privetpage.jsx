import React from 'react'
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
const Privetpage = ({children}) => {
   const [cookies]=useCookies(["verificationtoken"])
   const isAuth=cookies.verificationtoken;
   if(!isAuth){
    return <Navigate to={"/sign-up"} />
   }
   return children
}

export default Privetpage
