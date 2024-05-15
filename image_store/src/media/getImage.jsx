import { useDispatch, useSelector } from "react-redux"
import { getImage } from "../Slice/postSlice"
import { useEffect } from "react"
import Home  from '../Layout/Layout'
import ImageCard from "./imageCard"


function GetImage(){
    const dispatch = useDispatch()
    const  ImageData = useSelector((state)=>state?.post?.ImageData)
          console.log(ImageData)
    async function Findimage(){
        await dispatch (getImage())
    }
    useEffect(()=>{Findimage()},[])
    return(
    <Home>
         <div className='min-h-[90vh] flex flex-col gap-10 pt-12 pl-12 text-white text-center text-2xl'>
      <h1>The Images
         <span className='font-bold text-yellow-500'> Display Here</span>
      </h1>
      <div className='mb-10 flex flex-wrap gap-14'>

      {ImageData?.map((element)=>{
            return <ImageCard key={element._id} data={element} />
         })}

      </div>
    </div> 

    </Home>
    )
    
}
export default GetImage