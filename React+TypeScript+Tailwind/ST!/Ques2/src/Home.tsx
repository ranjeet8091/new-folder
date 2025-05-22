import React, { useState } from "react"

type button = {
    code: (e: React.MouseEvent) => void;
  };
  
const Home=(props:button)=>{
    const [Name,setName]=useState("Ranjeet");
    function handleClick()
    {
       setName("PEnguine Chutiya")
    }
    function handleClick1()
    {
       setName("Sagar Chutiya")
    }
    return(
        <>
         <div className="flex m-4 gap-4">
            <div className="bg-red-200 border rounded-2xl p-3">{Name}</div>
            <button type="button" onClick={props.code} className="bg-red-300 cursor-pointer p-2 border rounded-2xl">Change</button>
            <button type="button" onMouseEnter={handleClick1} className="bg-red-300 cursor-pointer p-2 border rounded-2xl">Change</button>
         </div>
        </>
    )
}
export default Home