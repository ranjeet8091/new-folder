import React from "react";
import { useState } from "react";
import Data from "../assets/user.json";
const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, Setpassword] = useState<string>("");

    const HandleCheck=async()=>{
        const data=Data.filter((item,index)=>{
            return item.username===username && item.password===password
        })
        if(data.length>0)
        {
            alert("Login")
        }
        else
        {
         alert("Failed")
        }
    }
  return (
    <div>
      <div>
        <h1>Login</h1>
        <div>
          <label htmlFor="username">UserName</label>
          <input type="text" name="" onChange={(e)=>{setUsername(e.target.value)}} id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" name=""  onChange={(e)=>{Setpassword(e.target.value)}} id="password" />
        </div>
        <button className="HandleSubmit" onClick={HandleCheck}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
