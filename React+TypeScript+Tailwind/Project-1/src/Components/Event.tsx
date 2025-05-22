import React from "react";
import { MouseEvent } from "react";
import { useState } from "react";

type EventType = {
    Event: {
        Event_Name: String
    }
}

const Event = (props:EventType) => {
     const [Message,Setmessage]=useState("Hover Over me")
    const handleEvent = () => {
        Setmessage("Click")
    }
    const HandleMouseEnter=()=>{
        Setmessage("Enter")
    }
    const HandleMouseLeave=()=>{
       Setmessage("Leave")
    }
    const handleDoubleClick=()=>{
        Setmessage("Double Clicked")
    }
    return (
        <>
        <h3>Buttons Check</h3>
        {props.Event.Event_Name === "Click" && (
          <button onClick={handleEvent} className="bg-amber-400">Click Me</button>
        )}
        
        <button onMouseLeave={HandleMouseLeave} onMouseEnter={HandleMouseEnter} className="bg-amber-800">Hover Over Me </button>
        <button onDoubleClick={handleDoubleClick} className="bg-amber-500"> Double click</button>
        <h3>This  {Message}</h3>
      </>
    )
}
export default Event