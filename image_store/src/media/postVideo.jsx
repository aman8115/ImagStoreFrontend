import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postVideo } from "../Slice/postSlice";
import Home from "../Layout/Layout";

function PostVideo(){
    const dispatch  = useDispatch()
    const navigate = useNavigate()
    const[previewVideo,SetprviewVideo] = useState('')
    const[videoData,SetvideoData] = useState({
        title:"",
        description:"",
        video:""
    })
 function handelVideoInput(event){
    const{value,name} = event.target;
    SetvideoData({
        ...videoData,
        [name]:value
    })

 }
 function handeluploadVideo(event){
    const uploadVideo = event.target.files[0]
    if(uploadVideo){
        SetvideoData({
         ...videoData,
         video:uploadVideo
        })
    }
    const filereader =new  FileReader()
    filereader.readAsDataURL(uploadVideo)
    filereader.addEventListener('load',function(){
        SetprviewVideo(this.result)
    })

 }
 async  function videoPost(event){
    event.preventDefault()
    if(!videoData.title||!videoData.description||!videoData.video){
        toast.error(" All field is required")
        return
    }
    const formData = new FormData()
    formData.append('title',videoData.title)
    formData.append('description',videoData.description)
    formData.append('video',videoData.video)
 

        const res =  await dispatch(postVideo(formData) )
        console.log(res)
              if(res?.payload?.success) navigate('/getvideo')
                SetvideoData({
    
                    title:'',
                    description:'',
                    video:''
            })
            SetprviewVideo('')

  
  
 }

 return(
    <Home>
        <div className="min-h-[90vh] flex flex-col items-center justify-center ">
            <form noValidate
            onSubmit={videoPost}
            className="w-96 flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-[0_0_10px_black]"
            >
                <h1 className="text-xl text-yellow-500 tracking-widest font-semibold">PostVideo</h1>
                <label htmlFor="uploads_video">

                    {
                    
                    previewVideo?(<video 
                        controls
                        muted
                        disablePictureInPicture
                        controlsList="nodownload"
                        className=" w-56 h-44 m-auto " src={previewVideo}/>):
                    
                    
                    (<div className=" w-52 border h-44 flex flex-col items-center justify-center">
                        <h1>Upload Video</h1>

                    </div>)}

                </label>
                <input 
                type="file" 
                name="uploads_video" 
                id="uploads_video" 
                accept="video/mp4,video/x-m4v,video/*"
                className="hidden"
                onChange={handeluploadVideo}
                
                />

                <div className="flex flex-col
                 items-center justify-center gap-3 ">
                    <label htmlFor="title" className="text-xl fonst-semibold">title</label>
                    <input 
                    placeholder="Enetr video title"
                    type="text" 
                    name="title" 
                    id="title"
                    className="p-3 border bg-transparent rounded-lg hover:rounded-none w-full text-center text-lg"
                    onChange={handelVideoInput}
                    value={videoData.title}
                    />
                    <label className = "text-xl font-semibold" htmlFor="description">Description</label>
                    <input 
                    type="text" 
                    name="description" 
                    id="description" 
                    className="border bg-transparent rounded-lg p-3 w-full hover:rounded-none text-center text-lg"
                    placeholder="Enetr video description"
                    onChange={handelVideoInput}
                    value={videoData.description}
                    />

                </div>
                <button
                type="submit"
                className="p-3 rounded-lg border bg-slate-900 text-white w-full text-lg hover:bg-slate-800 hover:rounded-none transition-all ease-in-out duartion-300"
                >PostVideo</button>
            </form>

        </div>
    </Home>
 )

}
export default PostVideo;