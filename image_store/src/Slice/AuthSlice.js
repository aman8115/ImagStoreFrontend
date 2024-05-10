import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axiosInstance from '../Helper/axiosInstance.js'
import  toast from 'react-hot-toast'
const initialState ={
    isLoggedIn:localStorage.getItem('isLoggedIn')||false,
    data:localStorage.getItem('data')||{}
}
export const Rgister = createAsyncThunk('/auth/rgister',async(data)=>{
    try{
        const res = axiosInstance.post('user/signup',data)
    toast.promise(res,{
        loading:'Wait  Account creation in progress!!',
        success:(data)=>{
            return data?.data?.message
        },
        error:' Account creation Faild!!'
    })
    return (await res).data

    }catch(error){
        toast.error(error?.data?.response?.message)
    }
})
export const LogIn = createAsyncThunk('/auth/login',async(data)=>{
    try{
        const res = axiosInstance.post('/user/login',data)
          toast.promise(res,{
            loading:' Wait LogIn in progress!!',
            success:(data)=>{
                return data?.data?.message
            },
            error:" Login Faild !!"
          })
          return (await res).data
    }catch(error){
        toast.error(error?.data?.response?.message)
    }
})
export const Logout = createAsyncThunk('/auth/logout',async()=>{
    try{
        const res = axiosInstance.get('/user/logout')
        toast.promise(res,{
            loading:" Wait Logout in  progress!!",
            success:(data)=>{
                return data?.data?.message
            },
            error:" Logout Faild..."
        })
        return (await res).data


    }catch(error){
        toast.error(error?.data?.response?.message)
    }
})

const authSice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(LogIn.fulfilled,(state,action)=>{
            localStorage.setItem('data',JSON.stringify(action?.payload?.user))
            localStorage.setItem('isLoggedIn',true)
            state.isLoggedIn = true;
            state.data = action?.payload?.user
        }).addCase(Logout.fulfilled,(state)=>{
            localStorage.clear()
            state.isLoggedIn = false;
            state.data = {}
        })

    }
})
export default authSice.reducer