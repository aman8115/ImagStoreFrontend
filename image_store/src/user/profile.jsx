import { useDispatch, useSelector } from "react-redux";
import Home from "../Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { deleteProfile } from "../Slice/AuthSlice";

import { useEffect } from "react";

function Profile(){
    const userData = useSelector((state)=>state?.auth?.data)
   const navigate = useNavigate()
   const dispatch = useDispatch()
   async function deleteAccount(){
    if(window.confirm(' Are you  sure to  delete your Account')){
        const res = await dispatch(deleteProfile())
        if(res?.payload?.success) navigate('/')
    }
   }
  
   
return(
    <Home>
         <div className="min-h-[90vh] flex flex-col items-center justify-center ">
            <div className=" w-96 flex flex-col items-center justify-center gap-4 p-4 shadow-[0_0_10px_black]"> 
            <div>
                <img 
                className="w-40 rounded-full m-auto border border-black "
                src={userData?.avatar?.secure_url}alt="profileImage" />
               
            </div>
            <div className="grid grid-cols-2 gap-2"> 
               <h3>fullName:</h3>
               <h3>{userData?.fullName}</h3>
               <p className="text-xg font-semibold tracking-widest">email:</p>
               <p className="text-xg font-semibold tracking-widest">{userData?.email}</p>
               <p className="text-lg font-semibold tracking-widest">mobileNumber:</p>
               <p className="text-lg font-semibold tracking-widest">{userData?.mobileNumber}</p>

               <div className="w-full border pb-2 pt-2 rounded-lg  bg-indigo-500 text-center text-white text-lg hover:bg-indigo-600 hover:rounded-none transition-all ease-in-out  duration-300 cursor-pointer">
                <Link to= '/editprofile'>Update profile</Link>
            </div>

             <div  className="w-full border pb-2 pt-2 rounded-lg  bg-red-500 text-center text-white text-lg hover:bg-red-600 hover:rounded-none transition-all ease-in-out  duration-300 cursor-pointer" onClick={deleteAccount}>
               Delete profile
            </div>
            <div  onClick={()=>{navigate('/getimage')}}className="w-full border pb-2 pt-2 rounded-lg text-center text-white
             text-lg bg-yellow-600 hover:rounded-none transition-all ease-in-out duartion-300 cursor-pointer">GetImage</div>
                <div onClick={()=>navigate('/getvideo')} className="w-full border pb-2 pt-2 rounded-lg text-white text-lg bg-blue-600 hover:bg-blue-500 transition-all duration-300 ease-in-out text-center cursor-pointer
                "> Get Video</div>

                
            </div>

            <div  className="w-full border pb-2 pt-2 rounded-lg  bg-red-500 text-center text-white text-lg hover:bg-red-600 hover:rounded-none transition-all ease-in-out  duration-300 cursor-pointer"  onClick={()=>navigate('/interactionwithpost')}>
               Interaction with post
            </div>

            </div>
           


            </div>

        

    </Home>
)
}
export default Profile