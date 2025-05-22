import React, { useState } from 'react'
import Data from "../assets/number.json"
type user={
  number:string
}
const Todo = () => {
  const [number,setNumber]=useState<string>("")
  const [UserData,setData]=useState<user[]>(Data)
  const addNumber=async()=>{
   setData([...UserData,{number}])
  }

  const HandleDelete=(index:number)=>{
    let data=UserData.filter((item,i)=>i!==index)
    setData(data)
  }

  return (
    <div>
      <div>
         <label htmlFor="enter">Enter Number</label>
         <input type="text" onChange={(e)=>{setNumber((e.target.value))}} id='enter' />
         <button onClick={addNumber}>Add</button>
      </div>

      <div>
        {
          UserData.map((item,index)=>(
            <div key={index}>
              <h1>{item.number}</h1>
              <button onClick={()=>{HandleDelete(index)}}>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Todo
