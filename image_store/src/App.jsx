import { Routes,Route} from 'react-router-dom'

import './App.css'
import Home from './Layout/Layout'
import HomePage from './pages/HomePage'

function App() {
  return(
    <>
   <Routes>
     <Route path='/' element = { <HomePage/>}></Route>

   </Routes>
  
   
    </>
  )
}

export default App
