import { useNavigate } from "react-router-dom";

function VideoCard({data}){
    const navigate = useNavigate()
    return(
        <div 
         onClick={()=>navigate('/video/description',{state:{...data}}) }
        className="w-[22rem] h-[430px] shadow-xl rounded-lg group overflow-hidden cursor-pointer font-semibold text-white">
            <video 
            controls
            disablePictureInPicture
            muted
            src= {data?.video?.secure_url}
            className="h-48 w-full rounded-tr-lg rounded-tl-lg transition-all ease-in-out group-hover:scale[1,2]"
                
            ></video>
            <div className="flex flex-col items-center justify-center gap-4 text-xl ">
                <h1 className="text-amber-700">{data?.title}</h1>
                <p> {data?.
     description}</p>

            </div>


        </div>
    )
}
export default VideoCard;