import { children, createContext, useEffect,useState } from "react";

 export const Usercontext=createContext()

export const UserProvider=({children})=>{
    const [userData,setUserData]=useState([])

     const deleteUser=async()=>{
        alert("User Deleted")
     }

    useEffect(()=>{
        const FetchData= async()=>{
          const res=await fetch("https://jsonplaceholder.typicode.com/users")
          const data=await res.json()
          setUserData(data)
          console.log(data)
        }
        FetchData()
    },[])

     return(
        <Usercontext.Provider value={{userData,deleteUser}}>
         {children}
        </Usercontext.Provider>
     )
}
