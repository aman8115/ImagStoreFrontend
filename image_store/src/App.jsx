import { Routes,Route} from 'react-router-dom'

import './App.css'
import Home from './Layout/Layout'
import HomePage from './pages/HomePage'
import Signup from './user/signup'
import Login from './user/login'
import Profile from './user/profile'
import EditProfile from './user/editProfile'

function App() {
  return(
    <>
   <Routes>
     <Route path='/' element = { <HomePage/>}></Route>
     <Route path='/signup' element = {<Signup/>}></Route>
     <Route path='/login' element = {<Login/>}></Route>
     <Route path='/profile' element = {<Profile/>}></Route>
     <Route path='/editprofile' element ={<EditProfile/>}></Route>

   </Routes>
  
   
    </>
  )
}

export default App
