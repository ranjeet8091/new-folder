import { Routes,Route } from "react-router-dom"
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import ContactUs from "./Components/Contact"
function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Contact" element={<ContactUs/>}/>
      </Routes>
    </>
  )
}

export default App
