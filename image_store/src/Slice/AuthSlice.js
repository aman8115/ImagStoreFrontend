import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    isLoggedIn:localStorage.getItem('isLoggedIn')||false,
    data:localStorage.getItem('data')||{}
}

const authSice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

    }
})
export default authSice.reducer