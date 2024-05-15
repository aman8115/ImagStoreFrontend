import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../Helper/axiosInstance"
import { act } from "react"


const initialState ={
    ImageData:[],
    videoData:[]

}
export const postImage = createAsyncThunk('/post/image',async(data)=>{
    try{
       const res = axiosInstance.post('/mediea/post',data)
       toast.promise(res,{
        loading:" wait Post in progress",
        success:(data)=>{
            return data?.data?.message
        },
        error:" faild to post "
       })
       return (await res).data
    }catch(error){
        toast.error(error?.data?.response?.message)
    }
})
export const postVideo = createAsyncThunk('/post/video',async(data)=>{
    try{
         const res = axiosInstance.post('/mediea/postvideo')
         toast.promise(res,{
            loading:' Wait video post in  progress....',
            success:(data)=>{
                return data?.data?.message
            },
            error:" Faild to post video"
         })
         return (await res).data
    }catch(error){
        toast.error(error?.data?.response?.message)
    }
})
export const getImage = createAsyncThunk('/post/getImage',async()=>{
    try{
        const res = axiosInstance.get('/mediea/getimage')
        toast.promise(res,{
            loading:' Wait Image Loading in progress...',
            success:(data)=>{
                return data?.data?.message
            },
            error:' Faild to load Image'
        })
        return (await res).data.Images

    }catch(error){
    toast.error(error?.data?.response?.message)
    }
})
export const getVideo = createAsyncThunk('/post/getVideo',async()=>{
    try{
    const res = axiosInstance.get('/mediea/getvideo')
    toast.promise(res,{
        loading:' Wait Video loading in progress..',
        success:(data)=>{
            return data?.data?.message
        },
        error:" Faild to load Video"
    })
    return (await res).data.videos

    }catch(errro){
        toast.error(errro?.data?.response?.message)
    }
})
export const deleteImage = createAsyncThunk('/post/deleteImage',async(id)=>{
    try{
        const  res = axiosInstance.delete(`/mediea/${id}`)
        toast.promise(res,{
            loading:'Image deleting in progress...',
            success:(data)=>{
                return data?.data?.message
            },
            error:" Faild to delete image "
        })
        return (await res).data

    }catch(error){
        toast.error(error?.data?.response?.message)
    }
})
export const deleteVideo = createAsyncThunk('/post/deleteVideo',async(id)=>{
    try{
        const res = axiosInstance.delete(`/mediea/video/${id}`)
        toast.promise(res,{
            loading:' Wait Video deleting in progress...',
            success:(data)=>{
                return data?.data?.message
            },
            error:" Faild to delete Video"
        })
        return (await res).data

    }catch(error){
        toast.error(error?.data?.response?.message)
    }
})
const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{},
    extraReducers:((builder)=>{
        builder.addCase(getImage.fulfilled,(state,action)=>{
          
           if(action?.payload){
            
            state.ImageData = [...action?.payload]
           }
        })
        .addCase(getVideo.fulfilled,(state,action)=>{
            state.videoData = [...action?.payload]
        })

    })
})
export default postSlice.reducer;