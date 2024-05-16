import { useNavigate } from "react-router-dom"
import Home from "../Layout/Layout"

function InteractionPost(){
    const navigate = useNavigate()
 return(
    <Home>
        <div className="min-h-[90vh] flex felx-col items-center justify-center "> 
        <div className="w-96 h-96 flex flex-col itesm-center text-center gap-4 p-3 shadow-[0_0_10px_indigo]">
            <h1 className="text-2xl top-5"> Click to post your Image and video</h1>
            <button 
            onClick={()=>navigate('/postimage')}
            
            className="p-3 border bg-yellow-500 rounded-lg hover:rounded-none text-white font-semibold text-xl hover:bg-yellow-600 transition-all ease-in-out duration-300 ">Post Image</button>

            <button 
            onClick={()=>navigate('/postvideo')}
            className="p-3 border bg-amber-200 rounded-lg hover:rounded-none text-green-400 font-semibold text-xl hover:bg-yellow-600 transition-all ease-in-out duration-300 ">Post video</button>

        </div>

        </div>
    </Home>
 )
}
export default InteractionPost