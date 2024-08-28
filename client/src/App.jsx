
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import logo from "./assets/images/img1.webp"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "./App.css"
import Profile from "./Components/Profile"

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
     
      <Route path="/profile" element={ <Profile
        profilePicture="https://example.com/profile.jpg"
        score={12345}
        level={15}
        badges={10}
        dailyRewards="50 coins"
        globalRank={234}
        recentTasks="Completed level 14"
      />}></Route>
     
 
     </Routes>
     </BrowserRouter>
     </>
    
  )
}

export default App
