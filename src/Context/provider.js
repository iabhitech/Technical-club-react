import React,{useState} from "react";

import PackageContext from "./context";

const Provider =props=>{
    const [userFullName, setUserFullName] =useState(localStorage.getItem('fullName'));
    const [userEmail, setUserEmail] =useState(localStorage.getItem('email'));
    const [userId, setUserId] =useState(localStorage.getItem('userId'));
    const [userRole, setUserRole] =useState(localStorage.getItem('role'));
    return(
        <PackageContext.Provider value={{userEmail,setUserEmail,userFullName,setUserFullName,userId,setUserId,userRole,setUserRole}}>
            {props.children}
        </PackageContext.Provider>
    )
}

export default Provider;