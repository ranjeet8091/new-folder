import React, { useState } from 'react'
import photo1 from "../assets/Two.png"
import photo2 from "../assets/Third.png"

const AnotherShoesQuestion = () => {
    const [main,setMain]=useState(photo1)
  return (
    <div>
        {/* First */}
         <div className='relative w-[500px] h-[350px] border-2 overflow-hidden m-10'>
            <div className='w-[100%] border'>
                <img src={main} alt="" className="w-full h-full object-contain" />
            </div>
            <div className='absolute flex w-2/12 gap-2 mx-10 my-3'>
                <img src={photo2} alt="" onClick={()=>setMain(photo2)} />
                <img src={photo1}  alt="" onClick={()=>setMain(photo1)} />
                <img src={photo2}  alt="" onClick={()=>setMain(photo2) }/>
                <img src={photo1}  alt="" onClick={()=>setMain(photo1) }/>
                <img src={photo2}  alt="" onClick={()=>setMain(photo2) }/>
            </div>
         </div>
         {/* Second */}
         <div>

         </div>
    </div>
  )
}

export default AnotherShoesQuestion
