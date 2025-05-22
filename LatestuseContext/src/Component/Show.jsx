import React, { useContext } from 'react'
import { Usercontext } from '../context/UserData'

const Show = () => {
    const {userData,deleteUser}=useContext(Usercontext)
  return (
    <div>
      <h1>Hello</h1>
      {
        userData.map((iten,index)=>(
            <div key={index}>
                <h1>{iten.name}</h1>
            </div>
        ))
      }
      <button onClick={deleteUser}>Delete</button>
    </div>
  )
}

export default Show
