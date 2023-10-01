import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./RegisterSlice"

export const Store = configureStore({
    reducer:{
        registerReducer  
    }
})