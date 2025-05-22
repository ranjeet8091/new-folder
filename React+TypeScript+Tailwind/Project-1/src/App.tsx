// import { useState } from 'react'
// import './App.css'
// import Greet from './Components/Greet'
// import Event from './Components/Event'
// import GreetClass from './GreetClass'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      {/* <Greet Person ={{Name:"Tiwari"}}/>
//      <Event Event={{Event_Name:"Click"}} /> */}
//      <GreetClass name="Ranjeet"/>
//     </>
//   )
// }

// export default App

///Dynamic routing

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Event from "./Components/Event";
import Greet from "./Components/Greet";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Event />} />
          <Route path="/about" element={<Greet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
