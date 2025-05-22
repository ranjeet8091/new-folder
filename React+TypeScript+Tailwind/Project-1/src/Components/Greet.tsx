import React from "react";


type Person ={
   Person:{
    Name:String
   }
}
const Greet=(props:Person)=>{
    
    return(
        <>
        <h1>Ranjeet {props.Person.Name} </h1>
        </>
    )
}
export default Greet