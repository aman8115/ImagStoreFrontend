import { Link, useLocation, useNavigate } from "react-router-dom"
import Home from "../Layout/Layout"
import { useDispatch } from "react-redux"
import { deleteVideo } from "../Slice/postSlice"
import {AiOutlineArrowLeft} from 'react-icons/ai'

function VideoDescription(){
    const{state } = useLocation()
    console.log(state)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    async function Deletevideo(id){
        if(window.confirm(' Are you sure to delet your video')){
         const res = await dispatch(deleteVideo(id))
         if(res?.payload?.success) navigate('/getvideo')
        }


    }
    return(
        <Home>
            <div className="min-h-[90vh] flex flex-col items-center justify-center gap-4 ">
                <div className="flex flex-col items-center justify-center rounded-lg shadow-[0_0_10px_green] w-96 h-96 p- 3 gap-3 ">
                    <video 
                    muted
                    controls
                    disablePictureInPicture
                    src={state?.video?.secure_url}
                    className="w-full h-48 rounded-tr-lg rounded-tl-lg transition-all ease-in-out duration-300 group-hover:scale-[1,2] "
                    ></video>
                    <div className="flex flex-col items-center justify-center gap-4
                    ">
                        <h1 className="text-2xl text-cyan-800 tracking-wider font-semibold">{state?.title}</h1>
                        <p className="text-xl font-semibold tracking-wider">{state?.description}</p>

                    </div>
                    <button
                    
                    onClick={()=>Deletevideo(state?._id)}
                    className="text-center text-xl tracking-wider font-semibold p-2 rounded-xl hover:rounded-none border w-full bg-orange-300 text-black transition-all ease-in-out duartion-300 hover:bg-gray-200 "> Remove Video </button>
                    <Link to='/getvideo'  className="text-2xl font-semibold text-green-600" title="click to videos"> <AiOutlineArrowLeft/></Link>



                </div>

            </div>
        </Home>
    )

}
export default VideoDescription