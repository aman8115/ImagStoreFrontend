import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "../Layout/Layout";
import { deleteImage } from "../Slice/postSlice";

function ImageDescription(){
    const{ state} = useLocation()
              
    
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    async function DeleteImage(id){
        if(window.confirm(' Are you sure to delete the image')){
          const res =    await dispatch(deleteImage(id))
          if(res?.payload?.success) navigate('/getimage')
        }
        
    }
    return(
        <Home>

            <div className="min-h-[90vh] flex flex-col items-center justify-center">

                <div className=" w-96 h-96 p-4 flex flex-col items-center justify-center gap-3 rounded-lg shadow-[0_0_10px_yellow] hover:rounded-none">
                   <img
                   className="h-48 w-full rounded-tr-lg rounded-tl-lg transition-all ease-in-out group-hover:scale[1,2]"
                   src={state?.Post?.secure_url} alt="" />
                   <div className="flex flex-col items-center justify-center gap-3">
                    <h2 className="text-xl font-semibold text-yellow-600">{state?.nameOfimage}</h2>
                    <p className="text-lg font-semibold tracking-wider">{state?.description}</p>

                   </div>
                   <button 
                   onClick={()=>DeleteImage(state?._id)}
                   className="p-3 rounded-lg hover:rounded-none border w-full transition-all ease-in-out duration-300 bg-zinc-900 text-lg text-center text-red-400 hover:text-amber-500"> Remove your image </button>
                   

                   
                </div>
            </div>
        </Home>
    )

}
export default ImageDescription;