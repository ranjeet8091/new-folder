import { BrowserRouter,Routes,Route ,useNavigate} from "react-router-dom"
import Create from "./component/Create" 

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Create/>}> </Route>
      <Route path="/update/:index" element={<Create/>}> </Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
