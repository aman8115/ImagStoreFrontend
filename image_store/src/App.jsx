import { Routes,Route} from 'react-router-dom'

import './App.css'

import HomePage from './pages/HomePage'
import Signup from './user/signup'
import Login from './user/login'
import Profile from './user/profile'
import EditProfile from './user/editProfile'
import GetImage from './media/getImage'
import ImageDescription from './media/imagedescription'
import GetVideo from './media/getvideo'
import VideoDescription from './media/Videodescription'
import InteractionPost from './media/interaction'
import PostImage from './media/PostImage'
import PostVideo from './media/postVideo'


function App() {
  return(
    <>
   <Routes>
     <Route path='/' element = { <HomePage/>}></Route>
     <Route path='/signup' element = {<Signup/>}></Route>
     <Route path='/login' element = {<Login/>}></Route>
     <Route path='/profile' element = {<Profile/>}></Route>
     <Route path='/editprofile' element ={<EditProfile/>}></Route>
     <Route path='/getimage' element = {<GetImage/>}></Route>
     <Route path='/image/description' element ={<ImageDescription/>}></Route>
     <Route path='/getvideo' element = {<GetVideo/>}></Route>
     <Route path='/video/description' element ={<VideoDescription/>}></Route>
     <Route path='/interactionwithpost' element ={<InteractionPost/>}></Route>
     <Route path='/postimage' element ={<PostImage/>}></Route>
     <Route path='/postvideo' element ={<PostVideo/>}></Route>
     

   </Routes>
  
   
    </>
  )
}

export default App
