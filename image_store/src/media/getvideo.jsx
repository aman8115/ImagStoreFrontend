import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideo } from "../Slice/postSlice";
import Home from "../Layout/Layout";
import VideoCard from "./VideoCard";

function GetVideo(){
    const dispatch = useDispatch()
    const VideoData = useSelector((state)=>state?.post?.videoData)
    console.log(VideoData)
    async function Loadvideo(){
        await dispatch(getVideo())
    }
    useEffect(()=>{Loadvideo()},[])

    return(
        <Home>
            <div className="min-h-[90vh] flex flex-col pt-12 pl-12 text-center text-white text-2xl"> 
            <h2>
                The Videos
                <span className="font-semibold text-yellow-500"> Display here</span>
            </h2>
            <div className="mb-10 flex flex-wrap gap-10 ">
                {VideoData?.map((element)=>{
                    return <VideoCard key={element?._id } data={element}/>
                })}

            </div>

            </div>
        </Home>
    )
}
export default GetVideo;