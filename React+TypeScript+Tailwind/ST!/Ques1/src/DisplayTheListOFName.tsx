
const NamesShow=()=>{
    type Detail={
        Name:string,
        Roll_No:number,
        Section:string,
        CGPA:string,
    }
    const User:Detail[]=[
        {
            Name:"Ranjeet Tiwari",
            Roll_No:2211985049,
            Section:"5G",
            CGPA:"9.03"
        },
        {
            Name:"AbhiShek Tiwari",
            Roll_No:2211985022,
            Section:"5G",
            CGPA:"9.90"
        }

    ]
    return(
      <>
     <div className="relative flex flex-col items-center">
     <div className="absolute  item-center text-2xl  font-extrabold text-red-400 ">User Detail</div>
      {User.map(item=>(
         <div className="bg-slate-300 border-2 mt-10 p-3 w-[50%]">
         <ul>
             <li className="text-blue-700"> <strong>UserName:</strong>{item.Name}</li>
             <li className="text-blue-700"><strong>Roll_No:</strong>{item.Roll_No}</li>
             <li className="text-blue-700"><strong>Section:</strong> {item.Section}</li>
             <li className="text-blue-700"><strong>CGPA:</strong>{item.CGPA}</li>
         </ul>
     </div>
      ))
      }
     </div>
      </>
    )
}
export default NamesShow;