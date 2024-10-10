import React from "react"

const obj={"firstname":"emma",
        "lastname":"watson",
        "email":"emma@gmail.com"}

export const UserContext=React.createContext();
export const UserContextProvider=({children})=>{
return <UserContext.Provider value={obj}>{children}</UserContext.Provider>
}
