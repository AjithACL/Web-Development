import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice.js'
const Store=configureStore({
    reducer:{
        auth:authReducer
    }
})

export default Store;