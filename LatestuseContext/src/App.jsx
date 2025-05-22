import {Usercontext,UserProvider} from "./context/UserData"
import Show from "./Component/show"
function App() {

  return (
    <>
    <UserProvider>
     <Show/>
    </UserProvider>
    </>
  )
}

export default App
