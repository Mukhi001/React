import { useContext, useState } from "react"
import { UserContext } from "../components/context/userContext"

 

export const Parent=()=>{
    const [userDetails,setUserDetails]=useState({
        "first-name":"emma",
        "last-name":"watson",
        "email":"emma@gmail.com"
    })
    return (
        <>
        <h1>
            UseContext parent
        </h1>
        <ChildComponent userDetails={userDetails}/>
        
        </>
    )
}

export const ChildComponent=()=>{
    const {firstname,lastname,email}=useContext(UserContext)
     
    return (
        <>
        <h2>Child Component</h2>
        <p>first name :{firstname}</p>
            <p>last name :{lastname}</p>
            <p>email:{email}</p>

        {/* <ThirdComponent userDetails={userDetails}/> */}
        </>
    )
}

export const ThirdComponent=({userDetails})=>{
   
    return (
        <>
        <h2>
        Third Component
            </h2>

            <p>first name :{userDetails["first-name"]}</p>
            <p>last name :{userDetails["last-name"]}</p>
            <p>email:{userDetails["email"]}</p>
            
        </>
    )
}