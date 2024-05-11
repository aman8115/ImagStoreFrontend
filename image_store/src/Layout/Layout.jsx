 import    Footer from '../component/Footer'
 import {FiMenu} from 'react-icons/fi'
import {AiFillCloseCircle}  from 'react-icons/ai'
import  {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../Slice/AuthSlice'
function Home({children}){
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoggedIn = useSelector((state)=>state?.auth?.isLoggedIn)
 
    function ChangeWidth(){
      const drawerSide = document.getElementsByClassName('drawer-side')
      drawerSide[0].style.width = 'auto'
    }
    function Hidedrawer(){
     const element = document.getElementsByClassName('drawer-toggle')
     element[0].checked = false
     
    }
    async function handelLogout(e){
       e.preventDefault()
       const res = await dispatch(Logout())
       if(res?.payload?.success) navigate('/')
    }
    return (
        <>
        <div className='min-h-[90vh]  '>
        <div className='drawer absolute left-0 z-50 w-fit md:hidden '> 
        <input id="my-drawer"  type='checkbox' className='drawer-toggle'/>
        <div className=' drawer-content '>
        <label htmlFor="my-drawer" className='cursor-pointer relative'> <FiMenu
        onClick={ChangeWidth}
        size={'32px'} className='font-bold text-white m-4'/>
        
        </label>
        

        </div>
        <div className='drawer-side w-0' >
          <label htmlFor="my-drawer"  className="drawer-overlay"></label>
          <ul className='menu p-4 w-56 min-h-full bg-base-200 text-base-content relative cursor-pointer'>
            <li className='w-fit absolute right-1 z-50'>
              <button onClick={Hidedrawer}> <AiFillCloseCircle
              size={24}
              /></button>

            </li>
            <li> <Link to= '/'> Home </Link></li>
            <li><Link to='/aboutus'>Aboutus</Link> </li>
            <li> <Link to = '/contactus'> Contactus </Link></li>
            <ul>
                
                {!isLoggedIn &&(
                  <li>
                  <div className='flex items-center justify-center gap-3 w-full '>
                  <button className='btn btn-primary py-0.5 px-2 rounded-xl font-semibold w-24'>
                      <Link to="/login">Login</Link>
                  </button>
                  <button className='btn btn-secondary py-0.5  px-2 font-semibold w-24 rounded-xl'>
                      <Link to='/signup'>SignUp</Link>
                  </button>
              </div>
              </li>

                )}

                {isLoggedIn&&(
                  <li>
                  <div className='flex items-center justify-center gap-3 w-full '>
                  <button className='btn btn-primary py-0.5 px-2 rounded-xl font-semibold w-24'>
                      <Link to="/profile">Profile</Link>
                  </button>
                  <button onClick={handelLogout} className='btn btn-secondary py-0.5  px-2 font-semibold w-24 rounded-xl'>
                      <Link  >Logout</Link>
                  </button>
                  
              </div>
               </li>
                )}
          </ul>
          </ul>

          

        </div>
        
        
        
            

        </div>
         
         <div className='   hidden  md:block  md:flex md:items-center  md:justify-between md:top-10 '>
         
          <ul className='flex gap-4'> 
           <li> <Link to='/'> Home</Link> </li>
            <li> <Link to='/aboutus'>AboutUs</Link></li>
            <li> <Link to='/contactus'> contactus </Link></li>
              


          </ul>
          <ul>
                
                {!isLoggedIn &&(
                  <li>
                  <div className='flex items-center justify-center gap-3 w-full '>
                  <button className='btn btn-primary py-0.5 px-2 rounded-xl font-semibold w-24'>
                      <Link to="/login">Login</Link>
                  </button>
                  <button className='btn btn-secondary py-0.5  px-2 font-semibold w-24 rounded-xl'>
                      <Link to='/signup'>SignUp</Link>
                  </button>
              </div>
              </li>

                )}

                {isLoggedIn&&(
                  <li>
                  <div className='flex items-center justify-center gap-3 w-full '>
                  <button className='btn btn-primary py-0.5 px-2 rounded-xl font-semibold w-24'>
                      <Link to="/profile">Profile</Link>
                  </button>
                  <button onClick={handelLogout} className='btn btn-secondary py-0.5  px-2 font-semibold w-24 rounded-xl'>
                      <Link >Logout</Link>
                  </button>
              </div>
               </li>
                )}
          </ul>
      
           

         
        
          

          

           
          


        </div>
         
        {children}
            <Footer></Footer>


            
       
        </div>
    
     
      
        
        </>
    )
        
    

    
}

export default Home