import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from './Slice/AuthSlice'
import postSlice from './Slice/postSlice'

 const store = configureStore({
    reducer:{
      auth: AuthSlice,
      post:postSlice

    },
    devTools:true
 })

 export default store