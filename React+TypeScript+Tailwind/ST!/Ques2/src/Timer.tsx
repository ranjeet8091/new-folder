import { useEffect, useState } from "react";
type Timer = {
    data: {
        Name: string,
        HaveTime: number
    }
}
const Timer = (props: Timer) => {
    const [HaveTime,setHaveTime]=useState(props.data.HaveTime)
    useEffect(()=> {
        if(HaveTime <=0) return 0;
        const interval=setInterval(()=>{
            setHaveTime(prev=>Math.max(prev-1,0));
        },1000)

        return()=>clearInterval(interval)
    },)
    return (
        <>
             {HaveTime!==0 && <div>{props.data.Name}</div> }
             {HaveTime>0 ? <div>{HaveTime} seconds left</div>: <div>Limit out</div> }
           
        </>
    )
}
export default Timer;