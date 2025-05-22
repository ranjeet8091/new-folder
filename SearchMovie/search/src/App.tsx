import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/Home'
import DetailMovie from './Component/DetailMovie'
function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detailid/:imdbID" element={<DetailMovie />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
