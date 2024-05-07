 import    Footer from '../component/Footer'
 import {FiMenu} from 'react-icons/fi'
import {AiFillCloseCircle}  from 'react-icons/ai'
import  {Link} from 'react-router-dom'
function Home({children}){
    function ChangeWidth(){
      const drawerSide = document.getElementsByClassName('drawer-side')
      drawerSide[0].style.width = '200px'
    }
    function Hidedrawer(){
     const element = document.getElementsByClassName('drawer-toggle')
     element[0].checked = false
     
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

          </ul>

        </div>
        
        
        
            

        </div>
         
         <div className='   hidden  md:block  md:flex md:items-center  md:justify-evenly md:top-10'>
         
          <ul className='flex gap-4'> 
           <li> <Link to='/'> Home</Link> </li>
            <li> <Link to='/aboutus'>AboutUs</Link></li>
            <li> <Link to='/contactus'> contactus </Link></li>

          </ul>
          <ul className='flex gap-5 justify-between right-4'>
            <li className='
             bg-transparent pb-1 pt-1 w-24 text-center rounded-lg bg-indigo-500 text-white hover:rounded-none transition-all ease-in-out duration-300'> <Link to=' /signup'> SignUp</Link></li>
            <li  className='
             bg-transparent pb-1 pt-1 w-24 text-center rounded-lg bg-indigo-500 text-white hover:rounded-none transition-all ease-in-out duration-300'> <Link to='/login'>LogIn</Link></li>
          </ul>


        </div>
         
        {children}
            <Footer></Footer>


            
       
        </div>
    
     
      
        
        </>
    )
        
    

    
}

export default Home